import {ChangeTabs} from "./tabs.js";

export const aboutTabs = () => {
	const aboutTabs = document.querySelectorAll(
		".about__content-tabs .tabs__item",
	);
	const aboutTabsBody = document.querySelectorAll(
		".about__body .tabs__body-item",
	);
	const aboutChange = new ChangeTabs(aboutTabs, aboutTabsBody);

	aboutTabs.forEach((tab, idx) => {
		tab.addEventListener("click", (e) => {
			e.preventDefault();
			aboutChange.changeTabs(tab);
			if (tab.classList.contains("current")) {
				aboutChange.changeBody(idx);
			}
		});
	});
};
export const activityTabs = () => {
	const activityTabs = document.querySelectorAll(
		".activity__content .tabs__item",
	);
	const activityTabsBody = document.querySelectorAll(
		".activity__body .tabs__body-item",
	);
	const activityChange = new ChangeTabs(activityTabs, activityTabsBody);

	activityTabs.forEach((tab, idx) => {
		tab.addEventListener("click", (e) => {
			e.preventDefault();
			activityChange.changeTabs(tab);
			if (tab.classList.contains("current")) {
				activityChange.changeBody(idx);
			}
		});
	});
};
export const infoTabs = () => {
	const infoTabs = document.querySelectorAll(".info__tabs .tabs__item");
	const infoTabsBody = document.querySelectorAll(
		".info__body .tabs__body-item",
	);
	const infoChange = new ChangeTabs(infoTabs, infoTabsBody);

	infoTabs.forEach((tab, idx) => {
		tab.addEventListener("click", (e) => {
			e.preventDefault();
			infoChange.changeTabs(tab);
			if (tab.classList.contains("current")) {
				infoChange.changeBody(idx);
			}
		});
	});
};
