document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const newPostButton = document.getElementById('new-post');
    const closeButton = document.getElementById('close-button');
    const newPostForm = document.getElementById('new-post-form');
  
    newPostButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    newPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();
  
      if (title && content) {
        try {
          const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            const errorText = await response.text();
            alert('Failed to add post: ' + errorText);
          }
        } catch (err) {
          console.error('Error during fetch', err);
          alert('An error occurred. Please try again.');
        }
      } else {
        alert('Please fill out all fields');
      }
    });
  });