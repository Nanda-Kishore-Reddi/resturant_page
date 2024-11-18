export default function loadContactPage() {
    const content = document.getElementById('content');
    content.textContent = ''; // Clear existing content
    
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact Us";
    content.appendChild(contactHeader);

    // Add other elements like menu items
}
