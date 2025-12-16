const shareButton = document.getElementById('shareButton');

  if (navigator.share) {
    shareButton.addEventListener('click', async () => {
      try {
        await navigator.share({
          title: 'My Awesome App',
          text: 'Check out this amazing app!',
          url: 'https://alphaomena.github.io/' // Replace with your app's URL
        });
        console.log('App shared successfully!');
      } catch (error) {
        console.error('Error sharing app:', error);
      }
    });
  } else {
    // Fallback for browsers that don't support the Web Share API
    shareButton.textContent = 'Share (Not supported in this browser)';
    shareButton.disabled = true;
  }

