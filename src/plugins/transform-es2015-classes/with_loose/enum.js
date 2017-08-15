
class Foo {
  set bar(val) {

  }
}

class Bar extends Foo {
  bar() {
  }
  static bar2() {
  }
}

// 类方法可以枚举
for (var name in Bar) {
  console.log(name);
}