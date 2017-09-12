# Babel 中文教学
> Babel 属于 JavaScript 编译语言.  能让你现在使用到下一代JavaScript的特效.

## 快速开始

### 安装

**安装 babel-cli 和 babel-preset-env**

从babel6开始，默认删除了转换语法，如果你未指定plugins/presets，那么Babel将会直接返回原始代码.


```bash
npm install --save-dev babel-cli babel-preset-env
```

[babel-cli](/packages/babel-cli.md)
命令行编译工具


[babel-preset-env](/packages/babel-preset-env.md)
识别当前环境转换

**创建 .babelrc文件**
```json
{
  "presets": ["env"]
}
```

### 案例

**babel编译前**

```javascript
let sum1 = 0
;[1, 3, 5, 7, 9].forEach((val) => {
  sum1 += val
})

let sum2 = [1, 3, 5, 7, 9].reduce((a, b) => {
  return a + b
})
console.log(sum1, sum2)
```

**babel编译后**

```javascript
"use strict";

var sum1 = 0;[(1, 3, 5, 7, 9)].forEach(function (val) {
  sum1 += val;
});

var sum2 = [1, 3, 5, 7, 9].reduce(function (a, b) {
  return a + b;
});
console.log(sum1, sum2);
```

# 学习 ES2015

## 介绍
> ECMAScript2015 是在2015年6月制定的JS标准, 也称之为ES6. 上一代ES5发布的时候还是在2009年.

如果你想查看当前的浏览器支持程度, <a href="https://kangax.github.io/compat-table/es6/" target="_blank">点击此处访问.</a>

## ES2015新特性

1. [arrow-functions](/plugins/transform-es2015-arrow-functions.md)
2. [async-functions](/plugins/syntax-async-functions.md)
3. [async-generator-functions](/plugins/syntax-async-generators.md)
4. [block-scoping](/plugins/transform-es2015-block-scoping.md)
5. [block-scoped-functions](/plugins/transform-es2015-block-scoped-functions.md)
6. [classes](/plugins/transform-es2015-classes.md)
7. [classes-properties](/plugins/transform-class-properties.md)
8. [computed-property-names](/plugins/transform-es2015-computed-properties.md)
