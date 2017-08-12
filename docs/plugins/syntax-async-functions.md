# 异步函数语法
> Syntax async functions

> 插件只允许解析async语法. 如果想要转换, 可以了解 [transform-regerator](/plugins/transform-regerator.md), [transform-async-to-generator](/plugins/transform-async-to-generator.md) 或 [transform-async-to-module-method](/plugins/transform-async-to-module-method.md)

## 安装

```bash
npm install --save-dev babel-plugin-syntax-async-functions
```

## 使用

**.babelrc 配置**
```json
{
  "plugins": ["syntax-async-functions"]
}
```

**命令行 (CLI)使用**
```bash
babel --plugins syntax-async-functions script.js
```

**Node API使用**
```javascript
require("babel-core").transform("code", {
  plugins: ["syntax-async-functions"]
});
```

## 案例

**编译前**
```javascript
function loadStory () {
  return new Promise(function (resove, reject) {
    setTimeout(function () {
      resovlve('Long Long Ago!!');
    }, 1000);
  })
}

(async function() {
  let story = await loadStory();
  console.log("Yey, story successfully loaded!", story);
}());
```

**编译后**

```javascript
"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function loadStory() {
  return new Promise(function (resove, reject) {
    setTimeout(function () {
      resovlve('Long Long Ago!!');
    }, 1000);
  });
}

_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var story;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return loadStory();

        case 2:
          story = _context.sent;

          console.log("Yey, story successfully loaded!", story);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))();
```
默认在 transform 转换后，不存在`regeneratorRuntime`对象, 你需要通过`const regeneratorRuntime = require("regenerator-runtime");`引入指定
