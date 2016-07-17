
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
  background(17, 89, 138);
  calcWave0();
  calcWave();
  calcWave2();
  calcWave3();
  renderWave0();
  renderWave();
  renderWave2();
  renderWave3();
}

function calcWave0() {
  theta += 0.03;

  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave0() {
  noStroke();
  fill(209,224,235);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/4+yvalues[x], 200, 10);
  }
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
  fill(43,98,175);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 20, 20);
  }
}

function calcWave2() {
  theta += 0.03;

  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave2() {
  fill(35, 109, 158);
  noStroke();
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2.5+yvalues[x], 15, 15);
  }
}

function calcWave3() {
  theta += 0.03;

  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave3() {
  fill(85,147,189);
  noStroke();
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/3.0+yvalues[x], 10, 10);
  }
}

