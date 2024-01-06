//Botones de menú
// Se obtiene todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu-list a');

// Recorre cada enlace del menú
menuLinks.forEach(link => {
  // Agrego un event listener para el evento 'click' a cada enlace
  link.addEventListener('click', smoothScroll);
});

// Función para desplazarse suavemente hasta una sección
function smoothScroll(event) {
  event.preventDefault(); // Prevenimos el comportamiento predeterminado del enlace
  
  const targetId = this.getAttribute('href'); // Obtengo el ID de la sección a la que se va a desplazar
  
  // Obtenemos la posición vertical de la sección
  const targetPosition = document.querySelector(targetId).offsetTop;
  
  // Animamos el desplazamiento suave utilizando 'window.scrollTo'
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth' // Utilizo el comportamiento 'smooth' para un desplazamiento suave
  });
}


//carrusel script
window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('Sobre_mi');
    const scrollPosition = window.scrollY;
    const sectionPosition = aboutSection.offsetTop;
  
    if (scrollPosition >= sectionPosition) {
      startImageCarousel();
    } else {
      stopImageCarousel();
    }
  });
  
  let carouselInterval;
  
  function startImageCarousel() {
    const images = document.querySelectorAll('.imagenes img');
    let currentImageIndex = 0;
    let isCarouselActive = true;
  
    function showNextImage() {
      if (isCarouselActive) {
         // Oculta la imagen actual
        images[currentImageIndex].style.opacity = '0';
   // Calcula el índice de la siguiente imagen
        currentImageIndex = (currentImageIndex + 1) % images.length;
   // Muestra la siguiente imagen
        images[currentImageIndex].style.opacity = '1';
   // Desactiva el carrusel cuando llega a la última imagen
        if (currentImageIndex === images.length - 1) {
          isCarouselActive = false;
          setTimeout(showAllImages, 2000); 
        }
      }
    }
  
    function showAllImages() {
      for (let i = 0; i < images.length; i++) {
         // Muestra todas las imágenes
        images[i].style.opacity = '1';
      }
    }
  
    // Mostrar la primera imagen
    images[currentImageIndex].style.opacity = '1';
  
    carouselInterval = setInterval(showNextImage, 1200); 
  }
  
  function stopImageCarousel() {
    clearInterval(carouselInterval);
  
    const images = document.querySelectorAll('.imagenes img');
    for (let i = 0; i < images.length; i++) {
        // Oculta todas las imágenes
      images[i].style.opacity = '0'; 
    }
  }

//scroll up
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
}

document.getElementById("scroll-to-top").onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



  
  

