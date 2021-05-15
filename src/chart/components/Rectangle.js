"use strict";

import utils from "../../helpers/utils";
import Chart from "../Chart";
import Tween from "../../helpers/tween";
import { defaultConfig, contextConfig, mergeConfig } from "../config/index";

/**
 * @desc Rectangle，矩形
 */
class Rectangle extends Chart {
  /**
   * @desc Rectangle 构造函数
   * @param {Object} config 配置对象
   *   @param setting
   *     @param {Number} x 矩形左上角的 x 坐标。
   *     @param {Number} y 矩形左上角的 y 坐标。
   *     @param {Number} width 矩形宽度。
   *     @param {Number} height 矩形高度。
   *     @param {Number} radius 矩形边圆角半径。
   */
  constructor(config) {
    super();

    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);

    this.x = this.config.setting.x;
    this.y = this.config.setting.y;
    this.width = this.config.setting.width;
    this.height = this.config.setting.height;
    this.radius = this.config.setting.radius;
    this.setOtherSetting();
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   *  @param setting
   *    @param {Number} x 矩形左上角的 x 坐标。
   *    @param {Number} y 矩形左上角的 y 坐标。
   *    @param {Number} width 矩形宽度。
   *    @param {Number} height 矩形高度。
   *    @param {Number} radius 矩形边圆角半径。
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
        this[key] = Tween.Linear(s, sArgs[key], eArgs[key] - sArgs[key], e);
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

  setOtherSetting() {
    this.zIndex = this.config.zIndex;
    this.minX = this.x;//当前图形区域的最小 x 轴坐标值
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
    let { x, y, width: w, height: h, radius: r } = this;
    this.context.beginPath();
    this.context.moveTo(x + r, y);
    this.context.lineTo(x + w - r, y);
    this.context.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);
    this.context.lineTo(x + w, y + h - r);
    this.context.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);
    this.context.lineTo(x + r, y + h);
    this.context.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);
    this.context.lineTo(x, y + r);
    this.context.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
    this.context.fill();
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
    return point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height;
  }
}

Rectangle.defaultConfig = {};

export { Rectangle };
