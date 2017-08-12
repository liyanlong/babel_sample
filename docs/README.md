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
> 基于 Luke Hoban's 的  [`es6features`](https://github.com/lukehoban/es6features#readme) 仓库

## 介绍

## ES2015新特性

1. [arrow-functions](/plugins/transform-es2015-arrow-functions.md)
2. [async-functions](/plugins/syntax-async-functions.md)