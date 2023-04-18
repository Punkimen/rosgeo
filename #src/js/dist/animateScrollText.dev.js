"use strict";

var _helpers = require("./module/helpers.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.addEventListener("DOMContentLoaded", function () {
  var animatedText = document.querySelector(".scroll-nav__text");
  (0, _helpers.splitText)(animatedText);
  var letters = animatedText.querySelectorAll(".letter");

  var createArr = function createArr(nodes) {
    var arr = [];
    nodes.forEach(function (node) {
      arr.push(node);
    });
    return arr;
  };

  var count = 0;

  var anim = function anim(elements, defDelay, repeat) {
    var _loop = function _loop(i) {
      var delay = defDelay;
      count === 1 ? delay = defDelay / 2 : delay = defDelay;
      count++;
      setTimeout(function () {
        var elementsCopy = _toConsumableArray(elements); // Make a copy of the array


        elementsCopy.reverse().forEach(function (element, index) {
          element.style.animationDelay = "".concat(index * delay, "s");
          element.classList.add("anim");
          setTimeout(function () {
            element.classList.remove("anim");
          }, 1500);
        });
      }, i * 1550);
    };

    for (var i = 0; i < repeat; i++) {
      _loop(i);
    }
  };

  anim(letters, 0.1, 2); // anim(lettersArr, 0.1);
});