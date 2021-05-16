"use strict";

import utils from "../../helpers/utils";
import Chart from "../Chart";
import Tween from "../../helpers/tween";
import { defaultConfig, contextConfig, mergeConfig } from "../config/index";

/**
 * @desc Circle，圆弧
 */
class Arc extends Chart {
  /**
   * @desc Arc 构造函数
   * @param {Object} config 配置对象
   *  @param {Object} setting
   *    @param {Number} x 圆弧的中心的 x 轴坐标
   *    @param {Number} y 圆弧的中心的 y 轴坐标
   *    @param {Number} radius1 圆弧的半径 1（大）
   *    @param {Number} radius2 圆弧的半径 2（小）
   *    @param {Number} startAngle 圆弧的起始点弧度
   *    @param {Number} endAngle 圆弧的终点弧度
   *    @param {Boolean} anticlockwise 可选的 Boolean 值，如果为 true，逆时针绘制圆弧，反之，顺时针绘制，默认为 false 即顺时针
   */
  constructor(config) {
    super();

    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);

    this.x = this.config.setting.x;
    this.y = this.config.setting.y;
    this.radius1 = this.config.setting.radius1;
    this.radius2 = this.config.setting.radius2;
    this.startAngle = this.config.setting.startAngle;
    this.endAngle = this.config.setting.endAngle;
    this.anticlockwise = this.config.setting.anticlockwise || false;

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

    // this.minX = this.x - this.radius1;

    // let startAngle = this.startAngle;
    // let endAngle = this.endAngle;
    // if (startAngle <= Math.PI && endAngle >= Math.PI) {
    //   this.minX = this.x - this.radius1;
    // } else if (endAngle < Math.PI) {
    //   this.minX = this.getRelativePoint(this.x, this.y, endAngle, this.radius1).x;
    // } else if (startAngle > Math.PI) {
    //   this.minX = this.getRelativePoint(this.x, this.y, startAngle, this.radius2).x;
    // }

    let startAngle = this.startAngle % (2 * Math.PI);
    let endAngle = this.endAngle % (2 * Math.PI);
    if (startAngle < endAngle) {
      if (startAngle <= Math.PI && endAngle >= Math.PI) {
        this.minX = this.x - this.radius1;
      } else if (endAngle < Math.PI) {
        this.minX = this.getRelativePoint(this.x, this.y, endAngle % (2 * Math.PI), this.radius1).x;
      } else if (startAngle > Math.PI) {
        this.minX = this.getRelativePoint(this.x, this.y, startAngle % (2 * Math.PI), this.radius2).x;
      }
    } else {
      this.minX = Math.abs(Math.PI - startAngle) < Math.abs(Math.PI - endAngle) ?
        this.minX = this.getRelativePoint(this.x, this.y, startAngle, this.radius2).x :
        this.minX = this.getRelativePoint(this.x, this.y, endAngle, this.radius1).x;
    }
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
    let { x, y, radius1: r1, radius2: r2, startAngle: s, endAngle: e, anticlockwise: a } = this;

    // // 方案一（内圆清除）
    // this.context.beginPath();
    // this.context.moveTo(x, y);
    // this.context.arc(x, y, r1, s, e, a);
    // this.context.lineTo(x, y);
    // this.context.closePath();
    // this.context.fill();
    // this.context.beginPath();
    // this.context.moveTo(x, y);
    // this.context.arc(x, y, r2, 0, 2 * Math.PI, a);
    // this.context.lineTo(x, y);
    // this.context.closePath();
    // this.context.clip();
    // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 方案二（全路径）
    this.context.beginPath();
    let point1 = this.getRelativePoint(x, y, s, r2);
    let point2 = this.getRelativePoint(x, y, e, r1);
    this.context.moveTo(point1.x, point1.y);
    this.context.arc(x, y, r2, s, e, a);
    this.context.lineTo(point2.x, point2.y);
    this.context.arc(x, y, r1, e, s, !a);
    this.context.lineTo(point1.x, point1.y);
    this.context.closePath();
    this.context.fill();

    // // 方案三（外圆角）
    // this.context.beginPath();
    // let point1 = this.getRelativePoint(x, y, s, r2);
    // let point2 = this.getRelativePoint(x, y, s, r2 + (r1 - r2) / 2);
    // let point3 = this.getRelativePoint(x, y, s, r1);
    // let point4 = this.getRelativePoint(x, y, e, r2);
    // let point5 = this.getRelativePoint(x, y, e, r2 + (r1 - r2) / 2);
    // let point6 = this.getRelativePoint(x, y, e, r1);
    // this.context.moveTo(point1.x, point1.y);
    // this.context.arc(
    //   point2.x,
    //   point2.y,
    //   (r1 - r2) / 2,
    //   this.getRelativeRadian(point2.x, point2.y, point1.x, point1.y),
    //   this.getRelativeRadian(point2.x, point2.y, point3.x, point3.y),
    //   a
    // );
    // this.context.arc(x, y, r1, s, e, a);
    // this.context.arc(
    //   point5.x,
    //   point5.y,
    //   (r1 - r2) / 2,
    //   this.getRelativeRadian(point5.x, point5.y, point6.x, point6.y),
    //   this.getRelativeRadian(point5.x, point5.y, point4.x, point4.y),
    //   a
    // );
    // this.context.arc(x, y, r2, e, s, !a);
    // this.context.closePath();
    // this.context.fill();

    // // 方案四（内圆角）
    // this.context.beginPath();
    // let radian = Math.asin(Math.asin(((r1 - r2) / 2) / (r2 + (r1 - r2) / 2)));
    // s = s + radian;
    // e = e - radian;
    // let point1 = this.getRelativePoint(x, y, s, r2);
    // let point2 = this.getRelativePoint(x, y, s, r2 + (r1 - r2) / 2);
    // let point3 = this.getRelativePoint(x, y, s, r1);
    // let point4 = this.getRelativePoint(x, y, e, r2);
    // let point5 = this.getRelativePoint(x, y, e, r2 + (r1 - r2) / 2);
    // let point6 = this.getRelativePoint(x, y, e, r1);
    // this.context.moveTo(point1.x, point1.y);
    // this.context.arc(
    //   point2.x,
    //   point2.y,
    //   (r1 - r2) / 2,
    //   this.getRelativeRadian(point2.x, point2.y, point1.x, point1.y),
    //   this.getRelativeRadian(point2.x, point2.y, point3.x, point3.y),
    //   a
    // );
    // this.context.arc(x, y, r1, s, e, a);
    // this.context.arc(
    //   point5.x,
    //   point5.y,
    //   (r1 - r2) / 2,
    //   this.getRelativeRadian(point5.x, point5.y, point6.x, point6.y),
    //   this.getRelativeRadian(point5.x, point5.y, point4.x, point4.y),
    //   a
    // );
    // this.context.arc(x, y, r2, e, s, !a);
    // this.context.closePath();
    // this.context.fill();

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
    let result = false;
    let startAngle = this.startAngle % (2 * Math.PI);
    let endAngle = this.endAngle % (2 * Math.PI);
    let radius = Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    let radian = this.getRelativeRadian(this.x, this.y, point.x, point.y);
    if (radius >= this.radius2 && radius <= this.radius1) {
      if (startAngle > endAngle) {
        result = (radian >= 0 && radian <= endAngle) || radian >= startAngle && radian <= 2 * Math.PI;
      } else {
        result = radian >= startAngle && radian <= endAngle;
      }
    }
    return result;
  }

  /**
 * @desc 根据起点坐标和目标坐标点的斜边距离和弧度获取目标坐标点的坐标
 * @param {Number} x 起点坐标 x
 * @param {Number} y 起点坐标 y
 * @param {Number} radian 起点和目标点的弧度
 * @param {Number} bevel 起点和目标点的斜边距离
 * @returns {Object} 目标坐标
 */
  getRelativePoint(x, y, radian, bevel) {
    // let radian = angle * Math.PI / 180;
    return {
      x: x + Math.cos(radian) * bevel,
      y: y + Math.sin(radian) * bevel
    };
  }

  /**
   * @desc 根据起点坐标和目标坐标获取目标坐标相对于起点坐标的弧度
   * @param {Number} x1 起点坐标 x
   * @param {Number} y1 起点坐标 y
   * @param {Number} x2 目标坐标 x
   * @param {Number} y2 目标坐标 y
   * @returns {Object} 弧度
   */
  getRelativeRadian(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;
    let radian = Math.atan2(y, x);
    if (x > 0 && y > 0) {
      // 第一象限
      // radian = radian;
    } else if (x < 0, y > 0) {
      // 第二象限
      // radian = radian;
    } else if (x < 0, y < 0) {
      // 第三象限
      radian = 2 * Math.PI + radian
    } else if (x > 0, y < 0) {
      // 第四象限
      // radian = radian;
    }
    return radian;
  }
}

Arc.defaultConfig = {};

export { Arc };
