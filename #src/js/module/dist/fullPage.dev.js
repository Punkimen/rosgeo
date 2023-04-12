"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cbHeight = exports.cbMouseLeave = exports.cbMouseInner = void 0;

var cbMouseInner = function cbMouseInner(block, cb) {
  block.addEventListener("mouseenter", function () {
    cb();
  });
  block.addEventListener("touchstart", function () {
    cb();
  });
};

exports.cbMouseInner = cbMouseInner;

var cbMouseLeave = function cbMouseLeave(block, cb) {
  block.addEventListener("mouseleave", function () {
    cb();
  });
  block.addEventListener("touchend", function () {
    cb();
  });
};

exports.cbMouseLeave = cbMouseLeave;

var cbHeight = function cbHeight() {
  var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var cb = arguments.length > 1 ? arguments[1] : undefined;
  var elseCb = arguments.length > 2 ? arguments[2] : undefined;

  if (window.innerHeight < height) {
    cb();
  } else {
    elseCb();
  }

  window.addEventListener("resize", function () {
    if (window.innerHeight < height) {
      cb();
    } else {
      elseCb();
    }
  });
};

exports.cbHeight = cbHeight;