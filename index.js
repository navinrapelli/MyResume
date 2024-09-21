var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

console.log(screen.width + "width");

if (screen.width < 600) {
  var v = document.getElementById("mainMenu");
  v.classList.add("d-none");
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }

  if (slideIndex != 1) {
  }

  for (i = 0; i < x.length; i++) {
    x[i].classList.add("d-none");
  }
  x[slideIndex - 1].classList.add("d-block");
  x[slideIndex - 1].classList.remove("d-none");
  x[slideIndex - 1].classList.add("sliding");
}

function DarkMode() {
  const root = document.querySelector(":root");

  var x = document.getElementsByClassName("active");
  var y = document.getElementsByClassName("modeD");
  if (x.length === 1) {
    document.documentElement.style.setProperty("--main-color", "white");
    document.documentElement.style.setProperty("--box-color", "black");
    document.documentElement.style.setProperty("--back-color", "#E89DA4");
    x[0].innerHTML = "Light mode";
    x[0].classList.remove("active");
  } else {
    document.documentElement.style.setProperty("--main-color", "#972525");
    document.documentElement.style.setProperty("--box-color", "white");
    document.documentElement.style.setProperty("--back-color", "#003049");
    y[0].classList.add("active");
    y[0].innerHTML = "Dark mode";
  }
}
