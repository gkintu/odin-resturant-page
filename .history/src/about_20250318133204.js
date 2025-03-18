//about.js

import chefImage from "../images/head-chef.png";

function createAbout() {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");

  // Create main title
  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "Our Story";
  aboutDiv.appendChild(aboutTitle);

  // Create a container  for about content
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");

  // Add Chef

  const aboutImage = document.createElement("img");
  aboutImage.src = chefImage;
  aboutImage.alt = "Our head chef";
  aboutContent.appendChild(aboutImage);

  // Create text section
  const aboutText = document.createElement("div");
  aboutText.classList.add("about-text");

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Puffer’s Paradise, founded in 2015, is a daring eatery in the city’s heart. We serve blowfish, a risky delicacy, alongside unique treats like spicy octopus and eel skewers.";
  aboutText.appendChild(paragraph1);

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Our head chef, Hiroshi Kato, mastered fugu preparation in Japan over a decade. His bold vision crafts thrilling dishes, blending precision with creativity for an unmatched dining adventure.";
  aboutText.appendChild(paragraph2);

  const paragraph3 = document.createElement("p");
  paragraph3.textContent =
    "Legend says a shipwrecked sailor bet his life savings on blowfish here, won big, and funded Puffer’s Paradise. Now, his wild tale fuels our fearless culinary spirit.";
  aboutText.appendChild(paragraph3);

  aboutContent.appendChild(aboutText);
  aboutDiv.appendChild(aboutContent);

  return aboutDiv;
}

export default createAbout;
