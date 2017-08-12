# async 转 generator
> babel将 async语法转换为 generators 语法

## 安装

```bash
npm install --save-dev babel-plugin-syntax-async-generators
```
## 使用

**.babelrc 配置**
```json
{
  "plugins": ["syntax-async-generators"]
}
```

**命令行 (CLI)使用**
```bash
babel --plugins syntax-async-generators script.js
```

**Node API使用**
```javascript
require("babel-core").transform("code", {
  plugins: ["syntax-async-generators"]
});
```
