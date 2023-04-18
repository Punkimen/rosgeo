"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitText = void 0;

var splitText = function splitText(el) {
  el.innerHTML = el.textContent.trim().replace(/(\S*)/g, function (m) {
    return "<div class=\"word\">" + m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") + "</div>";
  });
  return el;
};

exports.splitText = splitText;