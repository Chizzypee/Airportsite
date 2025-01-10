let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Function to show the selected slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    indicators[i].classList.toggle('active', i === index);
  });
  currentIndex = index;
}
// Event Listeners for Buttons
prevBtn.addEventListener('click', () => {
  clearInterval(interval);
  let newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
});

nextBtn.addEventListener('click', () => {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
 console.log(interval)
});

// Event Listeners for Indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => showSlide(index));
});

// Auto-slide every 5 seconds
let interval =  setInterval(() => {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}, 5000);


function dropOpen(){
  document.getElementById("green").style.display = "none";
  document.getElementById("active").style.display = "none";
  document.getElementById("red").style.display = "none";
  document.getElementById("black").style.display = "none";
  document.getElementById("active").style.display = "flex";
}
function dropOpen1(){
  document.getElementById("active").style.display = "none";
  document.getElementById("red").style.display = "none";
  document.getElementById("yellow").style.display = "none";
  document.getElementById("black").style.display = "none";
  document.getElementById("green").style.display = "flex";
}
function dropOpen2(){
  document.getElementById("green").style.display = "none";
  document.getElementById("active").style.display = "none";
  document.getElementById("red").style.display = "none";
  document.getElementById("yellow").style.display = "none";
  document.getElementById("red").style.display = "flex";
}
function dropOpen3(){
  document.getElementById("green").style.display = "none";
  document.getElementById("active").style.display = "none";
  document.getElementById("red").style.display = "none";
  document.getElementById("black").style.display = "none";
  document.getElementById("yellow").style.display = "flex";
}
function dropOpen4(){
  document.getElementById("green").style.display = "none";
  document.getElementById("active").style.display = "none";
  document.getElementById("red").style.display = "none";
  document.getElementById("yellow").style.display = "none";
  document.getElementById("black").style.display = "flex";
 }

const option = document.querySelectorAll('.option-box')

option.forEach((navlink , i) => {
  navlink.addEventListener('click', () => {
    document.querySelector('.boy')?.classList.remove('boy');
    navlink.classList.add('boy')
  })
})

function openMenu(){
  document.getElementById("hambuger").style.display = "flex"
  document.getElementById("navmenu").style.display = "none"
}
function closeMenu(){
  document.getElementById("hambuger").style.display = "none"
  document.getElementById("navmenu").style.display = "flex"
  document.getElementById("whitemenu").style.display = "none"
  document.getElementById("search").style.display = "none"
  document.getElementById("depArr").style.display = "flex"
}
function openSearch(){
  document.getElementById("search").style.display = "flex"
  document.getElementById("whitemenu").style.display = "flex"
  document.getElementById("navmenu").style.display = "none"
  document.getElementById("depArr").style.display = "none"
}
function closeSearch(){
  document.getElementById("search").style.display = "none"
  document.getElementById("whitemenu").style.display = "none"
  document.getElementById("navmenu").style.display = "flex"
  document.getElementById("depArr").style.display = "flex"
}