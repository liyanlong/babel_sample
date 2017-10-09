# Class 类 ES2015转ES5

> Compile ES2015 classes to ES5

## 注意事项

由于ES5的限制，该插件无法子类化 `Date`, `Array`, `DOM`等原生对象。 你可以使用 [babel-plugin-transform-builtin-extend]()插件，基于 `Object.setPrototypeOf`以及`Reflect.construct`进行扩展

## 安装

```bash
npm install --save-dev babel-plugin-transform-es2015-classes
```

## 使用

**.babelrc 配置**
```json
// without options
{
  "plugins": ["transform-es2015-classes"]
}

// with options
{
  "plugins": [
    ["transform-es2015-classes", {
      "loose": true
    }]
  ]
}
```

**命令行 (CLI)使用**
```bash
babel --plugins babel-plugin-transform-es2015-classes script.js
```

**Node API使用**
```javascript
require("babel-core").transform("code", {
  plugins: ["transform-es2015-classes"]
});
```

## 配置

### loose

松散模式 `boolean`

default `false`

#### false 
非松散模式, 属性 enumerable => false, 类的实例方法转化为构造函数的原型方法, 静态方法转化为构造函数的实例方法。
父子类出现重复的 `name`定义, 子类覆盖父类的定义。
```javascript
class Foo {
  set bar(val) {
   throw new Error("foo!");
  }
}

class Bar extends Foo {
  /**
   * @overwrite
   */
  bar() {
  }
  
  static bar2() {
  }
}
var instance = new Bar ()

// return true
console.log(instance.bar === Bar.prototype.bar)

// 类方法不可枚举
for (var name in Bar) {
  console.log(name);
}

```

#### true 
松散模式下， 子类的方法采用直接赋值的方式，类的静态方法是可以进行枚举的。
```javascript
class Foo {
  // 原型属性, getter setter
  set bar(val) {
    // val is function
  }
}

class Bar extends Foo {
  bar() {
  }
  static bar2() {
  }
}

// 类方法可以枚举
for (var name in Bar) {
  console.log(name); // bar2
}
```

松散模式下，`Bar.prototype.bar` 定义后会触发 `Foo` 的 `setter`, 此时执行时抛出`foo`异常
```javascript
class Foo {
  set bar(val) {
    throw new Error("foo!");
  }
}

class Bar extends Foo {
  bar() {
    // will throw an error when this method is defined
  }
}
```