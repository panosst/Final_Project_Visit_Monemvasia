// target the elements
const bars = document.querySelector('#open')
const x = document.querySelector('#close')
const navbar = document.querySelector('#mediaNavbar')
// this fuction maks the menu visible
function show() {
    bars.style.display = "none";
    x.style.display = "block";
    navbar.style.display = "block";
}
//  hide the mwnu
function hide(){
    bars.style.display = "block";
    x.style.display = "none";
    navbar.style.display = "none";
 }