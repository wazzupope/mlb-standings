function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  return main;
};

function loadHome() {
  const content = document.getElementById("content");

  while (content.lastChild) {
    content.lastChild.remove();
  }

  content.appendChild(createMain());
};

export {
  loadHome
};