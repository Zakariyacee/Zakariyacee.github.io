// What needs to be done is that once a button is clicked, the number on the selection text gets changed to the number on that button. 
// then once the submit button is clicked, the thank-you-card shows up and shows the right selection. 
// could seperately click on a button for ex btn 1 and then that changes the text to you selected 1 out of 5 and etc

// select the items

const card = document.querySelector(".card-overlay");
const submitBtn = document.querySelector(".submit-btn");
const selection = document.querySelector(".selection");


const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

// change the selection text
btn1.addEventListener("click",function () {
  selection.innerHTML = "You selected 1 out of 5"
})

btn2.addEventListener("click",function () {
  selection.innerHTML = "You selected 2 out of 5"
})

btn3.addEventListener("click",function () {
  selection.innerHTML = "You selected 3 out of 5"
})

btn4.addEventListener("click",function () {
  selection.innerHTML = "You selected 4 out of 5"
})

btn5.addEventListener("click",function () {
  selection.innerHTML = "You selected 5 out of 5"
})

submitBtn.addEventListener("click", function () {
  card.classList.add("open-card");
})
