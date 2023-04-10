"use strict";

var _initSliders = require("./module/initSliders.js");

var _initTabs = require("./module/initTabs.js");

var _scrollNavigation = require("./module/scrollNavigation.js");

document.addEventListener("DOMContentLoaded", function () {
  // tabs
  (0, _initTabs.aboutTabs)();
  (0, _initTabs.activityTabs)();
  (0, _initTabs.infoTabs)(); // slider

  (0, _initSliders.initSlider)(); // Якорные ссылки

  var smoothLinks = document.querySelectorAll("[scroll-href]");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var smoothLink = _step.value;
      smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        var id = smoothLink.getAttribute("scroll-href");
        document.querySelector("[data-anchor=\"".concat(id, "\"]")).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (var _iterator = smoothLinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
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

  var sections = document.querySelectorAll("[data-anchor]");
  (0, _scrollNavigation.mobNav)(sections);
  (0, _scrollNavigation.navInit)();
  AOS.init({
    offset: 300,
    once: true
  });
});
{
  var sections = document.querySelectorAll("[data-anchor]");
  window.addEventListener("resize", function () {
    (0, _scrollNavigation.mobNav)(sections);
  });
} // map

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
}

window.initMap = initMap;