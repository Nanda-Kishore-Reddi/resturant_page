console.log('Restaurant homepage is running!');
import imagePath from '../images/restaurant.jpeg';

import './style.css';
import loadHomePage from './homepage';
import loadMenuPage from './menu';
import loadContactPage from './contact';

function clearContent() {
    document.getElementById('content').textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
});

// Create header and navbar
const header = document.createElement('header');
header.classList.add('navbar');

// Create logo
const logo = document.createElement('img');
logo.src = imagePath;  // Add your logo image path here
logo.alt = 'Restaurant Logo';
logo.classList.add('logo');  // Add a class for styling if needed
logo.addEventListener('click', loadHomePage);
header.appendChild(logo);

const headerdiv = document.createElement('div');
headerdiv.id = 'navi';
// Create Home button
const homebtn = document.createElement('button');
homebtn.textContent = 'Home';
homebtn.id = 'home-tab';
headerdiv.appendChild(homebtn);

// Create Menu button
const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.id = 'menu-tab';
headerdiv.appendChild(menuBtn);

// Create Contact button
const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';
contactBtn.id = 'contact-tab';
headerdiv.appendChild(contactBtn);

header.appendChild(headerdiv)

document.body.prepend(header); // Add header to the top of the page

// Event listeners for navigation
document.getElementById('home-tab').addEventListener('click', () => {
    clearContent();
    loadHomePage();
});

document.getElementById('menu-tab').addEventListener('click', () => {
    clearContent();
    loadMenuPage();
});

document.getElementById('contact-tab').addEventListener('click', () => {
    clearContent();
    loadContactPage();
});
