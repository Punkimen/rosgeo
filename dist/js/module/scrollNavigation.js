import {addClass} from "./toggleClass.js";

const screenInit = (current, total) => {
	const currentScore = document.querySelectorAll(".current-score");
	const totalScore = document.querySelectorAll(".total-score");

	currentScore.forEach((score) => {
		score.innerText = current < 10 ? `0${current}` : current;
	});
	totalScore.forEach((score) => {
		score.innerText = total < 10 ? `0${total}` : total;
	});
};

export const navInit = () => {
	// nav
	const sections = document.querySelectorAll("[data-anchor]");
	const sectionsArray = [];

	const length = sections.length;
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const currentIndex = sectionsArray.indexOf(entry.target);
				screenInit(currentIndex + 1, length);
			}
			const id = entry.target.getAttribute("data-anchor");
			if (entry.intersectionRatio > 0) {
				const link = document.querySelector(
					`.navigation a[scroll-href="${id}"]`,
				);

				link.classList.add("current");
			} else {
				document
					.querySelector(`.navigation a[scroll-href="${id}"]`)
					.classList.remove("current");
			}
		});
	});

	// Track all sections that have an `id` applied

	sections.forEach((elem) => {
		sectionsArray.push(elem);
		observer.observe(elem);
	});
};

export const mobNav = (sections) => {
	const total =
		sections.length < 10 ? `0${sections.length}` : sections.length;
	const windowWidth = window.innerWidth;
	if (windowWidth <= 767) {
		sections.forEach((elem, index) => {
			const score = document.createElement("div");
			addClass(score, "mob-score");
			const current = index + 1 < 10 ? `0${index + 1}` : index + 1;
			score.innerHTML = `
    		<span class="current-score">${current}</span> /
				<span class="total-score">${total}</span>
		  `;
			elem.append(score);
		});
	}
};
