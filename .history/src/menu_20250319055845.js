function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    // Create Menu Title
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    menuDiv.appendChild(menuTitle);

    // Create container for all menu categories
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    
    // Define menu categories 
    const categories = ['Appetizers', 'Main Courses', 'Desserts', 'Beverages'];

    // Create a section for each category
    categories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.classList.add('menu-category');

        // Create h2 elements for categories
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        // Get menu items for this category
        const items = getMenuItems(category);
        
        // Create elements for menu items in a grid
        const itemsGrid = document.createElement('div');
        itemsGrid.classList.add('menu-grid');

        // Create elements for each menu item
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            // Create content container
            const itemContent = document.createElement('div');
            itemContent.classList.add('menu-item-content');

            // Create header with name
            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemContent.appendChild(itemName);

            // Add price
            const itemPrice = document.createElement('div');
            itemPrice.classList.add('price');
            itemPrice.textContent = item.price;
            itemContent.appendChild(itemPrice);

            // Add item description
            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemContent.appendChild(itemDescription);

            // Add risk indicator for fugu dishes
            if (item.name.toLowerCase().includes('fugu')) {
                const riskIndicator = document.createElement('span');
                riskIndicator.classList.add('risk-indicator');
                riskIndicator.textContent = "⚠️ Chef's specialty";
                riskIndicator.style.display = 'block';
                riskIndicator.style.marginTop = '8px';
                riskIndicator.style.color = '#ff6b6b';
                riskIndicator.style.fontStyle = 'italic';
                itemContent.appendChild(riskIndicator);
            }

            menuItem.appendChild(itemContent);
            itemsGrid.appendChild(menuItem);
        });

        categorySection.appendChild(itemsGrid);
        menuContainer.appendChild(categorySection);
    });

    menuDiv.appendChild(menuContainer);
    return menuDiv;
}

// Helper function to organize menu data 
function getMenuItems(category) {
    // Menu data organized by category for Puffer's Paradise
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