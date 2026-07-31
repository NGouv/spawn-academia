// ================================
// SPAWN ACADEMIA
// JavaScript
// ================================

// ================================
// CARROSSEL DO HERO
// ================================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let autoSlide;

// Mostrar slide
function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

// Próximo slide
function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

// Iniciar carrossel
function startSlider() {

    autoSlide = setInterval(nextSlide, 5000);

}

// Reiniciar quando clicar
function resetSlider() {

    clearInterval(autoSlide);
    startSlider();

}

// Clique nos indicadores
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

        resetSlider();

    });

});

// Iniciar
showSlide(currentSlide);
startSlider();


// ================================
// SCROLL SUAVE DO MENU
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// HEADER AO ROLAR
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,.95)";

    }else{

        header.style.background = "rgba(0,0,0,.80)";

    }

});