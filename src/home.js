function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  return main;
};

function createTable() {
  const table = document.createElement('table');
  table.setAttribute('id', 'table');

  return table;
};

function loadHome() {
  const content = document.getElementById('content');

  while (content.lastChild) {
    content.lastChild.remove();
  };

  content.appendChild(createMain());
  const main = document.getElementById('main');
  main.appendChild(createTable());
};

export {
  loadHome
};