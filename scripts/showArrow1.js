// target the element
const button = document.querySelector("#arrow")
console.log(button)
// with this function the arrow is visible when the scroll is >20px
function showArrow() {
    if ( document.documentElement.scrollTop > 20)  {
        button.style.display = "block";
    } else {
        button.style.display = "none"
    }
}