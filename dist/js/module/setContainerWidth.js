export const setContainerWidth = (el, direction = "centered") => {
	const container = el;
	const screenWidth = window.innerWidth;
	const paddingWidth =
		(screenWidth - 1000) / 2 > 15 ? (screenWidth - 1000) / 2 : 15;

	if (direction) {
		switch (direction) {
			case "centered":
				container.style.paddingLeft = paddingWidth + "px";
				container.style.paddingRight = paddingWidth + "px";
				break;
			case "right":
				container.style.paddingLeft = paddingWidth + "px";
				break;
			case "left":
				container.style.paddingRight = paddingWidth + "px";
				break;
			case "none":
				break;
			default:
				container.style.paddingLeft = paddingWidth + "px";
				container.style.paddingRight = paddingWidth + "px";
		}
	} else {
		console.error("direction is not defined", direction);
	}
};
