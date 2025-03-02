import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  #ratio = 0;

  constructor(slides) {
    this.slides = slides;
    this._container = this.#render();
  }

  get elem() {
    return this._container;
  }

  #template() {
    return `
  <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    ${this.slides
      .map(
        (item) =>
          `
      <div class="carousel__slide" data-id="${item.id}">
        <img src="/assets/images/carousel/${
          item.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `
      )
      .join("\n")}
    </div>
  </div>`;
  }

  #productAdd = (event) => {
    let target = event.target;
    target.dispatchEvent(
      new CustomEvent("product-add", {
        detail: this.id,
        bubbles: true,
      })
    );
  };

  #render() {
    this._container = createElement(this.#template());
    this._container.querySelectorAll(".carousel__button").forEach((button) => {
      button.addEventListener("click", this.#productAdd);
    });
    this.#initCarousel();
    return this._container;
  }

  #checkRatio() {
    let quantity_slides = this.slides.length;
    let left = this._container.querySelector(".carousel__arrow_left");
    let right = this._container.querySelector(".carousel__arrow_right");
    if (this.#ratio === 0) {
      left.style.display = "none";
      right.style.display = "";
    } else if (this.#ratio === quantity_slides - 1) {
      left.style.display = "";
      right.style.display = "none";
    } else {
      left.style.display = "";
      right.style.display = "";
    }
  }

  #step() {
    let slide_width =
      this._container.querySelector(".carousel__slide").offsetWidth;
    let step = slide_width * -this.#ratio;
    this._container.querySelector(
      ".carousel__inner"
    ).style.transform = `translateX(${step}px)`;
    this.#checkRatio();
  }

  #initCarousel() {
    this.#checkRatio();
    this._container
      .querySelector(".carousel__arrow_right")
      .addEventListener("click", () => {
        this.#ratio += 1;
        this.#step();
      });
    this._container
      .querySelector(".carousel__arrow_left")
      .addEventListener("click", () => {
        this.#ratio -= 1;
        this.#step();
      });
  }
}
