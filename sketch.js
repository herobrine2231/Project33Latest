const Engine = Matter.Engine;
 const  World = Matter.World;
 const Events = Matter.Events;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
 

var plinkos = [];
var divisions = [];
var particles =[];

var divisionHeight=300;
var score =0;
var ground;

var particle;
var gameState="play"; 
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  particle=new Particle(mouseX, 10, 10, 10);


   for (var k = 0; k <=width; k = k+80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  fill("white");
  textSize(35)
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

  

  ground.display();
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //score++
   //}
 
 /* for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text("Score : "+score,20,30); 
   //text("Count: "+count, 20,60);

   if(particle != null)
  {
    particle.display();
    console.log(particle.body.position.x);

    if (particle.body.position.y >760)
    {
      if(particle.body.position.x<300)
      {
        score=score+500;
        console.log(score);
        particle = null;
          if(count >= 5 )
          {
            gameState ="end";
          }
        console.log(gameState);
      }
    }

       else if(particle.body.position.x>601 && particle.body.position.x < 900)
        {
          score=score+200;
          console.log(score);
          particle = null;
          if(count >=5 )
          {
            gameState ="end";
          }
          console.log(gameState);
        }

     else if(particle.body.position.x>301 && particle.body.position.x<600)
      {
        score=score+100;
        console.log(score);
        particle = null;
        if(count >= 5)
        {
          gameState ="end";
        }
        console.log(gameState);
      }
    }
  

 // text("Score : "+score,20,30); 
  if(gameState ==="end")
  {
    textSize(100);
    text("GAME OVER",width/2, height/2);
   
  }
}
//}
function mousePressed()
{
  if (gameState !=="end")
  {
    count++;
    console.log(count);
    particle=new Particle(mouseX, 10, 10, 10);
  }
  
}