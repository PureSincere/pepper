"use strict";

import utils from "../../helpers/utils";

// 通用默认配置
const commonConfig = {
  zIndex: 0,
  animationDurationTime: 300
};

// 字体默认配置
const fontConfig = {
  fontSize: 10,
  fontFamily: "sans-serif"
  // lineHeight: "normal",
  // fontStyle: "normal",
  // fontVariant: "normal",
  // fontWeight: "normal",
  // caption: "",
  // icon: "",
  // menu: "",
  // messageBox: "",
  // smallCaption: "",
  // statusBar: ""
};

// canvas 上下文默认配置
const contextConfig = {
  strokeStyle: "#000000",
  fillStyle: "#000000",
  lineWidth: 1,
  lineDash: false,
  lineJoin: "round",
  textAlign: "right",
  font: "sans-serif 10px/normal normal normal normal"
};

/**
* @desc 合并 config1 不存在的默认配置
* @param {Object} config1, config2 配置文件
*/
const mergeConfigIfUndefined = (config1, config2) => {
  Object.keys(config2).forEach(prop => {
    if (typeof config1[prop] === "undefined") {
      config1[prop] = config2[prop];
    }
  })
}

/**
 * @desc 配置文件设置 font 属性
 * @param {Object} config 配置文件
 */
const definePropertyOfFont = (config) => {
  Object.defineProperty(config, "font", {
    get() {
      let {
        fontFamily,
        fontSize,
        // lineHeight,
        // fontStyle,
        // fontVariant,
        // fontWeight,
        // caption,
        // icon,
        // menu,
        // messageBox,
        // smallCaption,
        // statusBar
      } = config;

      return (
        `${fontSize}px`
        + ` ${fontFamily}`
        // + (lineHeight ? `/${lineHeight}` : "")
        // + ` ${fontStyle}`
        // + ` ${fontVariant}`
        // + ` ${fontWeight}`
        // + ` ${caption}`
        // + ` ${icon}`
        // + ` ${menu}`
        // + ` ${messageBox}`
        // + ` ${smallCaption}`
        // + ` ${statusBar}`
      ).trim();
    }
  });
}

/**
 * @desc 默认配置对象
 */
const defaultConfig = (() => {
  let config = {};

  utils.forEach([commonConfig, fontConfig, contextConfig], mergeFromConfig => {
    mergeConfigIfUndefined(config, mergeFromConfig);
  });
  definePropertyOfFont(config);

  return config;
})();

export {
  definePropertyOfFont,
  defaultConfig,
  contextConfig
};
