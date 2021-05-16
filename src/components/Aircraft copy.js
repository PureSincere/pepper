"use strict";

import { defaultConfig } from "../chart/config";
import utils from "../helpers/utils";
import { ChartCollector, Rectangle, Polygon, Circle } from "../index";

class Container {
  constructor(dom) {
    this.dom = dom;
    this.canvas = document.createElement("canvas");
    this.canvas.width = parseInt(this.dom.style.width);
    this.canvas.height = parseInt(this.dom.style.height);
    this.dom.appendChild(this.canvas);

    this.chartCollector = new ChartCollector(this.canvas);
    this.chartCollector.enableClick();
    this.chartCollector.enableMousemove();

    this.aircrafts = []

    this.background = new Background({
      canvas: this.canvas,
      chartCollector: this.chartCollector,
      container: this
    })

    this.hero = new Aircraft({
      canvas: this.canvas,
      chartCollector: this.chartCollector,
      container: this,
      data: Object.assign({ point: { x: this.canvas.width / 2, y: parseInt(this.canvas.height) * (1 - 0.025) } }, { role: 'hero', launchDirection: 'up', fillStyle: "#009ad6" })
    });
    this.aircrafts.push(this.hero)

    // this.aircrafts.push(new Aircraft({
    //   canvas: this.canvas,
    //   chartCollector: this.chartCollector,
    //   container: this,
    //   data: Object.assign({ point: { x: this.canvas.width / 2, y: 0 - parseInt(this.canvas.height) * 0.025 } }, { role: 'enemy', launchDirection: 'down', fillStyle: "#840228" })
    // }))

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
      if (!this.chartCollector.isAfterDrawCurrent) return
      this.aircrafts.forEach(a => {
        a.update()
      })
      this.chartCollector.draw()
    }, defaultConfig.animationDurationTime)
    // this.ring = new Ring(this.canvas, this.chartCollector, data);
    // this.rectangleButton = new RectangleButton(this.canvas, this.chartCollector, this.ring, data);
  }

  update(data) {
    // this.rectangleButton.update(data);
    // let ringData = [];
    // this.rectangleButton.rectangles.forEach(r => {
    //   if (r.config.fillStyle !== doNotDisplayColor) {
    //     ringData.push(r.datum);
    //   }
    // });
    // this.ring.update(ringData);
  }
}

/**
 * @desc 背景模块
 */
class Background {
  constructor(options) {
    this.canvas = options.canvas;
    this.chartCollector = options.chartCollector;
    this.container = options.container;

    let c = this.canvas;
    this.cw = parseInt(c.style.width);
    this.ch = parseInt(c.style.height);
    this.instance = new Polygon({
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
  }
}

/**
 * @desc 飞机模块
 */
class Aircraft {
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

    this.instance = new Circle({
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

  update() {
    this.keySign.left && (this.data.point.x -= 3)
    this.keySign.right && (this.data.point.x += 3)
    this.keySign.up && (this.data.point.y -= 3)
    this.keySign.down && (this.data.point.y += 3)
    if (this.keySign.launch) {
      this.bullets.push(new Bullet({
        canvas: this.canvas,
        chartCollector: this.chartCollector,
        aircraft: this,
        data: {
          point: {
            x: this.instance.x,
            y: this.instance.y - this.ch * 0.025,
          }
        },
        launchDirection: this.data.launchDirection
      }))
    }

    // 敌人
    if (this.data.role === 'enemy') {
      this.data.point.y += 3
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
          } else if (chart.y + chart.radius >= this.ch) {
            this.data.point.y = this.ch - chart.radius
          }
          // else if (chart.y - chart.radius <= 0) {
          //   this.data.point.y = chart.radius
          // }
        }
      }
    });
    this.bullets.forEach(b => {
      b.update()
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
class Bullet {
  constructor(options) {
    this.canvas = options.canvas;
    this.chartCollector = options.chartCollector;
    this.aircraft = options.aircraft;
    this.data = options.data;
    this.launchDirection = options.launchDirection || 'up';

    this.instance = new Rectangle({
      data: options.data,
      fillStyle: "#009ad6",
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

  update() {
    const step = parseInt(this.canvas.style.height) * 0.05
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
        animating: (chart, s, e, sArgs, eArgs, Tween) => {
          // let isAfterDrawCurrent = this.chartCollector.isAfterDrawCurrent
          this.chartCollector.isAfterDrawCurrent = false
          // 子弹撞墙
          if (chart.y <= 0 || chart.y - chart.height >= parseInt(this.canvas.style.height)) {
            this.chartCollector.removeChart(this);
            this.chartCollector.removeEventChart(this);
            this.aircraft.bullets.forEach((b, i, a) => {
              if (b === this) {
                a.splice(i, 1)
              }
            })
          }
          // // 子弹击中目标
          // this.aircraft.container.aircrafts.forEach(a => {
          //   let hasPoint = a.instance.hasPoint.bind(a.instance)
          //   if (hasPoint({ x: chart.x, y: chart.y }) || hasPoint({ x: chart.x + chart.width, y: chart.height })) {
          //     this.chartCollector.removeChart(this);
          //     this.chartCollector.removeEventChart(this);
          //     this.aircraft.bullets.forEach((b, i, a) => {
          //       if (b === this) {
          //         a.splice(i, 1)
          //       }
          //     })
          //   }
          // })
          // this.chartCollector.isAfterDrawCurrent = isAfterDrawCurrent
          // if (chart.y <= 0 || chart.y - chart.height >= parseInt(this.canvas.style.height)) {


          // this.chartCollector.removeChart(chart);
          // this.chartCollector.removeEventChart(chart);
          // this.aircraft.bullets.forEach((b, i, a) => {
          //   if (b === this) {
          //     a.splice(i, 1)
          //   }
          // })
          // }
        }
      }
    });
  }
}























class Ring {
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
    this.arcBackground = new Arc({
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
          arc = new Arc({
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
          arcText = new Text({
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
              animating: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
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
                animating: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
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
                animating: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
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
          arc = new Arc({
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
          arcText = new Text({
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
              animating: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
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

class RectangleButton {
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
    let rectangle = new Rectangle({
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
    let rectangleText = new Text({
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
          // 
        }
      }
      let rectangleText;
      for (let i = this.rectangleTexts.length - 1; i >= 0; i--) {
        if (dataKeys.indexOf(this.rectangleTexts[i].datum.key) === -1) {
          rectangleText = this.rectangleTexts.splice(i, 1)[0];
          this.chartCollector.removeChart(rectangleText);
          this.chartCollector.removeEventChart(rectangleText);
          // 
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
            animating: (chart, val, key, s, e, sArgs, eArgs, Tween) => {
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

export default Container;