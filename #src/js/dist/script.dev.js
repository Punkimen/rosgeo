"use strict";

var _fullPage = require("./module/fullPage.js");

var _initSliders = require("./module/initSliders.js");

var _initTabs = require("./module/initTabs.js");

var _navigation = require("./module/navigation.js");

var _scrollNavigation = require("./module/scrollNavigation.js");

var _setContainerWidth = require("./module/setContainerWidth.js");

document.addEventListener("DOMContentLoaded", function () {
  // tabs
  (0, _initTabs.aboutTabs)();
  (0, _initTabs.activityTabs)();
  (0, _initTabs.infoTabs)(); // slider

  (0, _initSliders.initSlider)(); // /////////////

  var pageSlider = new Pageable("#pagepiling", {
    childSelector: "[data-anchor]",
    // CSS3 selector string for the pages
    anchors: ["hero", "about", "histiory", "activity", "direction", "info", "releases", "contacts"],
    // define the page anchors
    pips: true,
    // display the pips
    animation: 300,
    // the duration in ms of the scroll animation
    delay: 0,
    // the delay in ms before the scroll animation starts
    throttle: 50,
    // the interval in ms that the resize callback is fired
    orientation: "vertical",
    // or horizontal
    swipeThreshold: 50,
    // swipe / mouse drag distance (px) before firing the page change event
    freeScroll: true,
    // allow manual scrolling when dragging instead of automatically moving to next page
    navPrevEl: false,
    // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
    navNextEl: false,
    // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
    infinite: false,
    // enable infinite scrolling (from 0.4.0)
    // slideshow: {
    // 	// enable slideshow that cycles through your pages automatically (from 0.4.0)
    // 	interval: 3000, // time in ms between page change,
    // 	delay: 0, // delay in ms after the interval has ended and before changing page
    // },
    events: {
      wheel: true,
      // enable / disable mousewheel scrolling
      mouse: false,
      // enable / disable mouse drag scrolling
      touch: true,
      // enable / disable touch / swipe scrolling
      keydown: true // enable / disable keyboard navigation

    },
    easing: function easing(currentTime, startPos, endPos, interval) {
      // the easing function used for the scroll animation
      return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
    },
    onInit: function onInit() {
      // do something when the instance is ready
      var navParent = document.querySelector(".pg-vertical .pg-pips");
      navParent.querySelector("ul").style.display = "none";
      navParent.classList.add("navigation");
      navParent.append((0, _navigation.createNavigation)(_navigation.navigationAnchors));
      var div = document.createElement("div");
      div.className = "scroll-nav__top";
      div.innerHTML = "<div class=\"scroll-nav__score\">\n\t\t\t\t<span class=\"current-score\">01</span> /\n\t\t\t\t<span class=\"total-score\">07</span>\n\t\t\t</div>";
      navParent.prepend(div);
      (0, _navigation.setCurrent)(this.index - 1);
      (0, _navigation.showHideNav)(this.index); // navParent.textContent = `${createNavigation(navigationAnchors)}`;

      var centeredSection = document.querySelectorAll(".section_centered");
      var rightSection = document.querySelectorAll(".section_right");
      centeredSection.forEach(function (section) {
        (0, _setContainerWidth.setContainerWidth)(section);
      });
      rightSection.forEach(function (section) {
        (0, _setContainerWidth.setContainerWidth)(section, "right");
      });
    },
    // onUpdate: function () {
    // 	// do something when the instance updates
    // },
    onBeforeStart: function onBeforeStart() {// do something before scrolling begins
    },
    onStart: function onStart() {// do something when scrolling begins
    },
    onScroll: function onScroll() {// do something during scroll
    },
    onFinish: function onFinish() {// do something when scrolling ends
    }
  });
  pageSlider.on("scroll.start", function (data) {
    (0, _navigation.setCurrent)(data.index - 1);
    (0, _navigation.showHideNav)(data.index);
  });
  var scrollBarElems = document.querySelectorAll(".scroll-text");
  scrollBarElems.forEach(function (el) {
    Scrollbar.init(el, {});
    (0, _fullPage.cbMouseInner)(el, function () {
      pageSlider.events.wheel = false;
      pageSlider.events.touch = false;
    });
    (0, _fullPage.cbMouseLeave)(el, function () {
      pageSlider.events.wheel = true;
      pageSlider.events.touch = true;
    });
  });
  var slidersElems = document.querySelectorAll(".swiper-wrapper");
  slidersElems.forEach(function (el) {
    (0, _fullPage.cbMouseInner)(el, function () {
      pageSlider.events.touch = false;
    });
    (0, _fullPage.cbMouseLeave)(el, function () {
      pageSlider.events.touch = true;
    });
  });
  (0, _fullPage.cbHeight)(600, function () {
    pageSlider.destroy();
  }, function () {
    pageSlider.init();
  }); // /////////////

  var sections = document.querySelectorAll("[data-anchor]");
  (0, _scrollNavigation.mobNav)(sections);
});
{
  var sections = document.querySelectorAll("[data-anchor]");
  var centeredSection = document.querySelectorAll(".section_centered");
  var rightSection = document.querySelectorAll(".section_right");
  window.addEventListener("resize", function () {
    (0, _scrollNavigation.mobNav)(sections);
    centeredSection.forEach(function (section) {
      (0, _setContainerWidth.setContainerWidth)(section);
    });
    rightSection.forEach(function (section) {
      (0, _setContainerWidth.setContainerWidth)(section, "right");
    });
  });
} // map
// let map;
// async function initMap() {
// 	//@ts-ignore
// 	const {Map} = await google.maps.importLibrary("maps");
// 	map = new Map(document.getElementById("map"), {
// 		center: {lat: -34.397, lng: 150.644},
// 		zoom: 8,
// 	});
// }
// initMap();