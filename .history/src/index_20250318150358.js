// index.js
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import createAbout from "./about";
import loadHome from "./home";

function initializeWebsite() {
  const content = document.getElementById("content");
  const navLinks = document.querySelectorAll("header nav ul li a");

  function loadHome() {
    content.innerHTML = ""; //clear existing content
    content.appendChild(createHome()); // add new content
  }

  function loadAbout() {
    content.innerHTML = "";
    content.appendChild(createAbout());
  }

  function loadMenu() {
    content.innerHTML = "";
    content.appendChild(createMenu());
  }

  function loadContact() {
    content.innerHTML = "";
    content.appendChild(createContact());
  }

  //highlight clicked tab
  function setActiveTab(activeLink) {
    navLinks.forEach((link) => {
      if (link === activeLink) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  //add click event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault;

      const linkText = link.textContent.toLowerCase();

      //Determine which content to load base don which link was clicked

      if (linkText === "home") {
        loadHome();
      } else if (linkText === "about") {
        loadAbout();
      } else if (linkText === "menu") {
        loadMenu();
      } else if (linkText === "contact") {
        loadContact();
      }

      setActiveTab(link); // call setActiveTab
    });
  });

  //load home page by default when page first loads
  loadHome();
  setActiveTab(navLinks[0]); //highlight home tab by default as well
}


document.addEventListener('DOMContentLoaded', initializeWebsite); //run init when DOM is fully loaded