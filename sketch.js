var hr = hour()
var mn = minute()
var sc = seconds()
var hrAngle
var mnAngle
var scAngle
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
  hrAngle = map(hr,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  scAngle = map(sc,0,60,0,360)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}