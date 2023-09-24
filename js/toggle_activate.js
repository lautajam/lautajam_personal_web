// Obtener los elementos de navegación
const aboutLink = document.getElementById("about-link");
const projectsLink = document.getElementById("projects-link");
const contactLink = document.getElementById("contact-link");

// Función para cambiar la clase "active"
function setActive(link) {
  aboutLink.classList.remove("active");
  projectsLink.classList.remove("active");
  contactLink.classList.remove("active");
  link.classList.add("active");
}

// Agregar eventos de clic a los enlaces de navegación
aboutLink.addEventListener("click", function () {
  setActive(aboutLink);
});

projectsLink.addEventListener("click", function () {
  setActive(projectsLink);
});

contactLink.addEventListener("click", function () {
  setActive(contactLink);
});
