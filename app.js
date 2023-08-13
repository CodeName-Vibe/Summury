// TO TOP ARROW
// 1. declare variables
let btnToTop = document.querySelector(".arrow-button");
let header = document.querySelector("header");
// 2. on click scroll to top
btnToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
// 3. on reload setting
if (header.getBoundingClientRect().bottom < 0) {
    btnToTop.classList.add("arrow-visible");
}
// 4. arrow status on scroll
window.addEventListener("scroll", function() {
  if (header.getBoundingClientRect().bottom < 0) {
    btnToTop.classList.add("arrow-visible");
  } else {
    btnToTop.classList.remove("arrow-visible");
  }
})

// slider movement
// 1. declare variables
let language = false;
let slider = document.querySelector(".slider");
let point = document.querySelector(".point");
let sliderTextUA = document.querySelector(".slider-text-ua");
let sliderTextEN = document.querySelector(".slider-text-en");
// 2. change slider status on click
slider.addEventListener("click", function() {
  language = !language;
  point.classList.toggle("slider-active");
  point.classList.toggle("slider-inactive");
  sliderTextUA.classList.toggle("point-invisible");
  sliderTextEN.classList.toggle("point-invisible");
})

// text changer slider
// 1. declare variables
let textArray = document.querySelectorAll(".text-changer");
let content = [
  [
    "Text copied<br>to clipboard",

    "Name:",
    "Birthday:",
    "Lisetskyi Ivan",
    "24 February 2003",
    "Contacts",

    "Technologies Stack",
    "Experienced",
    "Experienced",
    "Experienced",
    "Familiar",
    "Experienced",
    "Experienced",
    "Familiar",
    "Familiar",

    "Skills",
    "Fast Learning & Fast Typing",
    "Reliable & Flexible",
    "Troubleshooting",
    "Communicative",

    "Languages",
    "Ukrainian -",
    "English -",
    "Native",

    "Education",
    "\"Athens\" Private school",
    "High",
    "English B2",
    "Basic Programming",
    "SUT",
    "Computer science",
    "University",
    "Self Education",
    "always",

    "Portfolio",
    "VISIT",
    "University Practice",
    "1 month",
    "NDA Project",
    "2 months",
    "UNRELEASED",

    "Contacts",
    "WhatsApp account",
    "LinkedIn account"
  ],
  [
    "Текст скопiйовано<br>до буферу обмiну",

    "Ім'я:",
    "Д/Н:",
    "Лісецький Іван",
    "24 Лютого 2003",
    "Контакти",

    "Технічний Стек",
    "Досвідчений",
    "Досвідчений",
    "Досвідчений",
    "Знайомий",
    "Досвідчений",
    "Досвідчений",
    "Знайомий",
    "Знайомий",

    "Навички",
    "Швидко Навчаюсь & Друкую",
    "Надійний & Гнучкий",
    "Траблшутинг",
    "Комунікабельний",

    "Мови",
    "Українська -",
    "Англійська -",
    "Рідна",

    "Навчання",
    "Приватна школа \"Афіни\"",
    "Вища",
    "Англійська B2",
    "Базове Програмування",
    "ДУТ",
    "Комп'ютерні науки",
    "Університет",
    "Самоосвіта",
    "постійно",
    
    "Портфолiо",
    "ЗАЙТИ",
    "Універ. Практика",
    "1 місяць",
    "Проект з ДПН",
    "2 місяці",
    "НЕВИПУЩЕНИЙ",
    
    "Контакти",
    "Акаунт WhatsApp",
    "Акаунт LinkedIn"
  ]
] 
// 2. change content on click
slider.addEventListener("click", function() {
  if (language) {
    for (let i = 0; i <= textArray.length - 1; i++) {
      textArray[i].innerHTML = content[1][i];
    }
  } else {
    for (let i = 0; i <= textArray.length - 1; i++) {
      textArray[i].innerHTML = content[0][i];
    }
  }
})

// to contacts button
// 1. declare variables
let btnToContacts = document.querySelector("button");
let footer = document.querySelector("footer");
// 2. scroll to bottom on click
btnToContacts.addEventListener("click", function() {
  window.scrollTo({
    top: footer.getBoundingClientRect().bottom,
    behavior: "smooth"
  });
})

// contacts copy to clipboard on click
// 1. declare variables
let copyText = document.querySelectorAll(".copy-text");
let copyRow = document.querySelectorAll(".copy-row");
let successTextBar = document.querySelector(".copy-success-text");
let successTextBarTimer;
// 2. copy text to clipboard on click
for(let i = 0; i < copyRow.length; i++) {
  copyRow[i].addEventListener("click", function() {
    navigator.clipboard.writeText(copyText[i].innerHTML)
      .then(() => {
        clearTimeout(successTextBarTimer);
        if (!successTextBar.classList.contains("copy-success-visible")){
          successTextBar.classList.toggle("copy-success-visible");
        }
        successTextBarTimer = setTimeout(() => {
          successTextBar.classList.toggle("copy-success-visible");
        }, 2000);
      })
      .catch ((err) => {
        clearTimeout(successTextBarTimer);
        if (!successTextBar.classList.contains("copy-success-visible")){
          successTextBar.classList.toggle("copy-success-visible");
        }
        successTextBar.innerHTML = "ERROR"
        successTextBarTimer = setTimeout(() => {
          successTextBar.classList.toggle("copy-success-visible");
        }, 2000);
      })
  })
}
// 3. success text bar disappearance on click
successTextBar.addEventListener("click", function() {
  clearTimeout(successTextBarTimer);
  if (successTextBar.classList.contains("copy-success-visible")){
    successTextBar.classList.toggle("copy-success-visible");
  }
})

// from tablet hover
// 1. declare variables
let cards = document.querySelectorAll(".card");
let cardsFront = document.querySelectorAll(".card-front");
let cardsBack = document.querySelectorAll(".card-back");
let cardsBg = document.querySelectorAll(".card-bg");
let experienceImages = document.querySelectorAll(".portfolio-hover-image");
let experienceText = document.querySelectorAll(".portfolio-text");
let experienceHoverText = document.querySelectorAll(".portfolio-hover-text")
let experienceString = document.querySelectorAll(".portfolio-string")
let footerIcons = document.querySelectorAll(".footer-bg-icon");
let timerButtonActive = false;
let timerCardsActive = false;
let timerIconsActive = false;
let cardsCliked = [false,false,false];
let experienceTextActive = false;
// 2. cards hover to click system replacement
for(let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function() {
    if (window.innerWidth < 1024) {
      if (!cardsCliked[i]) {
        cardsBg[i].classList.add("rotate");
        cardsFront[i].classList.add("front-hovered");
        cardsFront[i].classList.remove("front-not-hovered");
        cardsBack[i].classList.add("back-hovered");
        cardsBack[i].classList.remove("back-not-hovered");
        cardsCliked[i] = !cardsCliked[i];
      } else {
        cardsBg[i].classList.remove("rotate");
        cardsFront[i].classList.remove("front-hovered");
        cardsFront[i].classList.add("front-not-hovered");
        cardsBack[i].classList.remove("back-hovered");
        cardsBack[i].classList.add("back-not-hovered");
        cardsCliked[i] = !cardsCliked[i];
      }
    }
  })
}
// 3. portfolio text hover to click system replacement
for (let i = 0; i < experienceText.length; i++) {
  experienceText[i].addEventListener("click", function() {
    if (window.innerWidth < 1024) {
      experienceHoverText[i].classList.toggle("portfolio-text-hovered");
      experienceString[i].classList.toggle(`portfolio-string-${i}-hovered`);
    }
  })
}
// 4. cards tablet animation on sight
function tabletCardsAnimation() {
  if (!timerCardsActive) {
    for (let i = 0; i <= cardsBg.length; i++) {
      setTimeout(() => {
        if (i < cardsBg.length) {
          cardsBg[i].classList.toggle("card-hovered");
        }
        if (i > 0) {
          cardsBg[i-1].classList.toggle("card-hovered");
        }
      }, 500 * i);
    }
    timerCardsActive = true;
    setTimeout(() => {
      timerCardsActive = false;
    }, 2000);
  }
}
// 5. header button hover to animation replacement
function buttonHoverReplacement() {
  if (!timerButtonActive) {
    btnToContacts.classList.toggle("button-hovered");
    timerButtonActive = true;
    setTimeout(() => {
      timerButtonActive = false;
    }, 2000);
  }
}
// 6. footer icons hover to animation replacement
function iconsHoverReplacement() {
  if (!timerIconsActive) {
    for (let i = 0; i < footerIcons.length; i++) {
      let rng = Math.random();
      if (rng > 0.6) {
        footerIcons[i].classList.toggle("icon-hovered");
      }
    }
    timerIconsActive = true;
    setTimeout(() => {
      timerIconsActive = false;
    }, 1000);
  }
}
// 7. adaptation function loop every 0.5s
smallScreenHoverReplacement();
function smallScreenHoverReplacement() {
  if (window.innerWidth < 1024) {
    // trigger function if header is in sight
    if (header.getBoundingClientRect().bottom > 0) {
      buttonHoverReplacement();
    } else {
      btnToContacts.classList.remove("button-hovered");
    }
    // trigger function if cards in sight and window is tablet size
    if (window.innerWidth >= 768) {
      if (cardsBg[0].getBoundingClientRect().top < window.innerHeight/2 && cardsBg[0].getBoundingClientRect().bottom > window.innerHeight/2) {
        tabletCardsAnimation();
      } else {
        for (let i = 0; i < cardsBg.length; i++) {
          cardsBg[i].classList.remove("card-hovered");
        }
      }
    // change card status if it's in sight and window is smaller than tablet size
    } else {
      for (let i = 0; i < cardsBg.length; i++) {
        if (cardsBg[i].getBoundingClientRect().top < window.innerHeight/2 && cardsBg[i].getBoundingClientRect().bottom > window.innerHeight/2) {
          cardsBg[i].classList.add("card-hovered");
        } else {
          cardsBg[i].classList.remove("card-hovered");
        }
      }
    }
    // change portfolio image and text status if in sight
    for (let i = 0; i < experienceImages.length; i++) {
      if (experienceImages[i].getBoundingClientRect().top < window.innerHeight/2 && experienceImages[i].getBoundingClientRect().bottom > window.innerHeight/2) {
        experienceImages[i].classList.add("portfolio-image-hovered");
        experienceText[i].classList.add(`portfolio-text-${i}-hovered`);
      } else {
        experienceImages[i].classList.remove("portfolio-image-hovered");
        experienceText[i].classList.remove(`portfolio-text-${i}-hovered`);
      }
    }
    // trigger function if footer is in sight
    if ((footer.getBoundingClientRect().top - window.innerHeight) < 0) {
      iconsHoverReplacement();
    }
    // if window is bigger than tablet size restore settings
  } else {
    btnToContacts.classList.remove("button-hovered");
    for (let i = 0; i < cardsBg.length; i++) {
      cardsBg[i].classList.remove("card-hovered");
      cardsBg[i].classList.remove("rotate");
      cardsFront[i].classList.remove("front-hovered");
      cardsFront[i].classList.add("front-not-hovered");
      cardsBack[i].classList.remove("back-hovered");
      cardsBack[i].classList.add("back-not-hovered");
      cardsCliked[i] = !cardsCliked[i];
    }
    for (let i = 0; i < experienceImages.length; i++) {
      experienceImages[i].classList.remove("portfolio-image-hovered");
      experienceText[i].classList.remove(`portfolio-text-${i}-hovered`);
      experienceHoverText[i].classList.remove("portfolio-text-hovered");
      experienceString[i].classList.remove(`portfolio-string-${i}-hovered`);
    }
    for (let i = 0; i < footerIcons.length; i++) {
      footerIcons[i].classList.remove("icon-hovered");
    }
  }
  setTimeout(() => {
    smallScreenHoverReplacement();
  }, 500);
}