# 函数声明块作用域转换 
> Ensure function declarations at the block level are block scoped

## 安装
```bash
npm install --save-dev babel-plugin-transform-es2015-block-scoped-functions
```

## 使用

### 通过 .babelrc 配置

```json
{
  "plugins": ["babel-plugin-transform-es2015-block-scoped-functions"]
}
```

### 命令行（CLI）下使用
```bash
babel --plugins transform-es2015-block-scoped-functions script.js
```

### Node API 使用

```javascript
  var code = 'window.onload = () => { console.log(this);}'
  require('babel-core').transform(code, {
    plugins: ['transform-es2015-block-scoped-functions']
  });
```
