var mousePointer, back;
var firstNo, secondNo;

function setup() {
  createCanvas(400, 400);
  back = rect(200,200,200,200);
}

function draw() {
  background(firstNo, secondNo, 225);
  mousePointer= ellipse(mouseX,mouseY,30,30);
  
  text("Move your mouse pointer", 130, 150);
  text("anywhere around the screen", 125, 165);
  text("and watch the background color change", 100, 180);
  
  firstNo = mouseX;
  secondNo = mouseY;

  
}