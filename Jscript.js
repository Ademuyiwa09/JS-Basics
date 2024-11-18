// WELCOME *USER*.
let username;
document.getElementById("submitBtn").onclick = function () {
  username = document.getElementById("inputName").value;
  document.getElementById("h1Tag").textContent = `HELLO 🤞   ${username}`
}

// AREA OF A RECTANGLE.
let length;
let breadth;
let area;
document.getElementById("submitButton").onclick = function () {
  length = document.getElementById("inputLength").value;
  breadth = document.getElementById("inputBreadth").value;
  area = length * breadth;
;
  if (area > 0) {
    console.log(`Result: ${area} cm.`);
  } else if (area == 0) {
    console.log(`Result: ${area}.`);
  } else if(area < 0) {
    console.log(`Negative Result: ${area} cm.`);
  }

}

// EVEN-NUMBERS BETWEEN  1 AND 100.
let evenNumbers = ' ';

for (evenNumbers = 2; evenNumbers <= 100; evenNumbers+=2) {
  console.log(evenNumbers);
}