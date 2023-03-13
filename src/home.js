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
  // Create container for AL table
  const alContainer = document.createElement('section');
  alContainer.setAttribute('id', 'al-container');
  // Create container for NL table
  const nlContainer = document.createElement('section');
  nlContainer.setAttribute('id', 'nl-container');
  // Append league containers to main
  main.appendChild(alContainer);
  main.appendChild(nlContainer);
  // Create headers for league containers
  const alHeader = document.createElement('h2');
  alHeader.setAttribute('class', 'league-header');
  alHeader.textContent = "American League";
  const nlHeader = document.createElement('h2');
  nlHeader.setAttribute('class', 'league-header');
  nlHeader.textContent = "National League";
  // Append headers for league containers
  alContainer.appendChild(alHeader);
  nlContainer.appendChild(nlHeader);

  return main;
};

// Create table in DOM
function createTable(tableName) {
  // Create table element
  const table = document.createElement('table');
  table.setAttribute('id', tableName);

  // // Create table row element for column headings
  // const tr = document.createElement('tr');
  // tr.setAttribute('class', 'tr');
  // tr.setAttribute('class', 'header-row');
  // table.appendChild(tr);

  // // Create blank header cell over logo column
  // const blankCell = document.createElement('th');
  // blankCell.setAttribute('class', 'table-cell');
  // tr.appendChild(blankCell);

  // // Create Team header in table
  // const teamHeader = document.createElement('th');
  // teamHeader.textContent = 'Team';
  // teamHeader.setAttribute('class', 'table-cell');
  // teamHeader.setAttribute('class', 'header-cell');
  // tr.appendChild(teamHeader);

  // // Create GP header in table
  // const gamesPlayedHeader = document.createElement('th');
  // gamesPlayedHeader.textContent = 'GP';
  // gamesPlayedHeader.setAttribute('class', 'table-cell');
  // gamesPlayedHeader.setAttribute('class', 'header-cell');
  // tr.appendChild(gamesPlayedHeader);

  // // Create W header in table
  // const gamesWonHeader = document.createElement('th');
  // gamesWonHeader.textContent = 'W';
  // gamesWonHeader.setAttribute('class', 'table-cell');
  // gamesWonHeader.setAttribute('class', 'header-cell');
  // tr.appendChild(gamesWonHeader);

  // // Create L header in table
  // const gamesLostHeader = document.createElement('th');
  // gamesLostHeader.textContent = 'L';
  // gamesLostHeader.setAttribute('class', 'table-cell');
  // gamesLostHeader.setAttribute('class', 'header-cell');
  // tr.appendChild(gamesLostHeader);

  // // Create Win% header in table
  // const winPctHeader = document.createElement('th');
  // winPctHeader.textContent = 'Win%';
  // winPctHeader.setAttribute('class', 'table-cell');
  // winPctHeader.setAttribute('class', 'header-cell');
  // tr.appendChild(winPctHeader);

  // // Create RS header in table
  // const runsForHeader = document.createElement('th');
  // runsForHeader.textContent = 'RS';
  // runsForHeader.setAttribute('class', 'table-cell');
  // runsForHeader.setAttribute('class', 'header-cell');
  // tr.appendChild(runsForHeader);

  // // Create RA header in table
  // const runsAgainstHeader = document.createElement('th');
  // runsAgainstHeader.textContent = 'RA';
  // runsAgainstHeader.setAttribute('class', 'table-cell');
  // runsAgainstHeader.setAttribute('class', 'header-cell');
  // tr.appendChild(runsAgainstHeader);

  // // Create Diff header in table
  // const runDiffHeader = document.createElement('th');
  // runDiffHeader.textContent = 'Diff';
  // runDiffHeader.setAttribute('class', 'table-cell');
  // runDiffHeader.setAttribute('class', 'header-cell');
  // tr.appendChild(runDiffHeader);

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

  // Append tables to AL and NL containers within main
  const alContainer = document.getElementById('al-container');
  const nlContainer = document.getElementById('nl-container');
  alContainer.appendChild(createTable("al-table"));
  nlContainer.appendChild(createTable("nl-table"));
};

export {
  loadHome
};