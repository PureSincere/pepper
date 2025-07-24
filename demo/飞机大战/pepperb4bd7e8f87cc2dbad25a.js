var Pepper =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_background_png__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.container .background{\r\n  position: absolute;\r\n  top: 0;left:0;right:0;bottom: 0;\r\n  width: 600px;\r\n  height: 19600px;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") repeat;\r\n  z-index: -1;\r\n  /* background: url('img/background.png') repeat; */\r\n  /* background-position-x: 0px;\r\n  background-position-y: 0px;\r\n  background-repeat: repeat;\r\n  background-size: 600px 600px; */\r\n  animation: scoll 100s linear infinite alternate-reverse;\r\n}\r\n\r\n@keyframes scoll{ \r\n  from { \r\n    top:0; \r\n  } \r\n  to { \r\n    top:-19000px; \r\n  } \r\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/png;base64,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iYhod5wB086MMSiKAhCi66EQER0sBjA9iNYadVV1PQwiooPF9UPamRACg8EAjsPPb0RED8UApp0JIeD7ftfDICI6aJzCEBERdYABTERE1AEGMBERUQcYwERERB1gABMREXWAAUxERNQBBjAREVEHGMBEREQdYAATERF1gAFMRETUAQYwEd1gre16CETfBdaCJqJWURSI4xiu66Lf77PhBtEz4quLiAA0M98sywAAeZY1PZ+J6NlwBkxEAJoAttbCdV1YY7gUTfTMOAMmIgBNm0nPdVEWBaRSbDlJ9Mw4AyYiAE0AR70e/CCA4zjc/yV6ZgxgImoJIaAU3xaIXgI/4hIREXWAAUxERNQBBjAREVEHGMBEREQdYAATERF1gAFMRETUAQYwERFRBxjAREREHWAAExERdYABTERE1AEGMBERUQcYwERERB1gABMREXWAAUxERNQBBjAREVEHGMBEREQdYAATERF1gAFMRETUAQYwERFRBxjAREREHWAA014xxiDPc1RV1fVQiIieFQOY9orWGmVZIkliFEXR9XCIiJ4NA5j2jlIKgOAsmIheNQYw7RUpJQQAx3HgeV7XwyEiejaq6wEQXec4DsIoQtj1QIiInhlnwERERB1gABMREXWAAUxERNQBBjAREVEHGMBEREQdYAATERF1gAFMRETUAQYwERFRBxjAREREHWAAExERdYABTEREB8laC2vtja8VRYE0TaG17mhU98cAJiKig2StRZZlqOsaQBO+8XqN5XKJPM87Ht3dGMBERHSQhBDQWiPLMlRVhTzLEEYRgiD4Yma8jxjARER0kIQQ8DwP9SZ8Pd9HGDa91ETHY7sPBjARER00bQxcz2vDF9YCYv8jmAFMREQHSwgBWAtjDKy1qKoKxhhIKbse2p1U1wMgIiJ6KNd1EUYRsixDURQwxsCREp7ndT20OzGAiYjoYAkh0Ov1mr3gzWlo13XhOPu/wMsAJiKig+e6LlzX7XoYO9n/jwhERESvEAOYiIioAwxgIiKiDjCAiYiIOsAAJiIi6gADmIiIqAMMYCIiog4wgDestQfRP5KIiF4HBjAAYwzi9fog+kcSEdHr8N0HsDEGcRyjLMumqDcREdEL+O4DuK5rVFUFz/dRFAWqqup6SERE9B347gNYSgeO46AqS1RlibIsux4SERF9BxjAUmEwGEA4TRArxf4URET0/Jg2AJRSGI/HTR/JA2hhRUREh48BvCGEgJSy62EQEdF3gtM9IiKiDjCAiYiIOsAAJiIi6gADmIiIqAMMYCIiog4wgImIiDrAACYiIuoAA5iIiKgDDGAiIqIOMICJiIg6wAAmIiLqAAOYiIioAwxgIiKiDjCAiYiIOsAAJiIi6gADmIiIqAMMYCIiog4wgImIiDrAACYiIuoAA5iIiKgDDGAiIqIOMICJiIg6wAAmIiLqAAOYiIioA6rrARAR7RNjDKy1N77mOA6EEB2NiF4rBjARfZestSjLElVVQdc1jDHQWkMbA2sMrkew4zhQSiEMQ4RhyDCmJ8EAJqLvhjEGVVWhyHMURYGqrgEASkrI7V9KbQL25iy4rmrMr66QBQEmR0dwHO7g0eMwgInoVdvOdMuyRJHn0MZAAPB8H/3BAK7rQkp5r1ltnudYzOeYz+c4OjriTJgehQFMRK/aarlEkqZwlYJyXQzCEK7nPWgGGwQBjqdTXF5cYL1eYzgcfvEzxhjOjuleGMBE9GrleY4kiTEcjdHr9XaesVZVhbqu4XkepJQAANd1EYYh4vUKvV4EKRWMMcjzHGmSoCwLKOViPJnA87zn+GPRK8EAJqJXSWuN1XKJMOqh3+8/6DHqqkKSJEgARL1eO7M11iLLcizmC7iehzRJYK2FlBJhGCFJU3z88AHH0+mDn5tePwYwEb1K8XoNbQyOh4MHP0YYRfCDAPP5HGefPkG6CtJpZsJ1XWO5WmI0GkO5LgSAXr+PIAgwHI1wdXmJ87MzVFWFyWTyRH8qek0YwET06tR1jTRN0ev3IeXj3uaMMdB1DakUwjCC7/uwm9PUURRhMpmgqiqkSYK6rtuZ8OzNGyjXxfzqCrqucTyd8tAW3cAAJqJXJ01TQAj0er1HP9ZiPoc2Gu9/eH8jzMuqgiMEyrKEUgqj8Rh1XaOua6jNVabJZAKlFM7PzmCtxXQ2YwhTiwFMRK+KMQZ5lqHX67UHpx4qz3OUVYXxePzFTLrf78Ma015jAgClFMqyhDEGnudBCIHBYABHCJyengIAQ5haDGAielWqqoI2+klOIGdZBkcIhGH4xfeCIPjia9uKWVpr1HUN13UBNHvDM2txfnYG9f+3d59NbWVrFoDXDicqQ2NP29P3zv//U3eqZua2u40BhZN3mA8nWGCCBCII1lPlwk0jnYMJSzu9r9ZYnJw8+d7o+DGAiegdOtwIc98zvVprKKVgrYX3fhjtTiYTWGtwcXGBJE1vDXD6WHhanIjeFa01Aq3RNM2Tn2symWDxiIpX3vtbg3s2myMKIyyXy18aPtDHwwAmondFSgkh5UECTms9TCPvw3s/7Iju/wCAEAJxkqAoCjjnnnx/dNwYwET0rnjvYa191Y1OSilIKYeQresaRVHAe99OPXedl+hjYwAT0buyfRToNfVrwf3fy7LE5cUFtNaIkvggU+R03BjARPQuWGtR1zXW6zWEEA/ugnbOYb1atWeGn4kQAkIIKKUwm82ggwDee6RJiiLPuQ78wXEXNBEdNWMMri4vUVYVZDfrPJvNbz0D3DdNUEq1Z3abBsVqBWPMrZ2NDklKiel0OkyPV3WN5XKJ+Xz+rNelt4sBTERHK89zXF1ewHtgPB4hCiPoILhz41Se51heXWEymSCazXB6eorNZoPV8mrocvTcpJQQQmA6neLy8hJRGCJJ02e/Lr09DGAiOkrLqyv89e0bprMZPn3+/OB5Xe89qrLEaDzGZGu0Ox6PkWUZqqp8kQAWQmCzXkMqiTiOsd5sECcJq2N9QFwDJqKjU1UVzs+/I06SncK354FrxTG891iv1zBNgzCMnvGOrwvCEEC7Tt1vGqOPhyNgIjoqvivp2BiDP/7xz53DVwiBJI6xXK3a7kZKoWkaNE2DyXT6IqPf3mTStkisqgpCiGtlK+njYAAT0VGpqwpVVWE8nux91CgdjSCVQlmWgPcIoxDT2ezVykJqrSGlhGka4AVfANDbwAAmoqNS1zVOTk8xm832XjcVXWOFlxzt3kdKCYH2c6KPhwFMREfFWIsoivZukvAW9WeEuQb8MR3/dzARfRjeezjnnrxj2DmHuq7b1oWvXBIyjmNYazgK/oAYwER0NJyzwB2dhvZ7nrYgR5ZtXr0pQtStP2dZ9qr3QS+PAUxER8M5Dwjx5ADuq2RZY1GW5auGsNYaSToamjXQx8E1YCI6Gq6bLj7E+m/TNMiyDFLK4fm2zwgfSt+O0HUdkIIg+OX+pRBwzj3L9entYgAT0dFwzl0LzMcSQmCxWGA8GkFpDWMMrLU/2wUeUJ5lWK/XsNbCeYfF4gTj8Xj4/1VVYblcYjwev4uNZbQ7BjARHQ2PNoTzLIO1FlEcI4oeV8FKSgnrHDZXV+3IU0qMRqPD3m+3Xh0nMZRUyIsCeZ4jTdP2/K8x+HF+jiAMMWNThg+HAUxER8MYg9VyCZOmSJLk1o5H+9BaIwgC1E2DMAwfHeZ3EUIgSdOh2UI6GsEYM0wzL5dLAB5nZ2dP/lzo+DCAiehoOOcwGo1wcnq6dxWs24RhiDAMh6nt56aUGoK2aRrUdYXZfHGQz4WODxcciOgotDuEPZI0PXhgPXf4eu9R5DmqshzeV1cVrLEHH3XT8WAAE9FR8N7DO39tqvZYju30DReKrQDO8xxaa45+PzB+5YnoKHjv4bxHVVVQUqJuGiilkB5BM3tjDIIwRCgEvPcwxqCqKky3+hLTx8MAJqKjUhYF6rqGUmpo6/fWGWOwWa/bXdFKDfc/2jqORB8PA5iIjoL3HvAe09kMURRBKXU0RSviOIZSClm2wWq5gvPc+UwMYCI6EqKbvgVwdOum7XlgAdMYBGGA+XzxZloi0us5ru9iIvqw2oIWCdarFQAMRTOapoHWeu/RsPceRVHAGIP0GXZWb6uqCufn5zB1jd+/fuXOZwLAACaiIyGEwGg0gncOy+VyWEcFsPdmJu89lssliqLAaDR6tmNIff1nASDoAj4Igme5Fh0fBjARHQ0hBCbTKeIkwfn5d6zXayzmC9RxDO8cwijaaSTsvYeSEieLxdAO8DmUZYlss4EQAs57yONYsqYXwgAmoqMjpYSSCvPZHFIp/PnvfwMAZvM5JpPJg5ubpJSYvMARoDiOEQQBrLW4uLhA202RKUwtBjARHRXvPX6cnwMAzj59QlEUKIsCYRiiyHPUVYXReIwoioZ13X7z1kuHn5QSQggURQFrDCbTKQOYBgxgIjo6o9EIYRTBWos8zzGfzzEaj1HXNf79f/+Hqq7w9et/AmjP4BZFgTRNX/TYT9M0KPIcWZ7BGovZfM7CG3QNA5iIjooQYihg4b3HfD4fRrp9aUdr7bWOQ1JKKKWGTkTPFcTOORR5jjzP24pdSiGKIoxPJwjD8FmuSceLAUxER0sIce34kBACp6enWC6X2Gw2gPeo6xpnZ2cwxmB5dYXpbAal1IPT0k3T/PL896nrGpcXFyjLEqPRCLP5HGmaQCn+mqXb8TuDiN6Nvv9uVdfYbNZIkgTz2Qxaa1xdXcJ7jyAI0DQNTNMMfXp73nvkeY6mqeE9MN6jVGRd17i8usR4NMbJ6emLtDek3Xjv21rizg1FUQAxrNG/FgYwEb07SRwj22wQ6ABJmqIsS5RFifliAQDIsg3C8HoxjH5E3P6SBtI03evMbtM0GI/GWHTXoLcjz3PkWQYPAN4jCENoreGsRRCGdzb0cM5hs9lAa42we8whMYCJ6N2J4hhpmuLy8hJFWaJpagDtudzlcom6qjCbK1RVhSAIIKVEVVUAcK3Bg/ce1lpIKe8d0VZVhc16PWwGo9flvf/ZArIoUFUVdBDAO4cgCNogFQJl1yTDNA10930QBBpCtF9vay3KooCUEkVRIAgCJElysGIqDGAiepfmiwV0EKAqS+huHbYoCtRVBakk8ixDlm0gIHByegqtNcqyhHPuWtg2dQ0PIEmSO6cr16sVpJQYH0l3pvesaRqUZQlrLQAg7Ea4QggIIYYyoN63vaU3zqEoCkTeIYpi5HnRFk6xFnXTIIwipGkK5xzKssRqtUIQBAcpX8oAJqJ3SQiByWSCyWQyTC/3b4GfZSKXV1e4+PEDZ58+Ib5RFUsIgTCKYIy58zpVWbZHoRYLnvF9Jf3abp5lMMYg7LplBUGAIAjgnBsCuCeEQBiGmM3nqOv658gYbYivlst2T0EcD8N1F7cAAA8BSURBVJvxJpMxqqpud7qjnS15ytecAUxE717/S3L7l6WUElprnJye4q9v37BZrzGbz395rFJq2DXdT21u22QZvPdDcwh6WcYY5FkGCAEB3PpC6L7lA6XUL52prLWQSmE6nUApPQS8EAJBEKAA4LtQfwoGMBF9aFprjMZjrNYrxEmCMAzhnGv/WAuP9hdykedw3S5qeA8IAXiPzbrdbc3evi/Pe49ss4HSengBdIhZiDAMEQR6OEK2HeBCCPgDXYcBTEQf3mQyQZHn+P7334i6ClvGWqAb9Qgp0f6+bUO35wEkaYoZK1y9KO/9sNYrpMRoNDro9H8buLePmo0xUEqhMQZlWf6ybLEPBjARfXhKKfx2doYiz2GdQxCGwxR1PwW9fWZUCHHrdDQ9P+89NpsN6rpGGIYYj8dP/jrs87W01kIphTRNUZUlBPDojlrXArhpGlhr4Z2D69Y7ekKI4RuyL+tGRPReBEGAYDbb+eMZvi/Pd1P+3nssFou9ip045wD8uh5cdTvfbxZluUsURQi7F2hAe8ZYb01X72N4RJZl+P7XXzDW9ksb13jv4Z0DpEAYRpiMx5gvFgxiIiJ6ds45ZJsNvPd7d5Uy3XSxdw5RHF+ryy2kRKD1zqPg7d3UWmsoKdE05vEB7JzD8uoSURLjbDq79Sb6Ml79weTv37+jrmv8/uXL3hclIiLaRz/tvNjzuFe/ez0IAhhjkGXZMJsL4FoYO+fQNA3CMNzpGkoppKMRss3m2hnjXWmgHf3WdYPfv3zZ7Qm67iPnP84xnc24/Z6IiJ5NP3qddY00trWDQwsp1S+h6ZxDVZYAAB0E0EqhEQLW2luLaPTT1PsEvNYa6WiEoquYtU+VLAm0c+A6CPZql3X6228YpSN8//vv4aaJiIgOyXuPqiwRb5WArKoKRdfyMc9zFEV5bc9STwgBqRQ82j1OxloEQXDn0mnfPnJfQRBACIGyKPZ6nLS2rZU5Hu+3jVsIgbNPn9A0DX6cn+97v0RERA8yxkBKeS0YhRCw3XQxAMRxfOuGrH5aOE3Ta3/uKiH5lI11YRjCOgdr766adpOsu53PSZw8/NE3xHGMxckJLi4uUOT53o8nIiK6S1mWWK/aAinb+lrMcbehatfd0DfLUR5SFEUItMZ6vbl1NH4bWZWVCMMAwR7Tz9tOTk4QhiH++vZtKH5NRET0VH0jjJsjVu896rpGU9ft0dkdA+/Qbl43HY3aBg/dUamHSGctxC2L17uSUmK+WGC1XuO///UvlN2CNxER0WNZa+Bxe8ODvjlC39d3n/PAh3TbfUVRhLp7YfAQ6QF497SR62w2w9nZGYqiLeWWbTbIsuxJz0lERB9XWVZDx6Kb+kpkTV2jrmu4J2bYIYVhiCAMd1qWlaPRyM9mv3YA2YeUEr9/+YJ//PO/UNc1Li8vUdf1k56TiIg+Ju89XFfy8S5SCuggQBRFkFK92jT0bcbjMYwxD4awjOMYowPU0gSA6XSKJE1RVRXSZP9NXURERM5ZOOfubXjfn/ttmubNDfiklBhPJsiLYtipfevHHfrCpycnkFJivV4f+qmJiOgD6Aez963tWmtRlWVXVOPx+5ieS9DV1njRAI7iGNPZDBc/fmC1Wh366YmI6J2zxjx4ZKgvA5mm6aPqML8ErTWqqrpzevzgAVzkOZy1iOIY59+/czMWERHtxTn3YHOEPqD7j3mtNeCmaWDMr8U3+v4Jzrk7p8gPHsA6CDCZTvHl61dIIbBaLQ99CSIieseklHDdLueHOOdQ5Dk2mw3yFy4I5b2HtXZ4wbAdxNZa6K6PtDHm1hcIBwng7ScOggBxHKMsSxhrkXAzFhER7cg5h6quEQb3F4jy3qMsS+R5PjRBKB/Y9HRoQgjEcQytNcqyhN0KYCEEdKChlRpqRd+krTVwzu/VweEmay2WyyWctZBKwRqDq8tLTGczPPWIExERfQz9iNJai9EovXcTljEGxhgkSTIcVyrLApvNBvP5/EU3ZfUFOLbvdxj1CnHncSpprcNqtULTNG3Xia0F435ovcvFlVLD2a2r5RV0GODT589vbmcaERG9Tf26abu2e/8EretaCm6HW6ADHDJy+l7CDxFCXAtf731bkCPQ91bE0n2VkbquobXGZrNBkiRI0xRlUcB5j8lkAgBb/zDXP0OlFObzdqRbliWWyyUWi5NXKw9GRETH52eQtUF8X4aEUYSqqlCWJQTafAqjCHESP3ngt322uA3S3WaIf83I++9j+Oz6HWdSStR11T6Z90NrpTzP8eP8/MH6lpv1GlJJjMfjnW6YiIgI+DmbKiAezJp+2ld1/X6DLigPdSSpz8OnhHn7ueDOden2TreG2ErK4YOFECiKEmXxJ7IsQ5LePycPtCNgrfST1pSJiOhj8t7B4/4iHL2+KYOUAt7jwaNLu12/3RP1mAzrdzwD3RngbjNyetcaMABAiGGgrIMA1lo0TYPVaoXLix9oTIPFYoGzs7Nf/lG898jzHOvVCuvVCnVd31o8m4jeDmsNqqp67dsguqZdA/Z3Bulda7LO+Z32Kz107f65H3umuG+T2DeLANpR8F2jef3Xt2+iqirUdQ1jDOq6RpZlyLMM1jl8+vQZp7/9du+rin7hPMs2ME2DcbdmTERvkzEWVVUhDEMIIdrWb76bMuPGSXpF/fef7TZZbeuLWoRhOGy+EkIMo9WqLKEDvfc0dB+W28H5GM45xHEMKeUw+lVKoWkaBLfclzbGQCqFqqrQ1DWUUu3OMq0xn8+RpumtF2nqGkEYQkqJ0WgE7z0uLy8RxfGtjyGit0UAQzH71WoFZy3CMMRkOuUGSnoV/RqwFAJ1XSOKIgA/NzdJKRGGwa3fn8YYQAhIqR7cwHXXtfu3jw3hfs24f3wYhrDWoq4qWOtwcyZaf/n61QPA5cUFyrLAbL5AmqYPjHgdNlkGv15jvlhAa41vf/6Juq7xn3/8wR9eojdOCAGP9pW/aRqEQQARRcizDKm1/BmmV9Ov6zbdWmpVlqjrGlKp7szv7aPb/khSURRQSg3h/ZCbYbv93/1gU3XP/dDs0HaIy2HkG0De8Vjdv3MyncI5h4sfP2CaBtPZ7FqNTefcMORXSmM+nyHP20PPm/UaWZbh9y9fOPolOgJSymE6L04SCCFgjEFVlk9eSyN6si57qqpCYwzCMLwzxLY5Z6GkRBiGw5ruLi8mbTdVvB2gAIbaGKgqxEmy1/4mKQWaukZVVcNu7V8+pv9LEAT47ewMs9kMl5eX+Ovbt+EH0XuPq6srXF1dDYU6lGpLbP04/46yLPH7ly+YTqc73xwRvR6t25MKRfGzdu4uBfCJXkJfV7mqKgghEEbRneUctymlEcXtOeCyLHcqS9lPe/fX3SalRDoaIUnTe3sT33cvTV0PU+g3/fKM09kMOgjw/e+/8e3PP/Hp82dorRFHETZZBtM0SNIUZVnix/k54jjG5//4j52H+0T0NqRpis3G4erqCkEQoKlrCCn3/kVDdGj9Wmo/hfuYF4VRFO38uLt2XAMYfh76meBdRtTbm7qklFB3PObW96Zpii9fv8I5h//9n//B5eUllNZI0xSNafDXt2+4+PED88UCf/zjHwxfoiMkhMB4PEYURXDOQQcBptyARW+A6hoYeO8hu3Bsmmav5ZGnFtG4WfWxrioURbFzaUpr7bBju1/muenOl7pBEOD3L7/jx/kPLK+usFou4QHAeyRpgvl8wU5HREduu467lPLOovFEL2kokVxVKMoS1jlYa5GmCfZt4tdPZ6uuNeBjlN1GsF1G1f0yjjUGeZZhvljc+Zh755qU0vj0+TOqqhoO7UdRxBEv0TvCn2l6a/oyk5hOsby6gjUG48nkUWUmf26ocnhMB96+sUIb4A+Hb57nkELAdMf67vvZ2umzibYWwLlBg4iIXkIURZhMJlitVqirauj7u6+nlEbuc2+X0XPTNGiaGmEYwRiD8IEXtju/nOC6EBERvbQkTeG87xr9/Dwq9NY2Cxpj0DQNrHUw3e7rh+7xbX0GREREN8RxjCLPURQF4D2iON77OYwx8N5Da73zTK73/pczwtv/D/g5xW2MQVmWCIJg2B/10Mibw1oiInrTlFKYzedw1qJuGnjv0XRvd9E0Ddbrdds7eI9lVOcsiqK4tZmCc2099bqukec5yrIcpsx37abEACYiojcvCAJMJhPUVYXVagXg9vO7t+mP3I1Goz2v2vcE/vmeqqq6IJfw3mO9XsM0DVRXKnOfgOcUNBERHYU4SVDVddtpyJhhjfWh0HvserGU8lqoeu8RRRGapsFyuYR3DkmSPLoEMwOYiIiOghAC0+kUGyHakacxSJIEtjvyc+hTOtsnf7z3KIoCAkBjDKy1GI/HiB+xHt1jABMR0dGQUrY954VAVZbDCZ3tt89RUMY5iygKkeftmvDJycmTA58BTERER0VKiel0ijzPr/UNNk0D0ZWgvNnZaB9984S+S9j2pi9jDMbj8UGO5jKAiYjoKCVJAmsMjDGI4xhaa5Rl2W6SAqC73cg3jww9xHuHsqwRBAGctUMlyLqukaTpkwp7bOMuaCIiOkpCCMRJMuxGLosCQoi2FzAwNG+w1g4hfFtDh753sHOuqxvdjk3LsoRUCo0xAICT09OD9rznCJiIiI5WEATQWg+VqPojQVLKoX+9cw5aa4RhiKqqoLUeCnL008t9Y5KqqmCtHZ5ztVwiSdODBm+PAUxEREdNCDEUv3DOtd2LqgplVaEsCiRpiihqOyxprVHXNeq6RhxHaJq2U5JzDk0X3pvNZpjCns5mB5tyvokBTERE70Z/dtcEAcIoQrbZIM9zBEEAKdUwIm43VLVlJsuyhPcedVVBBxppkiCK42dvQMQAJiKid2V7RKy1xnK5xHK5hMDPGs5KKXjnEMUxXDflPBqPh8e8BAYwERG9W1przOfzYT24X/ctiwJlWcJ5j8lk8irdlRjARET0rimlftlEFccxiqKAUurVWhsygImI6MNRSmE8Hr/qPfAcMBER0StgABMREb0CBjAREdErYAATERG9AgYwERHRK2AAExERvQIGMBER0StgABMREb0CBjAREdErYAATERG9AgYwERHRK2AAExERvQIJYPraN0FERPSReGD2/20GAbOM5l6BAAAAAElFTkSuQmCC");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ChartCollector", function() { return /* reexport */ chart_ChartCollector; });
__webpack_require__.d(__webpack_exports__, "Circle", function() { return /* reexport */ Circle_Circle; });
__webpack_require__.d(__webpack_exports__, "Line", function() { return /* reexport */ Line_Line; });
__webpack_require__.d(__webpack_exports__, "Polygon", function() { return /* reexport */ Polygon_Polygon; });
__webpack_require__.d(__webpack_exports__, "Rectangle", function() { return /* reexport */ Rectangle_Rectangle; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ Text_Text; });
__webpack_require__.d(__webpack_exports__, "Arc", function() { return /* reexport */ Arc_Arc; });
__webpack_require__.d(__webpack_exports__, "Ring", function() { return /* reexport */ components_Ring; });
__webpack_require__.d(__webpack_exports__, "Aircraft", function() { return /* reexport */ components_Aircraft; });

// CONCATENATED MODULE: ./src/helpers/utils.js


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
    } else if (utils.isObject(result[key]) && utils.isObject(val)) {
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
    } else if (utils.isObject(result[key]) && utils.isObject(val)) {
      result[key] = deepMerge(result[key], val);
    } else if (utils.isObject(val)) {
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

/* harmony default export */ var helpers_utils = ({
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
// CONCATENATED MODULE: ./src/helpers/createError.js


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
function createError(message) {
  let error = new Error(message);
  return enhanceError(error);
};


// CONCATENATED MODULE: ./src/event/Event.js


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

/* harmony default export */ var event_Event = (Event);

// CONCATENATED MODULE: ./src/helpers/sort.js


// import utils from "./utils";

// 快速排序
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
};

function quick(array, left, right, compareFn) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, compareFn);
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
};

function quickSort(compareFn, array) {
  return quick(array, 0, array.length - 1, compareFn);
};

// quickSort = utils.curry(quickSort, defaultCompare);

/* harmony default export */ var sort = ({
  quickSort
});

// CONCATENATED MODULE: ./src/chart/ChartCollector.js







/**
 * @desc ChartCollector，图形容器类
 */
class ChartCollector_ChartCollector {
  /**
   * @desc 构造函数
   * @param {HTMLCanvasElement} canvas canvas 对象
   */
  constructor(canvas) {
    if (!helpers_utils.isHTMLCanvasElement(canvas)) {
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
    this.isAfterDrawCurrent = true;//绘制当前周期是否结束

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
    helpers_utils.forEach(this.charts, c => {
      if (c.motions.length > 0) {
        loopNumber++;
      }
    });
    if (loopNumber > 0) {
      requestAnimationFrame(this.animate.bind(this));
    } else if (loopNumber == 0) {
      this.isAfterDrawCurrent = true
    }
  }

  /**
   * @desc 绘制帧速率
   */
  drawFps() {
    this.frames++;
    if (this.afterDrawCurrentFrameTime - this.updateFpsTime >= 1000 || helpers_utils.isUndefined(this.updateFpsTime)) {
      if (helpers_utils.isUndefined(this.updateFpsTime)) {
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
    if (!this.isAfterDrawCurrent) return
    this.isAfterDrawCurrent = false;
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

    if (!helpers_utils.isString(type) || type === "") {
      return Object.create(null);
    }
    if (!Object.hasOwnProperty.call(this.eventCharts, type)) {
      this.eventCharts[type] = [];
    }

    if (!this.hasEventChart(type, chart)) {
      let array = this.eventCharts[type];
      if (helpers_utils.isArray(array)) {
        let index = 0;
        for (let result, i = 0; i < array.length; i++) {
          result = chart.compareMinX(array[i]);
          if (!helpers_utils.isNumber(result)) {
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
  removeEventChart(chart, type) {
    let types = []
    if (!helpers_utils.isString(type) || type === "" || helpers_utils.isUndefined(type)) {
      types.push(...Object.keys(this.eventCharts))
    } else {
      types.push(type)
    }
    for (let i = 0; i < types.length; i++) {
      if (!Object.hasOwnProperty.call(this.eventCharts, type)) {
        continue;
      }
      let array = this.eventCharts[type];
      if (helpers_utils.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
          if (chart === array[i]) {
            array.splice(i, 1);
            break;
          }
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

    helpers_utils.forEach(selectedCharts, chart => {
      if (chart.hasEventListener("click")) {
        chart.notifyEventListeners(new event_Event(event, "click", chart));
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

    helpers_utils.forEach(mousemoveCharts.selecteds, chart => {
      if (chart.hasEventListener("mousemove")) {
        chart.notifyEventListeners(new event_Event(event, "mousemove", chart));
      }
    });

    helpers_utils.forEach(mouseoverCharts.selecteds, chart => {
      if (!chart.mouseInside) {
        chart.mouseInside = true;
        if (chart.hasEventListener("mouseover")) {
          chart.notifyEventListeners(new event_Event(event, "mouseover", chart));
        }
      }
    });

    helpers_utils.forEach(mouseoutCharts.unSelecteds, chart => {
      if (chart.mouseInside) {
        chart.mouseInside = false;
        if (chart.hasEventListener("mouseout")) {
          chart.notifyEventListeners(new event_Event(event, "mouseout", chart));
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
    if (helpers_utils.isArray(array)) {
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

/* harmony default export */ var chart_ChartCollector = (ChartCollector_ChartCollector);

// CONCATENATED MODULE: ./src/event/EventListenerCollector.js




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
    if (!helpers_utils.isString(type) || type === "") {
      return;
    }
    return helpers_utils.hasOwnProperty.call(this.eventListeners, type);
  }

  /**
   * @desc 新增事件监听函数
   * @param {String} type 事件名称
   * @param {Function} eventListener 事件监听函数
   */
  addEventListener(type, eventListener) {
    if (!helpers_utils.hasOwnProperty.call(this.eventListeners, type)) {
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
    if (!helpers_utils.isFunction(eventListener)) {
      if (helpers_utils.hasOwnProperty.call(this.eventListeners, type)) {
        this.eventListeners[type] = [];
      }
    }

    let eventListeners = this.eventListeners[type];
    if (helpers_utils.isArray(eventListeners)) {
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
    if (!helpers_utils.isObject(event) || !helpers_utils.isString(event.type) || event.type === "") {
      return;
    }
    let eventListeners = this.eventListeners[event.type];
    if (helpers_utils.isArray(eventListeners)) {
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

// CONCATENATED MODULE: ./src/motion/MotionCollector.js





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
      if (helpers_utils.isFunction(this.motions[i])) {
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
// CONCATENATED MODULE: ./src/chart/Chart.js





let id = 0;

/**
 * @desc Chart，图形类
 */
class Chart_Chart extends motion_MotionCollector {
  /**
   * @desc 构造函数
   */
  constructor() {
    super();
    this.id = id++;
    this.mouseInside = false;
  }

  /**
   * @desc 设置 chartCollector
   * @param {ChartCollector} ChartCollector 对象
   */
  setChartCollector(chartCollector) {
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

  /**
  * @desc 触发行为
  */
  notifyMotions() {
    super.notifyMotions();
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
    if (!helpers_utils.isFunction(eventListener)) {
      if (helpers_utils.hasOwnProperty.call(chartCollector.eventCharts, type)) {
        this.chartCollector.removeEventChart(this, type);
      }
    }

    let eventListeners = this.eventListeners[type];
    if (helpers_utils.isArray(eventListeners)) {
      if (eventListeners.length === 0) {
        this.chartCollector.removeEventChart(this, type);
      }
    }
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的 zIndex 的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的 zIndex 小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareZIndex(chart) {
    return !helpers_utils.isNumber(chart.zIndex) ?
      null :
      this.zIndex < chart.zIndex ?
        -1 :
        this.zIndex > chart.zIndex ?
          1 :
          this.zIndex === chart.zIndex ?
            0 :
            null;
  }

  /**
   * @desc 比对当前图形对象与指定图形对象的最小 x 坐标轴坐标值的大小
   * @param {Chart} chart 图形对象
   * @returns {Number, NULL} 如果当前图形对象比指定图形对象的最小 x 坐标轴坐标值小返回 -1，大返回 1，相等返回 0，否则返回 null
   */
  compareMinX(chart) {
    return !helpers_utils.isNumber(chart.minX) ?
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
    return !helpers_utils.isNumber(point.x) ?
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
  //  * @param {Object} point 坐标对象
  //  * @returns {NULL}
  //  */
  // comparePointX(point) {
  //   return null;
  // }

  /**
   * @desc 查找当前图形对象内部是否包含指定坐标对象表示的点
   * @param {Object} point 坐标对象
   * @returns {Boolean} 如果当前图形对象内部包含指定坐标对象表示的点返回 true，否则返回 false
   */
  hasPoint(point) {
    return false;
  }
}

/* harmony default export */ var chart_Chart = (Chart_Chart);

// CONCATENATED MODULE: ./src/helpers/tween.js

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
const tween_Tween = {
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
      return c - tween_Tween.Bounce.easeOut(d - t, 0, c, d) + b;
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
        return tween_Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
      } else {
        return tween_Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
      }
    }
  }
};

/* harmony default export */ var tween = (tween_Tween);

// CONCATENATED MODULE: ./src/chart/config/defaultConfig.js




// 通用默认配置
const commonConfig = {
  zIndex: 0,
  animationDurationTime: 20
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

  helpers_utils.forEach([commonConfig, fontConfig, contextConfig], mergeFromConfig => {
    mergeConfigIfUndefined(config, mergeFromConfig);
  });
  definePropertyOfFont(config);

  return config;
})();



// CONCATENATED MODULE: ./src/chart/config/mergeConfig.js





/**
 * @desc 合并配置文件
 * @param {Object} config1, config2, config3, ... 各个配置文件，后置配置文件会覆盖前置的配置文件
 * @returns {Object} 合并后的配置文件
 */
function mergeConfig(/* config1, config2, config3, ... */) {
  let config = {};
  function assignValue(val, key) {
    if (helpers_utils.isArray(val)) {
      config[key] = JSON.parse(JSON.stringify(val));
    } else if (helpers_utils.isObject(config[key]) && helpers_utils.isObject(val)) {
      config[key] = mergeConfig(config[key], val);
    } else if (helpers_utils.isObject(val)) {
      config[key] = mergeConfig({}, val);
    } else {
      if (key === "font") {
        return;
      }
      config[key] = val;
    }
  }
  for (let i = 0, l = arguments.length; i < l; i++) {
    helpers_utils.forEach(arguments[i], assignValue);
  }
  definePropertyOfFont(config);
  return config;
};



// CONCATENATED MODULE: ./src/chart/config/index.js


// CONCATENATED MODULE: ./src/chart/components/Circle.js







/**
 * @desc Circle，圆形
 */
class Circle_Circle extends chart_Chart {
  /**
   * @desc Circle 构造函数
   * @param {Object} config 配置对象
   *  @param {Object} setting
   *    @param {Number} x 圆的中心（圆心）的 x 轴坐标
   *    @param {Number} y 圆的中心（圆心）的 y 轴坐标
   *    @param {Number} radius 圆的半径弧度
   */
  constructor(config) {
    super();

    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);

    this.x = this.config.setting.x;
    this.y = this.config.setting.y;
    this.radius = this.config.setting.radius;

    this.setOtherSetting();
  }

  /**
   * @desc 更新
   * @param {Object} config 配置文件
   *  @param {Object} setting
   *    @param {Number} x 圆的中心（圆心）的 x 轴坐标
   *    @param {Number} y 圆的中心（圆心）的 y 轴坐标
   *    @param {Number} radius 圆的半径弧度
   *  @param {Object} hook
   *    @param {Function} animating 钩子（动画中）
   *    @param {Function} animated 钩子（动画后）
   */
  update(config) {
    this.config = mergeConfig(this.config, config);
    this.motions = [];

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      sArgs = {},
      eArgs = {};

    helpers_utils.forEach(this.config.setting, (val, key) => {
      sArgs[key] = this[key];
      eArgs[key] = val;
    });

    let motion = () => {
      let loopNumber = 0;
      helpers_utils.forEach(this.config.setting, (val, key) => {
        if (helpers_utils.isUndefined(this[key])) {
          this[key] = val;
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[key] = tween.Linear(s, sArgs[key], eArgs[key] - sArgs[key], e);
        // 钩子（动画中,某个键值一帧执行动画中）
        if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animatingByKey)) {
          config.hook.animatingByKey.call(this, this, val, key, s, e, sArgs, eArgs, tween);
        }
        if (s < e) {
          loopNumber++;
        }
      });
      this.setOtherSetting();
      // 执行钩子（动画中）
      if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animating)) {
        config.hook.animating.call(this, this, s, e, sArgs, eArgs, tween)
      }
      if (loopNumber === 0) {
        this.removeMotion(motion);
        // 执行钩子（动画后）
        if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animated)) {
          config.hook.animated.call(this, this);
        }
        return
      }
    }
    this.addMotion(motion);
  }

  setOtherSetting() {
    this.zIndex = this.config.zIndex;
    this.minX = this.x - this.radius;;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.context.save();
    helpers_utils.forEach(Object.keys(contextConfig), key => {
      if (!helpers_utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
    if (helpers_utils.isObject(this.config.hook) && helpers_utils.isFunction(this.config.hook.draw)) {
      this.config.hook.draw.call(this, this)
      return
    }
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, 0);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();
    this.context.restore();
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
  hasPoint(point, rule) {
    if (!(helpers_utils.isNumber(point.x) && helpers_utils.isNumber(point.y))) {
      return false;
    }
    let distance = Math.pow(Math.abs(point.x - this.x), 2) + Math.pow(Math.abs(point.y - this.y), 2) - Math.pow(this.radius, 2);
    if (rule) {
      return rule(distance)
    }
    return distance < 0;
  }
}

Circle_Circle.defaultConfig = {};



// CONCATENATED MODULE: ./src/chart/components/Line.js







/**
 * @desc Line，直线图形
 */
class Line_Line extends chart_Chart {
  /**
   * @desc Line 构造函数
   * @param {Object} config 配置对象
   *   @param setting
   *     @param {Number} x1 直线起始点 x 坐标轴的坐标值
   *     @param {Number} y1 直线起始点 y 坐标轴的坐标值
   *     @param {Number} x2 直线结束点 x 坐标轴的坐标值
   *     @param {Number} y2 直线结束点 y 坐标轴的坐标值
   */
  constructor(config) {
    super();
    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);
    Object.assign(this, this.config.setting)
    this.setOtherSetting();
  }
  setOtherSetting() {
    this.minX = this.config.x1 >= this.config.x2 ? this.config.x2 : this.config.x1;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   *  @param setting
   *    @param {Number} x1 直线起始点 x 坐标轴的坐标值
   *    @param {Number} y1 直线起始点 y 坐标轴的坐标值
   *    @param {Number} x2 直线结束点 x 坐标轴的坐标值
   *    @param {Number} y2 直线结束点 y 坐标轴的坐标值
   *  @param {Object} hook
   *    @param {Function} animating 钩子（动画中）
   *    @param {Function} animated 钩子（动画后）
   */
  update(config) {
    this.config = mergeConfig(this.config, config);
    this.motions = [];

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime;

    let eArgs, sArgs;
    Object.assign(sArgs, this.config.setting)
    Object.assign(eArgs, config.setting)

    let motion = () => {
      let loopNumber = 0;

      helpers_utils.forEach(this.config.setting, (val, key) => {
        if (helpers_utils.isUndefined(this[key])) {
          this[key] = val;
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[prop] = tween.Linear(s, sArgs[prop], eArgs[prop] - sArgs[prop], e);

        if (s < e) {
          loopNumber++;
        }
      });

      this.setOtherSetting();
      // 执行钩子（动画中）
      if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animating)) {
        config.hook.animating.call(this, this);
      }
      if (loopNumber === 0) {
        this.removeMotion(motion);
        // 执行钩子（动画后）
        if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animated)) {
          config.hook.animated.call(this, this);
        }
      }
    }
    this.addMotion(motion);
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.context.save();
    helpers_utils.forEach(Object.keys(contextConfig), key => {
      if (!helpers_utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
    let { lineDash } = this.config;
    lineDash && this.context.setLineDash([5, 10]);
    this.context.beginPath();
    this.context.moveTo(this.x1, this.y1);
    this.context.lineTo(this.x2, this.y2);
    this.context.closePath();
    this.context.stroke();
    lineDash && this.context.setLineDash([]);
    this.context.restore();
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
    if (!(helpers_utils.isNumber(point.x) && helpers_utils.isNumber(point.y))) {
      return false;
    }
    let isPointIn = false;
    this.context.save();
    helpers_utils.forEach(Object.keys(contextConfig), key => {
      if (!helpers_utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
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

Line_Line.defaultConfig = {};



// CONCATENATED MODULE: ./src/chart/components/Polygon.js






/**
 * @desc Polygon，多边形
 */
class Polygon_Polygon extends chart_Chart {
  /**
   * @desc Polygon 构造函数
   * @param {Object} config 配置对象
   *   @param setting
   *     @param {Array<Object<x, y>>} points 坐标对象数组
   */
  constructor(config) {
    super();
    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);
    Object.assign(this, this.config.setting)
    this.setOtherSetting()
  }

  setOtherSetting() {
    this.minX = 0;//当前图形区域的最小 x 轴坐标值
    helpers_utils.forEach(this.points, point => {
      if (this.minX > point.x) {
        this.minX = point.x;
      }
    });
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   *  @param setting
   *    @param {Array<Object<x, y>>} points 坐标对象数组
   *  @param {Object} hook
   *    @param {Function} animating 钩子（动画中）
   *    @param {Function} animated 钩子（动画后）
   */
  update(config) {
    this.config = mergeConfig(this.config, config);
    this.motions = [];

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime;

    let eArgs, sArgs;
    Object.assign(sArgs, this.config.setting)
    Object.assign(eArgs, config.setting)

    let motion = () => {
      let loopNumber = 0;

      helpers_utils.forEach(this.config.setting, (val, key) => {
        if (helpers_utils.isUndefined(this[key])) {
          this[key] = val;
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[prop] = Tween.Linear(s, sArgs[prop], eArgs[prop] - sArgs[prop], e);

        if (s < e) {
          loopNumber++;
        }
      });

      this.setOtherSetting();
      // 执行钩子（动画中）
      if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animating)) {
        config.hook.animating.call(this, this);
      }
      if (loopNumber === 0) {
        this.removeMotion(motion);
        // 执行钩子（动画后）
        if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animated)) {
          config.hook.animated.call(this, this);
        }
      }
    }
    this.addMotion(motion);
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.context.save();
    helpers_utils.forEach(Object.keys(contextConfig), key => {
      if (!helpers_utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
    if (helpers_utils.isEmpty(this.points)) {
      return;
    }
    this.context.beginPath();
    this.context.moveTo(this.points[0].x, this.points[0].y)
    helpers_utils.forEach(this.points, point => {
      this.context.lineTo(point.x, point.y);
    });
    this.context.stroke();
    // this.context.fill();
    this.context.closePath();
    this.context.restore();
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
    if (!(helpers_utils.isNumber(point.x) && helpers_utils.isNumber(point.y))) {
      return false;
    }
    let isPointIn = false
    this.context.save();
    helpers_utils.forEach(Object.keys(contextConfig), key => {
      if (!helpers_utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
    this.context.beginPath();
    this.context.moveTo(this.points[0].x, this.points[0].y)
    helpers_utils.forEach(this.points, point => {
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

Polygon_Polygon.defaultConfig = {};


// CONCATENATED MODULE: ./src/chart/components/Rectangle.js







/**
 * @desc Rectangle，矩形
 */
class Rectangle_Rectangle extends chart_Chart {
  /**
   * @desc Rectangle 构造函数
   * @param {Object} config 配置对象
   *   @param setting
   *     @param {Number} x 矩形左上角的 x 坐标。
   *     @param {Number} y 矩形左上角的 y 坐标。
   *     @param {Number} width 矩形宽度。
   *     @param {Number} height 矩形高度。
   *     @param {Number} radius 矩形边圆角半径。
   */
  constructor(config) {
    super();

    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);

    this.x = this.config.setting.x;
    this.y = this.config.setting.y;
    this.width = this.config.setting.width;
    this.height = this.config.setting.height;
    this.radius = this.config.setting.radius;
    this.setOtherSetting();
  }

  /**
   * @desc 更新
   * @param {Object} config 配置对象
   *  @param setting
   *    @param {Number} x 矩形左上角的 x 坐标。
   *    @param {Number} y 矩形左上角的 y 坐标。
   *    @param {Number} width 矩形宽度。
   *    @param {Number} height 矩形高度。
   *    @param {Number} radius 矩形边圆角半径。
   *  @param {Object} hook
   *    @param {Function} animating 钩子（动画中,所有键值一帧结束动画中）
   *    @param {Function} animatingByKey 钩子（动画中,某个键值一帧执行动画中）
   *    @param {Function} animated 钩子（动画后）
   */
  update(config) {
    this.config = mergeConfig(this.config, config);
    this.motions = [];

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      sArgs = {},
      eArgs = {};
    helpers_utils.forEach(this.config.setting, (val, key) => {
      sArgs[key] = this[key];
      eArgs[key] = val;
    });

    let motion = () => {
      let loopNumber = 0;
      helpers_utils.forEach(this.config.setting, (val, key) => {
        if (helpers_utils.isUndefined(this[key])) {
          this[key] = val;
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[key] = tween.Linear(s, sArgs[key], eArgs[key] - sArgs[key], e);
        // 钩子（动画中,某个键值一帧执行动画中）
        if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animatingByKey)) {
          config.hook.animatingByKey.call(this, this, val, key, s, e, sArgs, eArgs, tween);
        }
        if (s < e) {
          loopNumber++;
        }
      });
      this.setOtherSetting();
      // 钩子（动画中,所有键值一帧结束动画中）
      if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animating)) {
        config.hook.animating.call(this, this, s, e, sArgs, eArgs, tween)
      }
      if (loopNumber === 0) {
        this.removeMotion(motion);
        // 执行钩子（动画后）
        if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animated)) {
          config.hook.animated.call(this, this);
        }
      }
    }
    this.addMotion(motion);
  }

  setOtherSetting() {
    this.zIndex = this.config.zIndex;
    this.minX = this.x;//当前图形区域的最小 x 轴坐标值
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.context.save();
    helpers_utils.forEach(Object.keys(contextConfig), key => {
      if (!helpers_utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
    let { x, y, width: w, height: h, radius: r } = this;
    this.context.beginPath();
    this.context.moveTo(x + r, y);
    this.context.lineTo(x + w - r, y);
    this.context.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);
    this.context.lineTo(x + w, y + h - r);
    this.context.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);
    this.context.lineTo(x + r, y + h);
    this.context.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);
    this.context.lineTo(x, y + r);
    this.context.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
    this.context.fill();
    this.context.restore();
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
    if (!(helpers_utils.isNumber(point.x) && helpers_utils.isNumber(point.y))) {
      return false;
    }
    return point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height;
  }
}

Rectangle_Rectangle.defaultConfig = {};



// CONCATENATED MODULE: ./src/chart/components/Text.js







/**
 * @desc Text，文本图形
 */
class Text_Text extends chart_Chart {
  /**
   * @desc Text 构造函数
   * @param {ChartCollector} chartCollector 对象
   * @param {Object} config 配置对象
   *  @param {Object} setting
   *    @param {String} text 文本
   *    @param {Number} x 文本起始点 x 坐标轴的坐标值
   *    @param {Number} y 文本起始点 y 坐标轴的坐标值
   */
  constructor(config) {
    super();
    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);

    // text, x, y
    this.text = this.config.setting.text;
    this.x = this.config.setting.x;
    this.y = this.config.setting.y;

    this.zIndex = this.config.zIndex;
  }

  /**
   * @desc 更新
   * @param {Object} config 配置文件
   *  @param {Object} setting
   *    @param {String} text 文本
   *    @param {Number} x 文本起始点 x 坐标轴的坐标值
   *    @param {Number} y 文本起始点 y 坐标轴的坐标值
   *  @param {Object} hook
   *    @param {Function} animatingByKey 钩子（动画中,某个键值一帧执行动画中）
   *    @param {Function} animating 钩子（动画中）
   *    @param {Function} animated 钩子（动画后）
   */
  update(config) {
    this.config = mergeConfig(this.config, config);
    this.motions = [];

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      sArgs = {},
      eArgs = {};

    helpers_utils.forEach(this.config.setting, (val, key) => {
      sArgs[key] = this[key];
      eArgs[key] = val;
    });

    let motion = () => {
      let loopNumber = 0;
      helpers_utils.forEach(this.config.setting, (val, key) => {
        if (helpers_utils.isUndefined(this[key])) {
          this[key] = val;
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        // 钩子（动画中,某个键值一帧执行动画中）
        if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animatingKey)) {
          let result = config.hook.animatingKey.call(this, this, val, key, s, e, sArgs, eArgs, tween);
          this[key] = helpers_utils.isUndefined(result) ? tween.Linear(s, sArgs[key], eArgs[key] - sArgs[key], e) : result;
        } else {
          this[key] = tween.Linear(s, sArgs[key], eArgs[key] - sArgs[key], e);
        }
        if (s < e) {
          loopNumber++;
        }
      });
      this.setOtherSetting();
      // 钩子（动画中,所有键值一帧结束动画中）
      if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animating)) {
        config.hook.animating.call(this, this, s, e, sArgs, eArgs, tween);
      }
      if (loopNumber === 0) {
        this.removeMotion(motion);
        // 执行钩子（动画后）
        if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animated)) {
          config.hook.animated.call(this, this);
        }
      }
    }
    this.addMotion(motion);
  }

  setChartCollector(chartCollector) {
    super.setChartCollector(chartCollector);
    this.setOtherSetting();
  }

  setOtherSetting() {
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

    this.minX = this.left;//当前图形区域的最小 x 轴坐标值
    this.zIndex = this.config.zIndex;
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.context.save();
    helpers_utils.forEach(Object.keys(contextConfig), key => {
      if (!helpers_utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
    this.context.fillText(this.text, this.x, this.y);
    this.context.restore();
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
    if (!(helpers_utils.isNumber(point.x) && helpers_utils.isNumber(point.y))) {
      return false;
    }

    return point.x >= this.left && point.x <= this.left + this.width && point.y >= this.top && point.y <= this.top + this.height;
  }
}

Text_Text.defaultConfig = {};



// CONCATENATED MODULE: ./src/chart/components/Arc.js







/**
 * @desc Circle，圆弧
 */
class Arc_Arc extends chart_Chart {
  /**
   * @desc Arc 构造函数
   * @param {Object} config 配置对象
   *  @param {Object} setting
   *    @param {Number} x 圆弧的中心的 x 轴坐标
   *    @param {Number} y 圆弧的中心的 y 轴坐标
   *    @param {Number} radius1 圆弧的半径 1（大）
   *    @param {Number} radius2 圆弧的半径 2（小）
   *    @param {Number} startAngle 圆弧的起始点弧度
   *    @param {Number} endAngle 圆弧的终点弧度
   *    @param {Boolean} anticlockwise 可选的 Boolean 值，如果为 true，逆时针绘制圆弧，反之，顺时针绘制，默认为 false 即顺时针
   */
  constructor(config) {
    super();

    this.config = mergeConfig(defaultConfig, this.constructor.defaultConfig, config);

    this.x = this.config.setting.x;
    this.y = this.config.setting.y;
    this.radius1 = this.config.setting.radius1;
    this.radius2 = this.config.setting.radius2;
    this.startAngle = this.config.setting.startAngle;
    this.endAngle = this.config.setting.endAngle;
    this.anticlockwise = this.config.setting.anticlockwise || false;

    this.setOtherSetting();
  }

  /**
   * @desc 更新
   * @param {Object} config 配置文件
   *  @param {Object} setting
   *    @param {Number} x 圆的中心（圆心）的 x 轴坐标
   *    @param {Number} y 圆的中心（圆心）的 y 轴坐标
   *    @param {Number} radius 圆的半径弧度
   *  @param {Object} hook
   *    @param {Function} animating 钩子（动画中）
   *    @param {Function} animated 钩子（动画后）
   */
  update(config) {
    this.config = mergeConfig(this.config, config);
    this.motions = [];

    let
      s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime,
      e = this.config.animationDurationTime,
      sArgs = {},
      eArgs = {};

    helpers_utils.forEach(this.config.setting, (val, key) => {
      sArgs[key] = this[key];
      eArgs[key] = val;
    });

    let motion = () => {
      let loopNumber = 0;
      helpers_utils.forEach(this.config.setting, (val, key) => {
        if (helpers_utils.isUndefined(this[key])) {
          this[key] = val;
          return;
        }
        s = this.chartCollector.beforeDrawCurrentFrameTime - this.chartCollector.beforeDrawTime;
        if (s > e) { s = e; }
        this[key] = tween.Linear(s, sArgs[key], eArgs[key] - sArgs[key], e);
        if (s < e) {
          loopNumber++;
        }
      });
      this.setOtherSetting();
      // 执行钩子（动画中）
      if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animating)) {
        config.hook.animating.call(this, this);
      }
      if (loopNumber === 0) {
        this.removeMotion(motion);
        // 执行钩子（动画后）
        if (helpers_utils.isObject(config.hook) && helpers_utils.isFunction(config.hook.animated)) {
          config.hook.animated.call(this, this);
        }
      }
    }
    this.addMotion(motion);
  }

  setOtherSetting() {
    this.zIndex = this.config.zIndex;

    // this.minX = this.x - this.radius1;

    // let startAngle = this.startAngle;
    // let endAngle = this.endAngle;
    // if (startAngle <= Math.PI && endAngle >= Math.PI) {
    //   this.minX = this.x - this.radius1;
    // } else if (endAngle < Math.PI) {
    //   this.minX = this.getRelativePoint(this.x, this.y, endAngle, this.radius1).x;
    // } else if (startAngle > Math.PI) {
    //   this.minX = this.getRelativePoint(this.x, this.y, startAngle, this.radius2).x;
    // }

    let startAngle = this.startAngle % (2 * Math.PI);
    let endAngle = this.endAngle % (2 * Math.PI);
    if (startAngle < endAngle) {
      if (startAngle <= Math.PI && endAngle >= Math.PI) {
        this.minX = this.x - this.radius1;
      } else if (endAngle < Math.PI) {
        this.minX = this.getRelativePoint(this.x, this.y, endAngle % (2 * Math.PI), this.radius1).x;
      } else if (startAngle > Math.PI) {
        this.minX = this.getRelativePoint(this.x, this.y, startAngle % (2 * Math.PI), this.radius2).x;
      }
    } else {
      this.minX = Math.abs(Math.PI - startAngle) < Math.abs(Math.PI - endAngle) ?
        this.minX = this.getRelativePoint(this.x, this.y, startAngle, this.radius2).x :
        this.minX = this.getRelativePoint(this.x, this.y, endAngle, this.radius1).x;
    }
  }

  /**
   * @desc 绘制图形对象
   */
  draw() {
    this.context.save();
    helpers_utils.forEach(Object.keys(contextConfig), key => {
      if (!helpers_utils.isUndefined(this.config[key])) {
        this.context[key] = this.config[key];
      }
    });
    let { x, y, radius1: r1, radius2: r2, startAngle: s, endAngle: e, anticlockwise: a } = this;

    // // 方案一（内圆清除）
    // this.context.beginPath();
    // this.context.moveTo(x, y);
    // this.context.arc(x, y, r1, s, e, a);
    // this.context.lineTo(x, y);
    // this.context.closePath();
    // this.context.fill();
    // this.context.beginPath();
    // this.context.moveTo(x, y);
    // this.context.arc(x, y, r2, 0, 2 * Math.PI, a);
    // this.context.lineTo(x, y);
    // this.context.closePath();
    // this.context.clip();
    // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 方案二（全路径）
    this.context.beginPath();
    let point1 = this.getRelativePoint(x, y, s, r2);
    let point2 = this.getRelativePoint(x, y, e, r1);
    this.context.moveTo(point1.x, point1.y);
    this.context.arc(x, y, r2, s, e, a);
    this.context.lineTo(point2.x, point2.y);
    this.context.arc(x, y, r1, e, s, !a);
    this.context.lineTo(point1.x, point1.y);
    this.context.closePath();
    this.context.fill();

    // // 方案三（外圆角）
    // this.context.beginPath();
    // let point1 = this.getRelativePoint(x, y, s, r2);
    // let point2 = this.getRelativePoint(x, y, s, r2 + (r1 - r2) / 2);
    // let point3 = this.getRelativePoint(x, y, s, r1);
    // let point4 = this.getRelativePoint(x, y, e, r2);
    // let point5 = this.getRelativePoint(x, y, e, r2 + (r1 - r2) / 2);
    // let point6 = this.getRelativePoint(x, y, e, r1);
    // this.context.moveTo(point1.x, point1.y);
    // this.context.arc(
    //   point2.x,
    //   point2.y,
    //   (r1 - r2) / 2,
    //   this.getRelativeRadian(point2.x, point2.y, point1.x, point1.y),
    //   this.getRelativeRadian(point2.x, point2.y, point3.x, point3.y),
    //   a
    // );
    // this.context.arc(x, y, r1, s, e, a);
    // this.context.arc(
    //   point5.x,
    //   point5.y,
    //   (r1 - r2) / 2,
    //   this.getRelativeRadian(point5.x, point5.y, point6.x, point6.y),
    //   this.getRelativeRadian(point5.x, point5.y, point4.x, point4.y),
    //   a
    // );
    // this.context.arc(x, y, r2, e, s, !a);
    // this.context.closePath();
    // this.context.fill();

    // // 方案四（内圆角）
    // this.context.beginPath();
    // let radian = Math.asin(Math.asin(((r1 - r2) / 2) / (r2 + (r1 - r2) / 2)));
    // s = s + radian;
    // e = e - radian;
    // let point1 = this.getRelativePoint(x, y, s, r2);
    // let point2 = this.getRelativePoint(x, y, s, r2 + (r1 - r2) / 2);
    // let point3 = this.getRelativePoint(x, y, s, r1);
    // let point4 = this.getRelativePoint(x, y, e, r2);
    // let point5 = this.getRelativePoint(x, y, e, r2 + (r1 - r2) / 2);
    // let point6 = this.getRelativePoint(x, y, e, r1);
    // this.context.moveTo(point1.x, point1.y);
    // this.context.arc(
    //   point2.x,
    //   point2.y,
    //   (r1 - r2) / 2,
    //   this.getRelativeRadian(point2.x, point2.y, point1.x, point1.y),
    //   this.getRelativeRadian(point2.x, point2.y, point3.x, point3.y),
    //   a
    // );
    // this.context.arc(x, y, r1, s, e, a);
    // this.context.arc(
    //   point5.x,
    //   point5.y,
    //   (r1 - r2) / 2,
    //   this.getRelativeRadian(point5.x, point5.y, point6.x, point6.y),
    //   this.getRelativeRadian(point5.x, point5.y, point4.x, point4.y),
    //   a
    // );
    // this.context.arc(x, y, r2, e, s, !a);
    // this.context.closePath();
    // this.context.fill();

    this.context.restore();
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
    if (!(helpers_utils.isNumber(point.x) && helpers_utils.isNumber(point.y))) {
      return false;
    }
    let result = false;
    let startAngle = this.startAngle % (2 * Math.PI);
    let endAngle = this.endAngle % (2 * Math.PI);
    let radius = Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    let radian = this.getRelativeRadian(this.x, this.y, point.x, point.y);
    if (radius >= this.radius2 && radius <= this.radius1) {
      if (startAngle > endAngle) {
        result = (radian >= 0 && radian <= endAngle) || radian >= startAngle && radian <= 2 * Math.PI;
      } else {
        result = radian >= startAngle && radian <= endAngle;
      }
    }
    return result;
  }

  /**
 * @desc 根据起点坐标和目标坐标点的斜边距离和弧度获取目标坐标点的坐标
 * @param {Number} x 起点坐标 x
 * @param {Number} y 起点坐标 y
 * @param {Number} radian 起点和目标点的弧度
 * @param {Number} bevel 起点和目标点的斜边距离
 * @returns {Object} 目标坐标
 */
  getRelativePoint(x, y, radian, bevel) {
    // let radian = angle * Math.PI / 180;
    return {
      x: x + Math.cos(radian) * bevel,
      y: y + Math.sin(radian) * bevel
    };
  }

  /**
   * @desc 根据起点坐标和目标坐标获取目标坐标相对于起点坐标的弧度
   * @param {Number} x1 起点坐标 x
   * @param {Number} y1 起点坐标 y
   * @param {Number} x2 目标坐标 x
   * @param {Number} y2 目标坐标 y
   * @returns {Object} 弧度
   */
  getRelativeRadian(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;
    let radian = Math.atan2(y, x);
    if (x > 0 && y > 0) {
      // 第一象限
      // radian = radian;
    } else if (x < 0, y > 0) {
      // 第二象限
      // radian = radian;
    } else if (x < 0, y < 0) {
      // 第三象限
      radian = 2 * Math.PI + radian
    } else if (x > 0, y < 0) {
      // 第四象限
      // radian = radian;
    }
    return radian;
  }
}

Arc_Arc.defaultConfig = {};



// CONCATENATED MODULE: ./src/chart/components/index.js






// CONCATENATED MODULE: ./src/index.js


// import sizeof from 'object-sizeof';







// CONCATENATED MODULE: ./src/components/Ring.js





const doNotDisplayColor = "#EBEBEB";

class Ring_RingContainer {
  constructor(dom, data) {
    this.dom = dom;
    this.canvas = document.createElement("canvas");
    this.canvas.width = parseInt(this.dom.style.width);
    this.canvas.height = parseInt(this.dom.style.height);
    this.dom.appendChild(this.canvas);

    this.chartCollector = new chart_ChartCollector(this.canvas);
    this.chartCollector.enableClick();
    this.chartCollector.enableMousemove();

    this.ring = new Ring_Ring(this.canvas, this.chartCollector, data);
    this.rectangleButton = new Ring_RectangleButton(this.canvas, this.chartCollector, this.ring, data);
  }

  update(data) {
    this.rectangleButton.update(data);
    let ringData = [];
    this.rectangleButton.rectangles.forEach(r => {
      if (r.config.fillStyle !== doNotDisplayColor) {
        ringData.push(r.datum);
      }
    });
    this.ring.update(ringData);
  }
}

class Ring_Ring {
  /**
   * @desc 构造函数
   * @param {Object} dom
   * @param {Array<Object>} data
   *  @param {String} key 键
   *  @param {Any} value 值
   *  @param {String} color 颜色
   */
  constructor(canvas, chartCollector, data) {
    this.canvas = canvas;
    this.chartCollector = chartCollector;

    this.initAngle = 1.5 * Math.PI;
    // this.initAngle = 0;
    this.textPoisition = 0.5;

    let c = this.canvas;
    let cw = parseInt(c.style.width);
    let ch = parseInt(c.style.height);
    this.x = cw / 2;
    this.y = ch * 0.4;
    this.radius1 = ch * 0.32;
    this.radius2 = ch * 0.24;

    this.arcs = [];
    this.arcTexts = [];

    // 背景圆环
    this.arcBackground = new Arc_Arc({
      fillStyle: "#EBEBEB",
      zIndex: -10,
      setting: {
        x: this.x,
        y: this.y,
        radius1: this.radius1,
        radius2: this.radius2,
        startAngle: 0,
        endAngle: 2 * Math.PI
      }
    });
    this.arcBackground.setChartCollector(this.chartCollector);

    // 数据圆环
    (async () => {
      let percent;
      let percentAngle;
      let startAngle = this.initAngle;
      let endAngle = this.initAngle;
      let point;
      let arc;
      let arcText;
      let animationDurationTime = defaultConfig.animationDurationTime / data.length;
      let totalDatum = data.reduce((total, datum) => total + datum.value, 0);

      for (let i = 0; i < data.length; i++) {
        percent = data[i].value / totalDatum;
        percentAngle = percent * 2 * Math.PI;
        startAngle = endAngle;
        endAngle = startAngle + percentAngle;
        // console.log(startAngle * 180 / Math.PI, endAngle * 180 / Math.PI);

        // 圆环
        await new Promise((resolve, reject) => {
          arc = new Arc_Arc({
            datum: data[i],
            setting: {
              x: this.x,
              y: this.y,
              radius1: this.radius1,
              radius2: this.radius2,
              startAngle,
              endAngle: startAngle
            }
          });
          arc.setChartCollector(this.chartCollector);
          this.arcs.push(arc);

          arc.update({
            setting: {
              endAngle
            },
            fillStyle: data[i].color,
            animationDurationTime,
            hook: {
              animated: () => {
                resolve();
              }
            }
          });

          // 圆环文本
          point = arc.getRelativePoint(arc.x, arc.y, arc.startAngle, arc.radius1 + 14);
          arcText = new Text_Text({
            datum: data[i],
            textAlign: "left",
            fontSize: 14,
            fillStyle: "#999999",
            setting: {
              text: "0%",
              x: point.x,
              y: point.y
            }
          });
          arcText.setChartCollector(this.chartCollector);
          this.arcTexts.push(arcText);

          arcText.update({
            textAlign: "left",
            setting: {
              text: `${data[i].value / totalDatum * 100}%`
            },
            animationDurationTime,
            hook: {
              animatingKey: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
                if (key === "text") {
                  return parseInt(Tween.Linear(s, parseInt(sArgs[key]), parseInt(eArgs[key]) - parseInt(sArgs[key]), e)) + "%";
                } else if (key === "x" || key === "y") {
                  let radian = Tween.Linear(s, startAngle, (endAngle - startAngle) * this.textPoisition, e).toFixed(2);
                  let angle = arc.endAngle % (2 * Math.PI);
                  chart.config.textAlign =
                    ((angle > 0 && angle < 0.5 * Math.PI) || (angle > 1.5 * Math.PI && angle < 2 * Math.PI)) ? "left" : "right";
                  let point = arc.getRelativePoint(arc.x, arc.y, radian, arc.radius1 + 14);
                  return key === "x" ? point.x : point.y + 7;
                }
              }
            }
          });

          // arc.arcText = arcText;
          arcText.arc = arc;
          this.chartCollector.draw();
        });
      }
    })();
  }

  update(data) {
    let animationDurationTime = defaultConfig.animationDurationTime;

    // 重置圆环和圆环文本
    let resetFn = () => {
      return new Promise(resolve => {
        let animatedCount = this.arcs.length;
        let hasRemove = false;
        // 删除圆环
        let removeArc = () => {
          let removeArcs = [];
          let dataKeys = data.map(a => a.key);
          for (let i = this.arcs.length - 1; i >= 0; i--) {
            if (dataKeys.indexOf(this.arcs[i].config.datum.key) === -1) {
              removeArcs.push(this.arcs.splice(i, 1)[0]);
            }
          }
          if (removeArcs.length > 0) {
            hasRemove = true;
          }
          for (let i = 0; i < removeArcs.length; i++) {
            removeArcs[i].update({
              zIndex: removeArcs[i].config.zIndex - 1,
              setting: {
                startAngle: removeArcs[i].endAngle
              },
              animationDurationTime,
              hook: {
                animated: chart => {
                  this.chartCollector.removeChart(chart);
                  this.chartCollector.removeEventChart(chart);
                  animatedCount--;
                  if (animatedCount === 0) {
                    resolve();
                  }
                }
              }
            });
          }
        }

        // 重置剩余圆环
        let resetArc = () => {
          let totalDatum = this.arcs.reduce((total, a) => total + a.config.datum.value, 0);
          let startAngle = this.initAngle;
          let endAngle;
          for (let i = 0; i < this.arcs.length; i++) {
            endAngle = startAngle + this.arcs[i].config.datum.value / totalDatum * 2 * Math.PI;
            this.arcs[i].update({
              setting: {
                startAngle,
                endAngle
              },
              animationDurationTime,
              hook: {
                animated: () => {
                  animatedCount--;
                  if (animatedCount === 0) {
                    resolve();
                  }
                }
              }
            });
            startAngle = endAngle;
          }
        }

        // 删除圆环文本
        let removeArcText = () => {
          let dataKeys = data.map(a => a.key);
          let removeArcTexts = [];
          for (let i = this.arcTexts.length - 1; i >= 0; i--) {
            if (dataKeys.indexOf(this.arcTexts[i].config.datum.key) === -1) {
              removeArcTexts.push(this.arcTexts.splice(i, 1)[0]);
            }
          }
          if (removeArcTexts.length > 0) {
            hasRemove = true;
          }
          for (let i = 0; i < removeArcTexts.length; i++) {
            removeArcTexts[i].update({
              zIndex: removeArcTexts[i].config.zIndex - 1,
              setting: {
                text: `0%`
              },
              animationDurationTime,
              hook: {
                animatingKey: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
                  if (key === "text") {
                    return parseInt(Tween.Linear(s, parseInt(sArgs[key]), parseInt(eArgs[key]) - parseInt(sArgs[key]), e)) + "%";
                  } else if (key === "x" || key === "y") {
                    let radian = (chart.arc.startAngle + (chart.arc.endAngle - chart.arc.startAngle) * this.textPoisition).toFixed(2);
                    let angle = radian % (2 * Math.PI);
                    chart.config.textAlign =
                      ((angle > 0 && angle < 0.5 * Math.PI) || (angle > 1.5 * Math.PI && angle < 2 * Math.PI)) ? "left" : "right";
                    let point = chart.arc.getRelativePoint(chart.arc.x, chart.arc.y, radian, chart.arc.radius1 + 14);
                    return key === "x" ? point.x : point.y + 7;
                  }
                },
                animated: chart => {
                  this.chartCollector.removeChart(chart);
                  this.chartCollector.removeEventChart(chart);
                  animatedCount--;
                  if (animatedCount === 0) {
                    resolve();
                  }
                }
              }
            });
          }
        }

        // 重置剩余圆环文本
        let resetArcText = () => {
          let totalDatum = this.arcTexts.reduce((total, t) => total + t.config.datum.value, 0);
          for (let i = 0; i < this.arcTexts.length; i++) {
            this.arcTexts[i].update({
              setting: {
                text: `${this.arcTexts[i].config.datum.value / totalDatum * 100}%`
              },
              animationDurationTime,
              hook: {
                animatingKey: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
                  if (key === "text") {
                    return parseInt(Tween.Linear(s, parseInt(sArgs[key]), parseInt(eArgs[key]) - parseInt(sArgs[key]), e)) + "%";
                  } else if (key === "x" || key === "y") {
                    let radian = (chart.arc.startAngle + (chart.arc.endAngle - chart.arc.startAngle) * this.textPoisition).toFixed(2);
                    let angle = radian % (2 * Math.PI);
                    chart.config.textAlign =
                      ((angle > 0 && angle < 0.5 * Math.PI) || (angle > 1.5 * Math.PI && angle < 2 * Math.PI)) ? "left" : "right";
                    let point = chart.arc.getRelativePoint(chart.arc.x, chart.arc.y, radian, chart.arc.radius1 + 14);
                    return key === "x" ? point.x : point.y + 7;
                  }
                },
                animated: () => {
                  animatedCount--;
                  if (animatedCount === 0) {
                    resolve();
                  }
                }
              }
            });
          }
        }

        removeArc();
        resetArc();
        removeArcText();
        resetArcText();
        if (hasRemove) {
          this.chartCollector.draw();
        } else {
          resolve();
        }
      });
    }

    // 新增并更新圆环和圆环文本
    let updateFn = () => {

      // 更新原有圆环数据
      let updateOriginArc = () => {
        let dataKeys = data.map(d => d.key);
        let index;
        for (let i = 0; i < this.arcs.length; i++) {
          index = dataKeys.indexOf(this.arcs[i].config.datum.key);
          if (index > -1) {
            this.arcs[i].config.datum = data[index];
          }
        }
      }

      // 新增圆环
      let addArc = () => {
        let addDatas = [];
        let arcKeys = this.arcs.map(a => a.config.datum.key);
        for (let i = 0; i < data.length; i++) {
          if (arcKeys.indexOf(data[i].key) === -1) {
            addDatas.push(data[i]);
          }
        }
        let arc;
        for (let i = 0; i < addDatas.length; i++) {
          arc = new Arc_Arc({
            datum: addDatas[i],
            setting: {
              x: this.x,
              y: this.y,
              radius1: this.radius1,
              radius2: this.radius2,
              startAngle: 2 * Math.PI + this.initAngle,
              endAngle: 2 * Math.PI + this.initAngle,
            }
          });
          arc.setChartCollector(this.chartCollector);
          this.arcs.push(arc);
        }
      }

      // 更新所有圆环
      let updateAllArc = () => {
        let totalDatum = this.arcs.reduce((total, a) => total + a.config.datum.value, 0);

        let percent;
        let percentAngle;
        let startAngle = this.initAngle;
        let endAngle = this.initAngle;
        for (let i = 0; i < this.arcs.length; i++) {
          percent = this.arcs[i].config.datum.value / totalDatum;
          percentAngle = percent * 2 * Math.PI;
          startAngle = endAngle;
          endAngle = startAngle + percentAngle;
          this.arcs[i].update({
            setting: {
              startAngle,
              endAngle
            },
            fillStyle: this.arcs[i].config.datum.color,
            animationDurationTime
          });
        }
      }

      // 更新原有圆环文本数据
      let updateOriginArcText = () => {
        let dataKeys = data.map(d => d.key);
        let index;
        for (let i = 0; i < this.arcTexts.length; i++) {
          index = dataKeys.indexOf(this.arcTexts[i].config.datum.key);
          if (index > -1) {
            this.arcTexts[i].config.datum = data[index];
          }
        }
      }

      // 新增圆环文本
      let addArcText = () => {
        let addDatas = [];
        let arcTextKeys = this.arcTexts.map(a => a.config.datum.key);
        for (let i = 0; i < data.length; i++) {
          if (arcTextKeys.indexOf(data[i].key) === -1) {
            addDatas.push(data[i]);
          }
        }
        let arc;
        let arcText;
        let point;
        for (let i = 0; i < addDatas.length; i++) {
          arc = this.arcs.find(a => a.config.datum.key === addDatas[i].key);
          point = arc.getRelativePoint(arc.x, arc.y, arc.startAngle, arc.radius1 + 14);
          arcText = new Text_Text({
            datum: addDatas[i],
            textAlign: "right",
            fontSize: 14,
            fillStyle: "#999999",
            setting: {
              text: "0%",
              x: point.x,
              y: point.y
            }
          });
          arcText.setChartCollector(this.chartCollector);
          arcText.arc = arc;
          this.arcTexts.push(arcText);
        }
      }

      // 更新所有圆环文本
      let updateAllArcText = () => {
        let totalDatum = this.arcTexts.reduce((total, a) => total + a.config.datum.value, 0);

        for (let i = 0; i < this.arcTexts.length; i++) {
          this.arcTexts[i].update({
            setting: {
              text: `${this.arcTexts[i].config.datum.value / totalDatum * 100}%`
            },
            animationDurationTime,
            hook: {
              animatingKey: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
                if (key === "text") {
                  return parseInt(Tween.Linear(s, parseInt(sArgs[key]), parseInt(eArgs[key]) - parseInt(sArgs[key]), e)) + "%";
                } else if (key === "x" || key === "y") {
                  let radian = (chart.arc.startAngle + (chart.arc.endAngle - chart.arc.startAngle) * this.textPoisition).toFixed(2);
                  let angle = radian % (2 * Math.PI);
                  chart.config.textAlign =
                    ((angle > 0 && angle < 0.5 * Math.PI) || (angle > 1.5 * Math.PI && angle < 2 * Math.PI)) ? "left" : "right";
                  let point = chart.arc.getRelativePoint(chart.arc.x, chart.arc.y, radian, chart.arc.radius1 + 14);
                  return key === "x" ? point.x : point.y + 7;
                }
              }
            }
          });
        }
      }

      updateOriginArc();
      addArc();
      updateAllArc();

      updateOriginArcText();
      addArcText();
      updateAllArcText();

      this.chartCollector.draw();
    }

    (async () => {
      await resetFn();
      updateFn();
    })();
  }
}

class Ring_RectangleButton {
  constructor(canvas, chartCollector, ring, data) {
    this.canvas = canvas;
    this.chartCollector = chartCollector;
    this.ring = ring

    this.create(data);
  }

  create(data) {
    this.rectangles = [];
    this.rectangleTexts = [];

    let rectangle;
    let rectangleText;
    let c = this.chartCollector.canvas;
    let cw = parseInt(c.style.width);
    let ch = parseInt(c.style.height);
    let x;
    let y;
    for (let i = 0; i < data.length; i++) {
      x = cw / 2 * (1 - (i + 1) % 2) + cw * 0.1;
      y = ch * 0.9 + 21 * (parseInt(i / 2) - 1);
      rectangle = this.createRectangle(data[i], x, y);
      rectangleText = this.createRectangleText(rectangle);
      this.rectangles.push(rectangle);
      this.rectangleTexts.push(rectangleText);
    }
  }

  // 创建方块
  createRectangle(datum, x, y) {
    let rectangle = new Rectangle_Rectangle({
      fillStyle: datum.color,
      setting: {
        x,
        y,
        width: 10,
        height: 10,
        radius: 2
      }
    });
    rectangle.setChartCollector(this.chartCollector);
    rectangle.datum = datum;

    rectangle.addEventListener("click", event => {
      if (rectangle.config.fillStyle === doNotDisplayColor) {
        // 设置高亮
        rectangle.config.fillStyle = rectangle.datum.color;
      } else {
        // 设置置灰
        rectangle.config.fillStyle = doNotDisplayColor;
      }
      let data = [];
      for (let i = 0; i < this.rectangles.length; i++) {
        if (this.rectangles[i].config.fillStyle !== doNotDisplayColor) {
          data.push(this.rectangles[i].datum);
        }
      }
      this.ring.update(data);
    });
    return rectangle;
  }

  // 创建方块文本
  createRectangleText(rectangle) {
    let datum = rectangle.datum;
    let rectangleText = new Text_Text({
      textAlign: "left",
      fontSize: 14,
      fillStyle: "#999999",
      setting: {
        text: `${datum.key}\t${parseInt(datum.value)}`,
        x: rectangle.x + rectangle.width + 14,
        y: rectangle.y + rectangle.height
      }
    });
    rectangleText.setChartCollector(this.chartCollector);
    rectangleText.datum = datum;
    rectangleText.rectangle = rectangle;
    return rectangleText;
  }

  // update(data) {
  //   for (let i = this.rectangles.length - 1; i >= 0; i--) {
  //     this.chartCollector.removeChart(this.rectangles[i]);
  //     this.chartCollector.removeEventChart(this.rectangles[i]);
  //     this.rectangles.splice(i, 1);
  //   }
  //   for (let i = this.rectangleTexts.length - 1; i >= 0; i--) {
  //     this.chartCollector.removeChart(this.rectangleTexts[i]);
  //     this.chartCollector.removeEventChart(this.rectangleTexts[i]);
  //     this.rectangleTexts.splice(i, 1);
  //   }
  //   this.create(data);
  // }

  update(data) {
    let animationDurationTime = defaultConfig.animationDurationTime;
    let c = this.chartCollector.canvas;
    let cw = parseInt(c.style.width);
    let ch = parseInt(c.style.height);

    // 删除不存在的方块和方块文本
    let remove = () => {
      let dataKeys = data.map(d => d.key);
      let rectangle;
      for (let i = this.rectangles.length - 1; i >= 0; i--) {
        if (dataKeys.indexOf(this.rectangles[i].datum.key) === -1) {
          rectangle = this.rectangles.splice(i, 1)[0];
          this.chartCollector.removeChart(rectangle);
          this.chartCollector.removeEventChart(rectangle);
        }
      }
      let rectangleText;
      for (let i = this.rectangleTexts.length - 1; i >= 0; i--) {
        if (dataKeys.indexOf(this.rectangleTexts[i].datum.key) === -1) {
          rectangleText = this.rectangleTexts.splice(i, 1)[0];
          this.chartCollector.removeChart(rectangleText);
          this.chartCollector.removeEventChart(rectangleText);
        }
      }
    };

    // 更新原有方块和方块文本数据
    let updateOrigin = () => {
      let dataKeys = data.map(d => d.key);
      let index;
      for (let i = 0; i < this.rectangles.length; i++) {
        index = dataKeys.indexOf(this.rectangles[i].datum.key);
        if (index > -1) {
          this.rectangles[i].datum = data[index];
        }
      }
      for (let i = 0; i < this.rectangleTexts.length; i++) {
        index = dataKeys.indexOf(this.rectangleTexts[i].datum.key);
        if (index > -1) {
          this.rectangleTexts[i].datum = data[index];
        }
      }
    }

    // 新增方块和方块文本
    let add = () => {
      let rectangle;
      let rectangleText;
      let rectangleKeys = this.rectangles.map(r => r.datum.key);
      for (let i = 0; i < data.length; i++) {
        // 
        if (rectangleKeys.indexOf(data[i].key) === -1) {
          rectangle = this.createRectangle(
            data[i],
            cw * 0.1,
            ch * 0.9
          );
          rectangleText = this.createRectangleText(rectangle);
          this.rectangles.push(rectangle);
          this.rectangleTexts.push(rectangleText);
          // 
        }
      }
    };

    // 重置方块和方块文本
    let reset = () => {
      for (let i = 0; i < this.rectangles.length; i++) {
        this.rectangles[i].update({
          setting: {
            x: cw / 2 * (1 - (i + 1) % 2) + cw * 0.1,
            y: ch * 0.9 + 21 * (parseInt(i / 2) - 1),
            width: 10,
            height: 10,
            radius: 2
          },
          animationDurationTime
        });
      }
      for (let i = 0; i < this.rectangleTexts.length; i++) {
        this.rectangleTexts[i].update({
          setting: {
            text: `${this.rectangleTexts[i].datum.key}\t${parseInt(this.rectangleTexts[i].datum.value)}`,
          },
          animationDurationTime,
          hook: {
            animatingKey: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
              if (key === "text") {
                return eArgs[key];
              } else if (key === "x") {
                return chart.rectangle.x + chart.rectangle.width + 14;
              } else if (key === "y") {
                return chart.rectangle.y + chart.rectangle.height;
              }
            }
          }
        });
      }
    }

    remove();
    updateOrigin();
    add();
    reset();
    this.chartCollector.draw();
  }
}


/* harmony default export */ var components_Ring = (Ring_RingContainer);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(1);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./public/index.css
var cjs_js_public = __webpack_require__(0);

// CONCATENATED MODULE: ./public/index.css

            

var public_options = {};

public_options.insert = "head";
public_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(cjs_js_public["a" /* default */], public_options);



/* harmony default export */ var public_0 = (cjs_js_public["a" /* default */].locals || {});
// CONCATENATED MODULE: ./public/img/hero1.png
/* harmony default export */ var hero1 = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/img/enemy0.png
/* harmony default export */ var enemy0 = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/img/enemy1.png
/* harmony default export */ var enemy1 = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/img/enemy2.png
/* harmony default export */ var enemy2 = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./src/components/Aircraft.js












class Aircraft_Container {
  constructor(dom) {
    this.dom = dom;
    this.canvas = document.createElement("canvas");
    this.canvas.width = parseInt(this.dom.style.width);
    this.canvas.height = parseInt(this.dom.style.height);
    this.dom.appendChild(this.canvas);

    this.chartCollector = new chart_ChartCollector(this.canvas);
    this.chartCollector.enableClick();
    this.chartCollector.enableMousemove();

    this.aircrafts = []
    this.dispatch = [] // 调度函数集合,统一一个时间间隔执行 kill 操作和生成敌人操作

    this.imgHero = new Image()
    this.imgHero.src = hero1
    this.imgEnemy0 = new Image()
    this.imgEnemy1 = new Image()
    this.imgEnemy2 = new Image()
    this.imgEnemy0.src = enemy0
    this.imgEnemy1.src = enemy1
    this.imgEnemy2.src = enemy2

    this.hero = new Aircraft_Aircraft({
      canvas: this.canvas,
      chartCollector: this.chartCollector,
      container: this,
      data: Object.assign(
        {
          point: { x: this.canvas.width / 2, y: this.canvas.height * (1 - 0.025) }
        },
        {
          role: 'hero',
          launchDirection: 'up',
          fillStyle: "#009ad6",
          img: this.imgHero
        }
      )
    });
    this.aircrafts.push(this.hero)

    this.background = new Aircraft_Background({
      canvas: this.canvas,
      chartCollector: this.chartCollector,
      container: this
    })

    let keyCodeSwitch = (event) => {
      let suffix = ''
      switch (event.type) {
        case 'keydown': suffix = 'On'; break;
        case 'keyup': suffix = 'Off'; break;
      }
      switch (event.keyCode) {
        // 开火
        case 74:
          this.hero[`launch${suffix}`]()
          break;
        // 左
        case 65:
          this.hero[`turnLeft${suffix}`]()
          break;
        // 右
        case 68:
          this.hero[`turnRight${suffix}`]()
          break;
        // 上
        case 87:
          this.hero[`turnUp${suffix}`]()
          break;
        // 下
        case 83:
          this.hero[`turnDown${suffix}`]()
          break;
      }
    }
    document.addEventListener('keydown', (event) => {
      keyCodeSwitch(event)
    }, false)
    // document.addEventListener('keydown', utils.debounce((event) => {
    //   keyCodeSwitch('keydown')
    // }, 100, true), false)
    document.addEventListener('keyup', (event) => {
      keyCodeSwitch(event)
    }, false)


    setInterval(() => {
      if (!this.chartCollector.isAfterDrawCurrent) {
        return
      }
      this.dispatch.forEach((f, i, a) => {
        f()
      })
      this.dispatch.length = 0

      this.aircrafts.forEach(a => {
        if (a.data.role === 'enemy') {
          a.data.point.y += 3
          a.data.point.x += parseInt(Math.random() * 10 % 10) % 2 === 0 ? 3 : -3
          if (a.data.point.y > this.canvas.height / 7 && !a.hasLaunch) {
            this.dispatch.push(a.launch.bind(a))
          }
        }
        a.update()
      })
      this.background.update()

      this.chartCollector.draw()
    }, 20)

    setInterval(() => {
      this.dispatch.push(this.createEnemy.bind(this))
    }, 2000)
  }

  createEnemy() {
    for (let i = 0, num = Math.random() * 100 % 10, intervals = num + 5; i < num; i++) {
      let radius = this.canvas.height * 0.025
      let width = this.canvas.width
      let enemy = new Aircraft_Aircraft({
        canvas: this.canvas,
        chartCollector: this.chartCollector,
        container: this,
        data: Object.assign({
          point: {
            x: width * ((Math.random() * 100 % 10 + 1) % parseInt(10 / num) + i * parseInt(10 / num)) / 10,
            // x: radius * 4 * (i + 1) + ((width / (radius * 2) - num) * radius),
            // x: radius * 6 * (i + 1),
            y: -radius
          }
        }, { role: 'enemy', launchDirection: 'down', fillStyle: '#840228', img: this[`imgEnemy${parseInt(Math.random() * 100 % 3)}`] })
      });
      this.aircrafts.push(enemy)
    }
  }
}

/**
 * @desc 背景模块
 */
class Aircraft_Background {
  constructor(options) {
    this.canvas = options.canvas;
    this.chartCollector = options.chartCollector;
    this.container = options.container;

    let c = this.canvas;
    this.cw = parseInt(c.style.width);
    this.ch = parseInt(c.style.height);
    this.instance = new Polygon_Polygon({
      fillStyle: "#11264f",
      setting: {
        points: [
          { x: 0, y: 0 },
          { x: 0, y: this.ch },
          { x: this.cw, y: this.ch },
          { x: this.cw, y: 0 },
          { x: 0, y: 0 },
        ]
      }
    });
    this.instance.setChartCollector(this.chartCollector);

    this.text = new Text_Text({
      fillStyle: "#11264f",
      fontSize: 30,
      setting: {
        text: this.container.hero.killCount,
        x: 200,
        y: 60
      }
    })
    this.text.setChartCollector(this.chartCollector);
  }

  update() {
    this.text.update({
      setting: {
        text: this.container.hero.killCount,
        x: 200,
        y: 60
      }
    })
  }
}

/**
 * @desc 飞机模块
 */
class Aircraft_Aircraft {
  constructor(options) {
    this.canvas = options.canvas;
    this.chartCollector = options.chartCollector;
    this.container = options.container;
    this.data = options.data;
    this.keySign = {
      left: false,
      right: false,
      up: false,
      down: false,
      launch: false
    }

    let c = this.canvas;
    this.cw = parseInt(c.style.width);
    this.ch = parseInt(c.style.height);
    this.bullets = []
    this.hasLaunch = false
    this.killCount = 0

    this.instance = new Circle_Circle({
      data: this.data,
      fillStyle: this.data.fillStyle,
      setting: {
        x: this.data.point.x,
        y: this.data.point.y - this.ch * 0.025,
        radius: this.ch * 0.025
      }
    });
    this.instance.setChartCollector(this.chartCollector);
  }

  launch() {
    if (!this.hasLaunch) {
      this.hasLaunch = true
    }
    this.bullets.push(new Aircraft_Bullet({
      canvas: this.canvas,
      chartCollector: this.chartCollector,
      aircraft: this,
      fillStyle: this.data.fillStyle,
      data: {
        point: {
          x: this.instance.x,
          y: this.instance.y - this.ch * 0.025,
        }
      },
      launchDirection: this.data.launchDirection
    }))
  }
  update() {
    this.keySign.left && (this.data.point.x -= 6)
    this.keySign.right && (this.data.point.x += 6)
    this.keySign.up && (this.data.point.y -= 6)
    this.keySign.down && (this.data.point.y += 6)
    if (this.keySign.launch) {
      this.launch()
    }
    this.instance.update({
      setting: {
        x: this.data.point.x,
        y: this.data.point.y,
        radius: this.ch * 0.025
      },
      hook: {
        animating: (chart, s, e, sArgs, eArgs, Tween) => {
          if (chart.x - chart.radius <= 0) {
            return this.data.point.x = chart.radius
          } else if (chart.x + chart.radius >= this.cw) {
            this.data.point.x = this.cw - chart.radius
          } else if (this.data.role === 'hero' && chart.y - chart.radius <= 0) {
            this.data.point.y = chart.radius
          } else if (this.data.role === 'hero' && chart.y + chart.radius >= this.ch) {
            this.data.point.y = this.ch - chart.radius
          } else if (this.data.role === 'enemy' && chart.y - chart.radius >= this.ch) {
            this.container.dispatch.push(this.kill.bind(this))
          }

          // 撞中目标
          this.container.aircrafts.forEach(a => {
            if (a !== this) {
              let hasPoint = a.instance.hasPoint.bind(a.instance)
              let rule = distance => {
                return distance < Math.pow(this.instance.radius, 2)
              }
              if (hasPoint({ x: this.instance.x, y: this.instance.y }, rule) || hasPoint({ x: this.instance.x + this.instance.width, y: this.instance.height }, rule)) {
                if (a.data.role === 'enemy' && this.data.role === 'enemy') {
                  return
                }
                this.container.dispatch.push(this.kill.bind(this))
                this.container.dispatch.push(a.kill.bind(a))
              }
            }
          })
        },
        draw: chart => {
          chart.context.drawImage(
            this.data.img,
            chart.x - chart.radius,
            chart.y - chart.radius,
            chart.radius * 2,
            chart.radius * 2
          )
        }
      }
    });
    this.bullets.forEach(b => {
      b.update()
    })
  }

  kill() {
    this.chartCollector.removeChart(this.instance);
    this.chartCollector.removeEventChart(this.instance);
    while (this.bullets.length > 0) {
      this.bullets.pop().kill()
    }
    this.container.aircrafts.forEach((b, i, a) => {
      if (b === this) {
        a.splice(i, 1)
      }
    })
  }

  launchOn() {
    this.keySign.launch = true
  }
  launchOff() {
    this.keySign.launch = false
  }
  turnLeftOn() {
    this.keySign.left = true
  }
  turnLeftOff() {
    this.keySign.left = false
  }
  turnRightOn() {
    this.keySign.right = true
  }
  turnRightOff() {
    this.keySign.right = false
  }
  turnUpOn() {
    this.keySign.up = true
  }
  turnUpOff() {
    this.keySign.up = false
  }
  turnDownOn() {
    this.keySign.down = true
  }
  turnDownOff() {
    this.keySign.down = false
  }
}

/**
 * @desc 子弹模块
 * @param {Object} data
 *  @param {Object} point
 */
class Aircraft_Bullet {
  constructor(options) {
    this.canvas = options.canvas;
    this.chartCollector = options.chartCollector;
    this.aircraft = options.aircraft;
    this.data = options.data;
    this.launchDirection = options.launchDirection || 'up';

    this.instance = new Rectangle_Rectangle({
      data: options.data,
      fillStyle: options.fillStyle,
      setting: {
        x: options.data.point.x += this.launchDirection === 'up' ? -1 : 1,
        y: options.data.point.y,
        width: 2,
        height: 10,
        radius: 1
      }
    });
    this.instance.setChartCollector(this.chartCollector);
  }

  kill() {
    this.chartCollector.removeChart(this.instance);
    this.chartCollector.removeEventChart(this.instance);
    this.aircraft.bullets.forEach((b, i, a) => {
      if (b === this) {
        a.splice(i, 1)
      }
    })
  }

  update() {
    const step = parseInt(this.canvas.style.height) * 0.025
    this.data.point.y += this.launchDirection === 'up' ? -step : step
    this.instance.update({
      setting: {
        x: this.data.point.x,
        y: this.data.point.y,
        width: 2,
        height: 10,
        radius: 1
      },
      hook: {
        animating: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
          // 子弹击中墙
          if (chart.y <= 0 || chart.y - chart.height >= parseInt(this.canvas.style.height)) {
            this.aircraft.container.dispatch.push(this.kill.bind(this))
          }
          // 子弹击中目标
          this.aircraft.container.aircrafts.forEach(a => {
            if (a !== this.aircraft) {
              if (a.data.role === 'enemy' && this.aircraft.data.role === 'enemy') {
                return
              }
              let hasPoint = a.instance.hasPoint.bind(a.instance)
              if (hasPoint({ x: chart.x, y: chart.y }) || hasPoint({ x: chart.x + chart.width, y: chart.height })) {
                this.aircraft.killCount++
                this.aircraft.container.dispatch.push(this.kill.bind(this))
                this.aircraft.container.dispatch.push(a.kill.bind(a))
              }
            }
          })
          // 子弹击中子弹
          this.aircraft.container.aircrafts.forEach(a => {
            a.bullets.forEach(b => {
              if (b !== this) {
                if (a.data.role === 'enemy' && this.aircraft.data.role === 'enemy') {
                  return
                }
                let hasPoint = b.instance.hasPoint.bind(b.instance)
                if (hasPoint({ x: chart.x, y: chart.y }) || hasPoint({ x: chart.x + chart.width, y: chart.height })) {
                  this.aircraft.container.dispatch.push(this.kill.bind(this))
                  this.aircraft.container.dispatch.push(b.kill.bind(b))
                }
              }
            })
          })
        }
      }
    });
  }
}

/* harmony default export */ var components_Aircraft = (Aircraft_Container);
// CONCATENATED MODULE: ./src/components/index.js



// export * from "../chart/config/defaultConfig";


// CONCATENATED MODULE: ./public/index.js






/***/ })
/******/ ]);