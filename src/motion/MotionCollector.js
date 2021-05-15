"use strict";

import utils from "../helpers/utils";
import EventListenerCollector from "../event/EventListenerCollector";

/**
 * @desc MotionCollector，行为容器类
 */
class MotionCollector extends EventListenerCollector {
  constructor() {
    super();
    this.motions = [];//每一个行为都是一个函数
  }

  /**
   * @desc 查找行为容器对象是否包含行为
   * @param {Function} fn 行为
   * @returns {Boolean} 如果行为容器包含指定行为返回 true，否则返回 false
   */
  hasMotion(fn) {
    let result = false;
    for (let i = 0; i < this.motions.length; i++) {
      if (this.motions[i] === fn) {
        result = true;
        break;
      }
    }
    return result;
  }

  /**
   * @desc 行为容器对象新增行为
   * @param {Function} fn 行为
   */
  addMotion(fn) {
    this.motions.push(fn);
  }

  /**
   * @desc 行为容器对象删除行为
   * @param {Function} fn 行为
   */
  removeMotion(fn) {
    for (let i = 0; i < this.motions.length; i++) {
      if (this.motions[i] === fn) {
        this.motions.splice(i, 1);
        break;
      }
    }
  }

  /**
   * @desc 触发行为
   */
  notifyMotions() {
    for (let i = 0; i < this.motions.length; i++) {
      if (utils.isFunction(this.motions[i])) {
        this.motions[i].call(this);
      }
    }
  }
}

/**
 * @desc MotionCollectorFactory 类
 */
class MotionCollectorFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   */
  static create() {
    let motionCollector = new MotionCollector();
    return motionCollector;
  }
}

MotionCollector.Factory = MotionCollectorFactory;
export default MotionCollector;