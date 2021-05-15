"use strict";

import utils from "../../helpers/utils";
import Chart from "../Chart";
import { defaultConfig, contextConfig, mergeConfig } from "../config/index";

/**
 * @desc Polygon，多边形
 */
class Polygon extends Chart {
  /**
   * @desc Polygon 构造函数
   * @param {Object} config 配置对象
   *   @param setting
   *     @param {Array<Object<x, y>>} points 坐标对象数组
   */
  constructor(config) {
    super();
    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);
    Object.assign(this, this.config.setting)
    this.setOtherSetting()
  }
  setOtherSetting() {
    this.minX = 0;//当前图形区域的最小 x 轴坐标值
    utils.forEach(points, point => {
      if (this.minX > point.x) {
        this.minX = point.x;
      }
    });
  }

  /**
   * @desc 更新
   * @param {Array<Object>} points 坐标对象数组
   */
  update(config, points) {
    super.update(config);
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    super.draw(() => {
      if (utils.isEmpty(this.points)) {
        return;
      }
      this.context.beginPath();
      this.context.moveTo(this.points[0].x, this.points[0].y)
      utils.forEach(this.points, point => {
        this.context.lineTo(point.x, point.y);
      });
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
    let isPointIn = false
    this.context.save();
    this.setContextStyle();
    this.context.beginPath();
    this.context.moveTo(this.points[0].x, this.points[0].y)
    utils.forEach(this.points, point => {
      this.context.lineTo(point.x, point.y);
    });
    if (this.context.isPointInPath(point.x, point.y)) {
      isPointIn = true;
    }
    this.context.closePath();
    this.context.restore();
    return isPointIn;
  }
}

export { Polygon };
