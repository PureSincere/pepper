[toc]

# CanvasFrame

## API

- ChartCollector create(canvas)
  - 说明：创建图形容器对象
  - 参数
    - canvas：canvas 对象
  - 返回：ChartCollector 对象，图形容器对象

- void draw()
  - 说明：绘制所有图形对象

- void enableClick()
  - 说明：注册 canvas 对象的 click 事件（图形的 click 事件）

- void enableMousemove()
  - 说明：注册 canvas 对象的 mousemove 事件（图形的 mousemove、mouseover 和 mouseout 事件）

- void addEventListener(type, eventListener)
  - 说明：注册事件监听函数
  - 参数
    - type：事件名称
    - eventListener：事件监听函数

- void removeEventListener(type, eventListener)
  - 说明：注销事件监听函数
  - 参数
    - type：事件名称
    - eventListener：事件监听函数

- Circle Circle(x, y, radius)
  - 说明：创建圆形图形对象
  - 参数
    - x：圆的中心（圆心）的 x 轴坐标
    - y：圆的中心（圆心）的 y 轴坐标
    - radius：圆的半径弧度
  - 返回：Circle 对象，圆形图形对象

- Polygon Polygon(x, y, radius)
  - 说明：创建多边形图形对象
  - 参数
    - points：坐标对象数组
  - 返回：Polygon 对象，多边形图形对象

- Rectangle Rectangle(x, y, radius)
  - 说明：创建矩形图形对象
  - 参数
    - x：矩形左上角的 x 坐标
    - y：矩形左上角的 y 坐标
    - width：矩形的宽度，以像素计
    - height：矩形的高度，以像素计
  - 返回：Rectangle 对象，矩形图形对象

- Line Line(x, y, radius)
  - 说明：创建直线图形
  - 参数
    - x1：直线起始点 x 坐标轴的坐标值
    - y1：直线起始点 y 坐标轴的坐标值
    - x2：直线结束点 x 坐标轴的坐标值
    - y2：直线结束点 y 坐标轴的坐标值
  - 返回：Line 对象，直线图形

## 应用

### 概况
### 场景
### 实践
### 示例

文件 `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title></title>

  <style type="text/css">
  </style>
  <script type="text/javascript" src="dist/canvasFrame.js"></script>
</head>

<body>
  <canvas id="canvas" width="600" height="600"></canvas>
  <script type="text/javascript">
    let canvas = document.getElementById("canvas");

    let canvasFrame = CanvasFrame.create(canvas);
    canvasFrame.enableClick();
    canvasFrame.enableMousemove();

    let circle = canvasFrame.Circle(100, 100, 100);
    circle.addEventListener("click", (...args) => {
      console.log("click at circle");
    });
    circle.addEventListener("mousemove", (...args) => {
      console.log("mousemove at circle");
    });
    circle.addEventListener("mouseover", (...args) => {
      console.log("mouseover at circle");
    });
    circle.addEventListener("mouseout", (...args) => {
      console.log("mouseout at circle");
    });

    let data = [
      { x: 250, y: 300 },
      { x: 200, y: 350 },
      { x: 300, y: 350 }
    ];
    let polygon = canvasFrame.Polygon(data);
    polygon.addEventListener("click", (...args) => {
      console.log("click at polygon");
    });
    polygon.addEventListener("mousemove", (...args) => {
      console.log("mousemove at polygon");
    });
    polygon.addEventListener("mouseover", (...args) => {
      console.log("mouseover at polygon");
    });
    polygon.addEventListener("mouseout", (...args) => {
      console.log("mouseout at polygon");
    });

    canvasFrame.draw();

    console.log("circle.chartCollector", circle.chartCollector);
    console.log("circle.chartCollector === polygon.chartCollecto: ", polygon.chartCollector === circle.chartCollector);
  </script>
</body>

</html>
```

## 参考

- https://www.cnblogs.com/zhangjk1993/p/6139146.html
- https://www.cnblogs.com/chengduxiaoc/p/7664397.html

## 问题 & 优化

- Grid，Bar 除了构造函数，其它函数入参不要用 this.config
- index.html yData 长度
- index.html 确定下不要 bar.update，改成 canvasFrame.update 行不行得通
- 配置对象搞成一个共用的
- 配置对象注册后，数据响应驱动
- 去掉 canvasFrame.Bar 这种方式，实现全配置
- 解决 addMotion 不要重复注册
- 图像加多一个包含图像数组属性，方便树形查找、修改
- Chart 多继承 MotionCollector EventListenerCollector
- update callback 改成钩子
- 清除区域
- 根据帧速率调整渲染
- 局部清除
- 开源