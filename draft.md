# pepper

__请先了解 Chart 类__

## 图形容器类 ChartCollector

- ChartCollector 类对事件处理模块的处理
  - addEventChart 通过 compareMinX 比对最小左坐标来排序的有序数组
  - hasEventChart 由于在 addEventChart 过程中 this.eventCharts 是通过 compareMinX 比对最小 x 坐标来排序的有序数组，因此可以通过二分搜索（只对有序序列搜索）【可以考虑用查找二叉树替换】查找符合的 eventChart。
  - removeEventChart
  - searchEventCharts：查找指定坐标对象位于和不位于事件图形对象集合的某个事件的图形对象集合，引用到 Chart 类的 comparePointX 方法
  - enableClick：注册 canvas 元素的 click 事件
  - handleClick：类似于事件委托，通过触发 ChartCollector 实例的 canvas 载体 DOM 的 click 事件捕获（不是事件冒泡）触发捕捉到的 Chart 实例触发 click 事件
  - enableClick：注册 canvas 元素的 mousemove 事件（包括图形的 mousemove、mouseover 和 mouseout 事件）
  - handleMousemove
```js
// this.eventCharts 对象如下所示
{
  click: <Chart>[],
  mousemove: <Chart>[]
}
```

- ChartCollector 类对动作处理模块的处理
  - animate 函数的执行过程中执行 this.notifyCharts("notifyMotions");
  - notifyCharts：循环执行 this.charts 的所有 Chart 类实例的 notifyMotions 方法

- ChartCollector 类对渲染模块的处理
  - addChart：通过 compareZIndex 实现 zIndex 基准排序，这样能够使得在渲染时，客户端设置的 zIndex 越大越后渲染达到分层 layout 作用。
  - hasChart：对有序序列二分搜索【可以考虑用查找二叉查找树替换】
  - removeChart
  - draw：记录当前绘制动作的初始时间（当前绘制动作包含很多帧） beforeDrawTime，一帧内执行 animate 方法
  - animate
    - 重置 ChartCollector 的当前绘制动作 draw 刚开始 this.isAfterDrawCurrent = false;
    - 记录绘制当前帧的初始时间 beforeDrawCurrentFrameTime
    - 触发包含的所有图形的动作执行 this.notifyCharts("notifyMotions");
    - 触发包含的所有图形的绘制函数 draw 执行 this.notifyCharts("draw");
    - 记录绘制当前帧的结束时间 afterDrawCurrentFrameTime
    - 通过 loopNumber 识别 ChartCollector 的当前绘制动作 draw 是否结束，结束则记录 isAfterDrawCurrent 标识为 true

- ChartCollector 类对 FPS 的记录
  - drawFps


## 图形类 Chart

继承自 MotionCollector、EventListenerCollector

注意：现有实现方式是通过 Chart 继承 MotionCollector、MotionCollector 继承 EventListenerCollector，可以优化为多继承方式

__请先了解事件处理模块和动作处理模块__

TS 的接入可以减少断言方法的频繁使用，在编码阶段避开方法执行过程中因类型不匹配而导致的错误，实现接口、重载，目标很明确，实现 OOP 只需向 java 对齐即可。

- 设置容器实例
  - setChartCollector 装饰模式（动态地给一个对象增加一些额外的职责，就增加对象功能来说，装饰模式比生成子类实现更为灵活，不想用继承可以考虑用装饰模式，很多模式究其根本就是通过对对象的引用，达到利用另外一个堆的方法或者属性的代码的执行）

```js
// 抽象界面构件类：抽象构件类
abstract class Component {
  public abstract display(): void;
}

// 文本框类：具体构件类
class TextBox extends Component {
  public display(): void {
    console.log("显示文本框！");
  }
}

// 列表框类：具体构件类
class ListBox extends Component {
  public display(): void {
    console.log("显示列表框！");
  }
}

// 构件装饰类：抽象装饰类
class ComponentDecorator extends Component {
  private component: Component; // 对抽象构件类型对象的引用

  public constructor(component: Component) {
    super();
    // 注入抽象构件类型的对象
    this.component = component;
  }

  public display(): void {
    this.component.display();
  }

}

// 滚动条装饰类：具体装饰类
class ScrollBarDecorator extends ComponentDecorator {
  public constructor(component: Component) {
    super(component);
  }

  public display(): void {
    this.setScrollBar();
    super.display();
  }

  public setScrollBar(): void {
    console.log("为构件增加滚动条！");
  }

}

// 黑色边框装饰类：具体装饰类
class BlackBorderDecorator extends ComponentDecorator {

  public constructor(component: Component) {
    super(component);
  }

  public display(): void {
    this.setBlackBorder();
    super.display();
  }

  public setBlackBorder(): void {
    console.log("为构件增加黑色边框！");
  }

}

// 客户端
let
  component: Component,
  componentSB: Component,
  componentBB: Component;

component = new TextBox(); // 定义具体构件
componentSB = new ScrollBarDecorator(component); // 定义装饰后的构件
componentBB = new BlackBorderDecorator(componentSB); // 定义装饰后的构件
componentBB.display();

// npm install typescript => npx tsc index.ts => node index.js
```

- Chart 类对事件处理模块的处理
  - addEventListener：订阅事件句柄，和 DOM 的函数标识符 addEventListener 相似，仿造的。
  - removeEventListener：删除事件句柄
  - comparePointX：从左比对，以达最高检索到合适图形对象。比对当前图形对象的最小 x 坐标轴坐标值与指定坐标对象的 x 坐标轴坐标值的大小

__请查看 ChartCollector 类对事件处理模块的处理__

- Chart 类对动作处理模块的处理
  - notifyMotions：触发动作行为的执行

__请查看 ChartCollector 类对动作处理模块的处理__

### 事件处理模块

通过发布订阅模式实现（依赖收集、依赖删除、依赖查询、派发更新（基本会引用桥接模式、命令模式））

```js
namespace ObserverPattern {
  //抽象观察类
  interface Observer {
    getName(): string;
    setName(name: string): void;
    help(): void; //声明支援盟友方法
    beAttacked(acc: AllyControlCenter): void; //声明遭受攻击方法
  }

  //战队成员类：具体观察者类
  class Player implements Observer {
    private name: string;

    public constructor(name: string) {
      this.name = name;
    }

    public setName(name: string): void {
      this.name = name;
    }

    public getName(): string {
      return this.name;
    }

    //支援盟友方法的实现
    public help(): void {
      console.log('坚持住，' + this.name + '来救你！');
    }

    //遭受攻击方法的实现，当遭受攻击时将调用战队控制中心类的通知方法notifyObserver()来通知盟友
    public beAttacked(acc: AllyControlCenter): void {
      console.log(this.name + '被攻击！');
      acc.notifyObserver(this.name);
    }
  }

  //战队控制中心类：目标类
  abstract class AllyControlCenter {
    protected allyName: string; //战队名称
    protected players: Array<Observer> = new Array<Observer>(); //定义一个集合用于存储战队成员

    public setAllyName(allyName: string): void {
      this.allyName = allyName;
    }

    public getAllyName(): string {
      return this.allyName;
    }

    //注册方法
    public join(obs: Observer): void {
      console.log(obs.getName() + '加入' + this.allyName + '战队！');
      this.players.push(obs);
    }

    //注销方法
    public quit(obs: Observer): void {
      //...
    }

    //声明抽象通知方法
    public abstract notifyObserver(name: string): void;
  }

  //具体战队控制中心类：具体目标类
  class ConcreteAllyControlCenter extends AllyControlCenter {
    public constructor(allyName: string) {
      super();
      console.log(allyName + '战队组建成功！');
      console.log('----------------------------');
      this.allyName = allyName;
    }

    //实现通知方法
    public notifyObserver(name: string): void {
      console.log(this.allyName + '战队紧急通知，盟友' + name + '遭受敌人攻击！');
      //遍历观察者集合，调用每一个盟友（自己除外）的支援方法
      for (let obs of this.players) {
        if (obs.getName().toLowerCase() !== name) {
          obs.help();
        }
      }
    }
  }

  // 主程序
  export class Client {
    public static main(): void {
      //定义观察目标对象
      let acc: AllyControlCenter;
      acc = new ConcreteAllyControlCenter('金庸群侠');

      //定义四个观察者对象
      let player1: Observer, player2: Observer, player3: Observer, player4: Observer;

      player1 = new Player('杨过');
      acc.join(player1);

      player2 = new Player('令狐冲');
      acc.join(player2);

      player3 = new Player('张无忌');
      acc.join(player3);

      player4 = new Player('段誉');
      acc.join(player4);

      //某成员遭受攻击
      player1.beAttacked(acc);
    }
  }
}

// 客户端
ObserverPattern.Client.main();
```

- 事件管理器类 EventListenerCollector
  - hasEventListener
  - addEventListener
  - removeEventListener
  - notifyEventListeners

- 事件对象类 Event

通过 EventListenerCollector instance 的 eventListeners 属性的某一类事件类型属性存储依赖集合，格式为

```js
// eventListeners
{
  click: <Function>[],
  mousemove: <Function>[]
}
```

__请查看 Chart 类对事件处理模块的处理__

### 动作处理模块

通过发布订阅模式实现

- 行为容器类 MotionCollector
  - hasMotion
  - addMotion
  - removeMotion
  - notifyMotions

__请查看 Chart 类对动作处理模块的处理__

## 配置项

- 默认配置：defaultConfig 依次由 commonConfig、fontConfig、contextConfig 配置通过 mergeConfigIfUndefined 函数浅拷贝同名配置项生成
  - 通用配置：commonConfig
  - 字体默认配置：fontConfig
  - canvas 上下文默认配置：contextConfig
  - 合并函数
    - 浅拷贝：mergeConfigIfUndefined
    - 设置 font 属性 getter：definePropertyOfFont

- 配置项合并函数 mergeConfig（工具函数，纯函数）
  - 类似于 Object.assign 适合于多参，arguments 和递归
  - 深拷贝（数组的处理）
  - 特殊属性处理（font 属性）

> 感兴趣可查看 vue、axios 的合并配置做法。

```js
// vue
// 设置 vm.$options
if (options && options._isComponent) {
  initInternalComponent(vm, options)
} else {
  vm.$options = mergeOptions(
    resolveConstructorOptions(vm.constructor),
    options || {},
    vm
  )
}
```

## 基础图形类

- Circle
  - defaultConfig：自定义默认配置
  - constructor：合并默认配置和自定义配置，自定义配置优先级更高
  - draw：图形绘制
  - update
    - 合并配置
    - 设置动作函数 motion
      - 设置动作生命周期 HOOK（动画中执行完、动画中某个键值一帧执行动画中、动画后），通过缓动函数设置动画轨迹，嫌慢后快还是先快后慢还是贝塞尔曲线动作随便搞

## 客户端图形类

- Aircraft
  - update：设置各个基本图形类的 update 方法
  - 注意点：dispatch 调度函数集合,统一一个时间间隔执行 kill 操作和生成敌人操作。避免一帧内某些图形被消灭导致 ChartCollect 遍历执行 charts 的 draw 绘画不完整，全放在绘画前执行调度统一处理边界情况设置动作函数。

> 感兴趣可查看 KOA 洋葱模型的调度函数。

## 客户端

- 设置配置项即可，类似 Echart 做成可配置化
