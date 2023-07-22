// ! == == == ==   hamburger menu, cube position    == == == ==

document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector(".navbar-list").classList.toggle("open");

  // for cube position when hamburger is open
  let cube = document.querySelector(".navbar-cube");

  if (this.classList.contains("open")) {
    cube.style.position = "relative";
  } else {
    cube.style.position = "static";
  }
});

window.addEventListener("resize", function () {
  // get the current window width
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // check if the window width is larger than your mobile breakpoint (in this case, 800px)
  if (width > 800) {
    // if it is, remove the 'open' class from the hamburger and the navbar list
    let hamburger = document.querySelector(".hamburger");
    let navbarList = document.querySelector(".navbar-list");
    let cube = document.querySelector(".navbar-cube");

    hamburger.classList.remove("open");
    navbarList.classList.remove("open");
    cube.style.position = "static";
  }
});

// ! == == == ==   button theme swapper    == == == ==

const toggleButton = document.querySelector(".btn-theme");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

// Check for saved theme in localStorage and apply it
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
  toggleIcon(savedTheme);
  updateBackgroundImage(savedTheme);
} else {
  document.body.classList.add("light"); // This will be the default theme
}

toggleButton.addEventListener("click", function () {
  // Switch theme and save the new theme to localStorage
  let newTheme = document.body.classList.contains("light") ? "dark" : "light";
  document.body.classList.remove("light", "dark");
  document.body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);

  // Switch the visible icon
  toggleIcon(newTheme);
  updateBackgroundImage(newTheme);
});

function toggleIcon(newTheme) {
  if (newTheme === "dark") {
    sunIcon.style.opacity = "1";
    moonIcon.style.opacity = "0";
  } else {
    sunIcon.style.opacity = "0";
    moonIcon.style.opacity = "1";
  }
}

// Switch --hero-background-image
function updateBackgroundImage(newTheme) {
  if (newTheme === "dark") {
    document.documentElement.style.setProperty(
      "--hero-background-image",
      "url(img/night_coding.jpeg)"
    );
  } else {
    document.documentElement.style.setProperty(
      "--hero-background-image",
      "url(img/day.avif)"
    );
  }
}

// ! == == == ==   slide in animation on scroll   == == == ==

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
