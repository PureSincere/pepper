"use strict";

import utils from "../../helpers/utils";
import Chart from "../Chart";
import Tween from "../../helpers/tween";
import { defaultConfig, contextConfig, mergeConfig } from "../config/index";

/**
 * @desc Circle，圆形
 */
class Circle extends Chart {
  /**
   * @desc Circle 构造函数
   * @param {Object} config 配置对象
   *  @param {Object} setting
   *    @param {Number} x 圆的中心（圆心）的 x 轴坐标
   *    @param {Number} y 圆的中心（圆心）的 y 轴坐标
   *    @param {Number} radius 圆的半径弧度
   */
  constructor(config) {
    super();

    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);

    this.x = this.config.setting.x;
    this.y = this.config.setting.y;
    this.radius = this.config.setting.radius;

    this.setOtherSetting();
  }

  /**
   * @desc 更新
   * @param {Object} config 配置文件
   *  @param {Object} setting
   *    @param {Number} x 圆的中心（圆心）的 x 轴坐标
   *    @param {Number} y 圆的中心（圆心）的 y 轴坐标
   *    @param {Number} radius 圆的半径弧度
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
        // 钩子（动画中,某个键值一帧执行动画中）
        if (utils.isObject(config.hook) && utils.isFunction(config.hook.animatingByKey)) {
          config.hook.animatingByKey.call(this, this, val, key, s, e, sArgs, eArgs, Tween);
        }
        if (s < e) {
          loopNumber++;
        }
      });
      this.setOtherSetting();
      // 执行钩子（动画中）
      if (utils.isObject(config.hook) && utils.isFunction(config.hook.animating)) {
        config.hook.animating.call(this, this, s, e, sArgs, eArgs, Tween)
      }
      if (loopNumber === 0) {
        this.removeMotion(motion);
        // 执行钩子（动画后）
        if (utils.isObject(config.hook) && utils.isFunction(config.hook.animated)) {
          config.hook.animated.call(this, this);
        }
        return
      }
    }
    this.addMotion(motion);
  }

  setOtherSetting() {
    this.zIndex = this.config.zIndex;
    this.minX = this.x - this.radius;;//当前图形区域的最小 x 轴坐标值
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
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, 0);
    // this.context.stroke();
    this.context.fill();
    this.context.closePath();
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
  hasPoint(point, rule) {
    if (!(utils.isNumber(point.x) && utils.isNumber(point.y))) {
      return false;
    }
    let distance = Math.pow(Math.abs(point.x - this.x), 2) + Math.pow(Math.abs(point.y - this.y), 2) - Math.pow(this.radius, 2);
    if (rule) {
      return rule(distance)
    }
    return distance < 0;
  }
}

Circle.defaultConfig = {};

export { Circle };
