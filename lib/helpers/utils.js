"use strict";

const toString = Object.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;

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
  return toString.call(val) === "[object Array]";
}

/**
 * 检验数据是否是日期类型
 * 
 * @param {Object} val 用于检验的数据
 * @returns {Boolean} 如果数据是日期类型返回 true，否则返回 false
 */
function isDate(val) {
  return toString.call(val) === "[object Date]";
}

/**
 * 检验数据是否是 Function
 * 
 * @param {Object} val 用于检验的数据
 * @returns {Boolean} 如果数据是 Function 返回 true，否则返回 false
 */
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}

/**
 * 检验数据是否是 HTMLCanvasElement
 * 
 * @param {Object} val 用于检验的数据
 * @returns {Boolean} 如果数据是 HTMLCanvasElement 返回 true，否则返回 false
 */
function isHTMLCanvasElement(val) {
  return toString.call(val) === "[object HTMLCanvasElement]";
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
  return toString.call(val) === "[object ArrayBuffer]";
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
  return toString.call(val) === "[object File]";
}

/**
 * 检验数据类型是否为 Blob
 * 
 * @param {Object} val 需要检验的数据
 * @returns {Boolean} 如果检验的数据类型为 Blob 返回 true，否则返回 false
 */
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
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

export default {
  toString,
  hasOwnProperty,
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
};