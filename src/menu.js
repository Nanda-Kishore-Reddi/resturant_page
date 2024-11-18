export default function loadMenuPage() {
    const content = document.getElementById('content');
    content.textContent = ''; // Clear existing content
    
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "Our Menu";
    content.appendChild(menuHeader);

    // Add other elements like menu items
}
