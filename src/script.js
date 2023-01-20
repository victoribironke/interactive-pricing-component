"use strict";
const toggle = document.querySelector(".toggle div");
const slider = document.querySelector(".slider");
const sliderDiv = document.querySelector(".slider-div div");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const price = document.querySelectorAll(".price");
const pageViews = document.querySelector(".main-title");
const frequency = document.querySelector(".frequency");
let isMonthly = true;
if (sliderDiv !== null) {
  sliderDiv.style.width = `${
    slider === null || slider === void 0 ? void 0 : slider.value
  }%`;
}
const getViewsFromSliderValue = (val, isMonth) => {
  const res = (val * 100) / 50;
  return isMonth ? res : res * 9;
};
const updatePrice = (val) => {
  const value = parseInt(val);
  if (value % 5 === 0) {
    if (pageViews !== null) {
      if (value === 0) {
        pageViews.textContent = "LESS THAN 10K PAGEVIEWS";
      } else if (value === 100) {
        pageViews.textContent = "200K+ PAGEVIEWS";
      } else {
        pageViews.textContent = `${getViewsFromSliderValue(
          value,
          true
        )}K PAGEVIEWS`;
      }
    }
    if (price !== null) {
      if (value === 0) {
        price.forEach((pr) => (pr.textContent = "$10.00"));
      } else {
        price.forEach(
          (pr) =>
            (pr.textContent = `$${getViewsFromSliderValue(
              value,
              isMonthly
            )}.00`)
        );
      }
    }
  }
};
slider === null || slider === void 0
  ? void 0
  : slider.addEventListener("input", () => {
      if (sliderDiv !== null) {
        sliderDiv.style.width = `${
          slider === null || slider === void 0 ? void 0 : slider.value
        }%`;
      }
      updatePrice(slider === null || slider === void 0 ? void 0 : slider.value);
    });
toggle === null || toggle === void 0
  ? void 0
  : toggle.addEventListener("click", () => {
      const presentClass = toggle.classList.value;
      if (presentClass === "left") {
        toggle.classList.replace("left", "right");
        monthly === null || monthly === void 0
          ? void 0
          : monthly.classList.remove("selected");
        yearly === null || yearly === void 0
          ? void 0
          : yearly.classList.add("selected");
        isMonthly = false;
        if (frequency !== null) {
          frequency.textContent = "/ year";
        }
      } else {
        monthly === null || monthly === void 0
          ? void 0
          : monthly.classList.add("selected");
        yearly === null || yearly === void 0
          ? void 0
          : yearly.classList.remove("selected");
        toggle.classList.replace("right", "left");
        isMonthly = true;
        if (frequency !== null) {
          frequency.textContent = "/ month";
        }
      }
      if (slider !== null) {
        updatePrice(slider.value);
      }
    });
