console.log("AAAAA");

var spotifyApi = new SpotifyWebApi();

//set up variables
const client_id = "b8f474e0b2954346b6fad21c7e74a39c";
const client_secret = "56d630593c7a4c568b193de32e68d32b";
const redirect_uri = "https://tabify.netlify.com/callback";

console.log(spotifyApi);

var token = window.location.hash.substr(1);
console.log(token);