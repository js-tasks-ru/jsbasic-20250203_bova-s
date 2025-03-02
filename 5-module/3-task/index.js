function initCarousel() {
  // ваш код...
  const carousel_inner = document.querySelector(".carousel__inner");
  const carousel_arrow_left = document.querySelector(".carousel__arrow_left");
  const carousel_arrow_right = document.querySelector(".carousel__arrow_right");
  const quanty_slides = document.querySelectorAll(".carousel__slide").length;
  const slide_width = document.querySelector(".carousel__slide").offsetWidth;

  let ratio = 0;

  function checkRatio(ratio) {
    if (ratio === 0) {
      carousel_arrow_left.style.display = "none";
      carousel_arrow_right.style.display = "";
    } else if (ratio === quanty_slides - 1) {
      carousel_arrow_left.style.display = "";
      carousel_arrow_right.style.display = "none";
    } else {
      carousel_arrow_left.style.display = "";
      carousel_arrow_right.style.display = "";
    }
  }

  function step(ratio) {
    let step = slide_width * -ratio;
    carousel_inner.style.transform = `translateX(${step}px)`;
    checkRatio(ratio);
  }

  checkRatio(ratio);

  carousel_arrow_left.addEventListener("click", () => {
    ratio -= 1;
    step(ratio);
  });

  carousel_arrow_right.addEventListener("click", () => {
    ratio += 1;
    step(ratio);
  });
}
