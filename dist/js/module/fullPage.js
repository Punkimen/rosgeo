export const cbMouseInner = (block, cb) => {
	block.addEventListener("mouseenter", () => {
		cb();
	});
	block.addEventListener("touchstart", () => {
		cb();
	});
};
export const cbMouseLeave = (block, cb) => {
	block.addEventListener("mouseleave", () => {
		cb();
	});
	block.addEventListener("touchend", () => {
		cb();
	});
};
export const cbHeight = (height = 500, cb, elseCb) => {
	if (window.innerHeight < height) {
		cb();
	} else {
		elseCb();
	}
	window.addEventListener("resize", () => {
		if (window.innerHeight < height) {
			cb();
		} else {
			elseCb();
		}
	});
};
