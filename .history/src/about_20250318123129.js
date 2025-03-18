function createAbout() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList('about');

    // Create main title
    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'Our Story';
    aboutDiv.appendChild('abutTitle');

    // Create a container  for about content 
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about-content');

    //Add Chef
    const aboutImage = document.createElement('img');
    aboutImage.src = './images/head-chef.jpg';
    aboutImage.alt = 'Our head chef';
    aboutContent.appendChild('aboutImage');

    
}