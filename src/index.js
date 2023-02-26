import {loadHome} from './home';

loadHome();

// API headers
const myHeaders = new Headers();
myHeaders.append('x-apisports-key', 'c16bc477f3a2a8d3fd289b58d1172ad8');

// API options
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

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

/*
TODO
look at function below and figure out how to take array itsms in teams (in fetch call)
and make each of them an object of class Team

figure out how to handle fetch error in .catch (article on phone)
*/

function createTeams(teams) {
  const teamArray[] = 
  for()
  teams[i] = new Team(teams[i].name, etc.)
}

// Fetch request to API for MLB standings
fetch("https://v1.baseball.api-sports.io/standings?season=2023&league=1", requestOptions, {mode: 'cors'})
  .then(response => response.json())
  .then(result => {
    const teams = result.response[0];
    return teams;
  })
  .then(teams => {
    teams.forEach(

    )
  })
    // const main = document.getElementById('main');
    // main.textContent = result.response[0][0].team.name;
    // return result;
  .catch(error => console.log('error', error));