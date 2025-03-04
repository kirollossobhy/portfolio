var myLoader;
function myloader() {
  myLoader = setTimeout(showpage,2000)
  
}
function showpage() {
  document.getElementById("loader").style.display = "none"
  document.getElementById("webheder").style.display = "block"
  document.getElementById("webmain").style.display = "block"
  document.getElementById("webfooter").style.display = "block"
  
}
//Toggling Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

//Toggling Active Link
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // const navMenu = document.getElementById('nav-menu');
  // navMenu.classList.remove('show');
}

// navLink.forEach(n => n.addEventListener('click', linkAction));
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Reveal

const sr = scrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social", { delay: 400 });

sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 200 });
sr.reveal(".about-text", { delay: 400 });

sr.reveal(".skills-subtitle", { delay: 100 });
sr.reveal(".skills-text", { delay: 150 });
sr.reveal(".skills-data", { interval: 200 });
sr.reveal(".skills-img", { delay: 400 });

sr.reveal(".work-img", { interval: 200 });

sr.reveal(".contact-input", { interval: 200 });

Resources;

function sendEmail() {
  Email.send({
    SecureToken: "4ac6c94c-b81f-43e7-bf66-1e0a934cc01b",
    To: "kirosobhy2001@gmail.com",
    From: "kirosobhy2001@gmail.com",
    Subject: "subject",
    Body:
      "NAME:" +
      document.getElementById("name").value +
      "<br> EMAIL:" +
      document.getElementById("email").value +
      "<br> MESSAGE:" +
      document.getElementById("message").value,
  }).then((message) => alert("MESSAGE SENT SUCCESFULLY"));
}
