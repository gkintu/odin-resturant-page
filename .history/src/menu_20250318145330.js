//menu

function createMenu() {
    const menuDiv = document.createElement ('div');
    menuDiv.classList.add('menu');

    //Create Menu Title
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    menuDiv.apendChild(menuTitle);

    //define menu categories 
    const categories = ['Appertizers', 'Main Coursers', 'Dessert', 'Beverages'];

    //Create a section for each category
    categories.forEach(category =>  {
        const categorySection = document.createElement('div');
        categorySection.classList.add('menu-category');

        //create h2 elements to alle the categories
        const categoryTitle = document.CreateElement('h2');
        category.textContent = category;
        categorySection.appendChild(categoryTitle);

        const items = getMenuItems (category);

        //create elements for each menu item
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            //Create header with name and price
            const itemHeader = document.createElement('div');
            itemHeader.classList.add('item-header');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemHeader.appendChild.add(itemName);

            const itemPrice = document.createElement('span');
            itemPrice.classList.add('price')
            itemPrice.textContent = item.price;
            itemHeader.appendChild.add(itemPrice);

            menuItem.appendChild(itemHeader);

            //Add item description
            const itemDescription  = document.createElement('div');
            itemDescription.textContent = item.description;
            menuItem.appendChild(itemDescription);

            categorySection.appendChild(menuItem);
        })

        menuDiv.appendChild(categorySection);
    });

    return menuDiv;

}

//Helper function to  organize  menu data 

function getMenuItems(category) {
    // Menu data organized by category for Puffer’s Paradise
    const menuItems = {
        'Appetizers': [
            { name: 'Spicy Octopus Tempura', description: 'Crispy octopus bites with chili glaze and seaweed garnish', price: '$15' },
            { name: 'Fugu Sashimi Teaser', description: 'Thinly sliced blowfish with ponzu dipping sauce, served daringly fresh', price: '$18' },
            { name: 'Crab Citrus Poppers', description: 'Zesty crab-stuffed citrus rounds with a tangy aioli drizzle', price: '$12' }
        ],
        'Main Courses': [
            { name: 'Fugu Feast', description: 'Masterfully prepared blowfish with miso broth and wild rice', price: '$35' },
            { name: 'Honey-Glazed Eel Skewer', description: 'Tender eel grilled with sweet honey and sesame crunch', price: '$22' },
            { name: 'Squid Ink Risotto', description: 'Glow-in-the-dark risotto with squid and a hint of spice', price: '$25' },
            { name: 'Ocean Medley Platter', description: 'A bold mix of seafood treasures with fugu accents', price: '$30' }
        ],
        'Desserts': [
            { name: 'Seafoam Mousse', description: 'Light mousse with a salty-sweet twist and edible coral', price: '$10' },
            { name: 'Puffer Puff Pastry', description: 'Flaky pastry filled with yuzu cream, a playful nod', price: '$8' }
        ],
        'Beverages': [
            { name: 'Fugu Fizz', description: 'Sparkling sake cocktail with a daring citrus kick', price: '$12' },
            { name: 'Ocean Breeze Tea', description: 'Herbal blend inspired by coastal waves', price: '$6' }
        ]
    };
    
    return menuItems[category] || [];
}

export default createMenu;