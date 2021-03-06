"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bork = function Bork() {
  var _this = this;

  _classCallCheck(this, Bork);

  Object.defineProperty(this, "instanceProperty", {
    enumerable: true,
    writable: true,
    value: "bork"
  });
  Object.defineProperty(this, "boundFunction", {
    enumerable: true,
    writable: true,
    value: function value() {
      return _this.instanceProperty;
    }
  });
}
//Property initializer syntax


//Static class properties
;

Object.defineProperty(Bork, "staticProperty", {
  enumerable: true,
  writable: true,
  value: "babelIsCool"
});
Object.defineProperty(Bork, "staticFunction", {
  enumerable: true,
  writable: true,
  value: function value() {
    return Bork.staticProperty;
  }
});


var myBork = new Bork();

// 非原型方法
console.log(myBork.__proto__.boundFunction); // > undefined

// 箭头函数绑定函数的上下文
console.log(myBork.boundFunction.call(undefined)); // > "bork"

// 静态方法附加在类名上
console.log(Bork.staticFunction()); // > "babelIsCool"