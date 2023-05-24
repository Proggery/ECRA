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
    // window.location("http://127.0.0.1:5500/index.html")
});

// searchBG.children.setAttribute("teszt", "bla");
// searchBG.children.forEach(element => {
//     console.log(element);
// });


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
