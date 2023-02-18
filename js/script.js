const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const mainBody = document.querySelector("#mainBody");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    mainBody.classList.toggle("scroll-off");
  });
};

navSlide();
