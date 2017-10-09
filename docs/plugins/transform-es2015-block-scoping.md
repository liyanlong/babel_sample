# 块作用域转换
> Compile ES2015 block scoping (const and let) to ES5

## 安装

```bash
npm install --save-dev babel-plugin-transform-es2015-block-scoping
```
## 使用

**.babelrc 配置**
```json
{
  "plugins": [
    ["babel-plugin-transform-es2015-block-scoping", /*options*/ {
     "throwIfClosureRequired": false
    }]
  ]
}
```

**命令行 (CLI)使用**
```bash
babel --plugins babel-plugin-transform-es2015-block-scoping script.js
```

**Node API使用**
```javascript
require("babel-core").transform("code", {
  plugins: ["babel-plugin-transform-es2015-block-scoping"]
});
```

## 配置

**throwIfClosureRequired**

default: `false`

如果设置为`true`, 如果出现let,const 但是并没有闭包作用域块,则抛出异常. 

### throwIfClosureRequired

#### false

**编译前**
```javascript
let j = '';
for (let i = 0; i < 5; i++) {
  let j = i + 1;
  setTimeout(() => {
    let j = i - 1;
    console.log(i , j);
  }, 1);
  console.log(j);
}
console.log(j);
```

**编译后**
```javascript
'use strict';

var j = '';

var _loop = function _loop(i) {
  var j = i + 1;
  setTimeout(function () {
    var j = i - 1;
    console.log(i, j);
  }, 1);
  console.log(j);
};

for (var i = 0; i < 5; i++) {
  _loop(i);
}
console.log(j);
```


#### true 
**编译前**
```javascript
for (let i = 0; i < 5; i++) {
  let foo = 'hello world';
  (function (j) {
    let foo = 'hi';
    console.log(foo);
    setTimeout(() => console.log(j), 1);
  }(i));
}
```
**编译后**
```javascript
'use strict';

for (var i = 0; i < 5; i++) {
  var foo = 'hello world';
  (function (j) {
    var foo = 'hi';
    console.log(foo);
    setTimeout(function () {
      return console.log(j);
    }, 1);
  })(i);
}
```
