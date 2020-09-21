"use strict";

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
      // pepper
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
export default function createError(message) {
  let error = new Error(message);
  return enhanceError(error);
};

