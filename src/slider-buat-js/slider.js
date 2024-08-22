let slideIndex = 1;
showSlides(slideIndex);

// Event listeners for buttons
document.querySelector(".prev").addEventListener("click", () => {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  plusSlides(1);
});

// Event listeners for dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide(index + 1);
  });
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the selected slide
  slides[slideIndex - 1].style.display = "block";

  // Add active class to the corresponding dot
  dots[slideIndex - 1].className += " active";
}

// Optional: Automatic Slideshow
function autoSlides() {
  plusSlides(1);
  setTimeout(autoSlides, 5000); // Change slide every 5 seconds
}

// Start the automatic slideshow
autoSlides();
