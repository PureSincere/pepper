"use strict";

import utils from "../../helpers/utils";
import Chart from "../Chart";
import Tween from "../../helpers/tween";

/**
 * @desc Rectangle，矩形
 */
class Rectangle extends Chart {
  /**
   * @desc Rectangle 构造函数
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {Number} x1 矩形左上角的 x 坐标。
   * @param {Number} y1 矩形左上角的 y 坐标。
   * @param {Number} x2 矩形右下角的 x 坐标。
   * @param {Number} y2 矩形右下角的 y 坐标。
   */
  constructor(chartCollector, config, x1, y1, x2, y2) {
    super(chartCollector, config);

    // x1, y1, x2, y2
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    // top, right, bottom, left
    this.top = this.y1;
    this.right = this.canvas.width - this.x2;
    this.bottom = this.canvas.height - this.y2;
    this.left = this.x1;

    // minX
    this.minX = this.left;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   * @param {Number} x1 矩形左上角的 x 坐标。
   * @param {Number} y1 矩形左上角的 y 坐标。
   * @param {Number} x2 矩形左下角的 x 坐标。
   * @param {Number} y2 矩形左下角的 y 坐标。
   */
  update(config, x1, y1, x2, y2, callBack) {
    super.update(config);

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      eArgs = { x1, y1, x2, y2 },
      sArgs = {
        x1: this.x1,
        y1: this.y1,
        x2: this.x2,
        y2: this.y2
      }
    this.addMotion(function fn() {
      let loopNumber = 0;

      // x1, y1, x2, y2
      utils.forEach(["x1", "y1", "x2", "y2"], prop => {
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

      // top, right, bottom, left
      this.top = this.y1;
      this.right = this.canvas.width - this.x2;
      this.bottom = this.canvas.height - this.y2;
      this.left = this.x1;

      // minX
      this.minX = this.left;//当前图形区域的最小 x 轴坐标值

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
      this.context.moveTo(this.x1, this.y1);
      this.context.lineTo(this.x2, this.y1);
      this.context.lineTo(this.x2, this.y2);
      this.context.lineTo(this.x1, this.y2);
      this.context.closePath();
      this.context.fill();
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
    return point.x >= this.x1 && point.x <= this.x2 && point.y >= this.y1 && point.y <= this.y2;
  }
}

/**
 * @desc RectangleFactory
 */
class RectangleFactory {
  constructor() { }

  /**
   * @desc 工厂方法]
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {Number} x1 矩形左上角的 x 坐标。
   * @param {Number} y1 矩形左上角的 y 坐标。
   * @param {Number} x2 矩形左下角的 x 坐标。
   * @param {Number} y2 矩形左下角的 y 坐标。
   * @returns {Rectangle} 矩形图形对象
   */
  static create(chartCollector, config, x1, y1, x2, y2) {
    let rectangle = new Rectangle(chartCollector, config, x1, y1, x2, y2);
    return rectangle;
  }
}

Rectangle.Factory = RectangleFactory;
export default Rectangle;
