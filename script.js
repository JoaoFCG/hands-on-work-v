/* SCRIPT POSIÇÃO DE ÂNCORAS */
// Acha o cabeçalho
 var header = document.querySelector('header');
  
// Acha a altura do cabeçalho
 var headerHeight = header.offsetHeight + 68;
document.querySelectorAll('a[href^="#"]')
  .forEach(function (anchor) {
  anchor.addEventListener('click', 
  function (event) {
    event.preventDefault();
    
    // Acha o alvo apontado pela âncora
    var target = document.querySelector(this.getAttribute('href'));
                    
    var targetPosition = target
    .getBoundingClientRect().top - headerHeight;
    
    window.scrollTo({
      top: targetPosition + window.pageYOffset,
      behavior: 'smooth'
    });
  });
});

/* SCRIPT CARROSSEL DE IMAGENS */
let slideIndex = 1;
showSlides(slideIndex);

// Controle de anterior/próximo
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controle de ícones
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}