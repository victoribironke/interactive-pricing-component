const toggle: HTMLDivElement | null = document.querySelector(".toggle div");
const slider: HTMLInputElement | null = document.querySelector(".slider");
const sliderDiv: HTMLDivElement | null =
  document.querySelector(".slider-div div");
const monthly: HTMLParagraphElement | null = document.querySelector(".monthly");
const yearly: HTMLParagraphElement | null = document.querySelector(".yearly");
const price: NodeListOf<Element> | null = document.querySelectorAll(".price");
const pageViews: HTMLParagraphElement | null =
  document.querySelector(".main-title");
const frequency: HTMLParagraphElement | null =
  document.querySelector(".frequency");
let isMonthly: boolean = true;

if (sliderDiv !== null) {
  sliderDiv.style.width = `${slider?.value}%`;
}

const getViewsFromSliderValue = (val: number, isMonth: boolean): number => {
  const res = (val * 100) / 50;
  return isMonth ? res : res * 9;
};

const updatePrice = (val: string): void => {
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

slider?.addEventListener("input", () => {
  if (sliderDiv !== null) {
    sliderDiv.style.width = `${slider?.value}%`;
  }
  updatePrice(slider?.value);
});

toggle?.addEventListener("click", () => {
  const presentClass = toggle.classList.value;

  if (presentClass === "left") {
    toggle.classList.replace("left", "right");
    monthly?.classList.remove("selected");
    yearly?.classList.add("selected");
    isMonthly = false;
    if (frequency !== null) {
      frequency.textContent = "/ year";
    }
  } else {
    monthly?.classList.add("selected");
    yearly?.classList.remove("selected");
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
