'use strict';

var j = '';

var _loop = function _loop(i) {
  var j = i + 1;
  setTimeout(function () {
    var j = i - 1;
    console.log(i, j);
  }, 1);
  console.log(j);
};

for (var i = 0; i < 5; i++) {
  _loop(i);
}
console.log(j);