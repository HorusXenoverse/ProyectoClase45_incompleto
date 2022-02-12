class Game{
    constructor(){}

//Función para obtener el gameState
getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){gameState = data.val(); });
}
//Función para actualizar el gameState
updateState(state){
    database.ref('/').update({gameState: state});
}

//Funcioón asíncrona para q el juego inicie cuando estén los jugadores necesarios
async start(){
if(gameState == 0){
player = new Player();
var playerCountRef = await database.ref('playerCount').once("value");

if(playerCountRef.exists()){
 playerCount = playerCountRef.val();
 player.getCount();
}

form = new Form();
form.display();
}
//Los sprites de los jugadores
pj1 = createSprite(200,100,50,50);
pj1.addImage(pj1Img);
pj1.scale = 0.5;

pj2 = createSprite(1200,100,50,50);
pj2.addImage(pj1Img);
pj2.scale = 0.5;

pjs = [pj1, pj2];

}

//LA FUNCIÓN PLAY O LA FUNCIO DE JUEGO
play(){
    if(bgInfinito.y>400){
     bgInfinito.y = 100;
    }

//Crear un swicht
//El if para q los obstáculos se generen luego de un número de frames(cuadros por segundo)
if(frameCount %70 === 0){
 obstacle = createSprite(200,500,50,50);
 obstacle.x = Math.round(random(200,1200));
 obstacle.velocityY = -1;
 obstacle.scale = 0.2;
//La variable para generar el número aleatorio
 num = Math.round(random(1,2));
//El switch para q se seleccione la imagen para q el obstáculo aparezca aleatoriamente
switch(num){
case 1:  obstacle.addImage(ave1Img);
break;

case 2: obstacle.addImage(ave2Img);
break;

default:
break;
}

obstacle.lifetime = -400; 
}
//Aquí está lo nuevo que le añadí
if(allPlayers !== undefined){ 
    var index = 0;

    var x = 175 ;
    var y;

    for(var plr in allPlayers){
      
      index = index + 1 ;

      
      x = x + 200;

      y = displayHeight - allPlayers[plr].distance;
      pjs[index-1].x = x;
      pjs[index-1].y = y;

      if (index === player.index){

        fill("red");
        stroke(10);
        ellipse(x,y,60,60);
        pjs[index - 1].shapeColor = "red";
       // camera.position.x = displayWidth/2;
       // camera.position.y = cars[index-1].y;
      }
     
    }

  }
 
if(keyIsDown(LEFT_ARROW) && player.index !== null){
    player.distance +=10
    player.updateName();
  }
//pj1.x = pj1.x -2;

if(keyDown(RIGHT_ARROW)){
pj1.x = pj1.x +2;
}

}

}