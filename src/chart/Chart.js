"use strict";

import MotionCollector from "../motion/MotionCollector";
import utils from "../helpers/utils";

let id = 0;

/**
 * @desc Chart，图形类
 */
class Chart extends MotionCollector {
  /**
   * @desc 构造函数
   */
  constructor() {
    super();
    this.id = id++;
    this.mouseInside = false;
  }

  /**
   * @desc 设置 chartCollector
   * @param {ChartCollector} ChartCollector 对象
   */
  setChartCollector(chartCollector) {
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

  /**
  * @desc 触发行为
  */
  notifyMotions() {
    super.notifyMotions();
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
        this.chartCollector.removeEventChart(this, type);
      }
    }

    let eventListeners = this.eventListeners[type];
    if (utils.isArray(eventListeners)) {
      if (eventListeners.length === 0) {
        this.chartCollector.removeEventChart(this, type);
      }
    }
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的 zIndex 的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的 zIndex 小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareZIndex(chart) {
    return !utils.isNumber(chart.zIndex) ?
      null :
      this.zIndex < chart.zIndex ?
        -1 :
        this.zIndex > chart.zIndex ?
          1 :
          this.zIndex === chart.zIndex ?
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
  //  * @param {Object} point 坐标对象
  //  * @returns {NULL}
  //  */
  // comparePointX(point) {
  //   return null;
  // }

  /**
   * @desc 查找当前图形对象内部是否包含指定坐标对象表示的点
   * @param {Object} point 坐标对象
   * @returns {Boolean} 如果当前图形对象内部包含指定坐标对象表示的点返回 true，否则返回 false
   */
  hasPoint(point) {
    return false;
  }
}

export default Chart;
