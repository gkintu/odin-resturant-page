//home.js

function createHome() {

const homeDiv = document.createElement('div');
homeDiv.classList.add('home');

//create and add headline

const homeHeader = document.createElement('header');    
homeHeader.classList.add('home-header');
homeDiv.appendChild(homeHeader);

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Welcome to our Restaurant';
homeHeader.appendChild(headerTitle);


const homeParagraph = document.createElement('p');
homeParagraph.textContent = 'We serve the best food in town.';
homeDiv.appendChild(homeParagraph);


return homeDiv;

}

export default createHome;