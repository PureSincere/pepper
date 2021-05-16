"use strict";

import utils from "../helpers/utils";
import createError from "../helpers/createError";

class Point {
  /**
   * @desc 构造函数
   * @param {Number} x 坐标轴的坐标值
   * @param {Number} y 坐标轴的坐标值
   */
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
}

class PointFactory {
  /**
   * 构造函数
   */
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {Number} x 坐标轴的坐标值
   * @param {Number} y 坐标轴的坐标值
   */
  static create(x, y) {
    if (!(utils.isNumber(x) && utils.isNumber(y))) {
      let error = createError("x and y should be number");
      console.error(error);
      return error;
    }
    let point = new Point(x, y);
    return point;
  }
}

Point.Factory = PointFactory;
export default Point;
