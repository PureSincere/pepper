"use strict";

import utils from "../helpers/utils";

/**
 * @desc EventTarget，事件管理器类
 */
class EventListenerCollector {
  constructor() {
    this.eventListeners = Object.create(null);// 每一个成员都是一个数组
    this.mouseInside = false;
  }

  /**
   * @desc 查看事件是否被监听
   * @param {String} type 事件名称
   * @returns {Boolean} 如果事件被监听返回 true，否则返回 false
   */
  hasEventListener(type) {
    if (!utils.isString(type) || type === "") {
      return;
    }
    return utils.hasOwnProperty.call(this.eventListeners, type);
  }

  /**
   * @desc 新增事件监听函数
   * @param {String} type 事件名称
   * @param {Function} eventListener 事件监听函数
   */
  addEventListener(type, eventListener) {
    if (!utils.hasOwnProperty.call(this.eventListeners, type)) {
      this.eventListeners[type] = [];
    }
    this.eventListeners[type].push(eventListener);
  }

  /**
   * @desc 删除事件监听函数
   * @param {String} type 事件名称
   * @param {Function} eventListener 事件监听函数
   */
  removeEventListener(type, eventListener) {
    // 如果 eventListener 不为 Function，则清除当前事件下的全部事件监听函数
    if (!utils.isFunction(eventListener)) {
      if (utils.hasOwnProperty.call(this.eventListeners, type)) {
        this.eventListeners[type] = [];
      }
    }

    let eventListeners = this.eventListeners[type];
    if (utils.isArray(eventListeners)) {
      for (let i = 0, len = eventListeners.length; i < len; i++) {
        if (eventListener[i] === eventListener) {
          eventListeners.splice(i, 1);
          break;
        }
      }
    }
  }

  /**
   * @desc 触发事件监听函数
   * @param {Event} event 事件对象
   */
  notifyEventListeners(event) {
    if (!utils.isObject(event) || !utils.isString(event.type) || event.type === "") {
      return;
    }
    let eventListeners = this.eventListeners[event.type];
    if (utils.isArray(eventListeners)) {
      for (let i = 0, len = eventListeners.length; i < len; i++) {
        eventListeners[i].call(this, event);
      }
    }
  }
}

/**
 * @desc EventListenerCollectorFactory 类
 */
class EventListenerCollectorFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   */
  static create() {
    let eventListenerCollector = new EventListenerCollector();
    return eventListenerCollector
  }
}

EventListenerCollector.Factory = EventListenerCollectorFactory;
export default EventListenerCollector;
