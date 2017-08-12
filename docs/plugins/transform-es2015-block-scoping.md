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
     "throwIfClosureRequired": true
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

如果设置为`true`, 如果出现let,const 但是并没有闭包作用域块,则抛出异常. 不会转换let ,const块的功能
