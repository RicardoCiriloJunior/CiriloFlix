document.addEventListener("DOMContentLoaded", () => {
    let dots = document.querySelectorAll(".dot");
    let imgs = document.querySelectorAll(".hero-img");
    let contents = document.querySelectorAll(".hero-content");

    let activeDot = document.querySelector(".dot.active")
    let activeImg = document.querySelector(".hero-img.active");
    let activeContent = document.querySelector(".hero-content.active");

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            activeDot.classList.remove("active");
            activeImg.classList.remove("active");
            activeContent.classList.remove("active");

            dot.classList.add("active");
            imgs[i].classList.add("active");
            contents[i].classList.add("active");

            activeDot = dot;
            activeImg = imgs[i];
            activeContent = contents[i];
        })
    })

})