function loadPage() {
  const content = document.getElementById('content');

  //Create a container div
  const container = document.createElement('div');
    container.classList.add('container');

    //Create a header
    const header = document.createElement('header');
    header.classList.add('header');

    //Create a paragraph    
    const paragraph = document.createElement('p');  
    paragraph.textContent = 'This is a paragraph';

    //Append the elements to the container
    container.appendChild(header);
    container.appendChild(paragraph);
    content.appendChild(container);

}

export default loadPage