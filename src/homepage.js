export default function loadHomePage() {
    const content = document.getElementById('content');
    
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Our Restaurant";
    
    const description = document.createElement('p');
    description.textContent = "Enjoy the best cuisine in town with a wonderful ambiance!";
    
    content.appendChild(headline);
    content.appendChild(description);
}
