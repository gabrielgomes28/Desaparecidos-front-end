// Recebe um element id e caso exista faz um scroll até o element:
const scrollToElement = (elementId) => {
	const element = document.getElementById(elementId);

	if (!element) return;

	window.scrollTo({ top: element.offsetTop - 90, behavior: "smooth" });
};

// Botões da navbar para telas menores:
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
	menu.classList.toggle("show-menu");
});

// Slideshow:
const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx) => {
	slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;
let maxSlide = slides.length - 1;

const nextSlide = document.querySelector(".btn-next");
nextSlide.addEventListener("click", function () {
	if (curSlide === maxSlide) curSlide = 0;
	else curSlide++;

	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	});
});

const prevSlide = document.querySelector(".btn-prev");
prevSlide.addEventListener("click", function () {
	if (curSlide === 0) curSlide = maxSlide;
	else curSlide--;

	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	});
});

setInterval(() => {
	document.querySelector(".btn-next")?.click();
}, 5000);
