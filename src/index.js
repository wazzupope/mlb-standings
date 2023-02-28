import {loadHome} from './home';

loadHome();

function appendRow(x) {
  function camelize(string) {
    return string.replace(/\w+/g, (text) => text.charAt(0).toLowerCase() + text.substr(1)).replace(/\s/g, ' ');
  };

  const tr = document.createElement('tr');
  const teamName = camelize(x.name);
  tr.setAttribute('class', 'tr');
  tr.setAttribute('id', teamName)
  const table = document.getElementById('table');
  table.appendChild(tr);
  return tr;
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

// Class constructor for MLB teams with data
class Team {
  constructor(name, id, logo, runsFor, runsAgainst, league, gamesPlayed, gamesWon, gamesLost) {
    this.name = name;
    this.id = id;
    this.logo = logo;
    this.runsFor = runsFor;
    this.runsAgainst = runsAgainst;
    this.league = league;
    this.gamesPlayed = gamesPlayed;
    this.gamesWon = gamesWon;
    this.gamesLost = gamesLost;
  };
};

// Create array of Teams with selected data
function createTeams(teams) {
  const teamArray = teams.map(x => new Team(x.team.name, x.team.id, x.team.logo, x.points.for, x.points.against, x.group.name, x.games.played, x.games.win, x.games.lose));
  return teamArray;
}

// Fetch request to API for MLB standings
fetch("https://v1.baseball.api-sports.io/standings?season=2023&league=1", requestOptions, {mode: 'cors'})
  .then(response => response.json())
  .then(result => {
    const teams = result.response[0];
    return teams;
  })
  .then(teams => {
    const teamList = createTeams(teams);
    return teamList;
  })
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
fix appendRow to remove spaces and make id's hyphenated (not camelized)
comment out code to make easier to follow
make tr's have td's for each piece of data for each team
figure out if you need to move all of this code back to home.js
then do you need to create new files for each version of standings (al/nl, divisions, etc)
then need to figure out how to sort table by standings by AL/NL
then need to be able to sort by stat in each column, ascending/descending
figure out how to handle fetch error in .catch (article on phone)

*/