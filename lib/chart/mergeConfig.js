"use strict";

import utils from "../helpers/utils";

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

export default mergeConfig;
