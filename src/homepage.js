import imagePath from '../images/restaurant.jpeg';
import loadMenuPage from './menu';

function loadHomePage() {
    const content = document.getElementById('content');

    // Main Container
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    // Restaurant Name
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Welcome to Gourmet Haven!";
    restaurantName.classList.add('restaurant-name');

    // Hero Image
    const heroImage = document.createElement('img');
    heroImage.src = imagePath; // Replace with your image URL
    heroImage.alt = "Delicious food";
    heroImage.classList.add('hero-image');

    // Tagline
    const tagline = document.createElement('p');
    tagline.textContent = "Experience the best culinary delights from around the world!";
    tagline.classList.add('tagline');

    // Call to Action Button
    const ctaButton = document.createElement('button');
    ctaButton.textContent = "Explore Our Menu";
    ctaButton.classList.add('cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Redirecting to the menu page...'); // Replace with navigation logic
        loadMenuPage();
    });

    // Append Elements to the Main Container
    mainContainer.appendChild(restaurantName);
    mainContainer.appendChild(heroImage);
    mainContainer.appendChild(tagline);
    mainContainer.appendChild(ctaButton);

    // Clear Existing Content and Add New Content
    content.textContent = ''; 
    content.appendChild(mainContainer);
}

export default loadHomePage;
