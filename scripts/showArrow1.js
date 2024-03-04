 const button = document.querySelector("#arrow")
console.log(button)
function showArrow() {
    if ( document.documentElement.scrollTop > 20)  {
        button.style.display = "block";
    } else {
        button.style.display = "none"
    }
}