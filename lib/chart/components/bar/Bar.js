"use strict";

import Grid from "../grid/Grid";
import defaults from "../../defaults";
import utils from "../../../helpers/utils";
import Rectangle from "../../basics/Rectangle";
import Text from "../../basics/Text";

/**
 * @desc Bar，柱状图类
 */
class Bar extends Grid {
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

    // bars, barTexts
    let { bar: { barWidth, fillStyle, emphasis, textToBarSpace } } = this.config;
    let { labelPoints: xAxisLabelPoints, splitWidth: xAxisSplitWidth } = this.xAxisChart;
    let { height: yAxisHeight } = this.yAxisChart;
    let yAxisMaxLabelPointDatum = this.yAxisLabelPointData[this.yAxisLabelPointData.length - 1];
    this.barCharts = [];
    this.barTextCharts = [];
    utils.forEach(xAxisLabelPoints, (p, i) => {
      // bar
      let
        x1 = p.x - xAxisSplitWidth * barWidth - xAxisSplitWidth * (1 - barWidth) / 2,
        y1 = this.top + (1 - this.yAxisData[i] / yAxisMaxLabelPointDatum) * yAxisHeight,
        x2 = x1 + xAxisSplitWidth * barWidth,
        y2 = y1 + this.yAxisData[i] / yAxisMaxLabelPointDatum * yAxisHeight;
      this.barCharts.push(
        Rectangle.Factory.create(
          chartCollector,
          utils.deepMerge(this.config.bar, this.config.bar.zIndex === defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
          x1,
          p.y,
          x2,
          y2
        )
          .addEventListener("mouseover", event => {
            event.event.target.style.cursor = "pointer";
            event.eventListenerCollector.config.fillStyle = emphasis.fillStyle;
            event.eventListenerCollector.chartCollector.draw();
          })
          .addEventListener("mousemove", event => {
            event.event.target.style.cursor = "pointer";
            event.eventListenerCollector.config.fillStyle = emphasis.fillStyle;
            event.eventListenerCollector.chartCollector.draw();
          })
          .addEventListener("mouseout", event => {
            event.event.target.style.cursor = "auto";
            event.eventListenerCollector.config.fillStyle = fillStyle;
            event.eventListenerCollector.chartCollector.draw();
          })
      );
      this.barCharts[this.barCharts.length - 1].update(
        utils.deepMerge(this.config.bar, this.config.bar.zIndex === defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
        x1,
        y1,
        x2,
        y2
      );

      // barText
      this.barTextCharts.push(
        Text.Factory.create(
          chartCollector,
          this.config.bar,
          0,
          p.x - xAxisSplitWidth / 2,
          p.y
        )
      );
      this.barTextCharts[this.barTextCharts.length - 1].update(
        this.config.bar,
        this.yAxisData[i],
        p.x - xAxisSplitWidth / 2,
        p.y - this.yAxisData[i] / yAxisMaxLabelPointDatum * yAxisHeight - textToBarSpace
      );
    });
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

    // bars, barTexts
    let { bar: { barWidth, textToBarSpace, emphasis, fillStyle } } = this.config;
    let { labelPoints: xAxisLabelPoints, splitWidth: xAxisSplitWidth } = this.xAxisChart;
    let { height: yAxisHeight } = this.yAxisChart;
    let yAxisMaxLabelPointDatum = this.yAxisLabelPointData[this.yAxisLabelPointData.length - 1];

    // 减少
    for (let i = this.barCharts.length - 1; i >= xAxisLabelPoints.length; i--) {
      this.barCharts[i].update(
        utils.deepMerge(this.config.bar, this.config.bar.zIndex === defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
        xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
        xAxisLabelPoints[xAxisLabelPoints.length - 1].y,
        xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
        xAxisLabelPoints[xAxisLabelPoints.length - 1].y,
        () => {
          this.chartCollector.removeChart(this.barCharts[i]);
          this.chartCollector.removeEventChart("mousemove", this.barCharts[i]);
          this.chartCollector.removeEventChart("mouseover", this.barCharts[i]);
          this.chartCollector.removeEventChart("mouseout", this.barCharts[i]);
          this.barCharts.splice(i, 1);
        }
      );
      this.barTextCharts[i].update(
        this.config.bar,
        0,
        xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
        xAxisLabelPoints[xAxisLabelPoints.length - 1].y,
        () => {
          this.chartCollector.removeChart(this.barTextCharts[i]);
          this.chartCollector.removeEventChart(this.barTextCharts[i]);
          this.barTextCharts.splice(i, 1);
        }
      );
    }
    utils.forEach(xAxisLabelPoints, (p, i) => {
      // bar
      let
        x1 = p.x - xAxisSplitWidth * barWidth - xAxisSplitWidth * (1 - barWidth) / 2,
        y1 = this.top + (1 - this.yAxisData[i] / yAxisMaxLabelPointDatum) * yAxisHeight,
        x2 = x1 + xAxisSplitWidth * barWidth,
        y2 = y1 + this.yAxisData[i] / yAxisMaxLabelPointDatum * yAxisHeight;
      if (this.barCharts.length === i) {
        // 增加
        this.barCharts[i] = Rectangle.Factory.create(
          this.chartCollector,
          utils.deepMerge(this.config.bar, this.config.bar.zIndex === defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
          xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
          xAxisLabelPoints[xAxisLabelPoints.length - 1].y,
          xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
          xAxisLabelPoints[xAxisLabelPoints.length - 1].y
        )

        this.barCharts[i].update(
          utils.deepMerge(this.config.bar, this.config.bar.zIndex === defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
          x1,
          y1,
          x2,
          y2,
          () => {
            this.barCharts[i]
              .addEventListener("mouseover", event => {
                event.event.target.style.cursor = "pointer";
                event.eventListenerCollector.config.fillStyle = emphasis.fillStyle;
                event.eventListenerCollector.chartCollector.draw();
              })
              .addEventListener("mousemove", event => {
                event.event.target.style.cursor = "pointer";
                event.eventListenerCollector.config.fillStyle = emphasis.fillStyle;
                event.eventListenerCollector.chartCollector.draw();
              })
              .addEventListener("mouseout", event => {
                event.event.target.style.cursor = "auto";
                event.eventListenerCollector.config.fillStyle = fillStyle;
                event.eventListenerCollector.chartCollector.draw();
              });
          }
        );
      } else {
        this.barCharts[i].update(
          utils.deepMerge(this.config.bar, this.config.bar.zIndex === defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
          x1,
          y1,
          x2,
          y2
        );
      }

      // barText
      if (this.barTextCharts.length === i) {
        this.barTextCharts[i] = Text.Factory.create(
          this.chartCollector,
          this.config.bar,
          0,
          xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
          xAxisLabelPoints[xAxisLabelPoints.length - 1].y
        );
        this.barTextCharts[i].update(
          this.config.bar,
          this.yAxisData[i],
          p.x - xAxisSplitWidth / 2,
          p.y - this.yAxisData[i] / yAxisMaxLabelPointDatum * yAxisHeight - textToBarSpace
        );
      } else {
        this.barTextCharts[i].update(
          this.config.bar,
          this.yAxisData[i],
          p.x - xAxisSplitWidth / 2,
          p.y - this.yAxisData[i] / yAxisMaxLabelPointDatum * yAxisHeight - textToBarSpace
        );
      }
    });
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
 * @desc BarFactory
 */
class BarFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param config 配置对象
   * @returns {Bar} 坐标轴对象
   */
  static create(chartCollector, config) {
    let bar = new Bar(chartCollector, config);
    return bar;
  }
}

Bar.Factory = BarFactory;
export default Bar;
