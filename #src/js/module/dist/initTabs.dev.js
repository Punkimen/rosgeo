"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoTabs = exports.activityTabs = exports.aboutTabs = void 0;

var _tabs = require("./tabs.js");

var aboutTabs = function aboutTabs() {
  var aboutTabs = document.querySelectorAll(".about__content-tabs .tabs__item");
  var aboutTabsBody = document.querySelectorAll(".about__body .tabs__body-item");
  var aboutChange = new _tabs.ChangeTabs(aboutTabs, aboutTabsBody);
  aboutTabs.forEach(function (tab, idx) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      aboutChange.changeTabs(tab);

      if (tab.classList.contains("current")) {
        aboutChange.changeBody(idx);
      }
    });
  });
};

exports.aboutTabs = aboutTabs;

var activityTabs = function activityTabs() {
  var activityTabs = document.querySelectorAll(".activity__content .tabs__item");
  var activityTabsBody = document.querySelectorAll(".activity__body .tabs__body-item");
  var activityChange = new _tabs.ChangeTabs(activityTabs, activityTabsBody);
  activityTabs.forEach(function (tab, idx) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      activityChange.changeTabs(tab);

      if (tab.classList.contains("current")) {
        activityChange.changeBody(idx);
      }
    });
  });
};

exports.activityTabs = activityTabs;

var infoTabs = function infoTabs() {
  var infoTabs = document.querySelectorAll(".info__tabs .tabs__item");
  var infoTabsBody = document.querySelectorAll(".info__body .tabs__body-item");
  var infoChange = new _tabs.ChangeTabs(infoTabs, infoTabsBody);
  infoTabs.forEach(function (tab, idx) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      infoChange.changeTabs(tab);

      if (tab.classList.contains("current")) {
        infoChange.changeBody(idx);
      }
    });
  });
};

exports.infoTabs = infoTabs;