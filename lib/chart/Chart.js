"use strict";

import MotionCollector from "../motion/MotionCollector";
import utils from "../helpers/utils";

let id = 0;

/**
 * @desc Chart，图形类
 * @param {ChartCollector} chartCollector 对象
 */
class Chart extends MotionCollector {
  /**
   * @desc 构造函数
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   */
  constructor(chartCollector, config) {
    super();
    this.id = id++;
    this.mouseInside = false;
    this.config = config;

    if (chartCollector) {
      // this.chartCollector = chartCollector;
      chartCollector.addChart(this);

      Object.defineProperties(this, {
        "canvas": {
          get() {
            return this.chartCollector.canvas;
          }
        },
        "context": {
          get() {
            return this.chartCollector.context;
          }
        }
      });
    }
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   */
  update(config) {
    this.config = config;
    this.motions = [];
  }

  /**
  * @desc 触发行为
  */
  notifyMotions() {
    super.notifyMotions();
  }

  /**
   * @desc 绘制图形对象
   */
  draw(subDraw) {
    this.context.save();
    this.setContextStyle();
    if (utils.isFunction(subDraw)) {
      subDraw();
    }
    this.context.restore();
  }

  /**
   * @desc 绘图上下文样式设置
   */
  setContextStyle() {
    let valueFromConfigKeys = [
      "font",
      "strokeStyle",
      "fillStyle",
      "lineWidth",
      "textAlign"
    ];

    utils.forEach(valueFromConfigKeys, prop => {
      if (typeof this.config[prop] !== "undefined") {
        this.context[prop] = this.config[prop];
      }
    });
  }

  /**
   * @desc 新增事件监听函数
   * @param {String} type 事件名称
   * @param {Function} eventListener 事件监听函数
   */
  addEventListener(type, eventListener) {
    super.addEventListener(type, eventListener);
    this.chartCollector.addEventChart(type, this);
    return this;
  }

  /**
   * @desc 删除事件监听函数
   * @param {String} type 事件名称
   * @param {Function} eventListener 事件监听函数
   */
  removeEventListener(type, eventListener) {
    super.removeEventListener(type, eventListener);
    // 如果 eventListener 不为 Function，则清除当前事件下的全部事件监听函数
    if (!utils.isFunction(eventListener)) {
      if (utils.hasOwnProperty.call(chartCollector.eventCharts, type)) {
        this.chartCollector.removeEventChart(type, this);
      }
    }

    let eventListeners = this.eventListeners[type];
    if (utils.isArray(eventListeners)) {
      if (eventListeners.length === 0) {
        this.chartCollector.removeEventChart(type, this);
      }
    }
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的 zIndex 的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的 zIndex 小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareZIndex(chart) {
    return !utils.isNumber(chart.config.zIndex) ?
      null :
      this.config.zIndex < chart.config.zIndex ?
        -1 :
        this.config.zIndex > chart.config.zIndex ?
          1 :
          this.config.zIndex === chart.config.zIndex ?
            0 :
            null;
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的最小 x 坐标轴坐标值的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的最小 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareMinX(chart) {
    return !utils.isNumber(chart.minX) ?
      null :
      this.minX < chart.minX ?
        -1 :
        this.minX > chart.minX ?
          1 :
          this.minX === chart.minX ?
            0 :
            null;
  }

  /**
   * @desc 比对当前图形对象的最小 x 坐标轴坐标值与指定坐标对象的 x 坐标轴坐标值的大小
   * @param {Object} point 坐标对象
   * @returns {Number, NULL} 如果当前图形对象的最小 x 坐标轴坐标值比指定坐标对象的 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  comparePointX(point) {
    return !utils.isNumber(point.x) ?
      null :
      this.minX < point.x ?
        -1 :
        this.minX > point.x ?
          1 :
          this.minX === point.x ?
            0 :
            null;
  }

  // /**
  //  * @desc 比对当前图形对象与指定图形对象
  //  * @param {Chart} chart 图形对象
  //  * @returns {NULL}
  //  */
  // compareMinX(chart) {
  //   return null;
  // }

  // /**
  //  * @desc 比对当前图形对象与指定坐标对象
  //  * @param {Point} point 坐标对象
  //  * @returns {NULL}
  //  */
  // comparePointX(point) {
  //   return null;
  // }

  /**
   * @desc 查找当前图形对象内部是否包含指定坐标对象表示的点
   * @param {Point} point 坐标对象
   * @returns {Boolean} 如果当前图形对象内部包含指定坐标对象表示的点返回 true，否则返回 false
   */
  hasPoint(point) {
    return false;
  }
}

/**
 * @desc ChartFactory
 */
class ChartFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   */
  static create(chartCollector, config) {
    let chart = new Chart(chartCollector, config);
    return chart;
  }
}

Chart.Factory = ChartFactory;
export default Chart;
