# 计算属性名称
> computed properties transform, 将对象的属性转换成ES5的`defineProperty`定义属性

## 安装

```bash
npm install --save-dev babel-plugin-transform-es2015-computed-properties
```

## 配置

**loose**
`boolean` default `false`

是否使用使用简单的赋值而不是定义

## 使用

**.babelrc 配置**
```json
{
  "plugins": ["transform-es2015-computed-properties"]
}

or

{
  "plugins": [
    ["transform-es2015-computed-properties", {
      "loose": true
    }]
  ]
}
```

**命令行 (CLI)使用**
```bash
babel --plugins transform-es2015-computed-properties script.js
```

**Node API使用**
```javascript
require("babel-core").transform("code", {
  plugins: ["transform-es2015-computed-properties"]
});
```

## 案例

**编译前**
```javascript
var foo = "_1";
var bar = "_1";

var obj = {
  ["x" + foo]: "heh",
  ["y" + bar]: "noo",
  foo,
  bar
};
```

**编译后**

```javascript
var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var foo = "_1";
var bar = "_1";

var obj = (_obj = {}, _defineProperty(_obj, "x" + foo, "heh"), _defineProperty(_obj, "y" + bar, "noo"), _defineProperty(_obj, "foo", foo), _defineProperty(_obj, "bar", bar), _obj);
```

**PS：传统的定义对象属性，不允许直接在对象定义时赋予动态key**
