const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const selectBox = document.querySelector(".selectBox");
const progressText = document.querySelectorAll(".step .check p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .check .bullet");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const error = document.getElementById("error");
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  if (check1.checked == true || check2.checked ==true || check3.checked == true || check4.checked == true) {
    slidePage.style.marginLeft = "-75%"; 
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
  else{
    error.innerHTML = "*Please mark any of checkbox";
  }
 
});
nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-200%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
