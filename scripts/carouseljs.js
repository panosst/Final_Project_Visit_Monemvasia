let slides = document.getElementsByClassName("slides");
let thumb = document.getElementsByClassName("thumb");
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let milliseconds = 5000;
let speedUp = document.getElementById("speedUp");
let slowDown = document.getElementById("slowDown");
let slideIndex = 0;
showSlides();
// with this function user can increase the time for the  next picture
function increaseTheTimeForTheNextImage() {
  if (milliseconds >= 5000) {
    speedUp.style.display = "block";
  }
  if (milliseconds >= 9000) {
    slowDown.style.display = "none";
  }
  milliseconds += 1000;
  console.log(milliseconds);
}
// with this function user can decrease the time for the  next picture
function decreaseTheTimeForTheNextImage() {
  if (milliseconds <= 6000) {
    speedUp.style.display = "none";
    slowDown.style.display = "block";
  }
  if (milliseconds <= 10000) {
    slowDown.style.display = "block";
  }
  milliseconds -= 1000;
  console.log(milliseconds);
}
// autoplay fuction
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let thumb = document.getElementsByClassName("thumb");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < thumb.length; i++) {
    thumb[i].className = thumb[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumb[slideIndex - 1].className += " active";
  slideInterval = setTimeout(showSlides, milliseconds);
}
// with this function when user click for example thumbnail(1) can see image (1)
function currentSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = index;
  for (let i = 0; i < thumb.length; i++) {
    thumb[i].className = thumb[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumb[slideIndex - 1].className += " active";
}
play.style.display = "none";
// this function start autoplay onclick
function playSlide() {
  slideInterval = setTimeout(showSlides, milliseconds);
  play.style.display = "none";
  stop.style.display = "block";
}
// this fuction stop autoplay onclick
function stopSlide() {
  clearTimeout(slideInterval);
  stop.style.display = "none";
  play.style.display = "block";
}
// this function drive the user to the previus image onclick
function prevSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < thumb.length; i++) {
    thumb[i].className = thumb[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumb[slideIndex - 1].className += " active";
}
// this function drive the user to the next image onclcik
function nextSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < thumb.length; i++) {
    thumb[i].className = thumb[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumb[slideIndex - 1].className += " active";
}
