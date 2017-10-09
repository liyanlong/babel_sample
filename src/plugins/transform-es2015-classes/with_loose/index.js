class Foo {
  set bar(val) {
    throw new Error("foo!");
  }
}

class Bar extends Foo {
  // 实例方法
  bar() {
    // will throw an error when this method is defined
  }
}
