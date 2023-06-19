// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
  // Helper function to replace emojis using Twemoji
  function replaceEmojis() {
    twemoji.parse(document.body, {
      base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'
    });
  }

  // Delay the execution to ensure all elements are loaded
  setTimeout(function() {
    replaceEmojis();
  }, 2000); // Adjust the delay time as needed
});
