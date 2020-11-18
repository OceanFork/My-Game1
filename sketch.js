var player;
var energyLevel = 0;
var boundary,boundary1,boundary2;
var apple, banana, coconut;
var applesGroup, appleImg;
var bananasGroup, bananaImg;
var coconutsGroup, coconutImg;

//var playerImg;
function preload() {
 appleImg = loadImage("apple.png");
 bananaImg = loadImage("banana.png");
}
function setup(){
    createCanvas(500,4000);
    player = createSprite(200,3900,10,20);
    boundary = createSprite(5,2000,10,4000);
    boundary1 = createSprite(495,2000,10,4000);
    boundary2 = createSprite(250,5,500,10);
    applesGroup = new Group();
    bananasGroup = new Group();
    coconutsGroup = new Group();
    // apple1 = createSprite(random(50,450),random(100,3900),10,10);
    ///apple1.shapeColor = color(255,0,0);
   /* apple2 = createSprite(random(50,450),random(100,3900),10,10);
    apple2.addImage(appleImg);
    apple3 = createSprite(random(50,450),random(100,3900),10,10);
    apple3.addImage(appleImg);
    apple4 = createSprite(random(50,450),random(100,3900),10,10);
    apple4.addImage(appleImg);
    apple5 = createSprite(random(50,450),random(100,3900),10,10);
    apple5.addImage(appleImg);
    apple6 = createSprite(random(50,450),random(100,3900),10,10);
    apple6.addImage(appleImg); */
  //  applesGroup = createGroup();
    //  for(var i = 0; i < 10; i++){
    //    apple = createSprite(random(50,450),random(100,3900),10,10);
    //    apple.addImage(appleImg);
    //    if(apple.isTouching(player)){
    //        energyLevel = energyLevel + 1;
     //         apple.destroy()
     //         console.log(energyLevel);
    //    }
    }

     //   for (var i = 0; i < apple.length; i++) 
     //   { if (apple.get(i).isTouching(players)) { 
     //    apple.get(i).destroy();
     //        player.score =player.score+1; 
      //       player.update();
     //        } 
     //       }
      
  

function draw(){
    background(0,0,0);

    player.velocityY = -8;
    if(keyWentDown(LEFT_ARROW)){
        player.velocityX = -8;
    }
    if(keyWentUp(LEFT_ARROW)){
        player.velocityX = 0;
    }
    if(keyWentDown(RIGHT_ARROW)){
        player.velocityX = 8;
    }if(keyWentUp(RIGHT_ARROW)){
        player.velocityX = 0;
    }
   
    this.camera.y = player.y;
    player.collide(boundary);
    player.collide(boundary1);
    player.collide(boundary2);
    //console.log(player.y);
    textSize(30);
    if(player.y < 21){
        text("FINISH",200,50)
        player.velocityY = 0;
    }

    //apples();
    if(frameCount  % 20 === 0){
        apple = createSprite(random(50,450),random(100,3900),10,10);
        apple.addImage(appleImg);
        applesGroup.add(apple); 
    }
    if(frameCount  % 50 === 0){
        banana = createSprite(random(50,450),random(100,3900),10,30);
       // banana.addImage(appleImg);
       banana.addImage(bananaImg);
       banana.scale = 0.2;
        bananasGroup.add(banana); 
    }
    if(frameCount  % 100 === 0){
       coconut = createSprite(random(50,450),random(100,3900),30,30);
       // banana.addImage(appleImg);
       coconut.shapeColor = color (165,42,42);
       coconutsGroup.add(coconut); 
    }

    for (var i = 0; i < applesGroup.length; i++) 
     { 
        if (applesGroup.get(i).isTouching(player)) {
            applesGroup.get(i).destroy(); 
            energyLevel = energyLevel+1;
        } 
    }
    for (var i = 0; i < bananasGroup.length; i++) 
     { 
        if (bananasGroup.get(i).isTouching(player)) {
            bananasGroup.get(i).destroy(); 
            energyLevel = energyLevel+3;
        } 
    }
    for (var i = 0; i < coconutsGroup.length; i++) 
     { 
        if (coconutsGroup.get(i).isTouching(player)) {
            coconutsGroup.get(i).destroy(); 
            energyLevel = energyLevel+10;
        } 
    }
    
    
    drawSprites();
    text("energy level " + energyLevel, player.x, player.y + 100);
    
}

