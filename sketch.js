let bgImg; 
let gameState = 0;
let playerCount;
let database;
let form, player, game; 


function setup(){
  createCanvas(400,400);
  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
}