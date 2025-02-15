
window.onload = function () {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
};





document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed('#element', {
    strings: ['Andriod Developer.', 'FrontEnd Developer.', 'Java Developer.', 'UI/UX Designer'],
    typeSpeed: 50,
    backSpeed: 30,  // Speed of deleting text
    loop: true
  });
});


function downloadCV() {
  const cvLink = document.createElement("a");
  cvLink.href = "Resources/Aditya Chatterjee CV.pdf"; // Path to your CV
  cvLink.download = "Aditya_Chatterjee_CV.pdf"; // Suggested file name
  document.body.appendChild(cvLink);
  cvLink.click();
  document.body.removeChild(cvLink);
}



function showTab(tabId) {
  // Get references to both tab content elements
  var eduEl = document.getElementById("education");
  var skillsEl = document.getElementById("skills");

  // Animate out any currently visible tab content by sliding it down slightly
  [eduEl, skillsEl].forEach(function (el) {
    if (el.style.display !== "none") {
      el.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)"; // Slide down by 20px
    }
  });

  // After the animation, hide both sections and show the selected tab with a swipe in effect
  setTimeout(function () {
    // Hide both tab contents
    eduEl.style.display = "none";
    skillsEl.style.display = "none";

    // Select the desired tab content
    var selectedEl = document.getElementById(tabId);
    selectedEl.style.display = "block";

    // Set the initial state: slightly down and invisible
    selectedEl.style.transform = "translateY(20px)";
    selectedEl.style.opacity = "0";

    // Force a reflow to ensure the initial state is applied before starting the transition
    void selectedEl.offsetWidth;

    // Animate the content into view: slide up to its final position and fade in
    selectedEl.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    selectedEl.style.transform = "translateY(0)";
    selectedEl.style.opacity = "1";
  }, 300);
}
//Next button on click function in project card

var currentnextp = 0;
var projects = document.getElementsByClassName("project");

function NextProject() {
  if (currentnextp < projects.length - 1) {
    projects[currentnextp].style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out"; // Increased duration
    projects[currentnextp].style.transform = "translateX(-100%)";
    projects[currentnextp].style.opacity = "0";

    setTimeout(() => {
      projects[currentnextp].style.display = "none";

      currentnextp++;

      projects[currentnextp].style.display = "block";
      projects[currentnextp].style.transform = "translateX(100%)"; // Start off-screen
      setTimeout(() => {
        projects[currentnextp].style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out"; // Apply smooth transition
        projects[currentnextp].style.transform = "translateX(0)";
        projects[currentnextp].style.opacity = "1";
      }, 50);
    }, 800); // Increased delay to match new transition duration
  }
}

function PrevProject() {
  if (currentnextp > 0) {
    projects[currentnextp].style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out"; // Slower transition
    projects[currentnextp].style.transform = "translateX(100%)";
    projects[currentnextp].style.opacity = "0";

    setTimeout(() => {
      projects[currentnextp].style.display = "none";

      currentnextp--;

      projects[currentnextp].style.display = "block";
      projects[currentnextp].style.transform = "translateX(-100%)"; // Start off-screen
      setTimeout(() => {
        projects[currentnextp].style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out"; // Smooth transition
        projects[currentnextp].style.transform = "translateX(0)";
        projects[currentnextp].style.opacity = "1";
      }, 50);
    }, 800); // Adjusted delay
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navBar = document.querySelector(".bar");

  burger.addEventListener("click", function () {
      navBar.classList.toggle("active");
      burger.classList.toggle("active");
  });
});

