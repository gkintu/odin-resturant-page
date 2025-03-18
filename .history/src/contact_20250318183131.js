//contact.js

function createContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    //Create Page Titles
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    contactDiv.appendChild(contactTitle);

    // Create contact info section with address, phone and email
    const infoSection = document.createElement('div');
    infoSection.classList.add('contact-info');

    //Address section with icon
    const address = document.createElement('div');
    address.classList.add('info-item');

    const addressIcon = document.createElement('span');
    addressIcon.classList.add('info-item');
    addressIcon.textContent = '📍';
    address.appendChild(addressIcon);

    const addressText = document.createElement('div');
    addressText.innerHTML = `<h3>Address</h3><p>456 Ocean Pier Lane<br>Coral Bay, Seabound 67890</p>`;
    address.appendChild('addressText');

    // Phone block with icon
    const phone = document.createElement('div');
    phone.classList.add('info-item');
    
    const phoneIcon = document.createElement('span');
    phoneIcon.classList.add('icon');
    phoneIcon.textContent = '📞';
    phone.appendChild(phoneIcon);
    
    const phoneText = document.createElement('div');
    phoneText.innerHTML = '<h3>Phone</h3><p>(555) 987-6543</p>';
    phone.appendChild(phoneText);
    
    // Email block with icon
    const email = document.createElement('div');
    email.classList.add('info-item');
    
    const emailIcon = document.createElement('span');
    emailIcon.classList.add('icon');
    emailIcon.textContent = '✉️';
    email.appendChild(emailIcon);
    
    const emailText = document.createElement('div');
    emailText.innerHTML = '<h3>Email</h3><p>dine@puffersparadise.com</p>';
    email.appendChild(emailText);
    
    // Add all info items to section
    infoSection.appendChild(address);
    infoSection.appendChild(phone);
    infoSection.appendChild(email);

    // Create hours section 
    const hoursSection = document.createElement('div');
    hoursSection.classList.add('hours');

    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Hours of Operation';
    hoursSection.appendChild(hoursTitle);

    // Create hours list
    const hoursList = document.createElement('ul');

    const hours = [
        { day: 'Monday - Thursday ', time: '12:00 PM - 9:00 PM'},
        { day: 'Friday - Saturday ', time: '12:00 PM - 10:00 PM'},
        { day: 'Sunday ', time: '1:00 PM - 8:00 PM'}
    ];

    hours.forEach(item => {
        const hoursItem = document.createElement('li');
        hoursItem.innerHTML = `<span class="day">${item.day}:</span><span class="time">${item.time}`;
        hoursList.appendChild(hoursItem);
    });

        hoursSection.appendChild(hoursList);

        //Assemble Sections
        contactDiv.appendChild(infoSection);
        contactDiv.appendChild(hoursSection);

    return contactDiv;
}

export default createContact;