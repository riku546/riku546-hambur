const  line1=document.querySelector(".line1");
const line2= document.querySelector(".line2");
const left_menu= document.querySelector(".left-menu");
const full_back= document.querySelector(".full-back");
const hambur=document.querySelector(".hamburger");
const header=document.querySelector(".header");



hambur.addEventListener("click",()=>{
  line1.classList.add("open");
  line2.classList.add("open");
  left_menu.classList.add("open");
  full_back.classList.add("open");
  header.classList.add("open");
  hambur.classList.add("open");


});

full_back.addEventListener("click",()=>{
  line1.classList.remove("open");
  line2.classList.remove("open");
  left_menu.classList.remove("open");
  full_back.classList.remove("open");
  header.classList.remove("open");
  hambur.classList.remove("open");

});