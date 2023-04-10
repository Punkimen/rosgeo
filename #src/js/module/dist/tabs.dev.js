"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeTabs = void 0;

var _toggleClass = require("./toggleClass.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChangeTabs =
/*#__PURE__*/
function () {
  function ChangeTabs(tabs, bodyItems) {
    _classCallCheck(this, ChangeTabs);

    this.tabs = tabs;
    this.bodyItems = bodyItems;
  }

  _createClass(ChangeTabs, [{
    key: "changeTabs",
    value: function changeTabs(tab) {
      this.tabs.forEach(function (el, idx) {
        (0, _toggleClass.removeClass)(el, "current");
      });
      (0, _toggleClass.addClass)(tab, "current");
    }
  }, {
    key: "changeBody",
    value: function changeBody(index) {
      this.bodyItems.forEach(function (el, idx) {
        (0, _toggleClass.removeClass)(el, "show");
        index == idx && (0, _toggleClass.addClass)(el, "show");
      });
    }
  }]);

  return ChangeTabs;
}();

exports.ChangeTabs = ChangeTabs;