"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Group =
/*#__PURE__*/
function () {
  function Group() {
    _classCallCheck(this, Group);

    this.members = [];
  }

  _createClass(Group, [{
    key: "add",
    value: function add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      this.members = this.members.filter(function (v) {
        return v !== value;
      });
    }
  }, {
    key: "has",
    value: function has(value) {
      return this.members.includes(value);
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return new GroupIterator(this);
    }
  }], [{
    key: "from",
    value: function from(collection) {
      var group = new Group();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          group.add(value);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return group;
    }
  }]);

  return Group;
}();

var GroupIterator =
/*#__PURE__*/
function () {
  function GroupIterator(group) {
    _classCallCheck(this, GroupIterator);

    this.group = group;
    this.position = 0;
  }

  _createClass(GroupIterator, [{
    key: "next",
    value: function next() {
      if (this.position >= this.group.members.length) {
        return {
          done: true
        };
      } else {
        var result = {
          value: this.group.members[this.position],
          done: false
        };
        this.position++;
        return result;
      }
    }
  }]);

  return GroupIterator;
}();

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = Group.from(["a", "b", "c"])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var value = _step2.value;
    console.log(value);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var map = {
  one: true,
  two: true,
  hasOwnProperty: true
};
console.log(Object.prototype.hasOwnProperty.call(map, "one"));