import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import createAbout from "./about";

function initializeWebsite() {
  const content = document.getElementById("content");
  const navLinks = document.querySelectorAll("header nav ul li a");

  function setActiveTab(activeLink) {
    navLinks.forEach((link) => {
      if (link === activeLink) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function loadHome() {
    content.innerHTML = "";
    content.appendChild(createHome());
  }

  function loadAbout() {
    content.innerHTML = "";
    content.appendChild(createAbout();)
  }

  function loadMenu() {
    content.innerHtml = "";
    content.appendChild(createMenu());
  }

  function loadContact() {
    content.innerHTML = "";
    content.appendChild(createContact());
  }
}

