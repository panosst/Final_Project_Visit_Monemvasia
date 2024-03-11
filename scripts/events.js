async function getData() {
  // target elements
  const ul = document.querySelector("#drom");
  // dom munipulation erase everi child of ul
  while (ul.firstChild) {
    ul.firstChild.remove();
  }
  // get json data from external web page
  const url = "https://panosst.github.io/events/events.json";
  const response = await fetch(url);
  console.log(response);
  const events = await response.json();
  console.log(events);
  // target users choise
  let usersChoice = document.getElementById("month");
  // select only the oblects with selected month value
  let month = usersChoice.value;
  let monthIs = "";
  switch (month) {
    case "jan":
      monthIs = events.filter((event) => event.month === "january");
      break;
    case "feb":
      monthIs = events.filter((event) => event.month === "february");
      break;
    case "mar":
      monthIs = events.filter((event) => event.month === "march");
      break;
    case "apr":
      monthIs = events.filter((event) => event.month === "april");
      break;
    case "may":
      monthIs = events.filter((event) => event.month === "may");
      break;
    case "jun":
      monthIs = events.filter((event) => event.month === "june");
      break;
    case "jul":
      monthIs = events.filter((event) => event.month === "july");
      break;
    case "aug":
      monthIs = events.filter((event) => event.month === "august");
      break;
    case "sep":
      monthIs = events.filter((event) => event.month === "september");
      break;
    case "oct":
      monthIs = events.filter((event) => event.month === "october");
      break;
    case "nov":
      monthIs = events.filter((event) => event.month === "november");
      break;
    case "dec":
      monthIs = events.filter((event) => event.month === "december");
      break;
  }
  // sorts the events of the month by date and hour at the same time
  console.log(monthIs);
  monthIs.sort((a, b) => a.day - b.day || a.time - b.time);
  console.log(monthIs);

  // dom munipulation creates the li of ul
  for (i = 0; i < monthIs.length; i++) {
    let li = document.createElement("li");
    let descript = document.createTextNode("Ημερα & ωρα : " + monthIs[i].date + "  Τοπος : " + monthIs[i].place + "  "+"  Περιγραφη : " + monthIs[i].description);
    li.appendChild(descript);
    ul.appendChild(li);
  }
}
getData();
