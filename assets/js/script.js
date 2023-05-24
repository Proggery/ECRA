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
const carouselID = document.querySelector("#carouselExample");

const handleTabletChange = (e) => {
    if (e.matches) {
      carouselID.id = "carouselExampleInterval"
      carouselID.setAttribute("data-bs-ride","carousel")
    } else {
      carouselID.id = "carouselExample"
      carouselID.removeAttribute("data-bs-ride","carousel")
    }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

//id
// carouselExampleInterval;
// data-bs-ride="carousel"

// button
// data-bs-target="#carouselExampleInterval";
