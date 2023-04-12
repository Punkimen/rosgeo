"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNavigation = createNavigation;
exports.showHideNav = exports.setCurrent = exports.navigationAnchors = exports.navigation = void 0;

var navigation = function navigation() {};

exports.navigation = navigation;
var navigationAnchors = [{
  en: "hero",
  ru: ""
}, {
  en: "about",
  ru: "О КОМПАНИИ"
}, {
  en: "history",
  ru: "ИСТОРИЯ"
}, {
  en: "activity",
  ru: "ДЕЯТЕЛЬНОСТЬ"
}, {
  en: "directions",
  ru: "РУКОВОДСТВО"
}, {
  en: "info",
  ru: "РАСКРЫТИЕ ИНФОРМАЦИИ"
}, {
  en: "releases",
  ru: "ПРЕСС-РЕЛИЗЫ"
}, {
  en: "contacts",
  ru: "КОНТАКТЫ"
}];
exports.navigationAnchors = navigationAnchors;

function createNavigation(items) {
  var ul = document.createElement("ul");
  items.forEach(function (item, index) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    li.className = "navigation__list-elem";
    a.className = "navigation__list-link";
    a.href = "#" + item.en;
    a.textContent = item.ru;

    if (index !== 0) {
      li.appendChild(a);
      ul.appendChild(li);
    }
  });
  ul.className = "navigation__list";
  return ul;
}

var setCurrent = function setCurrent(index) {
  var items = document.querySelectorAll(".navigation__list-elem");
  items.forEach(function (item, i) {
    if (i === index) {
      item.classList.add("current");
    } else {
      item.classList.remove("current");
    }
  });
};

exports.setCurrent = setCurrent;

var showHideNav = function showHideNav(index) {
  var nav = document.querySelector(".pg-vertical .pg-pips");

  if (index === 0) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
};

exports.showHideNav = showHideNav;