"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setContainerWidth = void 0;

var setContainerWidth = function setContainerWidth(el) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "centered";
  var container = el;
  var screenWidth = window.innerWidth;
  var paddingWidth = (screenWidth - 1200) / 2 > 15 ? (screenWidth - 1200) / 2 : 15;

  if (direction) {
    switch (direction) {
      case "centered":
        container.style.paddingLeft = paddingWidth + "px";
        container.style.paddingRight = paddingWidth + "px";
        break;

      case "right":
        container.style.paddingLeft = paddingWidth + "px";
        break;

      case "left":
        container.style.paddingRight = paddingWidth + "px";
        break;

      case "none":
        break;

      default:
        container.style.paddingLeft = paddingWidth + "px";
        container.style.paddingRight = paddingWidth + "px";
    }
  } else {
    console.error("direction is not defined", direction);
  }
};

exports.setContainerWidth = setContainerWidth;