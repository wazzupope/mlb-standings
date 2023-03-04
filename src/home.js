// Create header in DOM
function createHeader() {
  // Create header element
  const header = document.createElement('header');
  header.setAttribute('id', 'header');

  // Create h1 for title
  const h1 = document.createElement('h1');
  h1.setAttribute('id', 'title');
  h1.textContent = "MLB Standings";

  // Append title h1 to header element
  header.appendChild(h1);

  return header;
};

// Create main in DOM
function createMain() {
  // Create main element
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  return main;
};

// Create table in DOM
function createTable(tableName) {
  // Create table element
  const table = document.createElement('table');
  table.setAttribute('id', tableName);

  // Create table row element for table headings
  const tr = document.createElement('tr');
  tr.setAttribute('class', 'tr');
  tr.setAttribute('class', 'header-row')
  table.appendChild(tr);

  // Create blank header cell over logo column
  const blankCell = document.createElement('td');
  blankCell.setAttribute('class', 'table-cell');
  tr.appendChild(blankCell);

  // Create Team header in table
  const teamHeader = document.createElement('td');
  teamHeader.textContent = 'Team';
  teamHeader.setAttribute('class', 'table-cell');
  teamHeader.setAttribute('class', 'header-cell');
  tr.appendChild(teamHeader);

  // Create GP header in table
  const gamesPlayedHeader = document.createElement('td');
  gamesPlayedHeader.textContent = 'GP';
  gamesPlayedHeader.setAttribute('class', 'table-cell');
  gamesPlayedHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesPlayedHeader);

  // Create W header in table
  const gamesWonHeader = document.createElement('td');
  gamesWonHeader.textContent = 'W';
  gamesWonHeader.setAttribute('class', 'table-cell');
  gamesWonHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesWonHeader);

  // Create L header in table
  const gamesLostHeader = document.createElement('td');
  gamesLostHeader.textContent = 'L';
  gamesLostHeader.setAttribute('class', 'table-cell');
  gamesLostHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesLostHeader);

  // Create Win% header in table
  const winPctHeader = document.createElement('td');
  winPctHeader.textContent = 'Win%';
  winPctHeader.setAttribute('class', 'table-cell');
  winPctHeader.setAttribute('class', 'header-cell');
  tr.appendChild(winPctHeader);

  // Create RS header in table
  const runsForHeader = document.createElement('td');
  runsForHeader.textContent = 'RS';
  runsForHeader.setAttribute('class', 'table-cell');
  runsForHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runsForHeader);

  // Create RA header in table
  const runsAgainstHeader = document.createElement('td');
  runsAgainstHeader.textContent = 'RA';
  runsAgainstHeader.setAttribute('class', 'table-cell');
  runsAgainstHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runsAgainstHeader);

  // Create Diff header in table
  const runDiffHeader = document.createElement('td');
  runDiffHeader.textContent = 'Diff';
  runDiffHeader.setAttribute('class', 'table-cell');
  runDiffHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runDiffHeader);

  return table;
};

// Function to bundle DOM and prepare for export
function loadHome() {
  // Get content div element
  const content = document.getElementById('content');

  // Clear content element (for when returning to home from future alternate pages)
  while (content.lastChild) {
    content.lastChild.remove();
  };

  // Append header and main to content
  content.appendChild(createHeader());
  content.appendChild(createMain());

  // Append table to main
  const main = document.getElementById('main');
  main.appendChild(createTable(al-table));
  main.appendChild(createTable(nl-table));
};

export {
  loadHome
};