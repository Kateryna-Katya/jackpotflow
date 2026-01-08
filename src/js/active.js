const items = document.querySelectorAll('.navigation-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('is-active'));
    item.classList.add('is-active');
  });
});
