//menu

function createMenu() {
    const menuDiv = createElement ('div');
    menuDiv.classList.add('menu');

    //Create Menu Title
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    menuDiv.apenndChild(menuTitle);

    //define menu categories 
    const categories = ['Appertizers', 'Main Coursers', 'Dessert', 'Beverages'];

    //Create a section for each category
    categories.forEach(category =>  {
        const categorySection = document.createElement('div');
        categorySection.classList.add('menu-category');

        //create h2 elements to alle the categories
        const categoryTitle = document.CreateElement('h2');
        category.textContent = category;
        categorySection.appendChild(categpryTitle);

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
    });




}