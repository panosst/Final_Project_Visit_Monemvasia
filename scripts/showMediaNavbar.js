const bars = document.querySelector('#open')
const x = document.querySelector('#close')
const navbar=document.querySelector('#mediaNavbar')
function show() {
    bars.style.display = "none";
    x.style.display = "block";
    navbar.style.display = "block";
}
 
function hide(){
    bars.style.display = "block";
    x.style.display = "none";
    navbar.style.display = "none";
 }