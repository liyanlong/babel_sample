
for (let i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1);
  }(i));
}
