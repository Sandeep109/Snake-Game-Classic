var snake;
var rez = 20;
var food;
var w;
var h;
var score = 0;


function setup() {
  createCanvas(innerWidth, innerHeight);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);


}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDirect(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDirect(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDirect(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDirect(0, -1);
  } 

}

function draw(){

  


    scale(rez);
background(255);
if (snake.eat(food)) {
  foodLocation();
  score++;
}
textSize(1);
text("SCORE : "+score,2,1);
snake.update();
snake.display();

noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);


console.log(food)




if (snake.endGame()) {
  print("END GAME");
  background(255, 0, 0);
  noLoop();
}
}