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
  // document.getElementById("green").style.display = "none";
  // document.getElementById("active").style.display = "none";
  // document.getElementById("red").style.display = "none";
  // document.getElementById("black").style.display = "none";
  document.getElementById("active").style.display = "flex";
}
// function dropOpen1(){
//   document.getElementById("active").style.display = "none";
//   document.getElementById("red").style.display = "none";
//   document.getElementById("yellow").style.display = "none";
//   document.getElementById("black").style.display = "none";
//   document.getElementById("green").style.display = "flex";
// }
// function dropOpen2(){
//   document.getElementById("green").style.display = "none";
//   document.getElementById("active").style.display = "none";
//   document.getElementById("red").style.display = "none";
//   document.getElementById("yellow").style.display = "none";
//   document.getElementById("red").style.display = "flex";
// }
// function dropOpen3(){
//   document.getElementById("green").style.display = "none";
//   document.getElementById("active").style.display = "none";
//   document.getElementById("red").style.display = "none";
//   document.getElementById("black").style.display = "none";
//   document.getElementById("yellow").style.display = "flex";
// }
// function dropOpen4(){
//   document.getElementById("green").style.display = "none";
//   document.getElementById("active").style.display = "none";
//   document.getElementById("red").style.display = "none";
//   document.getElementById("yellow").style.display = "none";
//   document.getElementById("black").style.display = "flex";
//  }

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

function departureinfo(){
  document.getElementById("departureflight").style.display = "flex"
  document.getElementById("arrivalflight").style.display = "none"
  document.getElementById("depart").style.boxShadow = "0px 0px 0px"
  document.getElementById("arrival").style.boxShadow = "0px 0px 4px"
  document.getElementById("depart").style.backgroundColor = "rgb(0, 66, 0)"
  document.getElementById("arrival").style.backgroundColor = "rgb(241, 241, 241)"
  document.getElementById("arrival").style.color = "black"
  document.getElementById("depart").style.color = "white"
}
function arrivalinfo(){
  document.getElementById("arrivalflight").style.display = "flex"
  document.getElementById("departureflight").style.display = "none"
  document.getElementById("arrival").style.backgroundColor = "rgb(0, 66, 0)"
  document.getElementById("depart").style.backgroundColor = "rgb(241, 241, 241)"
  document.getElementById("depart").style.color = "black"
  document.getElementById("arrival").style.color = "white"
  document.getElementById("arrival").style.boxShadow = "0px 0px 0px"
  document.getElementById("depart").style.boxShadow = "0px 0px 4px"
}

function openField(){
  document.getElementById("fieldbox").style.display = "flex"
  document.getElementById("hero-slider").style.height = "122vh"
  document.getElementById("slide-indicators").style.top = "30%"
  document.getElementById("optArrow1").style.display = "none"
  document.getElementById("optArrow2").style.display = "flex"
}
function closeField(){
  document.getElementById("optArrow1").style.display = "flex"
  document.getElementById("optArrow2").style.display = "none"
  document.getElementById("fieldbox").style.display = "none"
  document.getElementById("hero-slider").style.height = "90vh"
  document.getElementById("slide-indicators").style.top = "40%"
}
function openfastmenu(){
  document.getElementById("navft-menu").style.display = "flex"
  document.getElementById("openmenu").style.display = "none"
  document.getElementById("closemenu").style.display = "flex"
  document.getElementById("navftheading").style.display = "none"
}
function closefastmenu(){
  document.getElementById("navft-menu").style.display = "none"
  document.getElementById("openmenu").style.display = "flex"
  document.getElementById("closemenu").style.display = "none"
  document.getElementById("navftheading").style.display = "flex"
}
function showchangedateoption(){
  document.getElementById("changefield").style.display = "flex"
  document.getElementById("changedateoption").style.display = "none"
}
function showdetailsoption(){
  document.getElementById("productdetials").style.display = "none"
  document.getElementById("productdetials1").style.display = "flex"
  document.getElementById("showoption").style.display = "none"
  document.getElementById("showoption1").style.display = "flex"
}
function closedetailsoption(){
  document.getElementById("productdetials").style.display = "flex"
  document.getElementById("productdetials1").style.display = "none"
  document.getElementById("showoption").style.display = "flex"
  document.getElementById("showoption1").style.display = "none"
}
function showdetailsoption2(){
  document.getElementById("productdetials2").style.display = "flex"
  document.getElementById("productdetials3").style.display = "none"
  document.getElementById("showoption2").style.display = "none"
  document.getElementById("showoption3").style.display = "flex"
}
function closedetailsoption2(){
  document.getElementById("productdetials3").style.display = "flex"
  document.getElementById("productdetials2").style.display = "none"
  document.getElementById("showoption2").style.display = "flex"
  document.getElementById("showoption3").style.display = "none"
}
function showdetailsoption3(){
  document.getElementById("productdetials5").style.display = "flex"
  document.getElementById("productdetials4").style.display = "none"
  document.getElementById("showoption4").style.display = "none"
  document.getElementById("showoption5").style.display = "flex"
}
function closedetailsoption3(){
  document.getElementById("productdetials4").style.display = "flex"
  document.getElementById("productdetials5").style.display = "none"
  document.getElementById("showoption4").style.display = "flex"
  document.getElementById("showoption5").style.display = "none"
}
function showdetailsoption4(){
  document.getElementById("productdetials7").style.display = "flex"
  document.getElementById("productdetials6").style.display = "none"
  document.getElementById("showoption6").style.display = "none"
  document.getElementById("showoption7").style.display = "flex"
}
function closedetailsoption4(){
  document.getElementById("productdetials6").style.display = "flex"
  document.getElementById("productdetials7").style.display = "none"
  document.getElementById("showoption6").style.display = "flex"
  document.getElementById("showoption7").style.display = "none"
}