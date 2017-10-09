'use strict';

for (var i = 0; i < 5; i++) {
  var foo = 'hello world';
  (function (j) {
    var foo = 'hi';
    console.log(foo);
    setTimeout(function () {
      return console.log(j);
    }, 1);
  })(i);
}