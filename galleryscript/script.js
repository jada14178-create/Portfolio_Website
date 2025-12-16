let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusDivs(n) {
  showSlides(slideIndex += n);
}

// Show the slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Optional: automatic slideshow
let autoSlideIndex = 0;
function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  autoSlideIndex++;
  if (autoSlideIndex > slides.length) { autoSlideIndex = 1 }
  slides[autoSlideIndex - 1].style.display = "block";
  setTimeout(autoShowSlides, 5000); // Change image every 5 seconds
}

// Start automatic slideshow
autoShowSlides();
