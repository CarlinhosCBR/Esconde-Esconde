let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random (400);
  x = int (x);
  y = random (400);
  y = int (y);
}

function draw() {
  background("rgb(248,10,10)");
  x = x + random(-5, 5)
  y = y + random(-5, 5)
  x = constrain(x, 0, 400)
  y = constrain(y, 0, 400)
  let distancia
  distancia = dist(mouseX, mouseY, x , y)
  circle(mouseX, mouseY, distancia)
  //ircle(x,y,10)
  
  
   if(distancia < 3) {
    text('encontrei!',200,200)
    noLoop();
  }
}