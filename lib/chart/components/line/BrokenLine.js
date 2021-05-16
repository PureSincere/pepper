"use strict";

import Grid from "../grid/Grid";
import utils from "../../../helpers/utils";
import Circle from "../../basics/Circle";
import Polygon from "../../basics/Polygon";
import Point from "../../../point/Point";

/**
 * @desc Line，折线图类
 */
class BrokenLine extends Grid {
  /**
   * @desc 构造函数
   * @param config 配置对象
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
    this.minX = this.left;

    let { labelPoints: xAxisLabelPoints, splitWidth: xAxisSplitWidth } = this.xAxisChart;
    let { height: yAxisHeight } = this.yAxisChart;
    let yAxisMaxLabelPointDatum = this.yAxisLabelPointData[this.yAxisLabelPointData.length - 1];

    // circle
    this.circles = [];
    utils.forEach(xAxisLabelPoints, (p, i) => {
      let
        x = p.x - xAxisSplitWidth / 2,
        y = this.top + (1 - this.yAxisData[i] / yAxisMaxLabelPointDatum) * yAxisHeight;
      let { line: { radius } } = this.config;
      this.circles[i] = Circle.Factory.create(
        this.chartCollector,
        utils.deepMerge(this.config.line),
        x,
        y,
        0
      );
      this.circles[i].update(
        utils.deepMerge(this.config.line),
        x,
        y,
        radius
      );
    });

    // line
    this.line = Polygon.Factory
      .create(
        this.chartCollector,
        utils.deepMerge(this.config.line),
        this.circles.map(c => { return { x: c.x, y: c.y } })
      )
    // .update(
    //   utils.deepMerge(this.config.line),
    //   this.circles.map(c => { return { x: c.x, y: c.y } })
    // );

    // lines
    // this.lines = [];
    // for (let i = 0, c1, c2; i < this.circles.length - 1; i++) {
    //   c1 = this.circles[i];
    //   c2 = this.circles[i + 1];
    //   this.lines[i] = Line.Factory
    //     .create(
    //       this.chartCollector,
    //       utils.deepMerge(this.config.line),
    //       c1.x,
    //       c1.y,
    //       c1.x,
    //       c1.y
    //     )
    //     .update(
    //       utils.deepMerge(this.config.line),
    //       c1.x,
    //       c1.y,
    //       c2.x,
    //       c2.y
    //     );
    // }
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   */
  update(config) {
    config = utils.merge(this.config, config);
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
    this.minX = this.left;

    // circle
    let { labelPoints: xAxisLabelPoints, splitWidth: xAxisSplitWidth } = this.xAxisChart;
    let { height: yAxisHeight } = this.yAxisChart;
    let yAxisMaxLabelPointDatum = this.yAxisLabelPointData[this.yAxisLabelPointData.length - 1];
    // 减少
    for (let i = this.circles.length - 1; i >= xAxisLabelPoints.length; i--) {
      this.circles[i].update(
        utils.deepMerge(this.config.line),
        xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
        this.circles[i].y,
        0,
        () => {
          this.chartCollector.removeChart(this.circles[i]);
          this.circles.splice(i, 1);
          this.line.points.splice(i, 1);
        },
        ({ x, y }) => {
          this.line.points[i] = Point.Factory.create(x, y);
        }
      );

      // if (i !== 0) {
      //   let
      //     c1 = this.circles[i],
      //     c2 = this.circles[i - 1];
      //   this.lines[i - 1].update(
      //     utils.deepMerge(this.config.line),
      //     c1.x,
      //     c1.y,
      //     c1.x,
      //     c1.y
      //   )
      // }
    }
    utils.forEach(xAxisLabelPoints, (p, i) => {
      let
        x = p.x - xAxisSplitWidth / 2,
        y = this.top + (1 - this.yAxisData[i] / yAxisMaxLabelPointDatum) * yAxisHeight;
      let { line: { radius } } = this.config;
      // 增加
      if (this.circles.length === i) {
        this.circles[i] = Circle.Factory.create(
          this.chartCollector,
          utils.deepMerge(this.config.line),
          xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
          y,
          0
        );
        this.line.points[i] = Point.Factory.create(xAxisLabelPoints[xAxisLabelPoints.length - 1].x, y);
      }
      this.circles[i].update(
        utils.deepMerge(this.config.line),
        x,
        y,
        radius,
        null,
        ({ x, y }) => {
          this.line.points[i] = Point.Factory.create(x, y);
        }
      );
    });

    // // line
    // this.line.points = this.circles.map(c => { return { x: c.x, y: c.y } });
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
 * @desc BrokenLineFactory
 */
class BrokenLineFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param config 配置对象
   * @returns {BrokenLine}
   */
  static create(chartCollector, config) {
    let bar = new BrokenLine(chartCollector, config);
    return bar;
  }
}

BrokenLine.Factory = BrokenLineFactory;
export default BrokenLine;
