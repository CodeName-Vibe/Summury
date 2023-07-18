// to top
let btnToTop = document.querySelector(".arrow-button");
let header = document.querySelector("header");
btnToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
if (header.getBoundingClientRect().bottom < 0) {
    btnToTop.classList.add("arrow-visible");
}
window.addEventListener("scroll", function() {
  if (header.getBoundingClientRect().bottom < 0) {
    btnToTop.classList.add("arrow-visible");
  } else {
    btnToTop.classList.remove("arrow-visible");
  }
})

// slider
let language = false;
let slider = document.querySelector(".slider");
let point = document.querySelector(".point");
let sliderTextUA = document.querySelector(".slider-text-ua");
let sliderTextEN = document.querySelector(".slider-text-en");
slider.addEventListener("click", function() {
  language = !language;
  point.classList.toggle("slider-active");
  point.classList.toggle("slider-inactive");
  sliderTextUA.classList.toggle("point-invisible");
  sliderTextEN.classList.toggle("point-invisible");
  console.log(language)
})

// text changer
let textArray = document.querySelectorAll(".text-changer");
fetch("content.json")
  .then(res => res.json())
  .then(text => console.log(text))


// to contacts
let btnToContacts = document.querySelector("button");
let footer = document.querySelector("footer");
btnToContacts.addEventListener("click", function() {
  window.scrollTo({
    top: footer.getBoundingClientRect().bottom,
    behavior: "smooth"
  });
})