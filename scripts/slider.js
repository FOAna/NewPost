/* Индекс слайда по умолчанию */
let slideIndexNews = 1;
let slideIndexPost = 1;
showSlides(slideIndexNews, "news");
showSlides(slideIndexPost, "post");

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide(item) {
  if (item === "news") showSlides((slideIndexNews += 1), item);
  if (item === "post") showSlides((slideIndexPost += 1), item);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide(item) {
  if (item === "news") showSlides((slideIndexNews -= 1), item);
  if (item === "post") showSlides((slideIndexPost -= 1), item);
}

/* Устанавливает текущий слайд */
function currentSlide(n, item) {
  if (item === "news") showSlides((slideIndexNews = n), item);
  if (item === "post") showSlides((slideIndexPost = n), item);
}

/* Основная функция слайдера */
function showSlides(n, item) {
  let i;
  let slides, dots;

  if (item === "news") {
    slides = document.querySelectorAll(".main__newsSlider .item");
    dots = document.querySelectorAll(".main__news .slider-dots_item");
    if (n > slides.length) {
      slideIndexNews = 1;
    }
    if (n < 1) {
      slideIndexNews = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexNews - 1].style.display = "block";
    dots[slideIndexNews - 1].className += " active";
  }
  if (item === "post") {
    slides = document.querySelectorAll(".main__postSlider .item");
    dots = document.querySelectorAll(".main__post .slider-dots_item");
    if (n > slides.length) {
      slideIndexPost = 1;
    }
    if (n < 1) {
      slideIndexPost = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexPost - 1].style.display = "block";
    dots[slideIndexPost - 1].className += " active";
  }
}
