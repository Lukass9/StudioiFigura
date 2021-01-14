var timer1=0;
var timer2=0;

var slideIndex = 1;
window.onload = showSlides;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	clearTimeout(timer1);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) 
  {
	  slideIndex = 1
  }
  
  if (n < 1) 
  {
	  slideIndex = slides.length
  }
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  slideIndex++;
  if(slideIndex > slides.length){slideIndex = 1;}
  timer1 = setTimeout(showSlides, 3000);
}

function start()
{
	showSlides(1);
}

