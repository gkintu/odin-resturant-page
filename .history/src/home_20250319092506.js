//home.js

function createHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
  
    // Create and add headline
    const homeHeader = document.createElement('header');    
    homeHeader.classList.add('home-header');
    
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Puffer's Paradise";
    homeHeader.appendChild(headerTitle);
    
    const tagline = document.createElement('p');
    tagline.textContent = "Where Culinary Daring Meets Oceanic Delight";
    // tagline.style.fontSize = "1.5rem";
    // tagline.style.marginBottom = "2rem";
    homeHeader.appendChild(tagline);
    
    homeDiv.appendChild(homeHeader);
  
    // Create content section
    const contentSection = document.createElement('div');
    contentSection.classList.add('home-content');
    
    const welcomeText = document.createElement('p');
    welcomeText.textContent = "Welcome to Puffer's Paradise, where we specialize in the most exquisite and daring seafood dishes. Our signature blowfish delicacies are prepared by certified chefs with the utmost care and precision.";
    contentSection.appendChild(welcomeText);
    
    const callToAction = document.createElement('p');
    callToAction.textContent = "Visit us today for an unforgettable dining experience that will tantalize your taste buds and challenge your culinary boundaries.";
    callToAction.style.marginTop = "1rem";
    contentSection.appendChild(callToAction);
    
    homeDiv.appendChild(contentSection);
  
    return homeDiv;
  }

export default createHome;