document.addEventListener('DOMContentLoaded', () => {
  const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-text').value.trim();
    const post_id = window.location.toString().split('/').pop();

    if (comment_text) {
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ post_id, comment_text }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.reload();
        } else {
          const errorText = await response.text();
          alert('Failed to add comment: ' + errorText);
        }
      } catch (err) {
        console.error('Error during fetch', err);
        alert('An error occurred. Please try again.');
      }
    }
  };

  const submitCommentButton = document.querySelector('#submit-comment');
  if (submitCommentButton) {
    submitCommentButton.addEventListener('click', commentFormHandler);
  }
});