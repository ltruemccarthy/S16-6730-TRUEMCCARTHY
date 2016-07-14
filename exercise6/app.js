
var xspacing = 8;   
var w;                
var theta = 0.0;      
var amplitude = 75.0; 
var pix = 800.0;  
var dx;               
var yvalues; 
var moon; 

function setup() {
  createCanvas(700, 700);
  w = width+20;
  dx = (TWO_PI / pix) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(85, 147, 189);
  calcWave();
  renderWave();
  ellipse(600, 100, 150, 150);
}


function calcWave() {
  theta += 0.03;

  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(43, 98, 175);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
  }
}