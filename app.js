// to top arrow
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

// slider movement
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
})

// text changer slider
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

    "Educations",
    "\"Athens\" Private school",
    "High",
    "English B2",
    "Basic Programming",
    "SUT",
    "Computer science",
    "University",
    "Self Education",
    "always",

    "Experience",
    "VISIT",
    "University Practise",
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

    "Скіли",
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
    
    "Досвід",
    "ВІДВІДАТИ",
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
let btnToContacts = document.querySelector("button");
let footer = document.querySelector("footer");
btnToContacts.addEventListener("click", function() {
  window.scrollTo({
    top: footer.getBoundingClientRect().bottom,
    behavior: "smooth"
  });
})

// contacts copy to clipboard on click
let copyText = document.querySelectorAll(".copy-text");
let copyRow = document.querySelectorAll(".copy-row");
let successTextBar = document.querySelector(".copy-success-text");
let successTextBarTimer;
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
successTextBar.addEventListener("click", function() {
  clearTimeout(successTextBarTimer);
  if (successTextBar.classList.contains("copy-success-visible")){
    successTextBar.classList.toggle("copy-success-visible");
  }
})