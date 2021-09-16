let counter1 = 0;
let counter2 = 1;
let bool = true;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");
const menu = document.querySelector(".menu");
const section1wrapper = document.querySelector(".section-1-wrapper");
const section5wrapper = document.querySelector(".section-5-wrapper");

section1wrapper.style.transform = "scale(1)";

const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`;

  Array.from(circles).forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
};

const pageController = () => {
  bool = true;
  if (counter1 === 5) {
    Array.from(sections).forEach((section) => {
      section.style.left = "0";
    });
    counter1 = 0;
    counter2 = 1;
    section1wrapper.style.transform = "scale(1)";
    section5wrapper.style.transform = "scale(1.5)";
    progressCounter();
    bool = false;
  }

  if (counter1 === -1) {
    Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-5") {
        return;
      }
      section.style.left = "-100vw";
    });
    counter1 = 4;
    counter2 = 5;
    section1wrapper.style.transform = "scale(1.5)";
    section5wrapper.style.transform = "scale(1)";
    progressCounter();
    bool = false;
  }
  progressCounter();
  return bool;
};

// window.addEventListener("click", (e) => {
//   const deltaY = e.deltaY > 0;

//   if (deltaY) {
//     counter1++;
//     counter2++;
//   } else {
//     counter1--;
//     counter2--;
//   }

//   pageController();
//   progressCounter();
//   console.log(counter1, counter2);

//   if (bool) {
//     document.querySelector(
//       `.section-${deltaY ? counter1 : counter2}`
//     ).style.left = `${deltaY ? "-100vw" : "0"}`;

//     document.querySelector(
//       `.section-${deltaY ? counter1 : counter2}-wrapper`
//     ).style.transform = `scale(${deltaY ? "1.5" : "1"})`;

//     document.querySelector(
//       `.section-${deltaY ? counter1 + 1 : counter2 + 1}-wrapper`
//     ).style.transform = `scale(${deltaY ? "1" : "1.5"})`;
//   }
// });

document.querySelector(".left-btn").addEventListener("click", () => {
  counter1--;
  counter2--;
  pageController() &&
    (document.querySelector(`.section-${counter2}`).style.left = "0");

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter2 + 1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});

document.querySelector(".right-btn").addEventListener("click", () => {
  counter1++;
  counter2++;
  pageController() &&
    (document.querySelector(`.section-${counter1}`).style.left = "-100vw");

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});


menu.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("change");
});


// MODAL

//Form  Validation

//Variables

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordmatch = document.getElementById('passwordmatch');

//Functions
function showError(input, message) {
  const Register = input.parentElement;
  Register.className = "register error"
  const small = Register.querySelector('small')
  small.innerText = message
}

function showSuccess(input) {
  const Register = input.parentElement;
  Register.className = "register success"

}

//Check username
function validateUsername(username) {
  const re = /^[A-Za-z]+$/
  return re.test(String(username).toLowerCase());
}
//Check email
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Evenlisteners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === "") {
    showError(username, 'Username is required')
  } else if (!validateUsername(username.value)) {
    showError(username, 'Username is not valid. Numbers not allowed')
  }
  else {
    showSuccess(username)
  }
  if (email.value === "") {
    showError(email, 'Error Email is required')
  } else if (!validateEmail(email.value)) {
    showError(email, 'Email is not valid')
  } else {
    showSuccess(email)
  }
  if (password.value === "") {
    showError(password, 'Error Password is required')
  } else {
    showSuccess(password)
  }

  if (passwordmatch.value === "") {
    showError(passwordmatch, 'Error Password is required')
  }
  else if (passwordmatch.value !== password.value) {
    showError(passwordmatch, 'Error Passwords should match')
  } else {
    showSuccess(passwordmatch)
  }
});