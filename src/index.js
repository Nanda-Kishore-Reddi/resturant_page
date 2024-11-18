console.log('Restaurant homepage is running!');


import loadHomePage from './homepage';
import loadMenuPage from './menu';
import loadContactPage from './contact';

function clearContent() {
    document.getElementById('content').textContent = '';
}

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
