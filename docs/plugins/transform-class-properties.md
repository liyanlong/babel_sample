# 类属性转换
> transform-class-properties

## 举例

**转换前**
```javascript
class Bork {
  // 实例化后定义属性
  instanceProperty = "bork";
  boundFunction = () => {
    return this.instanceProperty;
  }

  // 静态类属性
  static staticProperty = "babelIsCool";
  static staticFunction = function() {
    return Bork.staticProperty;
  }
}

let myBork = new Bork;

// 非原型方法
// myBork.__proto__指向 MyBork.prototype
console.log(myBork.__proto__.boundFunction); // > undefined

// 箭头函数绑定函数的上下文
console.log(myBork.boundFunction.call(undefined)); // > "bork"

// 静态方法附加在类名上
console.log(Bork.staticFunction()); // > "babelIsCool"
```

**转换后**
```javascript
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bork = function Bork() {
  var _this = this;

  _classCallCheck(this, Bork);

  this.instanceProperty = "bork";

  this.boundFunction = function () {
    return _this.instanceProperty;
  };
};

Bork.staticProperty = "babelIsCool";

Bork.staticFunction = function () {
  return Bork.staticProperty;
};

var myBork = new Bork();

// 非原型方法
console.log(myBork.__proto__.boundFunction); // > undefined

// 箭头函数绑定函数的上下文
console.log(myBork.boundFunction.call(undefined)); // > "bork"

// 静态方法附加在类名上
console.log(Bork.staticFunction()); // > "babelIsCool"

```

## 安装

```bash
npm install --save-dev babel-plugin-transform-class-properties
```

## 使用

### 通过 .babelrc 配置

```json
// without options
{
  "plugins": ["transform-class-properties"]
}

// with options
{
  "plugins": [
    ["transform-class-properties", { "spec": true }]
  ]
}
```

**命令行 (CLI)使用**
```bash
babel --plugins transform-class-properties script.js
```

**Node API使用**
```javascript
require("babel-core").transform("code", {
  plugins: ["transform-class-properties"]
});
```

## 配置

### spec
`boolean`, 默认为 `false`

如果指定为`ture`. 类的实例属性和方法声明,静态属性和方法使用`Object.defineProperty`进行定义
