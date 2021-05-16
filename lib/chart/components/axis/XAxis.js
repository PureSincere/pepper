"use strict";

import Axis from "./Axis";
import Line from "../../basics/Line";
import Text from "../../basics/Text";
import utils from "../../../helpers/utils";
import Point from "../../../point/Point";

/**
 * @desc XAxis，x 坐标轴类
 */
class XAxis extends Axis {
  /**
   * @desc 构造函数
   * @param config 配置对象
   */
  constructor(chartCollector, config) {
    super(chartCollector, config);

    // axisChart
    let { lineWidth } = this.config;
    let x1, x2, y1, y2;
    y1 = y2 = this.top - lineWidth / 2;
    x1 = this.left;
    x2 = this.left + this.width;
    this.axisChart = Line.Factory.create(chartCollector, this.config, x1, y1, x2, y2);

    // splitWidth
    let splitNumber = this.data.length;
    this.splitWidth = this.width / splitNumber;

    // labelPoints, labelPointCharts
    let { label: { pointSize } } = this.config;
    this.labelPoints = this.getLabelPoints();
    this.labelPointCharts = [];
    utils.forEach(this.labelPoints, p => {
      this.labelPointCharts.push(
        Line.Factory.create(
          chartCollector,
          this.config,
          p.x,
          p.y,
          p.x,
          p.y - pointSize
        )
      );
    });

    // labelTextCharts
    let { fontSize, label: { toAxisSpace, position } } = this.config;
    this.labelTextCharts = [];
    utils.forEach(this.labelPoints, p => {
      let x;
      switch (position) {
        case "right": x = p.x + this.context.measureText(`${p.datum}`).width; break;
        case "left": x = p.x; break;
        case "block-middle": x = p.x + this.context.measureText(`${p.datum}`).width / 2 - this.splitWidth / 2; break;
        case "middle":
        default: x = p.x + this.context.measureText(`${p.datum}`).width / 2;
      }
      this.labelTextCharts.push(
        Text.Factory.create(
          chartCollector,
          this.config,
          p.datum,
          x,
          p.y + fontSize + toAxisSpace
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

    // axisChart
    let { lineWidth } = this.config;
    let x1, x2, y1, y2;
    y1 = y2 = this.top - lineWidth / 2;
    x1 = this.left;
    x2 = this.left + this.width;
    this.axisChart.update(this.config, x1, y1, x2, y2);

    // splitWidth
    let splitNumber = this.data.length;
    this.splitWidth = this.width / splitNumber;

    // labelPoints, labelPointCharts
    let { label: { pointSize } } = this.config;
    this.labelPoints = this.getLabelPoints();
    // 减少
    for (let i = this.labelPointCharts.length - 1; i >= this.labelPoints.length; i--) {
      this.labelPointCharts[i].update(
        this.config,
        this.labelPoints[this.labelPoints.length - 1].x,
        this.labelPoints[this.labelPoints.length - 1].y,
        this.labelPoints[this.labelPoints.length - 1].x,
        this.labelPoints[this.labelPoints.length - 1].y - pointSize,
        () => {
          this.chartCollector.removeChart(this.labelPointCharts[i]);
          this.chartCollector.removeEventChart("mousemove", this.labelPointCharts[i]);
          this.chartCollector.removeEventChart("mouseover", this.labelPointCharts[i]);
          this.chartCollector.removeEventChart("mouseout", this.labelPointCharts[i]);
          this.labelPointCharts.splice(i, 1);
        }
      );
      this.labelTextCharts[i].update(
        this.config,
        0,
        this.labelPoints[this.labelPoints.length - 1].x,
        this.labelTextCharts[i].y,
        () => {
          this.chartCollector.removeChart(this.labelTextCharts[i]);
          this.labelTextCharts.splice(i, 1);
        }
      );
    }

    let { fontSize, label: { toAxisSpace, position } } = this.config;
    utils.forEach(this.labelPoints, (p, i) => {
      if (this.labelPointCharts.length === i) {
        // 增加
        this.labelPointCharts[i] = Line.Factory.create(
          this.chartCollector,
          this.config,
          this.labelPoints[this.labelPoints.length - 1].x,
          p.y,
          this.labelPoints[this.labelPoints.length - 1].x,
          p.y - pointSize
        );
        this.labelPointCharts[i].update(
          this.config,
          p.x,
          p.y,
          p.x,
          p.y - pointSize
        );
      } else {
        this.labelPointCharts[i].update(
          this.config,
          p.x,
          p.y,
          p.x,
          p.y - pointSize
        );
      }

      // labelTextCharts
      let x;
      switch (position) {
        case "right": x = p.x + this.context.measureText(`${p.datum}`).width; break;
        case "left": x = p.x; break;
        case "block-middle": x = p.x + this.context.measureText(`${p.datum}`).width / 2 - this.splitWidth / 2; break;
        case "middle":
        default: x = p.x + this.context.measureText(`${p.datum}`).width / 2;
      }
      if (this.labelTextCharts.length === i) {
        // 增加
        this.labelTextCharts[i] = Text.Factory.create(
          this.chartCollector,
          this.config,
          0,
          this.labelPoints[this.labelPoints.length - 1].x,
          this.labelPoints[this.labelPoints.length - 1].y + fontSize + toAxisSpace
        );
        this.labelTextCharts[i].update(
          this.config,
          p.datum,
          x,
          p.y + fontSize + toAxisSpace
        );
      } else {
        this.labelTextCharts[i].update(
          this.config,
          p.datum,
          x,
          p.y + fontSize + toAxisSpace
        )
      }

    });
  }

  /**
   * @desc 获取图形对象的坐标轴坐标点集合
   * @returns {Array<Number>} 图形对象的坐标轴坐标点集合
   */
  getLabelPoints() {
    let points = [];

    for (let i = 0, x, y, point; i < this.data.length; i++) {
      x = this.left + this.splitWidth * (i + 1);
      y = this.top;
      point = Point.Factory.create(x, y);
      point.datum = this.data[i];
      points.push(point);
    }

    return points;
  }
}

/**
 * @desc XAxisFactory
 */
class XAxisFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param config 配置对象
   * @returns {XAxis} x 坐标轴对象
   */
  static create(chartCollector, config) {
    let xAxis = new XAxis(chartCollector, config);
    return xAxis;
  }
}

XAxis.Factory = XAxisFactory;
export default XAxis;
