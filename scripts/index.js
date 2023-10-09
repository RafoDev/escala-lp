window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".nav__button");
  const menu = document.querySelector(".nav__link-list");
  button.addEventListener("click", () => {
    console.log("brr");
    button.classList.toggle("nav__button--pressed");
    menu.classList.toggle("nav__link-list--opened");
  });

  const alliesGallery = document.querySelector(".allies__gallery");
  let animationPaused = false;

  alliesGallery.addEventListener("touchstart", () => {
    alliesGallery.style.animationPlayState = "paused";
    animationPaused = true;
  });
  alliesGallery.addEventListener("touchend", () => {
    if (animationPaused) {
      alliesGallery.style.animationPlayState = "running";
      animationPaused = false;
    }
  });
});
