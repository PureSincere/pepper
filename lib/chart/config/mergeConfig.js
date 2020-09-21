"use strict";

import utils from "../../helpers/utils";
import { definePropertyOfFont } from "./defaultConfig";

/**
 * @desc 合并配置文件
 * @param {Object} config1, config2, config3, ... 各个配置文件，后置配置文件会覆盖前置的配置文件
 * @returns {Object} 合并后的配置文件
 */
function mergeConfig(/* config1, config2, config3, ... */) {
  let config = {};
  function assignValue(val, key) {
    if (utils.isArray(val)) {
      config[key] = JSON.parse(JSON.stringify(val));
    } else if (typeof config[key] === "object" && typeof val === "object") {
      config[key] = mergeConfig(config[key], val);
    } else if (typeof val === "object") {
      config[key] = mergeConfig({}, val);
    } else {
      if (key === "font") {
        return;
      }
      config[key] = val;
    }
  }
  for (let i = 0, l = arguments.length; i < l; i++) {
    utils.forEach(arguments[i], assignValue);
  }
  definePropertyOfFont(config);
  return config;
};

export { mergeConfig };
