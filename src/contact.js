import './style.css';


export default function loadContactPage() {
    const content = document.getElementById('content');
    content.textContent = ''; // Clear existing content
  
    // Create header
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact Us";
    content.appendChild(contactHeader);
  
    // Create the container for the contact form
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container', 'visible');
  
    // Add a subheading
    const subheading = document.createElement('h2');
    subheading.textContent = "Feel Free to Ask";
    contactContainer.appendChild(subheading);
  
    // Create the form element
    const form = document.createElement('form');
    form.setAttribute('action', 'https://formspree.io/f/xkgnobgv');
    form.setAttribute('method', 'POST');
  
    // Create the input fields
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('required', '');
    nameInput.setAttribute('placeholder', 'Enter your Name');
    form.appendChild(nameInput);
  
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('required', '');
    emailInput.setAttribute('placeholder', 'Enter your Email');
    form.appendChild(emailInput);
  
    const subjectInput = document.createElement('input');
    subjectInput.setAttribute('type', 'text');
    subjectInput.setAttribute('name', 'subject');
    subjectInput.setAttribute('id', 'subject');
    subjectInput.setAttribute('required', '');
    subjectInput.setAttribute('placeholder', 'Subject of the Message');
    form.appendChild(subjectInput);
  
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('required', '');
    messageInput.setAttribute('placeholder', 'Write your Message here');
    form.appendChild(messageInput);
  
    // Create the submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = "Send Message";
    form.appendChild(submitButton);
  
    // Append the form to the contact container
    contactContainer.appendChild(form);
  
    // Append the contact container to the content
    content.appendChild(contactContainer);
  }
  