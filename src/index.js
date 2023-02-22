const myHeaders = new Headers();
myHeaders.append('x-apisports-key', 'c16bc477f3a2a8d3fd289b58d1172ad8');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

fetch("https://v3.football.api-sports.io/standings?season=2022&league=39", requestOptions, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  });