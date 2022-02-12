var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var pjs, pj1, pj2;

var pj1Img, pj2Img, ave1Img, ave2Img, bgImg, bg2Img;
var bgInfinito;

var num;
var obstacle;

function preload(){
  //Precarga de las imágenes de los jugadores
  pj1Img = loadImage("pj1.png");
  pj2Img = loadImage("pj2.png");
  //Precarga de las imágenes de los obstáculos (Aves en este caso)
  ave1Img = loadImage("ave1.png")
  ave2Img = loadImage("ave2.png")
  //Precarga de las imágenes de los fondos
  bgImg = loadImage("fondo.jpg");
  bg2Img = loadImage("fondo2.png");
}

function setup(){
  //Variable para crear el fondo (Sin imagen)
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //Añadir la base de datos
  database = firebase.database();
  //Variables para el gameState (Estados del juego)
  game = new Game();
  game.getState();
  game.start();

 //Variable para crear el fondo de juego infinito
 bgInfinito = createSprite(displayWidth-700,displayHeight-500,100,300);
 bgInfinito.addImage("Fondo",bgImg);
 bgInfinito.scale=3;
 bgInfinito.velocityY = 1;
  
}


function draw(){
 if(playerCount === 1){
    game.updateState(1);
  }
  if(gameState === 1){
    //Se llama la función hide de la clase Form
    form.hide();
    clear();
    //Se llama la función hide de la clase Play
    game.play();
    //Función para dibujar los sprites
    drawSprites();
  }
 /* if(gameState === 2){
    game.end();
  }
*/

}
