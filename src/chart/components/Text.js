"use strict";

import utils from "../../helpers/utils";
import Chart from "../Chart";
import Tween from "../../helpers/tween";
import { defaultConfig, contextConfig, mergeConfig } from "../config/index";

/**
 * @desc Text，文本图形
 */
class Text extends Chart {
  /**
   * @desc Text 构造函数
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   *  @param {Object} setting
   *    @param {String} text 文本
   *    @param {Number} x 文本起始点 x 坐标轴的坐标值
   *    @param {Number} y 文本起始点 y 坐标轴的坐标值
   */
  constructor(config) {
    super();
    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);

    // text, x, y
    this.text = this.config.setting.text;
    this.x = this.config.setting.x;
    this.y = this.config.setting.y;

    this.zIndex = this.config.zIndex;
  }

  /**
   * @desc 更新
   * @param {Object} config 配置文件
   *  @param {Object} setting
   *    @param {String} text 文本
   *    @param {Number} x 文本起始点 x 坐标轴的坐标值
   *    @param {Number} y 文本起始点 y 坐标轴的坐标值
   *  @param {Object} hook
   *    @param {Function} animating 钩子（动画中）
   *    @param {Function} animated 钩子（动画后）
   */
  update(config) {
    this.config = mergeConfig(this.config, config);
    this.motions = [];

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      sArgs = {},
      eArgs = {};

    utils.forEach(this.config.setting, (val, key) => {
      sArgs[key] = this[key];
      eArgs[key] = val;
    });

    let motion = () => {
      let loopNumber = 0;
      utils.forEach(this.config.setting, (val, key) => {
        if (utils.isUndefined(this[key])) {
          this[key] = val;
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        // 执行钩子（动画中）
        if (utils.isObject(config.hook) && utils.isFunction(config.hook.animating)) {
          let result = config.hook.animating.call(this, this, val, key, s, e, sArgs, eArgs, Tween);
          this[key] = utils.isUndefined(result) ? Tween.Linear(s, sArgs[key], eArgs[key] - sArgs[key], e) : result;
        } else {
          this[key] = Tween.Linear(s, sArgs[key], eArgs[key] - sArgs[key], e);
        }
        if (s < e) {
          loopNumber++;
        }
      });
      this.setOtherSetting();
      if (loopNumber === 0) {
        this.removeMotion(motion);
        // 执行钩子（动画后）
        if (utils.isObject(config.hook) && utils.isFunction(config.hook.animated)) {
          config.hook.animated.call(this, this);
        }
      }
    }
    this.addMotion(motion);
  }

  setChartCollector(chartCollector) {
    super.setChartCollector(chartCollector);
    this.setOtherSetting();
  }

  setOtherSetting() {
    // top, right, bottom, left, width, height
    this.width = this.context.measureText(this.text).width;
    this.height = this.config.fontSize;
    switch (this.config.textAlign) {
      case "start":
      case "left":
        this.top = this.y - this.height;
        this.right = this.canvas.width - this.x + this.width;
        this.bottom = this.canvas.height - this.y;
        this.left = this.x;
        break;
      case "end":
      case "right":
        this.top = this.y - this.height;
        this.right = this.canvas.width - this.x - this.width;
        this.bottom = this.canvas.height - this.y;
        this.left = this.x - this.width;
        break;
      case "center":
        this.top = this.y - this.height;
        this.right = this.canvas.width - this.x - this.width / 2;
        this.bottom = this.canvas.height - this.y;
        this.left = this.x - this.width / 2;
        break;
    }

    this.minX = this.left;//当前图形区域的最小 x 轴坐标值
    this.zIndex = this.config.zIndex;
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.context.save();
    utils.forEach(Object.keys(contextConfig), key => {
      if (typeof this.config[key] !== "undefined") {
        this.context[key] = this.config[key];
      }
    });
    this.context.fillText(this.text, this.x, this.y);
    this.context.restore();
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的最小 x 坐标轴坐标值的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的最小 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareMinX(chart) {
    return super.compareMinX(chart);
  }

  /**
   * @desc 比对当前图形对象的最小 x 坐标轴坐标值与指定坐标对象的 x 坐标轴坐标值的大小
   * @param {Object} point 坐标对象
   * @returns {Number, NULL} 如果当前图形对象的最小 x 坐标轴坐标值比指定坐标对象的 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  comparePointX(point) {
    return super.comparePointX(point);
  }

  /**
   * @desc 查找指定坐标对象表示的点是否在当前图形对象内
   * @param {Object} point 坐标对象
   * @returns {Boolean} 如果指定坐标对象表示的点在当前图形对象内返回 true，否则返回 false
   */
  hasPoint(point) {
    if (!(utils.isNumber(point.x) && utils.isNumber(point.y))) {
      return false;
    }

    return point.x >= this.left && point.x <= this.left + this.width && point.y >= this.top && point.y <= this.top + this.height;
  }
}

Text.defaultConfig = {};

export { Text };
