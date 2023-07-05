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

// ! == == == ==   form submitin code on client side   == == == ==

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var email = document.getElementById("email").value;
      if (email.indexOf("@") === -1) {
        alert("Please include '@' in the email address.");
        return false;
      } else {
        // prepare form data
        var formData = new FormData(this);

        // Submit the form using Fetch API.
        fetch("/path/to/your/submit/url", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            alert("Message sent successfully!");
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("There was an error sending your message.");
          });
      }
    });
});

// * == == == ==   form submitin code on server side    == == == ==
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/submit', function (req, res) {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;

//     console.log(`Received message from ${name} (${email}): ${message}`);

//     res.status(200).send({ message: 'Data received successfully.' });
// });

// app.listen(3000, function () {
//     console.log('Server is listening on port 3000.');
// });

// update script from .json file - use npm start in your command line.
// "scripts": {
//   "start": "node server.js"
// }
