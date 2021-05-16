"use strict";

/**
 * @desc Event 类
 */
class Event {
  /**
   * @desc 构造函数
   * @param {Event} event 客户端 event 事件对象
   * @param {String} type 事件类型名称
   * @param {EventListenerCollector} eventListenerCollector 事件管理器对象
   */
  constructor(event, type, eventListenerCollector) {
    this.event = event;
    this.type = type;
    this.eventListenerCollector = eventListenerCollector;
  }
}

/**
 * @desc EventFactory 类
 */
class EventFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {Event} event 客户端 event 事件对象
   * @param {String} type 事件类型名称
   * @param {EventListenerCollector} eventListenerCollector 事件管理器对象
   * @returns {Event} Event 事件对象
   */
  static create(event, type, eventListenerCollector) {
    return new Event(event, type, eventListenerCollector);
  }
}

Event.Factory = EventFactory;
export default Event;
