document.addEventListener("DOMContentLoaded", () => {
    let dots = document.querySelectorAll(".dot");
    let imgs = document.querySelectorAll(".hero-img");
    let contents = document.querySelectorAll(".hero-content");

    let activeDot = document.querySelector(".dot.active")
    let activeImg = document.querySelector(".hero-img.active");
    let activeContent = document.querySelector(".hero-content.active");
    let activeIndex = 0;
    let rodarAutomatico;

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            clearInterval(rodarAutomatico)
            mudarAtivo(dot,  i);
        })
    })

    function mudarAtivo(dot, i) {
        activeDot.classList.remove("active");
        activeImg.classList.remove("active");
        activeContent.classList.remove("active");

        dot.classList.add("active");
        imgs[i].classList.add("active");
        contents[i].classList.add("active");

        activeDot = dot;
        activeImg = imgs[i];
        activeContent = contents[i];
        activeIndex = i;

    }
    function mudarIndex(i){
        return i >= dots.length - 1 ? 0 : i + 1;
    }
    function automatizarSlides() {
        rodarAutomatico = setInterval(() => {
            activeIndex = mudarIndex(activeIndex);

            mudarAtivo(dots[activeIndex], activeIndex);
        }, 5000);
    }

    automatizarSlides();
})