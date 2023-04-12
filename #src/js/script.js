"use strict";
import {cbMouseInner, cbMouseLeave, cbHeight} from "./module/fullPage.js";
import {initSlider} from "./module/initSliders.js";
import {aboutTabs, activityTabs, infoTabs} from "./module/initTabs.js";
import {
	createNavigation,
	navigationAnchors,
	setCurrent,
	showHideNav,
} from "./module/navigation.js";
import {mobNav, navInit} from "./module/scrollNavigation.js";
import {setContainerWidth} from "./module/setContainerWidth.js";

document.addEventListener("DOMContentLoaded", () => {
	// tabs
	aboutTabs();
	activityTabs();
	infoTabs();

	// slider
	initSlider();

	// /////////////
	const pageSlider = new Pageable("#pagepiling", {
		childSelector: "[data-anchor]", // CSS3 selector string for the pages
		anchors: [
			"hero",
			"about",
			"histiory",
			"activity",
			"direction",
			"info",
			"releases",
			"contacts",
		], // define the page anchors
		pips: true, // display the pips
		animation: 300, // the duration in ms of the scroll animation
		delay: 0, // the delay in ms before the scroll animation starts
		throttle: 50, // the interval in ms that the resize callback is fired
		orientation: "vertical", // or horizontal
		swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
		freeScroll: true, // allow manual scrolling when dragging instead of automatically moving to next page
		navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
		navNextEl: false, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
		infinite: false, // enable infinite scrolling (from 0.4.0)
		// slideshow: {
		// 	// enable slideshow that cycles through your pages automatically (from 0.4.0)
		// 	interval: 3000, // time in ms between page change,
		// 	delay: 0, // delay in ms after the interval has ended and before changing page
		// },
		events: {
			wheel: true, // enable / disable mousewheel scrolling
			mouse: false, // enable / disable mouse drag scrolling
			touch: true, // enable / disable touch / swipe scrolling
			keydown: true, // enable / disable keyboard navigation
		},
		easing: function (currentTime, startPos, endPos, interval) {
			// the easing function used for the scroll animation
			return (
				-endPos * (currentTime /= interval) * (currentTime - 2) +
				startPos
			);
		},
		onInit: function () {
			// do something when the instance is ready
			const navParent = document.querySelector(".pg-vertical .pg-pips");
			navParent.querySelector("ul").style.display = "none";
			navParent.classList.add("navigation");
			navParent.append(createNavigation(navigationAnchors));
			const div = document.createElement("div");
			div.className = "scroll-nav__top";
			div.innerHTML = `<div class="scroll-nav__score">
				<span class="current-score">01</span> /
				<span class="total-score">07</span>
			</div>`;
			navParent.prepend(div);
			setCurrent(this.index - 1);
			showHideNav(this.index);
			// navParent.textContent = `${createNavigation(navigationAnchors)}`;

			const centeredSection =
				document.querySelectorAll(".section_centered");
			const rightSection = document.querySelectorAll(".section_right");

			centeredSection.forEach((section) => {
				setContainerWidth(section);
			});
			rightSection.forEach((section) => {
				setContainerWidth(section, "right");
			});
		},
		// onUpdate: function () {
		// 	// do something when the instance updates
		// },
		onBeforeStart: function () {
			// do something before scrolling begins
		},
		onStart: function () {
			// do something when scrolling begins
		},
		onScroll: function () {
			// do something during scroll
		},
		onFinish: function () {
			// do something when scrolling ends
		},
	});
	pageSlider.on("scroll.start", (data) => {
		setCurrent(data.index - 1);
		showHideNav(data.index);
	});

	const scrollBarElems = document.querySelectorAll(".scroll-text");
	scrollBarElems.forEach((el) => {
		Scrollbar.init(el, {});
		cbMouseInner(el, () => {
			pageSlider.events.wheel = false;
			pageSlider.events.touch = false;
		});
		cbMouseLeave(el, () => {
			pageSlider.events.wheel = true;
			pageSlider.events.touch = true;
		});
	});
	const slidersElems = document.querySelectorAll(".swiper-wrapper");
	slidersElems.forEach((el) => {
		cbMouseInner(el, () => {
			pageSlider.events.touch = false;
		});
		cbMouseLeave(el, () => {
			pageSlider.events.touch = true;
		});
	});
	cbHeight(
		600,
		() => {
			pageSlider.destroy();
		},
		() => {
			pageSlider.init();
		},
	);

	// /////////////

	const sections = document.querySelectorAll("[data-anchor]");
	mobNav(sections);
});

{
	const sections = document.querySelectorAll("[data-anchor]");
	const centeredSection = document.querySelectorAll(".section_centered");
	const rightSection = document.querySelectorAll(".section_right");

	window.addEventListener("resize", () => {
		mobNav(sections);
		centeredSection.forEach((section) => {
			setContainerWidth(section);
		});
		rightSection.forEach((section) => {
			setContainerWidth(section, "right");
		});
	});
}

// map
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
