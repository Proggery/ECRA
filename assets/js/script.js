// @ts-nocheck
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");
const searchCloseBtn = document.querySelector(".searchCloseBtn");
const searchBG = document.querySelector(".searchBG");

searchBtn.addEventListener("click", (e) => {
  searchInput.classList.remove("form-hidden");
  searchInput.classList.add("form-visible");
  searchBtn.classList.remove("form-visible");
  searchBtn.classList.add("form-hidden");
});

searchCloseBtn.addEventListener("click", (e) => {
  searchInput.classList.add("form-hidden");
  searchInput.classList.remove("form-visible");
  searchBtn.classList.add("form-visible");
});

//--- SLIDER ---
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  grabCursor: true,
  pagination: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//--- CAROUSEL ---
const mediaQuery = window.matchMedia("(max-width: 767.9px)");
const carouselID = document.querySelector(".carousel");
const carouselItem = document.querySelector(".carousel-item");
const carouselControlPrev = document.querySelector(".carousel-control-prev");
const carouselControlNext = document.querySelector(".carousel-control-next");
const dataBsTarget = "data-bs-target";
const handleTabletChange = (e) => {
    if (e.matches) {
      carouselID.id = "carouselExampleInterval"
      carouselControlPrev.removeAttribute(dataBsTarget, "#carouselExampleControls")
      carouselControlNext.removeAttribute(dataBsTarget, "#carouselExampleControls")
      carouselID.setAttribute("data-bs-ride", "carousel")
      carouselItem.setAttribute("data-bs-interval", "2000")
      carouselControlPrev.setAttribute(dataBsTarget, "#carouselExampleInterval")
      carouselControlNext.setAttribute(dataBsTarget, "#carouselExampleInterval")
    } else {
      carouselID.id = "carouselExampleControls"
      carouselID.removeAttribute("data-bs-ride", "carousel")
      carouselItem.removeAttribute("data-bs-interval", "2000")
      carouselControlPrev.removeAttribute(dataBsTarget, "#carouselExampleInterval")
      carouselControlNext.removeAttribute(dataBsTarget, "#carouselExampleInterval")
      carouselControlPrev.setAttribute(dataBsTarget, "#carouselExampleControls")
      carouselControlNext.setAttribute(dataBsTarget, "#carouselExampleControls")
    }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

//id
// carouselExampleInterval;
// data-bs-ride="carousel"

// button
// data-bs-target="#carouselExampleInterval";
