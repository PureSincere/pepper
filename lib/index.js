"use strict";

// import utils from "./helpers/utils";
// import sizeof from 'object-sizeof';

import ChartCollector from "./chart/ChartCollector";
// import Circle from "./chart/basics/Circle";
// import Line from "./chart/basics/Line";
// import Polygon from "./chart/basics/Polygon";
// import Rectangle from "./chart/basics/Rectangle";
// import Text from "./chart/basics/Text";

// import XAxis from "./chart/components/axis/XAxis";
// import YAxis from "./chart/components/axis/YAxis";
// import Grid from "./chart/components/grid/Grid";
// import Bar from "./chart/components/bar/Bar";

/**
 * @desc 工厂方法
 * @param {HTMLCanvasElement} canvas canvas 对象
 */
const create = (canvas) => {
  let chartCollector = ChartCollector.Factory.create(canvas);

  // 解决 canvas 在高清屏中绘制模糊的问题
  // canvas.width = canvas.width * 2;
  // canvas.height = canvas.height * 2;
  // canvas.style.width = canvas.width / 2 + "px";
  // canvas.style.height = canvas.height / 2 + "px";
  var getPixelRatio = function (context) {
    var backingStore = context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
  };
  let ratio = getPixelRatio(chartCollector.context);
  let c = chartCollector.canvas;
  c.style.width = c.width + 'px';
  c.style.height = c.height + 'px';
  c.width = c.width * ratio;
  c.height = c.height * ratio;
  chartCollector.context.scale(ratio, ratio);

  // function chartCreateFn(createFn) {
  //   return (...args) => {
  //     args.unshift(chartCollector);
  //     let chart = createFn.apply(this, args);
  //     // chartCollector.addChart(chart);
  //     return chart;
  //   }
  // }

  // const chartClasses = { Circle, Line, Polygon, Rectangle, Text, XAxis, YAxis, Grid, Bar };
  // utils.forEach(chartClasses, (c, cName) => {
  //   chartCollector[cName] = chartCreateFn.call(c.Factory, c.Factory.create);
  // });

  // 计算对象占用内存
  // chartCollector.sizeof = sizeof;

  return chartCollector;
}

export default create;
