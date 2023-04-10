export const initSlider = () => {
	// history slider
	const historyPhotoSlider = new Swiper("#history_photo_slider", {
		slidesPerView: 1,
		navigation: {
			nextEl: ".history__slider-btn.slider-btn_next",
			prevEl: ".history__slider-btn.slider-btn_prev",
		},
	});
	const historyInfoSlider = new Swiper("#history_info_slider", {
		slidesPerView: "auto",
	});

	historyPhotoSlider.controller.control = historyInfoSlider;
	historyInfoSlider.controller.control = historyPhotoSlider;

	// direction slider
	const directionSlider = new Swiper("#direction_slider", {
		slidesPerView: "auto",
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: ".derictions__slider-btns .slider-btn_next",
			prevEl: ".derictions__slider-btns .slider-btn_prev",
		},
	});
	const directionsBtns = document.querySelector(".derictions__slider-btns");
	const toggleDirectionBtns = (slideLength) => {
		if (slideLength > 3) {
			directionsBtns.style.display = "flex";
		} else {
			directionsBtns.style.display = "none";
		}
	};
	toggleDirectionBtns(directionSlider.slides.length);
	directionSlider.on("slidesLengthChange", () => {
		toggleDirectionBtns(directionSlider.slides.length);
	});

	// history slider
	const releasesSlider = new Swiper("#releases_slider", {
		slidesPerView: "auto",
		spaceBetween: 40,
		navigation: {
			nextEl: ".releases__slider-btn.slider-btn_next",
			prevEl: ".releases__slider-btn.slider-btn_prev",
		},
	});

	setTimeout(() => {
		directionSlider.navigation.update();
		historyPhotoSlider.navigation.update();
		historyInfoSlider.navigation.update();
		releasesSlider.navigation.update();
	}, 0);
};
