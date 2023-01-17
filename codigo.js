let btn = document.querySelector(".menu-btn");
let navMenu =  document.querySelector(".nav-menu");
let menu = document.querySelector("#menu");

btn.addEventListener("click",()=>{
  clase = menu.getAttribute("class")
  if (clase === "fas fa-bars") {
    navMenu.classList.toggle("show");
    menu.classList.replace("fas","fa-solid")
    menu.classList.replace("fa-bars","fa-xmark")
  } else {
    navMenu.classList.toggle("show");
    menu.classList.replace("fa-solid","fas")
    menu.classList.replace("fa-xmark","fa-bars")
  }
})

ScrollReveal().reveal('.main');
ScrollReveal().reveal('.news', {delay: 400});
ScrollReveal().reveal('.card-banner', {delay: 400});
ScrollReveal().reveal('.card-banner-2', {delay: 400});
