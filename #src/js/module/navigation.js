export const navigation = () => {};
export const navigationAnchors = [
	{en: "hero", ru: ""},
	{en: "about", ru: "О КОМПАНИИ"},
	{en: "history", ru: "ИСТОРИЯ"},
	{en: "activity", ru: "ДЕЯТЕЛЬНОСТЬ"},
	{en: "directions", ru: "РУКОВОДСТВО"},
	{en: "info", ru: "РАСКРЫТИЕ ИНФОРМАЦИИ"},
	{en: "releases", ru: "ПРЕСС-РЕЛИЗЫ"},
	{en: "contacts", ru: "КОНТАКТЫ"},
];
export function createNavigation(items) {
	const ul = document.createElement("ul");
	items.forEach((item, index) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
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

export const setCurrent = (index) => {
	const items = document.querySelectorAll(".navigation__list-elem");
	items.forEach((item, i) => {
		if (i === index) {
			item.classList.add("current");
		} else {
			item.classList.remove("current");
		}
	});
};
export const showHideNav = (index) => {
	const nav = document.querySelector(".pg-vertical .pg-pips");
	if (index === 0) {
		nav.style.display = "none";
	} else {
		nav.style.display = "block";
	}
};
