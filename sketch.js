var preStory,preStory1,story;
var database,gameState;
var form, player, playerCount;
var gameState = 0;


 

function preload ()
{
  preStory = loadAnimation("story/murder1.jpg","story/murder2.jpg","story/murder3.jpg","story/murder4.jpg");
  preStory.frameDelay = 10;
  preStory1 = loadAnimation ("story/murder5.jpg");
}

function setup() 
{
  createCanvas(800,400);
  story = createSprite(400,200,0,0)
  story.addAnimation("ps",preStory);
  story.addAnimation("dead",preStory1);
 // database = firebase.database();
  //game = new Game();  
}

function draw() 
{
  background('white');
  if(mousePressedOver(story))
   {
  story.changeAnimation("dead", preStory1);
   }


 /* if (playerCount === 1) {
    game.update(1);
  }

  if(gameState === 1)
  {
    game.start();
    game.getState();
    form = new Form();
    game.play();
  }*/

  drawSprites();
}
