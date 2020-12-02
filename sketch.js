const Engine = Matter.Engine;
 const  World = Matter.World;
 const Events = Matter.Events;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
 

var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var ground;

var particle;
var gameState="play";
var count=0;

function setup() {
 var canvas= createCanvas(800, 800);
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
   if(particle !== null)
  {
    particle.display();

    if (particle.body.position.y <799)
    {
      if(particle.body.position.x>300)
      {
        score=score+500;
        console.log(score);
        particle = null;
       // count++;
        if(count >= 5 )
        {
          gameState ="end";
        }
        console.log(gameState);
      }
    }

    if (particle!== null)
    {
      if (particle.body.position.y < 799)
      {
        if(particle.body.position.x>601 && particle.body.position < 799)
        {
          score=score+200;
          console.log(score);
          particle = null;
         // count++;
          if(count >= 5)
          {
            gameState ="end";
          }
          console.log(gameState);
        }
    }
  }
  if(particle!==null)
  {
  if (particle.body.position.y < 799)
    {
      if(particle.body.position.x>301 && particle.body.position.x<600)
      {
        score=score+100;
        console.log(score);
        particle = null;
       // count++;
        if(count >= 5)
        {
          gameState ="end";
        }
        console.log(gameState);
      }
    }
  }

  text("Score : "+score,20,30); 
}
}
function mousePressed()
{
  if (gameState !=="end")
  {
    count++;
    console.log(count);
    particle=new Particle(mouseX, 10, 10, 10);
  }
  if(gameState ==="end")
  {
    console.log(gameState);
    count=0;
    console.log(count);
    text("GAME OVER",width/2, height/2);
   
  }
}