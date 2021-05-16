"use strict";

import Axis from "./Axis";
import Line from "../../basics/Line";
import Text from "../../basics/Text";
import utils from "../../../helpers/utils";
import Point from "../../../point/Point";

/**
 * @desc YAxis，y 坐标轴类
 */
class YAxis extends Axis {
  /**
   * @desc 构造函数
   * @param config 配置对象
   */
  constructor(chartCollector, config) {
    super(chartCollector, config);

    let { lineWidth, fontSize, label: { splitNumber, position, toAxisSpace, pointSize } } = this.config;

    // axisChart
    let x1, x2, y1, y2;
    x1 = x2 = this.left + this.width - lineWidth / 2;
    y1 = this.top;
    y2 = this.top + this.height;
    this.axisChart = Line.Factory.create(chartCollector, this.config, x1, y1, x2, y2);

    // splitHeight
    this.splitHeight = this.height / splitNumber;

    // labelPoints, labelPointCharts
    this.labelPoints = this.getLabelPoints();
    this.labelPointCharts = [];
    utils.forEach(this.labelPoints, p => {
      this.labelPointCharts.push(
        Line.Factory.create(
          chartCollector,
          this.config,
          p.x,
          p.y,
          p.x + pointSize,
          p.y
        )
      );
    });

    // labelTextCharts
    this.labelTextCharts = [];
    utils.forEach(this.labelPoints, p => {
      let y;
      switch (position) {
        case "bottom": y = p.y + fontSize; break;
        case "top": y = p.y; break;
        case "block-middle": y = p.y + fontSize / 2 + this.splitHeight / 2; break;
        case "middle":
        default: y = p.y + fontSize / 2;
      }
      this.labelTextCharts.push(
        Text.Factory.create(
          chartCollector,
          this.config,
          p.datum,
          p.x - toAxisSpace,
          y
        )
      );
    });
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   */
  update(config) {
    super.update(config);

    let { lineWidth, fontSize, label: { splitNumber, position, toAxisSpace, pointSize } } = this.config;

    // axisChart
    let x1, x2, y1, y2;
    x1 = x2 = this.left + this.width - lineWidth / 2;
    y1 = this.top;
    y2 = this.top + this.height;
    this.axisChart.update(this.config, x1, y1, x2, y2);

    // splitHeight
    this.splitHeight = this.height / splitNumber;

    // labelPoints, labelPointCharts
    this.labelPoints = this.getLabelPoints();
    utils.forEach(this.labelPoints, (p, i) => {
      this.labelPointCharts[i].update(
        this.config,
        p.x,
        p.y,
        p.x + pointSize,
        p.y
      )
    });

    // labelTextCharts
    utils.forEach(this.labelPoints, (p, i) => {
      let y;
      switch (position) {
        case "bottom": y = p.y + fontSize; break;
        case "top": y = p.y; break;
        case "block-middle": y = p.y + fontSize / 2 + this.splitHeight / 2; break;
        case "middle":
        default: y = p.y + fontSize / 2;
      }
      this.labelTextCharts[i].update(
        this.config,
        p.datum,
        p.x - toAxisSpace,
        y
      )
    });
  }

  /**
   * @desc 获取图形对象的坐标轴坐标点集合
   * @returns {Array<Number>} 图形对象的坐标轴坐标点集合
   */
  getLabelPoints() {
    let points = [];

    for (let i = 0, x, y, point; i < this.data.length; i++) {
      x = this.left + this.width;
      y = this.top + this.splitHeight * (this.data.length - i - 1);
      point = Point.Factory.create(x, y);
      point.datum = this.data[i];
      points.push(point);
    }

    return points;
  }
}

/**
 * @desc YAxisFactory
 */
class YAxisFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param config 配置对象
   * @returns {YAxis} x 坐标轴对象
   */
  static create(chartCollector, config) {
    let yAxis = new YAxis(chartCollector, config);
    return yAxis;
  }
}

YAxis.Factory = YAxisFactory;
export default YAxis;
