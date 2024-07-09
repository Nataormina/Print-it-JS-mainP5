const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
] ;


// Déclaration des variables 
// Compteur
let count = 0;

// Slides Images 
const img = document.querySelector(".banner-img");
const TagLine = document.querySelector("#banner p");

// Flèche gauche
const arrowLeft = document.querySelector(".arrow_left");
// Flèche droite
const arrowRight = document.querySelector(".arrow_right");

// Bullets points
const dots = document.querySelector(".dots");

// Création des events listeners des flèches
 // Ajout de la fonction de défilement : étape 4
arrowLeft.addEventListener("click", previousSlide)
/* Ecoute fonctionnement de la flèche au clic : étape 2
	console.log("la flèche gauche au clic fonctionne");*/

// Ajout de la fonction de défilement : étape 4
arrowRight.addEventListener("click", nextSlide)

/* Test de fonctionnement de la flèche : étape 2
	console.log("Le clic de la flèche de droite fonctionne");*/

// Création des Bullet Points : étape 3
/* Utilisation d'une boucle for pour compter le nombre d'images dans le tableau 
slide afin d'avoir le même nombre de points */
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add("dot")
	dots.appendChild(dot);
}

/* Déclaration de la variable pour faire apparaître le point correspondant à la slide sélectionnée
Mais de ce fait tous les points sont sélectionnés */
let dotSelected = document.querySelectorAll(".dot");
// Pour résoudre le problème de tous les points sélectionnés j'attribue le point sélectionné à la première slide
dotSelected[count].classList.add("dot_selected");

/* Création de la fonction pour y intégrer toutes les images ainsi que leur descriptifs : étape 4-5 */
// Création du carrousel 
function showSlide() {
	img.src = `./assets/images/slideshow/${slides[count].image}`;
	TagLine.innerHTML = slides[count].tagLine;
}
	
// Création de la navigation avec les flèches
// Fonction flèche de gauche
function previousSlide() {
	// Suppression du point actuel sélectionné
	dotSelected[count].classList.remove("dot_selected");
	// Si compteur <= 0, alors on revient au dernier slide
	if (count <= 0) {
		count = slides.length - 1;
	} 
	// Sinon on décrémente de 1 compteur
	else {
		count--;		
	}	
	// Ajout du point sélectionné à la nouvelle slide
	dotSelected[count].classList.add("dot_selected");
	// Appel de la fonction qui affiche le slider 
	showSlide()
}

//Fonction flèche de droite
function nextSlide() {
	// Suppression du point sélectionné actuel
	dotSelected[count].classList.remove("dot_selected");
	// Si compteur >= à la longueur du tableau, alors on retourne à la première slide
	if (count >= slides.length - 1) {
		count = 0;
	} 
	// Sinon on incrémente de 1 compteur
	else {
		count++;		
	}	
	// Ajout du point sélectionné à la nouvelle slide 
	dotSelected[count].classList.add("dot_selected");
	// Appel de la fonction qui affiche le slider
	showSlide()
}