"use strict";

var f = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, x;

    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 3;
            _iterator = _asyncIterator(y);

          case 5:
            _context2.next = 7;
            return _iterator.next();

          case 7:
            _step = _context2.sent;
            _iteratorNormalCompletion = _step.done;
            _context2.next = 11;
            return _step.value;

          case 11:
            _value = _context2.sent;

            if (_iteratorNormalCompletion) {
              _context2.next = 18;
              break;
            }

            x = _value;

            g(x);

          case 15:
            _iteratorNormalCompletion = true;
            _context2.next = 5;
            break;

          case 18:
            _context2.next = 24;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 24:
            _context2.prev = 24;
            _context2.prev = 25;

            if (!(!_iteratorNormalCompletion && _iterator.return)) {
              _context2.next = 29;
              break;
            }

            _context2.next = 29;
            return _iterator.return();

          case 29:
            _context2.prev = 29;

            if (!_didIteratorError) {
              _context2.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context2.finish(29);

          case 33:
            return _context2.finish(24);

          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, this, [[3, 20, 24, 34], [25,, 29, 33]]);
  }));

  return function f() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncIterator(iterable) { if (typeof Symbol === "function") { if (Symbol.asyncIterator) { var method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { return iterable[Symbol.iterator](); } } throw new TypeError("Object is not async iterable"); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _marked = [agf].map(regeneratorRuntime.mark);

function agf() {
  return regeneratorRuntime.async(function agf$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(1);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}