"use strict";

import '../../public/index.css'
import imgHeroPath from '../../public/img/hero1.png'
import imgEnemy0Path from '../../public/img/篮球.png'
import imgEnemy1Path from '../../public/img/蔡徐坤.png'
import img Enemy2Path from '../../public/img/蔡徐坤1.png'

import { defaultConfig } from "../chart/config";
import utils from "../helpers/utils";
import { ChartCollector, Rectangle, Polygon, Circle, Text } from "../index";

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
    this.dispatch = [] // 调度函数集合,统一一个时间间隔执行 kill 操作和生成敌人操作

    this.imgHero = new Image()
    this.imgHero.src = imgHeroPath
    this.imgEnemy0 = new Image()
    this.imgEnemy1 = new Image()
    this.imgEnemy2 = new Image()
    this.imgEnemy0.src = imgEnemy0Path
    this.imgEnemy1.src = imgEnemy1Path
    this.imgEnemy2.src = imgEnemy2Path

    this.hero = new Aircraft({
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

    this.background = new Background({
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
      let enemy = new Aircraft({
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

    this.text = new Text({
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
    this.hasLaunch = false
    this.killCount = 0

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

  launch() {
    if (!this.hasLaunch) {
      this.hasLaunch = true
    }
    this.bullets.push(new Bullet({
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
class Bullet {
  constructor(options) {
    this.canvas = options.canvas;
    this.chartCollector = options.chartCollector;
    this.aircraft = options.aircraft;
    this.data = options.data;
    this.launchDirection = options.launchDirection || 'up';

    this.instance = new Rectangle({
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

export default Container;