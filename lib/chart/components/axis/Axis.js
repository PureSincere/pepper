"use strict";

import Chart from "../../Chart";
import utils from "../../../helpers/utils";

/**
 * @desc Axis，坐标轴类
 */
class Axis extends Chart {
  /**
   * @desc 构造函数
   */
  constructor(chartCollector, config) {
    super(chartCollector, config);

    // top, right, bottom, left, width, height
    let { top, right, bottom, left, width, height } = this.config;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.width = width;
    this.height = height;

    // minX
    this.minX = this.left;//当前图形区域的最小 x 轴坐标值

    // data
    let { data } = this.config;
    this.data = data;
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   */
  update(config) {
    super.update(config);

    // top, right, bottom, left, width, height
    let { top, right, bottom, left, width, height } = this.config;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.width = width;
    this.height = height;

    // minX
    this.minX = this.left;//当前图形区域的最小 x 轴坐标值

    // data
    let { data } = this.config;
    this.data = data;
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
 * @desc AxisFactory
 */
class AxisFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @returns {Axis} 坐标轴对象
   */
  static create(chartCollector, config) {
    let Axis = new Axis(chartCollector, config);
    return Axis;
  }
}

Axis.Factory = AxisFactory;
export default Axis;
