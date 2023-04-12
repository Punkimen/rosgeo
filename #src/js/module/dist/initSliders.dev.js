"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSlider = void 0;

var initSlider = function initSlider() {
  // page slider
  // const globalSlider = new Swiper("#global_slider", {
  // 	slidesPerView: "1",
  // 	direction: "vertical",
  // });
  // history slider
  var historyPhotoSlider = new Swiper("#history_photo_slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".history__slider-btn.slider-btn_next",
      prevEl: ".history__slider-btn.slider-btn_prev"
    }
  });
  var historyInfoSlider = new Swiper("#history_info_slider", {
    slidesPerView: "auto"
  });
  historyPhotoSlider.controller.control = historyInfoSlider;
  historyInfoSlider.controller.control = historyPhotoSlider; // direction slider

  var directionSlider = new Swiper("#direction_slider", {
    slidesPerView: "auto",
    breakpoints: {
      1024: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: ".derictions__slider-btns .slider-btn_next",
      prevEl: ".derictions__slider-btns .slider-btn_prev"
    }
  });
  var directionsBtns = document.querySelector(".derictions__slider-btns");

  var toggleDirectionBtns = function toggleDirectionBtns(slideLength) {
    if (slideLength > 3) {
      directionsBtns.style.display = "flex";
    } else {
      directionsBtns.style.display = "none";
    }
  };

  toggleDirectionBtns(directionSlider.slides.length);
  directionSlider.on("slidesLengthChange", function () {
    toggleDirectionBtns(directionSlider.slides.length);
  }); // history slider

  var releasesSlider = new Swiper("#releases_slider", {
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
      nextEl: ".releases__slider-btn.slider-btn_next",
      prevEl: ".releases__slider-btn.slider-btn_prev"
    }
  });
  setTimeout(function () {
    directionSlider.navigation.update();
    historyPhotoSlider.navigation.update();
    historyInfoSlider.navigation.update();
    releasesSlider.navigation.update();
  }, 0);
};

exports.initSlider = initSlider;