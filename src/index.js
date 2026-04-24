// Menu burger

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("ouvert");
  burger.classList.remove("actif");
});

//Slide

const slidesContainer = document.getElementById("slides");
const slides = document.querySelectorAll(".slide");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const pointsContainer = document.getElementById("points");

const total = slides.length;
let indexCourant = 0;

//génerer dynamiquement des points

slides.forEach((_, i) => {
  const point = document.createElement("span");
  point.classList.add("point");

  if (i === 0) point.classList.add("actif");
  point.addEventListener("click", () => aller(i));

  pointsContainer.appendChild(point);
});

const points = document.querySelectorAll(".point");

function aller(i) {
  // Si on dépasse, on revient au début ou à la fin

  if (i >= total) i = 0;
  if (i < 0) i = total - 1;

  indexCourant = i;

  console.log(i);

  // Décale la bande de slide vers la gauche
  slidesContainer.style.transform = `translateX(-${i * 100}%)`;

  points.forEach((p) => p.classList.remove("actif"));
  points[i].classList.add("actif");
}

btnNext.addEventListener("click", () => aller(indexCourant + 1));
btnPrev.addEventListener("click", () => aller(indexCourant - 1));

let auto = setInterval(() => aller(indexCourant + 1), 3000);

const slider = document.getElementById("slider");

slider.addEventListener("mouseenter", () => clearInterval(auto));
slider.addEventListener("mouseleave", () => {
  auto = setInterval(() => aller(indexCourant + 1), 3000);
});
