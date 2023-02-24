const myHeaders = new Headers();
myHeaders.append('x-apisports-key', 'c16bc477f3a2a8d3fd289b58d1172ad8');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

fetch("https://v1.baseball.api-sports.io/standings?season=2023&league=1", requestOptions, {mode: 'cors'})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));