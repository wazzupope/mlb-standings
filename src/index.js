import {loadHome} from './home';

// Load initial structure of homepage
loadHome();

// Function that turns string into hyphenated string for element ID's
function makeId(string) {
  return string.replace(/\w+/g, (text) => text.charAt(0).toLowerCase() + text.substr(1)).replace(/\s/g, '-').replace('.', '-');
};

// Create table header row
function addTableHeaders(element) {
  const table = element;
  // const {id} = table;
  const tableBodyId = `${table.id}-body`;

  // Create thead and tbody elements for table
  const thead = document.createElement('thead');
  thead.setAttribute('class', 'table-header');
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  tbody.setAttribute('class', 'table-body');
  tbody.setAttribute('id', tableBodyId);
  table.appendChild(tbody);

  // Create table row element for column headings
  const tr = document.createElement('tr');
  tr.setAttribute('class', 'tr');
  tr.setAttribute('class', 'header-row');
  thead.appendChild(tr);

  // Create blank header cellx over logo and team name columns
  function createBlankCell() {
    const blankCell = document.createElement('th');
    blankCell.setAttribute('class', 'table-cell');
    return blankCell
  };
  tr.appendChild(createBlankCell());
  tr.appendChild(createBlankCell());

  // Create GP header in table with button
  const gamesPlayedHeader = document.createElement('th');
  gamesPlayedHeader.setAttribute('class', 'table-cell');
  gamesPlayedHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesPlayedHeader);
  const gamesPlayedHeaderButton = document.createElement('button');
  gamesPlayedHeaderButton.setAttribute('class', 'header-button');
  gamesPlayedHeaderButton.setAttribute('class', 'games-played');
  gamesPlayedHeaderButton.setAttribute('id', 'gamesPlayed');
  gamesPlayedHeaderButton.textContent = 'GP';
  gamesPlayedHeader.appendChild(gamesPlayedHeaderButton);

  // Create W header in table with button
  const gamesWonHeader = document.createElement('th');
  gamesWonHeader.setAttribute('class', 'table-cell');
  gamesWonHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesWonHeader);
  const gamesWonHeaderButton = document.createElement('button');
  gamesWonHeaderButton.setAttribute('class', 'header-button');
  gamesWonHeaderButton.setAttribute('class', 'games-won');
  gamesWonHeaderButton.setAttribute('id', 'gamesWon');
  gamesWonHeaderButton.textContent = 'W';
  gamesWonHeader.appendChild(gamesWonHeaderButton);

  // Create L header in table with button
  const gamesLostHeader = document.createElement('th');
  gamesLostHeader.setAttribute('class', 'table-cell');
  gamesLostHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesLostHeader);
  const gamesLostHeaderButton = document.createElement('button');
  gamesLostHeaderButton.setAttribute('class', 'header-button');
  gamesLostHeaderButton.setAttribute('class', 'games-lost');
  gamesLostHeaderButton.setAttribute('id', 'gamesLost');
  gamesLostHeaderButton.textContent = 'L';
  gamesLostHeader.appendChild(gamesLostHeaderButton);

  // Create Win% header in table with button
  const winPctHeader = document.createElement('th');
  winPctHeader.setAttribute('class', 'table-cell');
  winPctHeader.setAttribute('class', 'header-cell');
  tr.appendChild(winPctHeader);
  const winPctHeaderButton = document.createElement('button');
  winPctHeaderButton.setAttribute('class', 'header-button');
  winPctHeaderButton.setAttribute('class', 'win-pct');
  winPctHeaderButton.setAttribute('id', 'winPct');
  winPctHeaderButton.textContent = 'Win%';
  winPctHeader.appendChild(winPctHeaderButton);

  // Create RS header in table with button
  const runsForHeader = document.createElement('th');
  runsForHeader.setAttribute('class', 'table-cell');
  runsForHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runsForHeader);
  const runsForHeaderButton = document.createElement('button');
  runsForHeaderButton.setAttribute('class', 'header-button');
  runsForHeaderButton.setAttribute('class', 'runs-for');
  runsForHeaderButton.setAttribute('id', 'runsFor');
  runsForHeaderButton.textContent = 'RS';
  runsForHeader.appendChild(runsForHeaderButton);

  // Create RA header in table with button
  const runsAgainstHeader = document.createElement('th');
  runsAgainstHeader.setAttribute('class', 'table-cell');
  runsAgainstHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runsAgainstHeader);
  const runsAgainstHeaderButton = document.createElement('button');
  runsAgainstHeaderButton.setAttribute('class', 'header-button');
  runsAgainstHeaderButton.setAttribute('class', 'runs-against');
  runsAgainstHeaderButton.setAttribute('id', 'runsAgainst');
  runsAgainstHeaderButton.textContent = 'RA';
  runsAgainstHeader.appendChild(runsAgainstHeaderButton);

  // Create Diff header in table with button
  const runDiffHeader = document.createElement('th');
  runDiffHeader.setAttribute('class', 'table-cell');
  runDiffHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runDiffHeader);
  const runDiffHeaderButton = document.createElement('button');
  runDiffHeaderButton.setAttribute('class', 'header-button');
  runDiffHeaderButton.setAttribute('class', 'run-diff');
  runDiffHeaderButton.setAttribute('id', 'runDiff');
  runDiffHeaderButton.textContent = 'Diff';
  runDiffHeader.appendChild(runDiffHeaderButton);
};

// Function that runs table header row creation for each table
function createTableHeaders() {
  const alTable = document.getElementById('al-table');
  const nlTable = document.getElementById('nl-table');

  addTableHeaders(alTable);
  addTableHeaders(nlTable);
};

// Create Cells for team logos
function makeLogoCell(obj) {
  const cell = document.createElement('td');
  const logo = document.createElement('img');
  cell.appendChild(logo);
  logo.setAttribute('class', 'logo-img');
  logo.src = obj.logo;
  logo.height = "30";
  cell.setAttribute('class', 'table-cell');
  cell.setAttribute('class', 'logo-cell');
  return cell;
};

// Function for creating table cells
function makeCell(prop, key) {
  const cell = document.createElement('td');
  cell.textContent = prop;
  cell.setAttribute('class', 'table-cell');
  cell.setAttribute('class', key);
  return cell;
};

// Create array of object keys
const objKeys = ['team', 'games-played', 'games-won', 'games-lost', 'win-pct', 'runs-for', 'runs-against', 'run-diff'];

// DOM creation of table
function createRow(obj) {
  const objName = obj.name;
  // Create table rows
  const row = document.createElement('tr');
  const teamName = makeId(objName);
  row.setAttribute('id', teamName);
  const alTableBody = document.getElementById('al-table-body');
  const nlTableBody = document.getElementById('nl-table-body');
  if (obj.league === 'American League') {
    alTableBody.appendChild(row);
    row.setAttribute('class', 'al-row');
    row.setAttribute('class', 'row');
  }
  else {
    nlTableBody.appendChild(row);
    row.setAttribute('class', 'nl-row');
    row.setAttribute('class', 'row');
  };

  // Create cells for logos
  row.appendChild(makeLogoCell(obj));

  // Create cells for team names
  row.appendChild(makeCell(obj.name, objKeys[0]));

  // Create cells for games played
  row.appendChild(makeCell(obj.gamesPlayed, objKeys[1]));

  // Create cells for games won
  row.appendChild(makeCell(obj.gamesWon, objKeys[2]));

  // Create cells for games lost
  row.appendChild(makeCell(obj.gamesLost, objKeys[3]));

  // Create cells for win percentage
  row.appendChild(makeCell(obj.winPct, objKeys[4]));

  // Create cells for runs scored
  row.appendChild(makeCell(obj.runsFor, objKeys[5]));

  // Create cells for runs against
  row.appendChild(makeCell(obj.runsAgainst, objKeys[6]));

  // Create cells for run differential
  row.appendChild(makeCell(obj.runDiff, objKeys[7]));
};

// API headers
const myHeaders = new Headers();
myHeaders.append('x-apisports-key', 'c16bc477f3a2a8d3fd289b58d1172ad8');

// API options
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

// Class constructor for MLB teams with selected data
class Team {
  constructor(name, id, logo, runsFor, runsAgainst, league, gamesPlayed, gamesWon, gamesLost, winPct) {
    this.name = name;
    this.id = id;
    this.logo = logo;
    this.runsFor = runsFor;
    this.runsAgainst = runsAgainst;
    this.runDiff = (runsFor - runsAgainst);
    this.league = league;
    this.gamesPlayed = gamesPlayed;
    this.gamesWon = gamesWon;
    this.gamesLost = gamesLost;
    this.winPct = winPct;
  };
};

// Create array of Teams with selected data
function createTeams(teams) {
  const teamArray = teams.map(x => new Team(x.team.name, x.team.id, x.team.logo, x.points.for, x.points.against, x.group.name, x.games.played, x.games.win.total, x.games.lose.total, x.games.win.percentage));
  return teamArray;
};

function createElements(arr) {
  arr.map(x => {
    createRow(x);
    return x;
  });
};

function sortData(data, param, direction = "asc") {
  // Get table body elements
  const alTableBody = document.getElementById('al-table-body');
  const nlTableBody = document.getElementById('nl-table-body');
  // Clear table body elements
  if (alTableBody.innerHTML && nlTableBody.innerHTML) {
    alTableBody.innerHTML = '';
    nlTableBody.innerHTML = '';
  };
  // Create function to sort rows based on parameter
  const sortedData =
    direction === "desc"
      ? [...data].sort((a, b) => {
        if (a[param] < b[param]) {
          return -1;
        }
        if (a[param] > b[param]) {
          return 1;
        }
        return 0;
      })
      : [...data].sort((a, b) => {
        if (b[param] < a[param]) {
          return -1;
        }
        if (b[param] > a[param]) {
          return 1;
        }
        return 0;
      });
  createElements(sortedData);  
};

function addButtonEventListeners(arr) {
  // Create array of elements
  const arrayOfTeams = arr.map(x => {
    createRow(x);
    return x;
  });

  // Create separate arrays for AL and NL
  const alArray = arrayOfTeams.filter(obj => obj.league === "American League");
  const nlArray = arrayOfTeams.filter(obj => obj.league === "National League");
  const tableButtons = document.querySelectorAll("th button");

  const resetButtons = (event) => {
    [...tableButtons].map((button) => {
      if (button !== event.target) {
        button.removeAttribute('data-dir');
      }
      return button;
    });
  };

  // Remove selected column attribute
  const cells = Array.from(document.querySelectorAll('tr td'));
  const resetCells = () => {
    cells.forEach((cell) => {
      if (cell.hasAttribute('selected-column')) {
        cell.removeAttribute('selected-column');
      }
      return cells;
    });
  };

  // Add event listeners to table header buttons that sort by that column
  [...tableButtons].map((button) => {
    button.addEventListener("click", (e) => {
      resetCells();
      resetButtons(e);
      if (e.target.getAttribute("data-dir") === "desc") {
        sortData(alArray, e.target.id, "desc");
        sortData(nlArray, e.target.id, "desc");
        e.target.setAttribute("data-dir", "asc");
      } else {
        sortData(alArray, e.target.id, "asc");
        sortData(nlArray, e.target.id, "asc");
        e.target.setAttribute("data-dir", "desc");
      }
      const headerClass = e.target.classList[0];
      cells.forEach((cell) => {
        if (cell.classList.contains(headerClass)) {
        cell.classList.add('selected-column');
        };
      });
    return e;
    });
  return tableButtons;
  });
};

// Fetch request to API for MLB standings
fetch("https://v1.baseball.api-sports.io/standings?season=2023&league=1", requestOptions, {mode: 'cors'})
  .then(response => response.json())
  .then(result => {
    const teams = result.response[0];
    return teams;
  })
  // Make array of teams of class Team
  .then(teams => {
    const teamList = createTeams(teams);
    return teamList;
  })
  // Create DOM elements for data fetched from API
  .then(teamList => {
    // Create table header rows
    createTableHeaders();
    // Create table rows
    // createElements(teamList);
    // Create event listeners for sortable header buttons
    addButtonEventListeners(teamList);
    return teamList;
  })
  .catch(error => console.log('error', error));

/*
TODO
how to get page to load with win% sorted first - api is sending with standings incorrect, perhaps due to weirdness of spring training
refer back to this article if need help: https://webdesign.tutsplus.com/tutorials/how-to-create-a-sortable-html-table-with-javascript--cms-92993

functionality in addButtonEventListeners that adds and removes selected-column class is currently non-functional

update styling
make sections and main static sizes (relative to screen) so that headers don't jump around
move team names to left justified?

how to control cell height if team names split to two lines
make tables side by side in desktop and vertical in mobile?
add ranking number on left of logo?
add key as footer
get a space after the period in St.Louis
make js code more DRY
more options for data to add: *games behind 1st place, streak, record over last 10 games (see espn app)
figure out if you need to move all of this code back to home.js (will that mess with git tracking?)
new files for each version of standings (al/nl, divisions, etc)
figure out how to handle fetch error in .catch (article on phone)
add a waiting spinner while awaiting fetch
*/