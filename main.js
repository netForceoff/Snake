let snake;
let scl = 20;
let food;
let total = 0;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  pickLocation();
}


function pickLocation() {
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);
  snake.death();
  snake.update();
  snake.show();

  if (snake.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW && snake.xspeed !=0) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && snake.xspeed !=0) {
    snake.dir(0, 1);
  } else if (keyCode == RIGHT_ARROW && snake.yspeed !=0) {
    snake.dir(1, 0);
  } else if (keyCode == LEFT_ARROW && snake.yspeed !=0) {
    snake.dir(-1, 0);
  }
}
