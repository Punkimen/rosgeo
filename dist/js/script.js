"use strict";
import {initSlider} from "./module/initSliders.js";
import {aboutTabs, activityTabs, infoTabs} from "./module/initTabs.js";
import {mobNav, navInit} from "./module/scrollNavigation.js";
document.addEventListener("DOMContentLoaded", () => {
	// tabs
	aboutTabs();
	activityTabs();
	infoTabs();

	// slider
	initSlider();

	// Якорные ссылки

	const smoothLinks = document.querySelectorAll("[scroll-href]");

	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener("click", function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute("scroll-href");

			document.querySelector(`[data-anchor="${id}"]`).scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		});
	}
	const sections = document.querySelectorAll("[data-anchor]");
	mobNav(sections);

	navInit();
	AOS.init({
		offset: 300,
		once: true,
	});
});
{
	const sections = document.querySelectorAll("[data-anchor]");
	window.addEventListener("resize", () => {
		mobNav(sections);
	});
}

// map
let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8,
	});
}

window.initMap = initMap;
