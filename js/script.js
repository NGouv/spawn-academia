// ================================
// SPAWN ACADEMIA
// JavaScript
// ================================

// ================================
// CARROSSEL DO HERO
// ================================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

if (slides.length && dots.length) {

    let currentSlide = 0;
    let autoSlide;

    function loadSlide(index) {
        const slide = slides[index];

        if (slide.dataset.src) {
            slide.src = slide.dataset.src;
            delete slide.dataset.src;
        }
    }

    // Mostrar slide
    function showSlide(index, preloadNext = true) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        loadSlide(index);
        slides[index].classList.add("active");
        dots[index].classList.add("active");

        if (preloadNext) {
            loadSlide((index + 1) % slides.length);
        }

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
    showSlide(currentSlide, false);
    window.setTimeout(() => loadSlide((currentSlide + 1) % slides.length), 1000);
    startSlider();

}


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

// ================================
// ANIMAÇÃO AO ROLAR
// ================================

const elementosAnimar = document.querySelectorAll(
    ".categorias h2, .card, .contato, .contato-card, .treino .titulo, .treino .card-treino"
);

if (elementosAnimar.length) {

    const observer = new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

                observer.unobserve(entrada.target);

            }

        });

    }, {
        threshold: 0.15
    });

    elementosAnimar.forEach(elemento => {

        elemento.classList.add("animar-scroll");

        observer.observe(elemento);

    });

}