document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const googleButton = document.getElementById('google');
  const youtubeButton = document.getElementById('youtube');
  const githubButton = document.getElementById('github');

  // Event listener for buttons
  googleButton.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
  });

  youtubeButton.addEventListener('click', () => {
    window.open('https://www.youtube.com', '_blank');
  });

  githubButton.addEventListener('click', () => {
    window.open('https://www.github.com', '_blank');
  });

  // Search functionality
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim() !== '') {
      const query = searchInput.value.trim();
      window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
  });
});
