"use strict";

import utils from "../helpers/utils";
import createError from "../helpers/createError";
import Event from "../event/Event";
import sort from "../helpers/sort";

/**
 * @desc ChartCollector，图形容器类
 */
class ChartCollector {
  /**
   * @desc 构造函数
   * @param {HTMLCanvasElement} canvas canvas 对象
   */
  constructor(canvas) {
    if (!utils.isHTMLCanvasElement(canvas)) {
      let error = createError("canvas should be HTMLCanvasElement");
      console.error(error);
      return error;
    }
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");

    // 解决 canvas 在高清屏中绘制模糊的问题
    let getPixelRatio = context => {
      let backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
      return (window.devicePixelRatio || 1) / backingStore;
    };
    let ratio = getPixelRatio(this.context);
    let c = this.canvas;
    c.style.width = c.width + 'px';
    c.style.height = c.height + 'px';
    c.width = c.width * ratio;
    c.height = c.height * ratio;
    this.context.scale(ratio, ratio);

    this.fps = 0;//FPS
    this.frames = 0;//帧数
    this.updateFpsTime;//更新 FPS 的时间
    this.beforeDrawTime;//绘制图案前的时间
    this.beforeDrawCurrentFrameTime;//绘制当前帧图案前的时间
    this.afterDrawCurrentFrameTime;//绘制当前帧图案后的时间

    // 依赖
    this.eventCharts = Object.create(null);//区分事件类型的事件图形对象集合，每个类型的事件包含图形对象集合
    this.charts = [];//用于绘制图形的图形对象集合
  }

  /**
   * @desc 查找图形容器是否包含图形对象
   * @param {Chart} chart 图形对象
   * @returns {Boolean} 如果图形容器包含指定图形返回 true，否则返回 false
   */
  hasChart(chart) {
    // 二分搜索（只对有序序列搜索）【可以考虑用查找二叉树替换】
    let
      array = this.charts,
      low = 0,
      mid,
      high = array.length - 1;
    while (low <= high) {
      mid = parseInt((low + high) / 2);
      if (array[mid] === chart) {
        return true;
      }
      array[mid].compareZIndex(chart) > 0 ? low = mid + 1 : high = mid - 1;
    }
    return false;
  }

  /**
   * @desc 图形容器新增图形对象
   * @param {Chart} chart 图形对象
   */
  addChart(chart) {
    chart.chartCollector = this;

    let
      array = this.charts,
      index = 0;
    for (let result, i = 0; i < array.length; i++) {
      result = chart.compareZIndex(array[i]);
      if (result > 0) {
        break;
      }
      index++;
    }
    for (let i = array.length; i > index; i--) {
      array[i] = array[i - 1];
    }
    array[index] = chart;
  }

  /**
   * @desc 图形容器删除图形对象
   * @param {Chart} chart 图形对象
   */
  removeChart(chart) {
    for (let i = 0; i < this.charts.length; i++) {
      if (this.charts[i] === chart) {
        this.charts.splice(i, 1);
        break;
      }
    }
  }

  /**
   * @desc 广播
   * @param {String} fn 函数名称
   */
  notifyCharts(fn) {
    // 排序
    if (fn === "draw") {
      function compare(a, b) {
        return b.compareZIndex(a);
      }
      this.charts = sort.quickSort(compare, this.charts);
    }
    // 执行
    for (let i = this.charts.length - 1; i >= 0; i--) {
      this.charts[i][fn].apply(this.charts[i]);
    }
  }

  /**
   * @desc 动画
   */
  animate() {
    this.beforeDrawCurrentFrameTime = +new Date();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.notifyCharts("notifyMotions");
    this.notifyCharts("draw");
    this.afterDrawCurrentFrameTime = +new Date();

    this.drawFps();

    let loopNumber = 0;
    utils.forEach(this.charts, c => {
      if (c.motions.length > 0) {
        loopNumber++;
      }
    });
    if (loopNumber > 0) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  /**
   * @desc 绘制帧速率
   */
  drawFps() {
    this.frames++;
    if (this.afterDrawCurrentFrameTime - this.updateFpsTime >= 1000 || utils.isUndefined(this.updateFpsTime)) {
      if (utils.isUndefined(this.updateFpsTime)) {
        this.updateFpsTime = this.beforeDrawCurrentFrameTime;
      }
      this.fps = (this.frames / (this.afterDrawCurrentFrameTime - this.updateFpsTime) * 1000).toFixed();
      this.updateFpsTime = this.afterDrawCurrentFrameTime;
      this.frames = 0;
    }
    this.context.save();
    this.context.font = "12px sans-serif";
    this.context.textAlign = "start";
    this.context.fillText(`FPS: ${this.fps}`, 20, 12);
    this.context.restore();
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.beforeDrawTime = +new Date();
    requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * @desc 查找事件图形对象集合是否包含图形对象
   * @param {String} type 事件名称
   * @param {Chart} chart 图形对象
   * @returns {Boolean} 如果事件图形对象集合包含指定图形返回 true，否则返回 false
   */
  hasEventChart(type, chart) {
    // 二分搜索（只对有序序列搜索）【可以考虑用查找二叉树替换】
    let
      array = this.eventCharts[type],
      low = 0,
      mid,
      high = array.length - 1;
    while (low <= high) {
      mid = parseInt((low + high) / 2);
      if (array[mid] === chart) {
        return true;
      }
      array[mid].compareMinX(chart) < 0 ? low = mid + 1 : high = mid - 1;
    }
    return false;
  }

  /**
   * @desc 事件图形对象集合新增图形对象
   * @param {String} type 事件名称
   * @param {Chart} chart 图形对象
   */
  addEventChart(type, chart) {
    chart.chartCollector = this;

    if (!utils.isString(type) || type === "") {
      return Object.create(null);
    }
    if (!Object.hasOwnProperty.call(this.eventCharts, type)) {
      this.eventCharts[type] = [];
    }

    if (!this.hasEventChart(type, chart)) {
      let array = this.eventCharts[type];
      if (utils.isArray(array)) {
        let index = 0;
        for (let result, i = 0; i < array.length; i++) {
          result = chart.compareMinX(array[i]);
          if (!utils.isNumber(result)) {
            return;
          }
          if (result <= 0) {
            break;
          }
          index++;
        }
        for (let i = array.length; i > index; i--) {
          array[i] = array[i - 1];
        }
        array[index] = chart;
      }
    }
  }

  /**
   * @desc 事件图形对象集合删除图形对象
   * @param {String} type 事件名称
   * @param {Chart} chart 图形对象
   */
  removeEventChart(type, chart) {
    if (!utils.isString(type) || type === "") {
      return;
    }
    if (!Object.hasOwnProperty.call(this.eventCharts, type)) {
      return;
    }
    let array = this.eventCharts[type];
    if (utils.isArray(array)) {
      for (let i = 0; i < array.length; i++) {
        if (chart === array[i]) {
          array.splice(i, 1);
          break;
        }
      }
    }
  }

  /**
   * @desc 注册 canvas 元素的 click 事件
   */
  enableClick() {
    this.canvas.addEventListener("click", event => {
      this.handleClick(event);
    }, false);
  }

  /**
   * @desc 注册 canvas 元素的 mousemove 事件（包括图形的 mousemove、mouseover 和 mouseout 事件）
   */
  enableMousemove() {
    this.canvas.addEventListener("mousemove", event => {
      this.handleMousemove(event);
    }, false);
  }

  /**
   * @desc click 事件监听函数
   * @param {Object} event 事件对象
   */
  handleClick(event) {
    let point = this.windowToCanvas(event.clientX, event.clientY);
    let { selecteds: selectedCharts, unSelecteds: unSelectedCharts } = this.searchEventCharts("click", point);

    utils.forEach(selectedCharts, chart => {
      if (chart.hasEventListener("click")) {
        chart.notifyEventListeners(new Event(event, "click", chart));
      }
    });
  }

  /**
   * @desc mousemove 事件监听函数
   * @param {Object} event 事件对象
   */
  handleMousemove(event) {
    let point = this.windowToCanvas(event.clientX, event.clientY);
    let mousemoveCharts = this.searchEventCharts("mousemove", point);
    let mouseoverCharts = this.searchEventCharts("mouseover", point);
    let mouseoutCharts = this.searchEventCharts("mouseout", point);

    utils.forEach(mousemoveCharts.selecteds, chart => {
      if (chart.hasEventListener("mousemove")) {
        chart.notifyEventListeners(new Event(event, "mousemove", chart));
      }
    });

    utils.forEach(mouseoverCharts.selecteds, chart => {
      if (!chart.mouseInside) {
        chart.mouseInside = true;
        if (chart.hasEventListener("mouseover")) {
          chart.notifyEventListeners(new Event(event, "mouseover", chart));
        }
      }
    });

    utils.forEach(mouseoutCharts.unSelecteds, chart => {
      if (chart.mouseInside) {
        chart.mouseInside = false;
        if (chart.hasEventListener("mouseout")) {
          chart.notifyEventListeners(new Event(event, "mouseout", chart));
        }
      }
    });
  }

  /**
   * @desc 查找指定坐标对象位于和不位于事件图形对象集合的某个事件的图形对象集合
   * @param {String} type 事件名称
   * @param {Object} point 坐标对象
   * @returns {Object} 图形对象集合
   */
  searchEventCharts(type, point) {
    let result = {
      selecteds: [],
      unSelecteds: []
    };

    let array = this.eventCharts[type];
    if (utils.isArray(array)) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].comparePointX(point) > 0) {
          // for (let j = i; j < array.length; j++) {
          //   result.unSelecteds.push(array[i]);
          // }
          // break;
          result.unSelecteds.push(array[i]);
        }
        if (array[i].hasPoint(point)) {
          result.selecteds.push(array[i]);
        } else {
          result.unSelecteds.push(array[i]);
        }
      }
    }
    return result;
  }

  /**
   * @desc 返回指定 (x, y) 在当前画布的映射坐标
   * @param {Number} x 指定 x 坐标坐标值
   * @param {Number} y 指定 y 坐标坐标值
   * @returns {Object} 当前画布的映射坐标对象
   */
  windowToCanvas(x, y) {
    let bbox = this.canvas.getBoundingClientRect();
    return { x: x - bbox.left, y: y - bbox.top };
  }

}

export default ChartCollector;
