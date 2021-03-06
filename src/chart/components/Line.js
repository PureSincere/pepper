"use strict";

import utils from "../../helpers/utils";
import Chart from "../Chart";
import Tween from "../../helpers/tween";
import { defaultConfig, contextConfig, mergeConfig } from "../config/index";

/**
 * @desc Line，直线图形
 */
class Line extends Chart {
  /**
   * @desc Line 构造函数
   * @param {Object} config 配置对象
   *   @param setting
   *     @param {Number} x1 直线起始点 x 坐标轴的坐标值
   *     @param {Number} y1 直线起始点 y 坐标轴的坐标值
   *     @param {Number} x2 直线结束点 x 坐标轴的坐标值
   *     @param {Number} y2 直线结束点 y 坐标轴的坐标值
   */
  constructor(config) {
    super();
    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);
    Object.assign(this, this.config.setting)
    this.setOtherSetting();
  }
  setOtherSetting() {
    this.minX = this.config.x1 >= this.config.x2 ? this.config.x2 : this.config.x1;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   *  @param setting
   *    @param {Number} x1 直线起始点 x 坐标轴的坐标值
   *    @param {Number} y1 直线起始点 y 坐标轴的坐标值
   *    @param {Number} x2 直线结束点 x 坐标轴的坐标值
   *    @param {Number} y2 直线结束点 y 坐标轴的坐标值
   *  @param {Object} hook
   *    @param {Function} animating 钩子（动画中）
   *    @param {Function} animated 钩子（动画后）
   */
  update(config) {
    this.config = mergeConfig(this.config, config);
    this.motions = [];

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime;

    let eArgs, sArgs;
    Object.assign(sArgs, this.config.setting)
    Object.assign(eArgs, config.setting)

    let motion = () => {
      let loopNumber = 0;

      utils.forEach(this.config.setting, (val, key) => {
        if (utils.isUndefined(this[key])) {
          this[key] = val;
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[prop] = Tween.Linear(s, sArgs[prop], eArgs[prop] - sArgs[prop], e);

        if (s < e) {
          loopNumber++;
        }
      });

      this.setOtherSetting();
      // 执行钩子（动画中）
      if (utils.isObject(config.hook) && utils.isFunction(config.hook.animating)) {
        config.hook.animating.call(this, this);
      }
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

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.context.save();
    utils.forEach(Object.keys(contextConfig), key => {
      if (!utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
    let { lineDash } = this.config;
    lineDash && this.context.setLineDash([5, 10]);
    this.context.beginPath();
    this.context.moveTo(this.x1, this.y1);
    this.context.lineTo(this.x2, this.y2);
    this.context.closePath();
    this.context.stroke();
    lineDash && this.context.setLineDash([]);
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
    let isPointIn = false;
    this.context.save();
    utils.forEach(Object.keys(contextConfig), key => {
      if (!utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
    this.context.beginPath();
    this.context.lineWidth = 12;
    this.context.moveTo(this.x1, this.y1);
    this.context.lineTo(this.x2, this.y2);
    if (this.context.isPointInStroke(point.x, point.y)) {
      isPointIn = true;
    }
    this.context.closePath();
    this.context.restore();
    return isPointIn;
  }
}

Line.defaultConfig = {};

export { Line };
