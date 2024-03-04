const localTime = document.querySelector("#local-time")
console.log(localTime)

setInterval(myTimer, 1000);

function myTimer() {
 
  localTime.innerHTML = new Date().toLocaleTimeString();
}
