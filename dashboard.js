// JavaScript to log menu clicks and highlight selected item
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('#menu li');

  items.forEach(item => {
    item.addEventListener('click', () => {
      // Remove 'active' class from all
      items.forEach(i => i.classList.remove('active'));

      // Add 'active' class to clicked
      item.classList.add('active');

      // Log to console
      console.log(`Clicked on: ${item.textContent}`);
    });
  });
});
