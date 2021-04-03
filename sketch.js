/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(18)
  text("Score : "+score,20,40);
  fill("white");
  
  textSize(23)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(90);
    text("GameOver", 150, 300);
    //return
  }
  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null){
       particle.display();
        
        if (particle.body.position.y>760) {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}*/

const Engine = Matter.Engine;
const World  = Matter.World;
const Body   = Matter.Body;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var d0,d1,d2,d3,d4,d5,d6,d7,d8;

var particles=[];
var plinkos=[];
var divisions=[]

var score=0;
var particle;
var count=0;
var gameState="serve"

function setup() {
  createCanvas(640,750);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(320,745,640,10)

  for(var i=20; i<=width;i=i+60){
    plinkos.push(new Plinko(i,50,10)) }

  for(var i=10; i<=width-10;i=i+60){
    plinkos.push(new Plinko(i,150,10)) }

  for(var i=15; i<=width-10;i=i+70){
      plinkos.push(new Plinko(i,250,7)) }

  for(var i=20; i<=width-10;i=i+50){
      plinkos.push(new Plinko(i,350,7)) }

  for(var k=0; k<=width;k=k+80){
  divisions.push(new Division(k))
  }
}

function draw() {
  Engine.update(engine);
  background(0); 

  fill("teal")
  text("score:" +score,550,430)
  text("count:"+count,550,450)
  text("200",30,500)
  text("400",110,500)
  text("500",190,500)
  text("100",270,500)
  text("500",350,500)
  text("500",430,500)
  text("300",510,500)
  text("100",590,500)

  ground.display()

 //if(frameCount%90===0){
   // particles.push(new Particle(random(width/2-10,width/2+10),10,5)) }
 // for(var j=0; j<particles.length;j=j+1){
    //particles[j].display()}

  for(var i=0; i<plinkos.length;i=i+1){
    plinkos[i].display()}

//score
  if(particle!=null){
      particle.display()
  
    if(particle.body.position.y>500 && particle.body.position.x<80){
        score=score+200;
        particle=null;
        if ( count>= 5){ gameState ="end";text("game over",250,250)}  }
  
    else if(particle.body.position.y>500 && particle.body.position.x<160){
        score=score+400;
        particle=null;
        if ( count>= 5){ gameState ="end";text("game over",250,250)} }

    else if(particle.body.position.y>500 && particle.body.position.x<240){
        score=score+500;
        particle=null;
        if ( count>= 5){ gameState ="end";text("game over",250,250)}  }

     else if(particle.body.position.y>500 && particle.body.position.x<320){
        score=score+100;
        particle=null;
        if ( count>= 5){ gameState ="end";text("game over",250,250)}  }

      else if(particle.body.position.y>500 && particle.body.position.x<400){
        score=score+500;
        particle=null;
        if ( count>= 5){ gameState ="end";text("game over",250,250)}  }

      else if(particle.body.position.y>500 && particle.body.position.x<480){
        score=score+500;
        particle=null;
        if ( count>= 5){ gameState ="end";text("game over",250,250)}  }

      else if(particle.body.position.y>500 && particle.body.position.x<560){
        score=score+300;
        particle=null;
        if ( count>= 5){ gameState ="end";text("game over",250,250)}  }

      else if(particle.body.position.y>500 && particle.body.position.x<640){
        score=score+100;
        particle=null;
        if ( count>= 1){ gameState ="end";text("game over",250,250)} }
  } 

  if(gameState=="end"){
    text("GAME OVER!",250,200)
  }

  for(var k=0; k<divisions.length;k=k+1){
    divisions[k].display()}

         
}

      function mousePressed(){
        if(gameState!=="end"){
            count++;
           particle=new Particle(mouseX, 10, 10, 10); 
        }   
      }