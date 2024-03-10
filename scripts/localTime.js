// target the element
const localTime = document.querySelector("#local-time")
console.log(localTime)
// interval refresh the function every second
setInterval(myTimer, 1000);
// function for the time
function myTimer() {

  localTime.innerHTML = new Date().toLocaleTimeString();
}