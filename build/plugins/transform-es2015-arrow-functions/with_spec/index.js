"use strict";

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var a = function () {
  _newArrowCheck(undefined, undefined);
}.bind(undefined);
var a = function (b) {
  _newArrowCheck(undefined, undefined);

  return b;
}.bind(undefined);

var double = [1, 2, 3].map(function (num) {
  _newArrowCheck(undefined, undefined);

  return num * 2;
}.bind(undefined));
console.log(double); // [2,4,6]

var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      _newArrowCheck(this, _this);

      return console.log(this._name + " knows " + f);
    }.bind(this));
  }
};
console.log(bob.printFriends());