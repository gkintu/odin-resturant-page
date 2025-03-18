function createContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    //Create Page Titles
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    contactDiv.appendChild.add(contactTitle);

    // Create contact info section with adress, phone and email
    const infoSection = document.createElement('div');
    infoSection.classList.add('contact-info');

    //Address section with icon
    const adress = document.createElement('div');
    adress.classList.add('info-item');

    const adressIcon = document.createElement ('span');
    adressIcon.classList.add('info-item');
    addressIcon.textContent = '📍';
    adress.appendChild(adressIcon);

    const adressText = document.createElement('div');
    adressText.innerHTML = `<h3>Address</h3><p>456 Ocean Pier Lane<br>Coral Bay, Seabound 67890</p>`;
    adress.appendChild('adressText');

}