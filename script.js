let bar = document.querySelector(".bar"),
    circles = document.querySelectorAll(".circle"),
    buttons = document.querySelectorAll("button"),
    images = document.querySelectorAll("img");

let currentSlides = 1;

const slides = (e) => {
    currentSlides = e.target.className === "next" ? ++currentSlides : --currentSlides;

    circles.forEach((circle, index) => {
        circle.classList[`${index < currentSlides ? "add" : "remove"}`]("active");
    });

    images.forEach((img, index) => {
        console.log(img);
        img.classList[`${index < currentSlides ? "add" : "remove"}`]("active");
    });

    bar.style.width = `${((currentSlides - 1) / (circles.length - 1)) * 100}%`;

    if (currentSlides === circles.length) {
        buttons[1].disabled = true;
    } else if (currentSlides === 1) {
        buttons[0].disabled = true;
    } else {
        buttons.forEach(btn => {
            btn.disabled = false;
        })
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", slides);
})