  class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
      return this.instanceProperty;
    }

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return Bork.staticProperty;
    }
  }

  let myBork = new Bork;

  // 非原型方法
  console.log(myBork.__proto__.boundFunction); // > undefined

  // 箭头函数绑定函数的上下文
  console.log(myBork.boundFunction.call(undefined)); // > "bork"

  // 静态方法附加在类名上
  console.log(Bork.staticFunction()); // > "babelIsCool"
