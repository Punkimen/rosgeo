"use strict";

import {splitText} from "./module/helpers.js";

document.addEventListener("DOMContentLoaded", () => {
	const animatedText = document.querySelector(".scroll-nav__text");
	splitText(animatedText);
	const letters = animatedText.querySelectorAll(".letter");

	const createArr = (nodes) => {
		let arr = [];
		nodes.forEach((node) => {
			arr.push(node);
		});
		return arr;
	};

	let count = 0;
	const anim = (elements, defDelay, repeat) => {
		for (let i = 0; i < repeat; i++) {
			let delay = defDelay;
			count === 1 ? (delay = defDelay / 2) : (delay = defDelay);
			count++;
			setTimeout(() => {
				const elementsCopy = [...elements]; // Make a copy of the array
				elementsCopy.reverse().forEach((element, index) => {
					element.style.animationDelay = `${index * delay}s`;
					element.classList.add("anim");
					setTimeout(() => {
						element.classList.remove("anim");
					}, 1500);
				});
			}, i * 1550);
		}
	};
	anim(letters, 0.1, 2);
	// anim(lettersArr, 0.1);
});
