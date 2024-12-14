// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Get the elements
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

// Add an event listener to the submit button
submitButton.addEventListener('click', function() {
  // Create a new <p> element
  const thankYouMessage = document.createElement('p');
  
  // Set the text of the <p> element
  thankYouMessage.textContent = "Thank you for your message";
  
  // Set the font size of the <p> element
  thankYouMessage.style.fontSize = '24px';
  
  // Clear the contact page content and append the new message
  contactPage.innerHTML = '';  // Clears the existing content
  contactPage.appendChild(thankYouMessage);  // Appends the new message
});
