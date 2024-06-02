const quickText = document.querySelector('#quick-text');

const moveText = () => {
  var x = Math.random() * (window.innerWidth - quickText.offsetWidth);
  var y = Math.random() * (window.innerHeight - quickText.offsetHeight);

  quickText.style.position = 'absolute';
  quickText.style.left = `${x}px`;
  quickText.style.top = `${y}px`;
}

quickText.addEventListener('click', moveText);
quickText.addEventListener('mouseenter', moveText);
