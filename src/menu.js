export default function loadMenuPage() {
    const content = document.getElementById('content');
    content.textContent = ''; // Clear existing content
    
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "Our Menu";
    content.appendChild(menuHeader);

    // Create a list of menu items
    const menuItems = [
        { name: "Margherita Pizza", description: "Classic pizza with mozzarella and basil", price: "$12.99" },
        { name: "Spaghetti Carbonara", description: "Creamy pasta with pancetta and parmesan", price: "$14.50" },
        { name: "Caesar Salad", description: "Crisp lettuce with Caesar dressing and croutons", price: "$8.99" },
        { name: "Grilled Chicken Sandwich", description: "Chicken breast with lettuce, tomato, and mayo", price: "$11.00" },
        { name: "Tiramisu", description: "Delicious Italian dessert with coffee and mascarpone", price: "$6.50" }
    ];

    // Create a container for the menu items
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Loop through the menu items and create elements
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        menuItem.appendChild(itemDescription);

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;
        itemPrice.classList.add('price');
        menuItem.appendChild(itemPrice);

        menuContainer.appendChild(menuItem);
    });

    // Append the menu container to the content
    content.appendChild(menuContainer);
}
    