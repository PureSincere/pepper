"use strict";

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

export default defaults;
