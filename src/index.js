import {loadHome} from './home';

// Load initial structure of homepage
loadHome();

// Function that turns string into hyphenated string for element ID's
function makeId(string) {
  return string.replace(/\w+/g, (text) => text.charAt(0).toLowerCase() + text.substr(1)).replace(/\s/g, '-').replace('.', '-');
};

// DOM creation of table
function appendRow(x) {
  // Create table rows
  const tr = document.createElement('tr');
  const teamName = makeId(x.name);
  tr.setAttribute('class', 'tr');
  tr.setAttribute('id', teamName);
  const alTable = document.getElementById('al-table');
  const nlTable = document.getElementById('nl-table');
  if (x.league === 'American League') {
    alTable.appendChild(tr);
  }
  else {
    nlTable.appendChild(tr);
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

    function createElements(arr) {
      arr.map(x => {
        appendRow(x);
        return x;
      });
    };
    createElements(teamList);
  })
  .catch(error => console.log('error', error));

/*
TODO
?need numbers for what place the team is in on the left of each row
get a space after the period in St.Louis
more options for data to add: *games behind 1st place, streak, record over last 10 games (see espn app)
*update styling
*add title for each table AL and NL
*how to control cell height if team names split to two lines
*make tables side by side in desktop and vertical in mobile?
*add key as footer
figure out if you need to move all of this code back to home.js (will that mess with git tracking?)
then do you need to create new files for each version of standings (al/nl, divisions, etc)
*then need to be able to sort by stat in each column, ascending/descending
*figure out how to handle fetch error in .catch (article on phone)
*add a waiting spinner while awaiting fetch
*/