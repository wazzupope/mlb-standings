function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  return main;
};

function createTable() {
  const table = document.createElement('table');
  table.setAttribute('id', 'table');

  const tr = document.createElement('tr');
  tr.setAttribute('class', 'tr');
  tr.setAttribute('id', 'header-row')
  table.appendChild(tr);

  const blankCell = document.createElement('td');
  blankCell.setAttribute('class', 'table-cell');
  tr.appendChild(blankCell);

  const teamHeader = document.createElement('td');
  teamHeader.textContent = 'Team';
  teamHeader.setAttribute('class', 'table-cell');
  teamHeader.setAttribute('class', 'header-cell');
  tr.appendChild(teamHeader);

  const gamesPlayedHeader = document.createElement('td');
  gamesPlayedHeader.textContent = 'GP';
  gamesPlayedHeader.setAttribute('class', 'table-cell');
  gamesPlayedHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesPlayedHeader);

  const gamesWonHeader = document.createElement('td');
  gamesWonHeader.textContent = 'W';
  gamesWonHeader.setAttribute('class', 'table-cell');
  gamesWonHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesWonHeader);

  const gamesLostHeader = document.createElement('td');
  gamesLostHeader.textContent = 'L';
  gamesLostHeader.setAttribute('class', 'table-cell');
  gamesLostHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesLostHeader);

  const runsForHeader = document.createElement('td');
  runsForHeader.textContent = 'RS';
  runsForHeader.setAttribute('class', 'table-cell');
  runsForHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runsForHeader);

  const runsAgainstHeader = document.createElement('td');
  runsAgainstHeader.textContent = 'RA';
  runsAgainstHeader.setAttribute('class', 'table-cell');
  runsAgainstHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runsAgainstHeader);

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