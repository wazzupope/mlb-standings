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