# 常量属性检测
> check-es2015-constants


## 安装
```bash
npm install --save-dev babel-plugin-check-es2015-constants
```

## 使用

### .babelrc
```json
{
  "plugins": ["check-es2015-constants"]
}
```

### cli
```bash
babel --plugins check-es2015-constants script.js
```

### node api
```javascript
require("babel-core").transform("code", {
  plugins: ["check-es2015-constants"]
});
```

## 案例

### 赋值异常情况
常量`const`在作用域下不允许被修改对变量的引用, 对于值类型变量不运行修改内容。 对于引用类型可以修改引用类型内部的属性变量。

```javascript
const a = 1;
const config = {};

config.baseUrl = '';

{
  const a = 'foo';
  console.log(a);
}
a = 2; // 编译时 throw Error

```

### const 转换 var
如果配合 `transform-es2015-block-scoping`, 则可以将`const`标志符转换为`var` 标志符

**编译前**
```javascript
// const to var
// cannot redefine a
const a = 1;
const config = {};

// can define config
config.baseUrl = '';

{
  const a = 'foo';
  console.log(a);
}

```

**编译后**
```javascript
// const to var
// cannot redefine a
var a = 1;
var config = {};

// can define config
config.baseUrl = '';

{
  var _a = 'foo';
  console.log(_a);
}
```