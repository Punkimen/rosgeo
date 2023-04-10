"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mobNav = exports.navInit = void 0;

var _toggleClass = require("./toggleClass.js");

var screenInit = function screenInit(current, total) {
  var currentScore = document.querySelectorAll(".current-score");
  var totalScore = document.querySelectorAll(".total-score");
  currentScore.forEach(function (score) {
    score.innerText = current < 10 ? "0".concat(current) : current;
  });
  totalScore.forEach(function (score) {
    score.innerText = total < 10 ? "0".concat(total) : total;
  });
};

var navInit = function navInit() {
  // nav
  var sections = document.querySelectorAll("[data-anchor]");
  var sectionsArray = [];
  var length = sections.length;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var currentIndex = sectionsArray.indexOf(entry.target);
        screenInit(currentIndex + 1, length);
      }

      var id = entry.target.getAttribute("data-anchor");

      if (entry.intersectionRatio > 0) {
        var link = document.querySelector(".navigation a[scroll-href=\"".concat(id, "\"]"));
        link.classList.add("current");
      } else {
        document.querySelector(".navigation a[scroll-href=\"".concat(id, "\"]")).classList.remove("current");
      }
    });
  }); // Track all sections that have an `id` applied

  sections.forEach(function (elem) {
    sectionsArray.push(elem);
    observer.observe(elem);
  });
};

exports.navInit = navInit;

var mobNav = function mobNav(sections) {
  var total = sections.length < 10 ? "0".concat(sections.length) : sections.length;
  var windowWidth = window.innerWidth;

  if (windowWidth <= 767) {
    sections.forEach(function (elem, index) {
      var score = document.createElement("div");
      (0, _toggleClass.addClass)(score, "mob-score");
      var current = index + 1 < 10 ? "0".concat(index + 1) : index + 1;
      score.innerHTML = "\n    \t\t<span class=\"current-score\">".concat(current, "</span> /\n\t\t\t\t<span class=\"total-score\">").concat(total, "</span>\n\t\t  ");
      elem.append(score);
    });
  }
};

exports.mobNav = mobNav;