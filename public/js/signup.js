document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
  
    const signupFormHandler = async (event) => {
      event.preventDefault();
  
      const username = document.querySelector('#username').value.trim();
      const password = document.querySelector('#password').value.trim();
  
      console.log('Signup form submitted', { username, password });
  
      if (username && password) {
        try {
          const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            console.log('Signup successful');
            document.location.replace('/');
          } else {
            const errorText = await response.text();
            console.error('Failed to sign up', errorText);
            alert('Failed to sign up: ' + errorText);
          }
        } catch (err) {
          console.error('Error during fetch', err);
          alert('An error occurred. Please try again.');
        }
      } else {
        alert('Please enter a username and password');
      }
    };
  
    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', signupFormHandler);
      console.log('Signup form event listener attached');
    } else {
      console.error('Signup form not found');
    }
  });