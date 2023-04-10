"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleClass = exports.removeClass = exports.addClass = void 0;

var addClass = function addClass(el, className) {
  el.classList.add(className);
};

exports.addClass = addClass;

var removeClass = function removeClass(el, className) {
  el.classList.remove(className);
};

exports.removeClass = removeClass;

var toggleClass = function toggleClass(el, className) {
  el.classList.toggle(className);
};

exports.toggleClass = toggleClass;