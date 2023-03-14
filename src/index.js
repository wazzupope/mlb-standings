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
  const {id} = table;
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

  // Create blank header cell over logo column
  const blankCell = document.createElement('th');
  blankCell.setAttribute('class', 'table-cell');
  tr.appendChild(blankCell);

  // Create Team header in table with button
  const teamHeader = document.createElement('th');
  teamHeader.setAttribute('class', 'table-cell');
  teamHeader.setAttribute('class', 'header-cell');
  tr.appendChild(teamHeader);
  const teamHeaderButton = document.createElement('button');
  teamHeaderButton.setAttribute('class', 'header-button');
  teamHeaderButton.setAttribute('class', 'team-header-button');
  teamHeaderButton.setAttribute('id', `${id}-team-button`);
  teamHeaderButton.textContent = 'Team';
  teamHeader.appendChild(teamHeaderButton);

  // Create GP header in table with button
  const gamesPlayedHeader = document.createElement('th');
  gamesPlayedHeader.setAttribute('class', 'table-cell');
  gamesPlayedHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesPlayedHeader);
  const gamesPlayedHeaderButton = document.createElement('button');
  gamesPlayedHeaderButton.setAttribute('class', 'header-button');
  gamesPlayedHeaderButton.setAttribute('class', 'games-played-header-button');
  gamesPlayedHeaderButton.setAttribute('id', `${id}-games-played-button`);
  gamesPlayedHeaderButton.textContent = 'GP';
  gamesPlayedHeader.appendChild(gamesPlayedHeaderButton);

  // Create W header in table with button
  const gamesWonHeader = document.createElement('th');
  gamesWonHeader.setAttribute('class', 'table-cell');
  gamesWonHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesWonHeader);
  const gamesWonHeaderButton = document.createElement('button');
  gamesWonHeaderButton.setAttribute('class', 'header-button');
  gamesWonHeaderButton.setAttribute('class', 'games-won-header-button');
  gamesWonHeaderButton.setAttribute('id', `${id}-games-won-button`);
  gamesWonHeaderButton.textContent = 'W';
  gamesWonHeader.appendChild(gamesWonHeaderButton);

  // Create L header in table with button
  const gamesLostHeader = document.createElement('th');
  gamesLostHeader.setAttribute('class', 'table-cell');
  gamesLostHeader.setAttribute('class', 'header-cell');
  tr.appendChild(gamesLostHeader);
  const gamesLostHeaderButton = document.createElement('button');
  gamesLostHeaderButton.setAttribute('class', 'header-button');
  gamesLostHeaderButton.setAttribute('class', 'games-lost-header-button');
  gamesLostHeaderButton.setAttribute('id', `${id}-games-lost-button`);
  gamesLostHeaderButton.textContent = 'L';
  gamesLostHeader.appendChild(gamesLostHeaderButton);

  // Create Win% header in table with button
  const winPctHeader = document.createElement('th');
  winPctHeader.setAttribute('class', 'table-cell');
  winPctHeader.setAttribute('class', 'header-cell');
  tr.appendChild(winPctHeader);
  const winPctHeaderButton = document.createElement('button');
  winPctHeaderButton.setAttribute('class', 'header-button');
  winPctHeaderButton.setAttribute('class', 'win-pct-header-button');
  winPctHeaderButton.setAttribute('id', `${id}-win-pct-button`);
  winPctHeaderButton.textContent = 'Win%';
  winPctHeader.appendChild(winPctHeaderButton);

  // Create RS header in table with button
  const runsForHeader = document.createElement('th');
  runsForHeader.setAttribute('class', 'table-cell');
  runsForHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runsForHeader);
  const runsForHeaderButton = document.createElement('button');
  runsForHeaderButton.setAttribute('class', 'header-button');
  runsForHeaderButton.setAttribute('class', 'runs-for-header-button');
  runsForHeaderButton.setAttribute('id', `${id}-runs-for-button`);
  runsForHeaderButton.textContent = 'RS';
  runsForHeader.appendChild(runsForHeaderButton);

  // Create RA header in table with button
  const runsAgainstHeader = document.createElement('th');
  runsAgainstHeader.setAttribute('class', 'table-cell');
  runsAgainstHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runsAgainstHeader);
  const runsAgainstHeaderButton = document.createElement('button');
  runsAgainstHeaderButton.setAttribute('class', 'header-button');
  runsAgainstHeaderButton.setAttribute('class', 'runs-against-header-button');
  runsAgainstHeaderButton.setAttribute('id', `${id}-runs-against-button`);
  runsAgainstHeaderButton.textContent = 'RA';
  runsAgainstHeader.appendChild(runsAgainstHeaderButton);

  // Create Diff header in table with button
  const runDiffHeader = document.createElement('th');
  runDiffHeader.setAttribute('class', 'table-cell');
  runDiffHeader.setAttribute('class', 'header-cell');
  tr.appendChild(runDiffHeader);
  const runDiffHeaderButton = document.createElement('button');
  runDiffHeaderButton.setAttribute('class', 'header-button');
  runDiffHeaderButton.setAttribute('class', 'run-diff-header-button');
  runDiffHeaderButton.setAttribute('id', `${id}-run-diff-button`);
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

// DOM creation of table
function appendRow(x) {
  // Create table rows
  const tr = document.createElement('tr');
  const teamName = makeId(x.name);
  tr.setAttribute('class', 'tr');
  tr.setAttribute('id', teamName);
  const alTableBody = document.getElementById('al-table-body');
  const nlTableBody = document.getElementById('nl-table-body');
  if (x.league === 'American League') {
    alTableBody.appendChild(tr);
    tr.setAttribute('class', 'al-row');
  }
  else {
    nlTableBody.appendChild(tr);
    tr.setAttribute('class', 'nl-row');
  };

  // Function for creating table cells
  function makeCell(prop) {
    const td = document.createElement('td');
    td.textContent = prop;
    td.setAttribute = ('class', 'table-cell');
    tr.appendChild(td);
  };

  // Create Cells for team logos
  function makeLogoCell(prop) {
    const td = document.createElement('td');
    const logo = document.createElement('img');
    td.appendChild(logo);
    logo.setAttribute = ('class', 'logo-img');
    logo.src = prop;
    logo.height = "30";
    td.setAttribute = ('class', 'table-cell');
    td.setAttribute = ('class', 'logo-cell');
    tr.appendChild(td);
  };
  makeLogoCell(x.logo);

  // Create cells for team names
  makeCell(x.name);

  // Create cells for games played
  makeCell(x.gamesPlayed);

  // Create cells for games won
  makeCell(x.gamesWon);

  // Create cells for games lost
  makeCell(x.gamesLost);

  // Create cells for win percentage
  makeCell(x.winPct);

  // Create cells for runs scored
  makeCell(x.runsFor);

  // Create cells for runs against
  makeCell(x.runsAgainst);

  // Create cells for run differential
  makeCell(x.runDiff);
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
}

// Fetch request to API for MLB standings
fetch("https://v1.baseball.api-sports.io/standings?season=2023&league=1", requestOptions, {mode: 'cors'})
  .then(response => response.json())
  .then(result => {
    console.log(result);
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
    console.log(teamList);
    // Create table header rows
    createTableHeaders();
    function createElements(arr) {
      arr.map(x => {
        appendRow(x);
        return x;
      });
    };
    createElements(teamList);
  })
  .catch(error => console.log('error', error));

const alArray = document.querySelectorAll

/*
TODO
continue working on ability to sort by using header buttons
update styling
how to control cell height if team names split to two lines
make tables side by side in desktop and vertical in mobile?
add key as footer
get a space after the period in St.Louis
how to make addTableHeaders function less redundant
need numbers for what place the team is in on the left of each row?
more options for data to add: *games behind 1st place, streak, record over last 10 games (see espn app)
figure out if you need to move all of this code back to home.js (will that mess with git tracking?)
new files for each version of standings (al/nl, divisions, etc)
figure out how to handle fetch error in .catch (article on phone)
add a waiting spinner while awaiting fetch
*/