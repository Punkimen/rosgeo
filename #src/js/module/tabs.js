import {addClass, removeClass} from "./toggleClass.js";

export class ChangeTabs {
	constructor(tabs, bodyItems) {
		this.tabs = tabs;
		this.bodyItems = bodyItems;
	}
	changeTabs(tab) {
		this.tabs.forEach((el, idx) => {
			removeClass(el, "current");
		});
		addClass(tab, "current");
	}
	changeBody(index) {
		this.bodyItems.forEach((el, idx) => {
			removeClass(el, "show");
			index == idx && addClass(el, "show");
		});
	}
}
