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
松散模式 `boolean`, defaults to `false`.

**Method enumerability**

松散模式下，类的静态方法是可以进行枚举的。这不符合规范。
如下：

```javascript
class Foo {
  set bar(val) {
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

**Method assignment**

松散模式下，(set)是使用属性赋值，而不是在原型上定义方法，有可能会出线下面的问题

如下：
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
松散模式下，`Bar.prototype.bar` 定义后会触发 `Foo` 的
setter, 此时执行时抛出`foo`异常
