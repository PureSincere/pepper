var CanvasFrame =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "create", function() { return /* reexport */ lib; });

// CONCATENATED MODULE: ./lib/helpers/utils.js


const utils_toString = Object.prototype.toString;
const utils_hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 检验数据是否是对象类型
 * 
 * @param {Object} val 用于检验的数据
 * @returns {Boolean} 如果检验的数据类型为对象类型返回 true，否则返回 false
 */
function isObject(val) {
  return val !== null && typeof val === "object";
}

/**
 * 检验数据是否是数组类型
 * 
 * @param {Object} val 用于检验的数据
 * @returns {Boolean} 如果数据是数组类型返回 true，否则返回 false
 */
function isArray(val) {
  return utils_toString.call(val) === "[object Array]";
}

/**
 * 检验数据是否是日期类型
 * 
 * @param {Object} val 用于检验的数据
 * @returns {Boolean} 如果数据是日期类型返回 true，否则返回 false
 */
function isDate(val) {
  return utils_toString.call(val) === "[object Date]";
}

/**
 * 检验数据是否是 Function
 * 
 * @param {Object} val 用于检验的数据
 * @returns {Boolean} 如果数据是 Function 返回 true，否则返回 false
 */
function isFunction(val) {
  return utils_toString.call(val) === "[object Function]";
}

/**
 * 检验数据是否是 HTMLCanvasElement
 * 
 * @param {Object} val 用于检验的数据
 * @returns {Boolean} 如果数据是 HTMLCanvasElement 返回 true，否则返回 false
 */
function isHTMLCanvasElement(val) {
  return utils_toString.call(val) === "[object HTMLCanvasElement]";
}

/**
 * 检验数据类型是否为字符串基本包装类型
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为字符串基本包装类型返回 true，否则返回 false
 */
function isString(val) {
  return typeof val === "string";
}

/**
 * 检验数据类型是否为数值基本包装类型
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为数值基本包装类型返回 true，否则返回 false
 */
function isNumber(val) {
  return typeof val === "number";
}

/**
 * 检验数据类型是否为 undefined
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 undefined 返回 true，否则返回 false
 */
function isUndefined(val) {
  return typeof val === "undefined";
}

/**
 * 检验数据类型是否为 FormData
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 FormData 返回 true，否则返回 false
 */
function isFormData(val) {
  return (typeof FormData !== "undefined") && (val instanceof FormData);
}

/**
 * 检验数据类型是否为 ArrayBuffer
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 ArrayBuffer 返回 true，否则返回 false
 */
function isArrayBuffer(val) {
  return utils_toString.call(val) === "[object ArrayBuffer]";
}

/**
 * 检验数据类型是否为 Buffer
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 Buffer 返回 true，否则返回 false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}

/**
 * 检验数据类型是否为 Stream
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 Stream 返回 true，否则返回 false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * 检验数据类型是否为 File
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 File 返回 true，否则返回 false
 */
function isFile(val) {
  return utils_toString.call(val) === "[object File]";
}

/**
 * 检验数据类型是否为 Blob
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 Blob 返回 true，否则返回 false
 */
function isBlob(val) {
  return utils_toString.call(val) === "[object Blob]";
}

/**
 * 检验数据类型是否为 ArrayBuffer 视图（view），比如类型化数组对象（typed array objects）或者数据视图（ DataView）
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 ArrayBuffer 视图返回 true，否则返回 false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== "undefined") && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * 检验数据类型是否为 URLSearchParams
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 URLSearchParams 返回 true，否则返回 false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}

/**
 * 检验当前环境是否标准的浏览器环境
 * 
 * Serve 允许运行在 web worker 和 react-native 环境，这两个环境都支持 XMLHttpRequest，但不是标准的浏览器环境
 * 
 * web workers：
 * typeof window -> undefined
 * typeof document -> undefined
 * 
 * react-native:
 *  navigator.product -> "ReactNative"
 * nativescript
 *  navigator.product -> "NativeScript" or "NS"
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false
  }
  return (
    typeof window !== "undefined" && typeof document !== "undefined"
  );
}

/**
 * @desc 用于判断数据是否为空，Undefined String Array Object
 * @param {*} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据为空返回 true，否则返回 false
 * **/
function isEmpty(param) {
  let call = Object.prototype.toString.call(param);
  if (call === '[object Undefined]') {
    return true;
  } else if (call === '[object String]' || call === '[object Array]') {
    return param.length == 0 ? true : false;
  } else if (call === '[object Object]') {
    return JSON.stringify(param) == '{}' ? true : false;
  } else {
    return true;
  }
}

/**
 * 指定一个函数绑定指定的上下文，返回绑定指定的上下文后的函数
 * 
 * @param {Function} fn 绑定的函数
 * @param {*} thisArg 上下文
 * @returns {Function} 绑定指定的上下文后的函数
 */
function bind(fn, thisArg) {
  return function wrap() {
    let args = new Array(arguments.length);
    for (let i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  }
}

/**
 * 柯里化（Currying），又译为卡瑞化或加里化，是把接收多个参数的函数变换成接收一个部分参数的函数，并返回接收剩余的参数而且返回结果的新函数的技术。也可以理解为提前配置预定参数，返回一个新的函数只需传入除了预定参数以外的参数。
 * 
 * curry(fn, ...arg) // 写法一
 * curry(fn)(...arg) // 写法二
 * 
 * @param {...Function} fn
 * @returns {Function} 返回一个柯里化后的函数 
 */
function curry(fn) {
  let args = Array.prototype.slice.call(arguments, 1);
  return function wrap() {
    let innerArgs = Array.prototype.slice.call(arguments);
    let finalArgs = args.concat(innerArgs);
    // 单参数 fn
    if (args.length === 0) {
      switch (finalArgs.length) {
        case 0: return fn;
        case 1: return curry.apply(this, [fn].concat(finalArgs));
        default: return fn.apply(this, finalArgs);
      }
    }
    // 多参数 fn, arg1, arg2, ..., argN
    return fn.apply(this, finalArgs);
  }
}

/**
  * 指定一个函数绑定指定的上下文并进行柯里化，返回绑定指定的上下文并柯里化后的函数
  * 
  * @param {Function} fn 绑定的函数
  * @param {*} thisArg 上下文
  * @returns {Function} 绑定指定的上下文并柯里化后的函数
  */
function bindCurry(fn, context) {
  let args = Array.prototype.slice.call(arguments, 2);
  return function wrap() {
    let innerArgs = Array.prototype.slice.call(arguments);
    let finalArgs = args.concat(innerArgs);
    return fn.apply(context, finalArgs);
  }
}

/**
 * @desc 函数组合，组合后返回的函数可以使多个函数按从右向左顺序调用，上一个函数执行完的结果被下一个执行函数作为入参调用
 * @param {...Function} fn 需要组合的函数
 * @returns {Function} 组合后的函数
 */
function compose(/* fn1, fn2, fn3, ... */) {
  let args = Array.prototype.slice.call(arguments);
  return function composeFn() {
    // 动态规划
    let result = [];
    for (let i = 0; i < args.length; ++i) {
      result[i] = null;
    }
    if (args.length === 0) {
      return null;
    }
    result[result.length - 1] = args[args.length - 1].apply(null, Array.prototype.slice.call(arguments));
    for (let i = args.length - 2; i >= 0; i--) {
      result[i] = args[i].call(null, result[i + 1]);
    }
    return result[0];
  }
};

/**
 * @desc 调试函数组合，用于在组合后的函数的执行过程中某个函数的执行的结果的打印
 * @param {String} tag 输出结果的标题
 * @returns {any} 输入结果原封不动输出 
 */
const trace = curry(function (tag, x) {
  return x;
});

/**
  * 针对高频事件，防抖就是将多个触发间隔接近的事件函数执行，合并成一次函数执行。
  * 
  * 实现防抖的关键点主要有两个：
  *   使用 setTimeout 延时器，传入的延迟时间，将绑定函数延迟执行，并且通过函数触发频率与延迟时间值的比较，控制处理函数是否执行；
  *   使用柯里化函数结合闭包的思想，将执行状态保存在闭包中，返回新函数，在新函数中通过执行状态控制是否在滚动时执行处理函数；
  * 
  * 防抖技术仅靠传入延迟时间值的大小控制高频事件的触发频率，如果传入的延迟时间值比较大，那么就会出现一定的问题。例如当传入延迟时间为 1000ms，那么当用户滚动速度大于 1000ms/次 时，则无论鼠标滚动多久都不会触发事件处理函数。因此防抖技术存在一定的缺陷，会不适用于某些场景，例如图片懒加载。这个时候节流就派上用场了。
  * 
  * @param {Function} fn 绑定的函数
  * @param {Number} delay 延迟时间
  * @param {Boolean} isImmediate 是否立即执行，其后在间隔时间触发都会失效，最后一次触发与上一次触发事件的间隔的时间大于延迟时间才能再次触发
  * @returns {Function} 绑定柯里化用于防抖的函数
  */
function debounce(fn, delay, isImmediate) {
  let timer;

  return function wrap() {
    let args = Array.prototype.slice.call(arguments), context = this;

    if (timer) {
      clearTimeout(timer);
    }

    let delayFn = function delayFn() {
      timer = null;
      if (!isImmediate) {
        fn.apply(context, args);
      }
    }

    let callNow = !timer && isImmediate;

    timer = setTimeout(delayFn, delay);
    if (callNow) {
      fn.apply(context, args);
    }
  }
}

/**
 * @desc 函数节流
 * 节流也是将多个触发间隔接近的事件函数执行，合并成一次函数执行，并且在指定的时间内至少执行一次事件处理函数。节流实现原理跟防抖技术类似，但是比防抖多了一次函数执行判断，实现的关键点是：利用闭包存储了当前和上一次执行的时间戳，通过两次函数执行的时间差跟指定的延迟时间的比较，控制函数是否立刻执行。
 * 
 * @param {Function} fn 函数
 * @param {Number} wait 延迟执行毫秒数
 * @return {Function} 绑定柯里化用于节流的函数
 */
function throttle(fn, wait) {
  let timer, previous, now, diff;
  return function () {
    let
      args = Array.prototype.slice.call(arguments),
      context = this;

    now = Date.now();

    let delayFn = function () {
      previous = Date.now();
      timer = null;
      fn.apply(context, args);
    }

    clearTimeout(timer);

    if (previous !== undefined) {
      diff = now - previous;
      if (diff >= wait) {
        fn.apply(context, args);
        previous = now;
      } else {
        timer = setTimeout(fn, wait);
      }
    } else {
      delayFn();
    }
  }
}

/**
 * 清除字符串起始和结尾的空白字符
 * 
 * @param {String} str 需要清除起始和结尾空白字符的字符串
 * @returns {String} 清除起始和结尾空白字符后的字符串
 */
function trim(str) {
  return str.replace(/^\s*/, "").replace(/\s*$/, "");
}

/**
 * 遍历一个数组或者对象的每一个成员用于被一个函数调用
 *
 * 如果 obj 是一个数组，回调函数将会给每个回调函数传递实参 value，index 和 完整的数组 array。
 * 
 * 如果 obj 是一个对象，回调函数将会给每个回调函数传递实参 value，key 和 完整的对象 object。
 * 
 * @param {Object|Array} obj 用于遍历的对象
 * @param {Function} fn 遍历的对象的每个成员进行调用的回调函数
 */
function forEach(obj, fn) {
  // 如果数据为 null 或者是 undefined 则 return
  if (obj === null || typeof obj === "undefined") {
    return;
  }

  // 如果数据非引用对象，为基本包装类型则强制转换为数组
  if (typeof obj !== "object") {
    obj = [obj];
  }

  if (isArray(obj)) {
    // 遍历数组类型
    for (let i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // 遍历对象类型
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * 浅度合并对象，合并对象属性包括对象内的属性为对象的属性，返回一个新的对象，会引用原对象的引用地址，后面的实参会覆盖前面的实参的属性。
 */
function merge(/* obj1, obj2, obj3, ... */) {
  let result = {};
  function assignValue(val, key) {
    if (isArray(val)) {
      result[key] = [].concat(val);
    } else if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * 深度合并对象，合并对象属性包括对象内的属性为对象的属性，返回一个新的对象，不会引用原对象的引用地址，后面的实参会覆盖前面的实参的属性。
 * 
 * @see merge
 * @param {Object} obj1 用于合并的对象
 * @returns {Object} 合并全部对象属性后返回的新的对象
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  let result = {};
  function assignValue(val, key) {
    if (isArray(val)) {
      result[key] = JSON.parse(JSON.stringify(val));
    } else if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === "object") {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * 类似于浅拷贝，把源头对象属性拓展到另一个对象，会覆盖原有对象同名属性的属性值，例如 b -> a
 * 
 * @param {Object} a 扩展的对象
 * @param {Object} b 拓展的源头对象
 * @param {Object} thisArg 拓展的源头对象拓展的新函数的绑定的上下文
 * @returns {Object} 拓展后的对象
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * @desc 获取数据集合最大的数据值
 * @param {Array} data 数据集合
 * @returns {Number} 数据集合最大的数据值
 */
function getMaxDatum(data) {
  let result;
  forEach(data, d => {
    if (isUndefined(result)) {
      result = d;
    } else if (d > result) {
      result = d;
    }
  });
  return result;
}

/**
 * @desc 获取大于或者等于数据值的最大值
 * @param {Number} datum 数据值
 * @returns {Number}
 */
function getCeilDatum(datum) {
  if (datum < 10) {
    return 10;
  }
  let result = datum;
  result = (+(result + "")[0] + 1) * Math.pow(10, (result + "").length - 1);
  return result;
}

/**
 * @desc 获取分割后的数据集合
 * @param {Array<Number>} data 需要分割的数据集合
 * @param {Number} splitNumber 需要分割数
 * @returns {Array<Number>} 分割后的数据集合
 */
function getSplitData(data, splitNumber) {
  let result = [];
  let splitValue = this.getCeilDatum(this.getMaxDatum(data)) / splitNumber;
  for (let i = 1; i <= splitNumber; i++) {
    result.push(splitValue * i);
  }
  return result;
}

/* harmony default export */ var utils = ({
  toString: utils_toString,
  hasOwnProperty: utils_hasOwnProperty,
  isObject,
  isArray,
  isDate,
  isFunction,
  isHTMLCanvasElement,
  isString,
  isNumber,
  isUndefined,
  isFormData,
  isArrayBuffer,
  isBuffer,
  isStream,
  isFile,
  isBlob,
  isArrayBufferView,
  isURLSearchParams,
  isStandardBrowserEnv,
  isEmpty,
  bind,
  curry,
  bindCurry,
  compose,
  trace,
  debounce,
  throttle,
  trim,
  merge,
  deepMerge,
  extend,
  forEach,
  getMaxDatum,
  getCeilDatum,
  getSplitData
});
// CONCATENATED MODULE: ./lib/helpers/createError.js


/**
 * 更新一个 Error 错误对象
 *
 * @param {Error} error 需要更新的 Error 错误对象
 * @returns {Error} 更新后的新的 Error 错误对象
 */
function enhanceError(error) {
  error.toJSON = function () {
    return {
      // 标准
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // canvas-frame
    };
  };
  return error;
};

/**
 * 创建一个 Error 错误对象
 *
 * @param {String} message 错误信息字符串
 * @returns {Error} Error 错误对象
 */
function createError(message) {
  let error = new Error(message);
  return enhanceError(error);
};


// CONCATENATED MODULE: ./lib/point/Point.js





class Point {
  /**
   * @desc 构造函数
   * @param {Number} x 坐标轴的坐标值
   * @param {Number} y 坐标轴的坐标值
   */
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
}

class Point_PointFactory {
  /**
   * 构造函数
   */
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {Number} x 坐标轴的坐标值
   * @param {Number} y 坐标轴的坐标值
   */
  static create(x, y) {
    if (!(utils.isNumber(x) && utils.isNumber(y))) {
      let error = createError("x and y should be number");
      console.error(error);
      return error;
    }
    let point = new Point(x, y);
    return point;
  }
}

Point.Factory = Point_PointFactory;
/* harmony default export */ var point_Point = (Point);

// CONCATENATED MODULE: ./lib/event/Event.js


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
/* harmony default export */ var event_Event = (Event);

// CONCATENATED MODULE: ./lib/chart/defaults.js


const defaults = {
  config: {
    type: "bar",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    fontSize: 12,
    fontFamily: "sans-serif",
    font: "12px sans-serif",
    strokeStyle: "#000000",
    fillStyle: "#000000",
    lineWidth: 1,
    textAlign: "right",
    zIndex: 0,
    lineDash: false,
    animationDurationTime: 600,
    bar: {
      barWidth: 0.618,//黄金分割比例近似值
      fillStyle: "rgb(64, 158, 255)",
      textAlign: "center",
      textToBarSpace: 6,
      emphasis: {
        fillStyle: "rgb(102, 177, 255)"
      },
      zIndex: -1,
    },
    line: {
      radius: 3
    },
    grid: {
      strokeStyle: "#cccccc",
      zIndex: -2,
    },
    xAxis: {
      data: [],
      label: {
        toAxisSpace: 6,
        splitNumber: 0,
        position: "block-middle",//left,middle,right,block-middle
        pointSize: 6
      }
    },
    yAxis: {
      data: [],
      label: {
        toAxisSpace: 6,
        splitNumber: 5,
        position: "middle",//top,middle,bottom,block-middle
        pointSize: 6
      }
    }
  }
}

// Object.defineProperty(defaults.config, "font", {
//   get() {
//     return `${this.fontSize}px ${this.fontFamily}`;
//   }
// });

/* harmony default export */ var chart_defaults = (defaults);

// CONCATENATED MODULE: ./lib/chart/mergeConfig.js




/**
 * @desc 合并配置文件
 * @param {Object} config1,config2,config3,... 各个配置文件，后置配置文件会覆盖前置的配置文件
 * @returns {Object} 合并后的配置文件
 */
const mergeConfig = (config1, config2) => {
  let config = {};

  let
    valueFromConfig2Keys = [
      "data",
      "top",
      "right",
      "bottom",
      "left",
      "width",
      "height"
    ],
    componentsKeys = [
      "xAxis",
      "yAxis",
      "grid",
      "bar",
      "line"
    ],
    commonKeys = [
      "fontSize",
      "fontFamily",
      "font",
      "strokeStyle",
      "fillStyle",
      "lineWidth",
      "textAlign",
      "zIndex",
      "lineDash",
      "animationDurationTime"
    ];

  // merge valueFromConfig2Keys
  utils.forEach(valueFromConfig2Keys, prop => {
    if (typeof config2[prop] !== "undefined") {
      config[prop] = config2[prop];
    }
  });

  // merge commonKeys
  utils.forEach(commonKeys, prop => {
    if (typeof config2[prop] !== "undefined") {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== "undefined") {
      config[prop] = config1[prop];
    }
  });

  // merge componentsKeys
  utils.forEach(componentsKeys, prop => {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== "undefined") {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== "undefined") {
      config[prop] = config1[prop];
    }

    utils.forEach(commonKeys, p => {
      if (typeof config[prop][p] === "undefined") {
        config[prop][p] = config[p];
      }
    });
  });

  let chartKeys = commonKeys
    .concat(valueFromConfig2Keys)
    .concat(componentsKeys);

  let otherKeys = Object.keys(config2).filter(key => {
    return chartKeys.indexOf(key) === -1;
  });

  // merge otherKeys
  utils.forEach(otherKeys, prop => {
    if (typeof config2[prop] !== "undefined") {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== "undefined") {
      config[prop] = config1[prop];
    }
  });

  // Object.defineProperty(config, "font", {
  //   get() {
  //     return `${this.fontSize}px ${this.fontFamily}`;
  //   }
  // });

  return config;
};

/* harmony default export */ var chart_mergeConfig = (mergeConfig);

// CONCATENATED MODULE: ./lib/event/EventListenerCollector.js




/**
 * @desc EventTarget，事件管理器类
 */
class EventListenerCollector_EventListenerCollector {
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
    let eventListenerCollector = new EventListenerCollector_EventListenerCollector();
    return eventListenerCollector
  }
}

EventListenerCollector_EventListenerCollector.Factory = EventListenerCollectorFactory;
/* harmony default export */ var event_EventListenerCollector = (EventListenerCollector_EventListenerCollector);

// CONCATENATED MODULE: ./lib/motion/MotionCollector.js





/**
 * @desc MotionCollector，行为容器类
 */
class MotionCollector_MotionCollector extends event_EventListenerCollector {
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
    let motionCollector = new MotionCollector_MotionCollector();
    return motionCollector;
  }
}

MotionCollector_MotionCollector.Factory = MotionCollectorFactory;
/* harmony default export */ var motion_MotionCollector = (MotionCollector_MotionCollector);
// CONCATENATED MODULE: ./lib/chart/Chart.js





let id = 0;

/**
 * @desc Chart，图形类
 * @param {ChartCollector} chartCollector 对象
 */
class Chart_Chart extends motion_MotionCollector {
  /**
   * @desc 构造函数
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   */
  constructor(chartCollector, config) {
    super();
    this.id = id++;
    this.mouseInside = false;
    this.config = config;

    if (chartCollector) {
      // this.chartCollector = chartCollector;
      chartCollector.addChart(this);

      Object.defineProperties(this, {
        "canvas": {
          get() {
            return this.chartCollector.canvas;
          }
        },
        "context": {
          get() {
            return this.chartCollector.context;
          }
        }
      });
    }
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   */
  update(config) {
    this.config = config;
    this.motions = [];
  }

  /**
  * @desc 触发行为
  */
  notifyMotions() {
    super.notifyMotions();
  }

  /**
   * @desc 绘制图形对象
   */
  draw(subDraw) {
    this.context.save();
    this.setContextStyle();
    if (utils.isFunction(subDraw)) {
      subDraw();
    }
    this.context.restore();
  }

  /**
   * @desc 绘图上下文样式设置
   */
  setContextStyle() {
    let valueFromConfigKeys = [
      "font",
      "strokeStyle",
      "fillStyle",
      "lineWidth",
      "textAlign"
    ];

    utils.forEach(valueFromConfigKeys, prop => {
      if (typeof this.config[prop] !== "undefined") {
        this.context[prop] = this.config[prop];
      }
    });
  }

  /**
   * @desc 新增事件监听函数
   * @param {String} type 事件名称
   * @param {Function} eventListener 事件监听函数
   */
  addEventListener(type, eventListener) {
    super.addEventListener(type, eventListener);
    this.chartCollector.addEventChart(type, this);
    return this;
  }

  /**
   * @desc 删除事件监听函数
   * @param {String} type 事件名称
   * @param {Function} eventListener 事件监听函数
   */
  removeEventListener(type, eventListener) {
    super.removeEventListener(type, eventListener);
    // 如果 eventListener 不为 Function，则清除当前事件下的全部事件监听函数
    if (!utils.isFunction(eventListener)) {
      if (utils.hasOwnProperty.call(chartCollector.eventCharts, type)) {
        this.chartCollector.removeEventChart(type, this);
      }
    }

    let eventListeners = this.eventListeners[type];
    if (utils.isArray(eventListeners)) {
      if (eventListeners.length === 0) {
        this.chartCollector.removeEventChart(type, this);
      }
    }
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的 zIndex 的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的 zIndex 小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareZIndex(chart) {
    return !utils.isNumber(chart.config.zIndex) ?
      null :
      this.config.zIndex < chart.config.zIndex ?
        -1 :
        this.config.zIndex > chart.config.zIndex ?
          1 :
          this.config.zIndex === chart.config.zIndex ?
            0 :
            null;
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的最小 x 坐标轴坐标值的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的最小 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareMinX(chart) {
    return !utils.isNumber(chart.minX) ?
      null :
      this.minX < chart.minX ?
        -1 :
        this.minX > chart.minX ?
          1 :
          this.minX === chart.minX ?
            0 :
            null;
  }

  /**
   * @desc 比对当前图形对象的最小 x 坐标轴坐标值与指定坐标对象的 x 坐标轴坐标值的大小
   * @param {Object} point 坐标对象
   * @returns {Number, NULL} 如果当前图形对象的最小 x 坐标轴坐标值比指定坐标对象的 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  comparePointX(point) {
    return !utils.isNumber(point.x) ?
      null :
      this.minX < point.x ?
        -1 :
        this.minX > point.x ?
          1 :
          this.minX === point.x ?
            0 :
            null;
  }

  // /**
  //  * @desc 比对当前图形对象与指定图形对象
  //  * @param {Chart} chart 图形对象
  //  * @returns {NULL}
  //  */
  // compareMinX(chart) {
  //   return null;
  // }

  // /**
  //  * @desc 比对当前图形对象与指定坐标对象
  //  * @param {Point} point 坐标对象
  //  * @returns {NULL}
  //  */
  // comparePointX(point) {
  //   return null;
  // }

  /**
   * @desc 查找当前图形对象内部是否包含指定坐标对象表示的点
   * @param {Point} point 坐标对象
   * @returns {Boolean} 如果当前图形对象内部包含指定坐标对象表示的点返回 true，否则返回 false
   */
  hasPoint(point) {
    return false;
  }
}

/**
 * @desc ChartFactory
 */
class ChartFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   */
  static create(chartCollector, config) {
    let chart = new Chart_Chart(chartCollector, config);
    return chart;
  }
}

Chart_Chart.Factory = ChartFactory;
/* harmony default export */ var chart_Chart = (Chart_Chart);

// CONCATENATED MODULE: ./lib/helpers/tween.js

/**
 * @desc Tween 缓动函数对象
 * 
 * 每个缓动函数的参数使用介绍：
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
 * 返回每一次执行后的变化量
 */
const Tween = {
  /**
   * @desc Linear 函数
   * @param {Number} t current time（当前时间）
   * @param {Number} b beginning value（初始值）
   * @param {Number} c change in value（变化量）
   * @param {Number} d duration（持续时间）
   * @returns {Number} 返回每一次执行后的变化量
   */
  Linear: function (t, b, c, d) {
    return c * t / d + b;
  },
  Quad: {
    easeIn: function (t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOut: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  },
  Cubic: {
    easeIn: function (t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },
    easeOut: function (t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOut: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  },
  Quart: {
    easeIn: function (t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    },
    easeOut: function (t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOut: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  },
  Quint: {
    easeIn: function (t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    easeOut: function (t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOut: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
  },
  Sine: {
    easeIn: function (t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOut: function (t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOut: function (t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
  },
  Expo: {
    easeIn: function (t, b, c, d) {
      return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOut: function (t, b, c, d) {
      return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOut: function (t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  },
  Circ: {
    easeIn: function (t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOut: function (t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOut: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
  },
  Elastic: {
    easeIn: function (t, b, c, d, a, p) {
      var s;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (typeof p == "undefined") p = d * .3;
      if (!a || a < Math.abs(c)) {
        s = p / 4;
        a = c;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOut: function (t, b, c, d, a, p) {
      var s;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (typeof p == "undefined") p = d * .3;
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
    },
    easeInOut: function (t, b, c, d, a, p) {
      var s;
      if (t == 0) return b;
      if ((t /= d / 2) == 2) return b + c;
      if (typeof p == "undefined") p = d * (.3 * 1.5);
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    }
  },
  Back: {
    easeIn: function (t, b, c, d, s) {
      if (typeof s == "undefined") s = 1.70158;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOut: function (t, b, c, d, s) {
      if (typeof s == "undefined") s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOut: function (t, b, c, d, s) {
      if (typeof s == "undefined") s = 1.70158;
      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
      return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }
  },
  Bounce: {
    easeIn: function (t, b, c, d) {
      return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
    },
    easeOut: function (t, b, c, d) {
      if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
      } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
      } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
      } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
      }
    },
    easeInOut: function (t, b, c, d) {
      if (t < d / 2) {
        return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
      } else {
        return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
      }
    }
  }
};

/* harmony default export */ var tween = (Tween);

// CONCATENATED MODULE: ./lib/chart/basics/Line.js






/**
 * @desc Line，直线图形
 */
class Line_Line extends chart_Chart {
  /**
   * @desc Line 构造函数
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {Number} x1 直线起始点 x 坐标轴的坐标值
   * @param {Number} y1 直线起始点 y 坐标轴的坐标值
   * @param {Number} x2 直线结束点 x 坐标轴的坐标值
   * @param {Number} y2 直线结束点 y 坐标轴的坐标值
   */
  constructor(chartCollector, config, x1, y1, x2, y2) {
    super(chartCollector, config);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.minX = this.x1 >= this.x2 ? this.x2 : this.x1;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   * @param {Number} x1 直线起始点 x 坐标轴的坐标值
   * @param {Number} y1 直线起始点 y 坐标轴的坐标值
   * @param {Number} x2 直线结束点 x 坐标轴的坐标值
   * @param {Number} y2 直线结束点 y 坐标轴的坐标值
   */
  update(config, x1, y1, x2, y2, callBack, animationHook) {
    super.update(config);

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      eArgs = { x1, y1, x2, y2 },
      sArgs = {
        x1: this.x1,
        y1: this.y1,
        x2: this.x2,
        y2: this.y2
      };
    this.addMotion(function fn() {
      let loopNumber = 0;

      // x1, y1, x2, y2
      utils.forEach(["x1", "y1", "x2", "y2"], prop => {
        if (utils.isUndefined(this[prop])) {
          this[prop] = args[prop];
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[prop] = tween.Linear(s, sArgs[prop], eArgs[prop] - sArgs[prop], e);

        if (s < e) {
          loopNumber++;
        }
      });

      this.minX = this.x1 >= this.x2 ? this.x2 : this.x1;//当前图形区域的最小 x 轴坐标值

      if (utils.isFunction(animationHook)) {
        animationHook({
          x1: this.x1,
          y1: this.y1,
          x2: this.x2,
          y2: this.y2,
        });
      }

      if (loopNumber === 0) {
        this.removeMotion(fn);
        callBack && callBack();
      }
    });


  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    super.draw(() => {
      let { lineDash } = this.config;
      lineDash && this.context.setLineDash([5, 10]);
      this.context.beginPath();
      this.context.moveTo(this.x1, this.y1);
      this.context.lineTo(this.x2, this.y2);
      this.context.closePath();
      this.context.stroke();

      lineDash && this.context.setLineDash([]);
    });
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的最小 x 坐标轴坐标值的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的最小 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareMinX(chart) {
    return super.compareMinX(chart);
  }

  /**
   * @desc 比对当前图形对象的最小 x 坐标轴坐标值与指定坐标对象的 x 坐标轴坐标值的大小
   * @param {Object} point 坐标对象
   * @returns {Number, NULL} 如果当前图形对象的最小 x 坐标轴坐标值比指定坐标对象的 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  comparePointX(point) {
    return super.comparePointX(point);
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
    let isPointIn = false;
    this.context.save();
    this.setContextStyle();
    this.context.beginPath();
    this.context.lineWidth = 12;
    this.context.moveTo(this.x1, this.y1);
    this.context.lineTo(this.x2, this.y2);
    if (this.context.isPointInStroke(point.x, point.y)) {
      isPointIn = true;
    }
    this.context.closePath();
    this.context.restore();
    return isPointIn;
  }
}

/**
 * @desc LineFactory
 */
class LineFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {Number} x1 直线起始点 x 坐标轴的坐标值
   * @param {Number} y1 直线起始点 y 坐标轴的坐标值
   * @param {Number} x2 直线结束点 x 坐标轴的坐标值
   * @param {Number} y2 直线结束点 y 坐标轴的坐标值
   * @returns {Line} 直线图形对象
   */
  static create(chartCollector, config, x1, y1, x2, y2) {
    let line = new Line_Line(chartCollector, config, x1, y1, x2, y2);
    return line;
  }
}

Line_Line.Factory = LineFactory;
/* harmony default export */ var basics_Line = (Line_Line);

// CONCATENATED MODULE: ./lib/chart/components/axis/Axis.js





/**
 * @desc Axis，坐标轴类
 */
class Axis_Axis extends chart_Chart {
  /**
   * @desc 构造函数
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
    this.minX = this.left;//当前图形区域的最小 x 轴坐标值

    // data
    let { data } = this.config;
    this.data = data;
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
    this.minX = this.left;//当前图形区域的最小 x 轴坐标值

    // data
    let { data } = this.config;
    this.data = data;
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
 * @desc AxisFactory
 */
class AxisFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @returns {Axis} 坐标轴对象
   */
  static create(chartCollector, config) {
    let Axis = new Axis(chartCollector, config);
    return Axis;
  }
}

Axis_Axis.Factory = AxisFactory;
/* harmony default export */ var axis_Axis = (Axis_Axis);

// CONCATENATED MODULE: ./lib/chart/basics/Text.js






/**
 * @desc Text，文本图形
 */
class Text_Text extends chart_Chart {
  /**
   * @desc Text 构造函数
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {String} text 文本
   * @param {Number} x 文本起始点 x 坐标轴的坐标值
   * @param {Number} y 文本起始点 y 坐标轴的坐标值
   */
  constructor(chartCollector, config, text, x, y) {
    super(chartCollector, config);

    // text, x, y
    this.text = text;
    this.x = x;
    this.y = y;

    this.computeBaseProp();
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   * @param {String} text 文本
   * @param {Number} x 文本起始点 x 坐标轴的坐标值
   * @param {Number} y 文本起始点 y 坐标轴的坐标值
   */
  update(config, text, x, y, callBack) {
    super.update(config);

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      eArgs = { text, x, y },
      sArgs = {
        text: this.text,
        x: this.x,
        y: this.y
      };

    this.addMotion(function fn() {
      let loopNumber = 0;

      // text, x, y
      utils.forEach(["text", "x", "y"], prop => {
        if (utils.isUndefined(this[prop])) {
          this[prop] = args[prop];
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[prop] = Math.floor(tween.Linear(s, sArgs[prop], eArgs[prop] - sArgs[prop], e));

        if (s < e) {
          loopNumber++;
        }
      });

      this.computeBaseProp();

      if (loopNumber === 0) {
        this.removeMotion(fn);
        callBack && callBack();
      }
    });
  }

  /**
   * @desc 计算基础属性
   */
  computeBaseProp() {
    // top, right, bottom, left, width, height
    this.width = this.context.measureText(this.text).width;
    this.height = this.config.fontSize;
    switch (this.config.textAlign) {
      case "start":
      case "left":
        this.top = this.y - this.height;
        this.right = this.canvas.width - this.x + this.width;
        this.bottom = this.canvas.height - this.y;
        this.left = this.x;
        break;
      case "end":
      case "right":
        this.top = this.y - this.height;
        this.right = this.canvas.width - this.x - this.width;
        this.bottom = this.canvas.height - this.y;
        this.left = this.x - this.width;
        break;
      case "center":
        this.top = this.y - this.height;
        this.right = this.canvas.width - this.x - this.width / 2;
        this.bottom = this.canvas.height - this.y;
        this.left = this.x - this.width / 2;
        break;
    }

    // minX
    this.minX = this.left;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    super.draw(() => {
      this.context.fillText(this.text, this.x, this.y);
    });
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的最小 x 坐标轴坐标值的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的最小 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareMinX(chart) {
    return super.compareMinX(chart);
  }

  /**
   * @desc 比对当前图形对象的最小 x 坐标轴坐标值与指定坐标对象的 x 坐标轴坐标值的大小
   * @param {Object} point 坐标对象
   * @returns {Number, NULL} 如果当前图形对象的最小 x 坐标轴坐标值比指定坐标对象的 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  comparePointX(point) {
    return super.comparePointX(point);
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
 * @desc TextFactory
 */
class TextFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {String} text 文本
   * @param {Number} x 文本起始点 x 坐标轴的坐标值
   * @param {Number} y 文本起始点 y 坐标轴的坐标值
   * @returns {Text} 文本图形对象
   */
  static create(chartCollector, config, text, x, y) {
    return new Text_Text(chartCollector, config, text, x, y);
  }
}

Text_Text.Factory = TextFactory;
/* harmony default export */ var basics_Text = (Text_Text);

// CONCATENATED MODULE: ./lib/chart/components/axis/XAxis.js








/**
 * @desc XAxis，x 坐标轴类
 */
class XAxis_XAxis extends axis_Axis {
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
    this.axisChart = basics_Line.Factory.create(chartCollector, this.config, x1, y1, x2, y2);

    // splitWidth
    let splitNumber = this.data.length;
    this.splitWidth = this.width / splitNumber;

    // labelPoints, labelPointCharts
    let { label: { pointSize } } = this.config;
    this.labelPoints = this.getLabelPoints();
    this.labelPointCharts = [];
    utils.forEach(this.labelPoints, p => {
      this.labelPointCharts.push(
        basics_Line.Factory.create(
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
        basics_Text.Factory.create(
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
        this.labelPointCharts[i] = basics_Line.Factory.create(
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
        this.labelTextCharts[i] = basics_Text.Factory.create(
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
      point = point_Point.Factory.create(x, y);
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
    let xAxis = new XAxis_XAxis(chartCollector, config);
    return xAxis;
  }
}

XAxis_XAxis.Factory = XAxisFactory;
/* harmony default export */ var axis_XAxis = (XAxis_XAxis);

// CONCATENATED MODULE: ./lib/chart/components/axis/YAxis.js








/**
 * @desc YAxis，y 坐标轴类
 */
class YAxis_YAxis extends axis_Axis {
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
    this.axisChart = basics_Line.Factory.create(chartCollector, this.config, x1, y1, x2, y2);

    // splitHeight
    this.splitHeight = this.height / splitNumber;

    // labelPoints, labelPointCharts
    this.labelPoints = this.getLabelPoints();
    this.labelPointCharts = [];
    utils.forEach(this.labelPoints, p => {
      this.labelPointCharts.push(
        basics_Line.Factory.create(
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
        basics_Text.Factory.create(
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
      point = point_Point.Factory.create(x, y);
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
    let yAxis = new YAxis_YAxis(chartCollector, config);
    return yAxis;
  }
}

YAxis_YAxis.Factory = YAxisFactory;
/* harmony default export */ var axis_YAxis = (YAxis_YAxis);

// CONCATENATED MODULE: ./lib/chart/components/grid/Grid.js










/**
 * @desc Grid，网格类
 */
class Grid_Grid extends chart_Chart {
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
    this.xAxisChart = axis_XAxis.Factory.create(chartCollector, chart_mergeConfig(this.config, {
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
    this.yAxisChart = axis_YAxis.Factory.create(chartCollector, chart_mergeConfig(this.config, {
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
        basics_Line.Factory.create(
          chartCollector,
          utils.deepMerge(this.config.grid, this.config.grid.zIndex === chart_defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
          p.x,
          p.y,
          p.x,
          p.y,
        )
      );
      this.xAxisGridlineCharts[this.xAxisGridlineCharts.length - 1].update(
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === chart_defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
        p.x,
        p.y,
        p.x,
        this.top
      );
    });
    this.yAxisGridlineCharts = [];
    utils.forEach(this.yAxisChart.getLabelPoints(), p => {
      this.yAxisGridlineCharts.push(
        basics_Line.Factory.create(
          chartCollector,
          utils.deepMerge(this.config.grid, this.config.grid.zIndex === chart_defaults.config.grid.zIndex && { zIndex: this.config.yAxis.zIndex - 2 }),
          p.x,
          p.y,
          p.x,
          p.y
        )
      );
      this.yAxisGridlineCharts[this.yAxisGridlineCharts.length - 1].update(
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === chart_defaults.config.grid.zIndex && { zIndex: this.config.yAxis.zIndex - 2 }),
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
    this.xAxisChart.update(chart_mergeConfig(this.config, {
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
    this.yAxisChart.update(chart_mergeConfig(this.config, {
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
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === chart_defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
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
        this.xAxisGridlineCharts[i] = basics_Line.Factory.create(
          this.chartCollector,
          utils.deepMerge(this.config.grid, this.config.grid.zIndex === chart_defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
          xAxisLabelPoint[xAxisLabelPoint.length - 1].x,
          xAxisLabelPoint[xAxisLabelPoint.length - 1].y,
          xAxisLabelPoint[xAxisLabelPoint.length - 1].x,
          this.top,
        );
      }
      this.xAxisGridlineCharts[i].update(
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === chart_defaults.config.grid.zIndex && { zIndex: this.config.xAxis.zIndex - 2 }),
        p.x,
        p.y,
        p.x,
        this.top
      )
    });

    utils.forEach(this.yAxisChart.getLabelPoints(), (p, i) => {
      this.yAxisGridlineCharts[i].update(
        utils.deepMerge(this.config.grid, this.config.grid.zIndex === chart_defaults.config.grid.zIndex && { zIndex: this.config.yAxis.zIndex - 2 }),
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
    let grid = new Grid_Grid(chartCollector, config);
    return grid;
  }
}

Grid_Grid.Factory = GridFactory;
/* harmony default export */ var grid_Grid = (Grid_Grid);

// CONCATENATED MODULE: ./lib/chart/basics/Rectangle.js






/**
 * @desc Rectangle，矩形
 */
class Rectangle_Rectangle extends chart_Chart {
  /**
   * @desc Rectangle 构造函数
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {Number} x1 矩形左上角的 x 坐标。
   * @param {Number} y1 矩形左上角的 y 坐标。
   * @param {Number} x2 矩形右下角的 x 坐标。
   * @param {Number} y2 矩形右下角的 y 坐标。
   */
  constructor(chartCollector, config, x1, y1, x2, y2) {
    super(chartCollector, config);

    // x1, y1, x2, y2
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    // top, right, bottom, left
    this.top = this.y1;
    this.right = this.canvas.width - this.x2;
    this.bottom = this.canvas.height - this.y2;
    this.left = this.x1;

    // minX
    this.minX = this.left;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   * @param {Number} x1 矩形左上角的 x 坐标。
   * @param {Number} y1 矩形左上角的 y 坐标。
   * @param {Number} x2 矩形左下角的 x 坐标。
   * @param {Number} y2 矩形左下角的 y 坐标。
   */
  update(config, x1, y1, x2, y2, callBack) {
    super.update(config);

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      eArgs = { x1, y1, x2, y2 },
      sArgs = {
        x1: this.x1,
        y1: this.y1,
        x2: this.x2,
        y2: this.y2
      }
    this.addMotion(function fn() {
      let loopNumber = 0;

      // x1, y1, x2, y2
      utils.forEach(["x1", "y1", "x2", "y2"], prop => {
        if (utils.isUndefined(this[prop])) {
          this[prop] = args[prop];
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[prop] = tween.Linear(s, sArgs[prop], eArgs[prop] - sArgs[prop], e);

        if (s < e) {
          loopNumber++;
        }
      });

      // top, right, bottom, left
      this.top = this.y1;
      this.right = this.canvas.width - this.x2;
      this.bottom = this.canvas.height - this.y2;
      this.left = this.x1;

      // minX
      this.minX = this.left;//当前图形区域的最小 x 轴坐标值

      if (loopNumber === 0) {
        this.removeMotion(fn);
        callBack && callBack();
      }
    });
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    super.draw(() => {
      this.context.beginPath();
      this.context.moveTo(this.x1, this.y1);
      this.context.lineTo(this.x2, this.y1);
      this.context.lineTo(this.x2, this.y2);
      this.context.lineTo(this.x1, this.y2);
      this.context.closePath();
      this.context.fill();
    });
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的最小 x 坐标轴坐标值的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的最小 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareMinX(chart) {
    return super.compareMinX(chart);
  }

  /**
   * @desc 比对当前图形对象的最小 x 坐标轴坐标值与指定坐标对象的 x 坐标轴坐标值的大小
   * @param {Object} point 坐标对象
   * @returns {Number, NULL} 如果当前图形对象的最小 x 坐标轴坐标值比指定坐标对象的 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  comparePointX(point) {
    return super.comparePointX(point);
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
    return point.x >= this.x1 && point.x <= this.x2 && point.y >= this.y1 && point.y <= this.y2;
  }
}

/**
 * @desc RectangleFactory
 */
class RectangleFactory {
  constructor() { }

  /**
   * @desc 工厂方法]
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   * @param {Number} x1 矩形左上角的 x 坐标。
   * @param {Number} y1 矩形左上角的 y 坐标。
   * @param {Number} x2 矩形左下角的 x 坐标。
   * @param {Number} y2 矩形左下角的 y 坐标。
   * @returns {Rectangle} 矩形图形对象
   */
  static create(chartCollector, config, x1, y1, x2, y2) {
    let rectangle = new Rectangle_Rectangle(chartCollector, config, x1, y1, x2, y2);
    return rectangle;
  }
}

Rectangle_Rectangle.Factory = RectangleFactory;
/* harmony default export */ var basics_Rectangle = (Rectangle_Rectangle);

// CONCATENATED MODULE: ./lib/chart/components/bar/Bar.js








/**
 * @desc Bar，柱状图类
 */
class Bar_Bar extends grid_Grid {
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
        basics_Rectangle.Factory.create(
          chartCollector,
          utils.deepMerge(this.config.bar, this.config.bar.zIndex === chart_defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
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
        utils.deepMerge(this.config.bar, this.config.bar.zIndex === chart_defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
        x1,
        y1,
        x2,
        y2
      );

      // barText
      this.barTextCharts.push(
        basics_Text.Factory.create(
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
        utils.deepMerge(this.config.bar, this.config.bar.zIndex === chart_defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
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
        this.barCharts[i] = basics_Rectangle.Factory.create(
          this.chartCollector,
          utils.deepMerge(this.config.bar, this.config.bar.zIndex === chart_defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
          xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
          xAxisLabelPoints[xAxisLabelPoints.length - 1].y,
          xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
          xAxisLabelPoints[xAxisLabelPoints.length - 1].y
        )

        this.barCharts[i].update(
          utils.deepMerge(this.config.bar, this.config.bar.zIndex === chart_defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
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
          utils.deepMerge(this.config.bar, this.config.bar.zIndex === chart_defaults.config.bar.zIndex && { zIndex: config.xAxis.zIndex - 1 }),
          x1,
          y1,
          x2,
          y2
        );
      }

      // barText
      if (this.barTextCharts.length === i) {
        this.barTextCharts[i] = basics_Text.Factory.create(
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
    let bar = new Bar_Bar(chartCollector, config);
    return bar;
  }
}

Bar_Bar.Factory = BarFactory;
/* harmony default export */ var bar_Bar = (Bar_Bar);

// CONCATENATED MODULE: ./lib/chart/basics/Circle.js






/**
 * @desc Circle，圆形
 */
class Circle_Circle extends chart_Chart {
  /**
   * @desc Circle 构造函数
   * @param {Number} x 圆的中心（圆心）的 x 轴坐标
   * @param {Number} y 圆的中心（圆心）的 y 轴坐标
   * @param {Number} radius 圆的半径弧度
   */
  constructor(chartCollector, config, x, y, radius) {
    super(chartCollector, config);
    this.x = x || -1;
    this.y = y || -1;
    this.radius = radius || 0;
    this.minX = this.x - this.radius;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 更新
   * @param {Number} x 圆的中心（圆心）的 x 轴坐标
   * @param {Number} y 圆的中心（圆心）的 y 轴坐标
   * @param {Number} radius 圆的半径弧度
   */
  update(config, x, y, radius, callBack, animationHook) {
    super.update(config);

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      sArgs = {
        x: this.x,
        y: this.y,
        radius: this.radius
      },
      eArgs = { x, y, radius };
    this.addMotion(function fn() {
      let loopNumber = 0;

      utils.forEach(["x", "y", "radius"], prop => {
        if (utils.isUndefined(this[prop])) {
          this[prop] = args[prop];
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[prop] = tween.Linear(s, sArgs[prop], eArgs[prop] - sArgs[prop], e);

        if (s < e) {
          loopNumber++;
        }
      });

      // minX
      this.minX = this.x - this.radius;//当前图形区域的最小 x 轴坐标值

      if (utils.isFunction(animationHook)) {
        animationHook({
          x: this.x,
          y: this.y,
        });
      }

      if (loopNumber === 0) {
        this.removeMotion(fn);
        callBack && callBack();
      }
    });
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    super.draw(() => {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, 0);
      this.context.stroke();
      this.context.closePath();
    });
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的最小 x 坐标轴坐标值的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的最小 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareMinX(chart) {
    return super.compareMinX(chart);
  }

  /**
   * @desc 比对当前图形对象的最小 x 坐标轴坐标值与指定坐标对象的 x 坐标轴坐标值的大小
   * @param {Object} point 坐标对象
   * @returns {Number, NULL} 如果当前图形对象的最小 x 坐标轴坐标值比指定坐标对象的 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  comparePointX(point) {
    return super.comparePointX(point);
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
    let distance = Math.pow(Math.abs(point.x - this.x), 2) + Math.pow(Math.abs(point.y - this.y), 2) - Math.pow(this.radius, 2);
    return distance < 0;
  }
}

/**
 * @desc CircleFactory
 */
class CircleFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {Number} x 圆的中心（圆心）的 x 轴坐标
   * @param {Number} y 圆的中心（圆心）的 y 轴坐标
   * @param {Number} radius 圆的半径弧度
   * @returns {Circle} 圆形图形对象
   */
  static create(chartCollector, config, x, y, radius) {
    let circle = new Circle_Circle(chartCollector, config, x, y, radius);
    return circle;
  }
}

Circle_Circle.Factory = CircleFactory;
/* harmony default export */ var basics_Circle = (Circle_Circle);

// CONCATENATED MODULE: ./lib/chart/basics/Polygon.js






/**
 * @desc Polygon，多边形
 */
class Polygon_Polygon extends chart_Chart {
  /**
   * @desc Polygon 构造函数
   * @param {Array<Point>} points 坐标对象数组
   */
  constructor(chartCollector, config, points) {
    super(chartCollector, config);
    this.points = points || [];
    this.minX = 0;//当前图形区域的最小 x 轴坐标值
    utils.forEach(points, point => {
      if (this.minX > point.x) {
        this.minX = point.x;
      }
    });
  }

  /**
   * @desc 更新
   * @param {Array<Point>} points 坐标对象数组
   */
  update(config, points) {
    super.update(config);
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    super.draw(() => {
      if (utils.isEmpty(this.points)) {
        return;
      }
      this.context.beginPath();
      this.context.moveTo(this.points[0].x, this.points[0].y)
      utils.forEach(this.points, point => {
        this.context.lineTo(point.x, point.y);
      });
      this.context.stroke();
      this.context.closePath();
    });
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的最小 x 坐标轴坐标值的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的最小 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareMinX(chart) {
    return super.compareMinX(chart);
  }

  /**
   * @desc 比对当前图形对象的最小 x 坐标轴坐标值与指定坐标对象的 x 坐标轴坐标值的大小
   * @param {Object} point 坐标对象
   * @returns {Number, NULL} 如果当前图形对象的最小 x 坐标轴坐标值比指定坐标对象的 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  comparePointX(point) {
    return super.comparePointX(point);
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
    let isPointIn = false
    this.context.save();
    this.setContextStyle();
    this.context.beginPath();
    this.context.moveTo(this.points[0].x, this.points[0].y)
    utils.forEach(this.points, point => {
      this.context.lineTo(point.x, point.y);
    });
    if (this.context.isPointInPath(point.x, point.y)) {
      isPointIn = true;
    }
    this.context.closePath();
    this.context.restore();
    return isPointIn;
  }
}

/**
 * @desc PolygonFactory
 */
class Polygon_PolygonFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {Array<Object>} points 坐标对象数组
   * @returns {Polygon} 多边形图形对象
   */
  static create(chartCollector, config, points) {
    points = points.map(p => {
      return point_Point.Factory.create(p.x, p.y);
    });
    let polygon = new Polygon_Polygon(chartCollector, config, points);
    return polygon;
  }
}

Polygon_Polygon.Factory = Polygon_PolygonFactory;
/* harmony default export */ var basics_Polygon = (Polygon_Polygon);

// CONCATENATED MODULE: ./lib/chart/components/line/BrokenLine.js








/**
 * @desc Line，折线图类
 */
class BrokenLine_BrokenLine extends grid_Grid {
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
      this.circles[i] = basics_Circle.Factory.create(
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
    this.line = basics_Polygon.Factory
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
          this.line.points[i] = point_Point.Factory.create(x, y);
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
        this.circles[i] = basics_Circle.Factory.create(
          this.chartCollector,
          utils.deepMerge(this.config.line),
          xAxisLabelPoints[xAxisLabelPoints.length - 1].x,
          y,
          0
        );
        this.line.points[i] = point_Point.Factory.create(xAxisLabelPoints[xAxisLabelPoints.length - 1].x, y);
      }
      this.circles[i].update(
        utils.deepMerge(this.config.line),
        x,
        y,
        radius,
        null,
        ({ x, y }) => {
          this.line.points[i] = point_Point.Factory.create(x, y);
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
    let bar = new BrokenLine_BrokenLine(chartCollector, config);
    return bar;
  }
}

BrokenLine_BrokenLine.Factory = BrokenLineFactory;
/* harmony default export */ var line_BrokenLine = (BrokenLine_BrokenLine);

// CONCATENATED MODULE: ./lib/chart/ChartCollector.js











/**
 * @desc ChartCollector，图形容器类
 */
class ChartCollector_ChartCollector {
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

    this.frames++;
    if (this.afterDrawCurrentFrameTime - this.updateFpsTime >= 1000 || utils.isUndefined(this.updateFpsTime)) {
      if (utils.isUndefined(this.updateFpsTime)) {
        this.updateFpsTime = this.beforeDrawCurrentFrameTime;
      }
      this.fps = (this.frames / (this.afterDrawCurrentFrameTime - this.updateFpsTime) * 1000).toFixed();
      this.updateFpsTime = this.afterDrawCurrentFrameTime;
      this.frames = 0;
    }
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
    this.context.save();
    this.context.font = chart_defaults.config.font;
    this.context.textAlign = "start";
    this.context.fillText(`FPS: ${this.fps}`, 20, chart_defaults.config.fontSize);
    this.context.restore();
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.notifyCharts("draw");
    this.drawFps();
  }

  /**
   * @desc 创建
   */
  create(config) {
    // 创建图形组件
    if (!utils.isObject(config)) {
      let error = createError("config should be Object");
      console.error(error);
      return error;
    }
    switch (config.type) {
      case "bar": this.mainChart = bar_Bar.Factory.create(this, chart_mergeConfig(chart_defaults.config, config)); break;
      case "brokenLine": this.mainChart = line_BrokenLine.Factory.create(this, chart_mergeConfig(chart_defaults.config, config)); break;
    }
    this.enableClick();
    this.enableMousemove();
    this.beforeDrawTime = +new Date();
    requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * @desc 更新
   */
  update(config) {
    this.mainChart.update(config);
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
        chart.notifyEventListeners(event_Event.Factory.create(event, "click", chart));
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
        chart.notifyEventListeners(event_Event.Factory.create(event, "mousemove", chart));
      }
    });

    utils.forEach(mouseoverCharts.selecteds, chart => {
      if (!chart.mouseInside) {
        chart.mouseInside = true;
        if (chart.hasEventListener("mouseover")) {
          chart.notifyEventListeners(event_Event.Factory.create(event, "mouseover", chart));
        }
      }
    });

    utils.forEach(mouseoutCharts.unSelecteds, chart => {
      if (chart.mouseInside) {
        chart.mouseInside = false;
        if (chart.hasEventListener("mouseout")) {
          chart.notifyEventListeners(event_Event.Factory.create(event, "mouseout", chart));
        }
      }
    });
  }

  /**
   * @desc 查找指定坐标对象位于和不位于事件图形对象集合的某个事件的图形对象集合
   * @param {String} type 事件名称
   * @param {Point} point 坐标对象
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
          for (let j = i; j < array.length; j++) {
            result.unSelecteds.push(array[i]);
          }
          break;
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
   * @returns {Point} 当前画布的映射坐标对象
   */
  windowToCanvas(x, y) {
    let bbox = this.canvas.getBoundingClientRect();
    return point_Point.Factory.create(x - bbox.left, y - bbox.top);
  }

}

/**
 * @desc ChartCollectorFactory
 */
class ChartCollectorFactory {
  constructor() { }

  /**
   * @desc 工厂方法
   * @param {HTMLCanvasElement} canvas canvas 对象
   * @returns {ChartCollector} ChartCollector 对象
   */
  static create(canvas) {
    return new ChartCollector_ChartCollector(canvas);
  }
}

ChartCollector_ChartCollector.Factory = ChartCollectorFactory;
/* harmony default export */ var chart_ChartCollector = (ChartCollector_ChartCollector);

// CONCATENATED MODULE: ./lib/index.js


// import utils from "./helpers/utils";
// import sizeof from 'object-sizeof';


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
  let chartCollector = chart_ChartCollector.Factory.create(canvas);

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

/* harmony default export */ var lib = (create);

// CONCATENATED MODULE: ./index.js






/***/ })
/******/ ]);