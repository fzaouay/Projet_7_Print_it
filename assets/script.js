const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* script fléches */

let arrowleft = document.querySelector(".arrow_left");

arrowleft.addEventListener('click', function () {
	console.log ('event listeners fleche left fonctionne');
	if (currentSlide === 0) {
        // Si on est à la première diapositive, on passe à la dernière
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlide(currentSlide);
});

let arrowright = document.querySelector(".arrow_right");

arrowright.addEventListener('click', function () {
	console.log ('event listeners fleche right fonctionne');
	if (currentSlide === totalSlides - 1) {
        // Si on est à la dernière diapositive, on passe à la première
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlide(currentSlide);
});


let currentSlide = 0; // Index de la diapositive actuelle
const totalSlides = slides.length;

function updateSlide(index) {
    const bannerImage = document.querySelector(".banner-img");
    const tagLineElement = document.querySelector("#banner p");

    // Mise à jour de l'image et du texte
    bannerImage.src = slides[index].image;
    tagLineElement.innerHTML = slides[index].tagLine;

    // Mise à jour des points indicateurs
    updateDots(index);
}


// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        dot.classList.toggle("dot_selected", idx === index);
    });
}

updateSlide(currentSlide);



