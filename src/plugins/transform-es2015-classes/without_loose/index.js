class Foo {
  set bar(val) {
   throw new Error("foo!");
  }
}

class Bar extends Foo {
  /**
   * @overwrite
   */
  bar() {
  }
  
  static bar2() {
  }
}
var instance = new Bar ()

// return true
console.log(instance.bar === Bar.prototype.bar)

// 类方法不可枚举
for (var name in Bar) {
  console.log(name);
}