"use strict";

import utils from "../../../helpers/utils";
import Chart from "../../Chart";
import Line from "../../basics/Line";
import XAxis from "../axis/XAxis";
import YAxis from "../axis/YAxis";
import defaults from "../../defaults";
import mergeConfig from "../../mergeConfig";

/**
 * @desc Grid，网格类
 */
class Grid extends Chart {
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

    // xAxisData, yAxisData
    let { xAxis: { data: xAxisData }, yAxis: { data: yAxisData } } = this.config;
    this.xAxisData = xAxisData;
    this.yAxisData = yAxisData;

    // xAxisLabelPointData, yAxisLabelPointData
    this.xAxisLabelPointData = this.xAxisData;
    this.yAxisLabelPointData = this.getYAxisLabelPointData();

    // xAxisChart, yAxisChart
    let xAxisHeight = this.getXAxisHeight();
    let yAxisWidth = this.getYAxisWidth();
    this.xAxisChart = XAxis.Factory.create(chartCollector, mergeConfig(this.config, {
      xAxis: {
        data: this.xAxisLabelPointData,
        top: top + height - xAxisHeight,
        right,
        bottom,
        left: left + yAxisWidth,
        width: width - yAxisWidth,
        height: xAxisHeight
      }
    }).xAxis);
    this.yAxisChart = YAxis.Factory.create(chartCollector, mergeConfig(this.config, {
      yAxis: {
        data: this.yAxisLabelPointData,
        top,
        right: right + width - yAxisWidth,
        bottom: bottom + xAxisHeight,
        left,
        width: yAxisWidth,
        height: height - xAxisHeight
      }
    }).yAxis);

    // xAxisGridlineCharts, yAxisGridlineCharts
    this.xAxisGridlineCharts = [];
    utils.forEach(this.xAxisChart.getLabelPoints(), p => {
      this.xAxisGridlineCharts.push(
        Line.Factory.create(
          chartCollector,
          utils.deepMerge(this.config.grid, this.config.grid.zIndex === defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
          p.x,
          p.y,
          p.x,
          p.y,
        )
      );
      this.xAxisGridlineCharts[this.xAxisGridlineCharts.length - 1].update(
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
        p.x,
        p.y,
        p.x,
        this.top
      );
    });
    this.yAxisGridlineCharts = [];
    utils.forEach(this.yAxisChart.getLabelPoints(), p => {
      this.yAxisGridlineCharts.push(
        Line.Factory.create(
          chartCollector,
          utils.deepMerge(this.config.grid, this.config.grid.zIndex === defaults.config.grid.zIndex && { zIndex: this.config.yAxis.zIndex - 2 }),
          p.x,
          p.y,
          p.x,
          p.y
        )
      );
      this.yAxisGridlineCharts[this.yAxisGridlineCharts.length - 1].update(
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === defaults.config.grid.zIndex && { zIndex: this.config.yAxis.zIndex - 2 }),
        p.x,
        p.y,
        this.left + this.width,
        p.y
      );
    });
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
    this.minX = this.left;

    // xAxisData, yAxisData
    let { xAxis: { data: xAxisData }, yAxis: { data: yAxisData } } = this.config;
    this.xAxisData = xAxisData;
    this.yAxisData = yAxisData;

    // xAxisLabelPointData, yAxisLabelPointData
    this.xAxisLabelPointData = this.xAxisData;
    this.yAxisLabelPointData = this.getYAxisLabelPointData();

    // xAxisChart, yAxisChart
    let xAxisHeight = this.getXAxisHeight();
    let yAxisWidth = this.getYAxisWidth();
    this.xAxisChart.update(mergeConfig(this.config, {
      xAxis: {
        data: this.xAxisLabelPointData,
        top: top + height - xAxisHeight,
        right,
        bottom,
        left: left + yAxisWidth,
        width: width - yAxisWidth,
        height: xAxisHeight
      }
    }).xAxis);
    this.yAxisChart.update(mergeConfig(this.config, {
      yAxis: {
        data: this.yAxisLabelPointData,
        top,
        right: right + width - yAxisWidth,
        bottom: bottom + xAxisHeight,
        left,
        width: yAxisWidth,
        height: height - xAxisHeight
      }
    }).yAxis);

    // xAxisGridlineCharts, yAxisGridlineCharts
    let xAxisLabelPoint = this.xAxisChart.getLabelPoints();
    // 减少
    for (let i = this.xAxisGridlineCharts.length - 1; i >= xAxisLabelPoint.length; i--) {
      this.xAxisGridlineCharts[i].update(
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
        xAxisLabelPoint[xAxisLabelPoint.length - 1].x,
        xAxisLabelPoint[xAxisLabelPoint.length - 1].y,
        xAxisLabelPoint[xAxisLabelPoint.length - 1].x,
        this.top,
        () => {
          this.chartCollector.removeChart(this.xAxisGridlineCharts[i]);
          this.xAxisGridlineCharts.splice(i, 1);
        }
      )
    }
    utils.forEach(xAxisLabelPoint, (p, i) => {
      if (this.xAxisGridlineCharts.length === i) {
        // 增加
        this.xAxisGridlineCharts[i] = Line.Factory.create(
          this.chartCollector,
          utils.deepMerge(this.config.grid, this.config.grid.zIndex === defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
          xAxisLabelPoint[xAxisLabelPoint.length - 1].x,
          xAxisLabelPoint[xAxisLabelPoint.length - 1].y,
          xAxisLabelPoint[xAxisLabelPoint.length - 1].x,
          this.top,
        );
      }
      this.xAxisGridlineCharts[i].update(
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
        p.x,
        p.y,
        p.x,
        this.top
      )
    });

    utils.forEach(this.yAxisChart.getLabelPoints(), (p, i) => {
      this.yAxisGridlineCharts[i].update(
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === defaults.config.grid.zIndex && { zIndex: this.config.yAxis.zIndex - 2 }),
        p.x,
        p.y,
        this.left + this.width,
        p.y
      )
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

  /**
   * @desc 获取计算后的 y 坐标轴高度
   * @returns {Number} 计算后的 y 坐标轴高度
   */
  getXAxisHeight() {
    let { xAxis: { fontSize, lineWidth, label: { toAxisSpace } } } = this.config;
    return lineWidth + toAxisSpace + fontSize;
  }

  /**
   * @desc 获取计算后的 x 坐标轴宽度
   * @returns {Number} 计算后的 x 坐标轴宽度
   */
  getYAxisWidth() {
    let { yAxis: { data, lineWidth, label: { toAxisSpace } } } = this.config;
    return this.chartCollector.context.measureText(`${utils.getCeilDatum(utils.getMaxDatum(data))}`).width + toAxisSpace + lineWidth;
  }

  /**
   * @desc 获取计算后的图形对象的 y 坐标轴坐标点集合
   * @returns {Array<Number>} 计算后的图形对象的 y 坐标轴坐标点集合
   */
  getYAxisLabelPointData() {
    let data = [];
    let { yAxis: { label: { splitNumber } } } = this.config;
    data = utils.getSplitData(this.yAxisData, splitNumber);
    return data;
  }
}

/**
 * @desc GridFactory
 */
class GridFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param config 配置对象
   * @returns {Grid} 坐标轴对象
   */
  static create(chartCollector, config) {
    let grid = new Grid(chartCollector, config);
    return grid;
  }
}

Grid.Factory = GridFactory;
export default Grid;
