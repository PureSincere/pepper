"use strict";

import utils from "../../helpers/utils";
import Chart from "../Chart";
import Tween from "../../helpers/tween";

/**
 * @desc Text，文本图形
 */
class Text extends Chart {
  /**
   * @desc Text 构造函数
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {String} text 文本
   * @param {Number} x 文本起始点 x 坐标轴的坐标值
   * @param {Number} y 文本起始点 y 坐标轴的坐标值
   */
  constructor(chartCollector, config, text, x, y) {
    super(chartCollector, config);

    // text, x, y
    this.text = text;
    this.x = x;
    this.y = y;

    this.computeBaseProp();
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   * @param {String} text 文本
   * @param {Number} x 文本起始点 x 坐标轴的坐标值
   * @param {Number} y 文本起始点 y 坐标轴的坐标值
   */
  update(config, text, x, y, callBack) {
    super.update(config);

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      eArgs = { text, x, y },
      sArgs = {
        text: this.text,
        x: this.x,
        y: this.y
      };

    this.addMotion(function fn() {
      let loopNumber = 0;

      // text, x, y
      utils.forEach(["text", "x", "y"], prop => {
        if (utils.isUndefined(this[prop])) {
          this[prop] = args[prop];
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[prop] = Math.floor(Tween.Linear(s, sArgs[prop], eArgs[prop] - sArgs[prop], e));

        if (s < e) {
          loopNumber++;
        }
      });

      this.computeBaseProp();

      if (loopNumber === 0) {
        this.removeMotion(fn);
        callBack && callBack();
      }
    });
  }

  /**
   * @desc 计算基础属性
   */
  computeBaseProp() {
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

    // minX
    this.minX = this.left;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    super.draw(() => {
      this.context.fillText(this.text, this.x, this.y);
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

    return point.x >= this.left && point.x <= this.left + this.width && point.y >= this.top && point.y <= this.top + this.height;
  }
}

/**
 * @desc TextFactory
 */
class TextFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {String} text 文本
   * @param {Number} x 文本起始点 x 坐标轴的坐标值
   * @param {Number} y 文本起始点 y 坐标轴的坐标值
   * @returns {Text} 文本图形对象
   */
  static create(chartCollector, config, text, x, y) {
    return new Text(chartCollector, config, text, x, y);
  }
}

Text.Factory = TextFactory;
export default Text;
