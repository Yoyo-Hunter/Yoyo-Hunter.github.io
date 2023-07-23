let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);




let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  
  navbar.classList.toggle('active');
};




window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  var scrollPosition = window.scrollY;

  if (scrollPosition >= 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});




function expandTextbox(textboxNumber) {
  var expandedText = document.getElementById("expandedText" + textboxNumber);
  
  if (expandedText.style.display === "none") {
    expandedText.style.display = "block";
  } else {
    expandedText.style.display = "none";
  }
};

function applyTheme(isDarkMode) {
  let darkModeIcon = document.querySelector('#darkMode-icon');
  if (isDarkMode) {
    darkModeIcon.innerHTML = '<i class="fas fa-sun"></i>'; // Cambiar al ícono del sol
    document.body.classList.add('dark-mode'); // Agregar clase para el tema oscuro
  } else {
    darkModeIcon.innerHTML = '<i class="fas fa-moon"></i>'; // Cambiar al ícono de la luna
    document.body.classList.remove('dark-mode'); // Quitar clase para el tema oscuro
  }
}

// Obtener el estado actual del tema del almacenamiento local
let isDarkMode = localStorage.getItem('darkMode') === 'true';
// Aplicar el tema actual al cargar la página
applyTheme(isDarkMode);

// Escuchar el evento clic en el icono de luna
document.querySelector('#darkMode-icon').onclick = () => {
  isDarkMode = !isDarkMode;
  // Guardar la preferencia de tema en el almacenamiento local
  localStorage.setItem('darkMode', isDarkMode.toString());
  // Aplicar el tema actual
  applyTheme(isDarkMode);
};

