var _loop = function (i) {
  setTimeout(() => console.log(i), 1);
};

for (var i = 0; i < 5; i++) {
  _loop(i);
}