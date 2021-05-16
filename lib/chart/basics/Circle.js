"use strict";

import utils from "../../helpers/utils";
import Chart from "../Chart";
import Tween from "../../helpers/tween";

/**
 * @desc Circle，圆形
 */
class Circle extends Chart {
  /**
   * @desc Circle 构造函数
   * @param {Number} x 圆的中心（圆心）的 x 轴坐标
   * @param {Number} y 圆的中心（圆心）的 y 轴坐标
   * @param {Number} radius 圆的半径弧度
   */
  constructor(chartCollector, config, x, y, radius) {
    super(chartCollector, config);
    this.x = x || -1;
    this.y = y || -1;
    this.radius = radius || 0;
    this.minX = this.x - this.radius;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 更新
   * @param {Number} x 圆的中心（圆心）的 x 轴坐标
   * @param {Number} y 圆的中心（圆心）的 y 轴坐标
   * @param {Number} radius 圆的半径弧度
   */
  update(config, x, y, radius, callBack, animationHook) {
    super.update(config);

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      sArgs = {
        x: this.x,
        y: this.y,
        radius: this.radius
      },
      eArgs = { x, y, radius };
    this.addMotion(function fn() {
      let loopNumber = 0;

      utils.forEach(["x", "y", "radius"], prop => {
        if (utils.isUndefined(this[prop])) {
          this[prop] = args[prop];
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[prop] = Tween.Linear(s, sArgs[prop], eArgs[prop] - sArgs[prop], e);

        if (s < e) {
          loopNumber++;
        }
      });

      // minX
      this.minX = this.x - this.radius;//当前图形区域的最小 x 轴坐标值

      if (utils.isFunction(animationHook)) {
        animationHook({
          x: this.x,
          y: this.y,
        });
      }

      if (loopNumber === 0) {
        this.removeMotion(fn);
        callBack && callBack();
      }
    });
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    super.draw(() => {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, 0);
      this.context.stroke();
      this.context.closePath();
    });
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
    let distance = Math.pow(Math.abs(point.x - this.x), 2) + Math.pow(Math.abs(point.y - this.y), 2) - Math.pow(this.radius, 2);
    return distance < 0;
  }
}

/**
 * @desc CircleFactory
 */
class CircleFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {Number} x 圆的中心（圆心）的 x 轴坐标
   * @param {Number} y 圆的中心（圆心）的 y 轴坐标
   * @param {Number} radius 圆的半径弧度
   * @returns {Circle} 圆形图形对象
   */
  static create(chartCollector, config, x, y, radius) {
    let circle = new Circle(chartCollector, config, x, y, radius);
    return circle;
  }
}

Circle.Factory = CircleFactory;
export default Circle;
