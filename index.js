// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// ---------------------------------------
// Correction

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});

// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.pageY + "px";
//   cursor.style.left = e.pageX + "px";

//   mouse1.style.top = e.pageY + "px";
//   mouse1.style.left = e.pageX + "px";

//   mouse2.style.top = e.pageY + "px";
//   mouse2.style.left = e.pageX + "px";
// });

// ------------------------------------
// Ce que j'ai fait

// const mousemove1 = document.querySelector(".mousemove1");
// const mousemove2 = document.querySelector(".mousemove2");
// const mousemove3 = document.querySelector(".mousemove3");

// window.addEventListener("mousemove", (e) => {
//   mousemove1.style.left = e.pageX + "px";
//   mousemove1.style.top = e.pageY + "px";
//   mousemove2.style.left = e.pageX + "px";
//   mousemove2.style.top = e.pageY + "px";
//   mousemove3.style.left = e.pageX + "px";
//   mousemove3.style.top = e.pageY + "px";
// });
