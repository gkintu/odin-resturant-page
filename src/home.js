function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // clear previous content;

const homeDiv = document.createElement('div');
homeDiv.classList.add('home');

const homeHeader = document.createElement('header');    
homeHeader.classList.add('home-header');

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Welcome to our Restaurant';


const homeParagraph = document.createElement('p');
homeParagraph.textContent = 'We serve the best food in town.';


homeDiv.appendChild(homeHeader);
homeHeader.appendChild(headerTitle);
homeDiv.appendChild(homeParagraph);
content.appendChild(homeDiv);
}

export default loadHome;