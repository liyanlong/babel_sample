for (let i = 0; i < 5; i++) {
  let foo = 'hello world';
  (function (j) {
    let foo = 'hi';
    console.log(foo);
    setTimeout(() => console.log(j), 1);
  }(i));
}
