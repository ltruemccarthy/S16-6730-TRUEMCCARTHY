var system;

function setup() {
  createCanvas(800, 800);
  system = new ParticleSystem(createVector(2, 3));
}

function draw() {
  background(90,113,120,194);
  system.addParticle();
  system.run();
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, .9);
  this.velocity = createVector(random(-1, 20), random(-10, 5));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 5;
};

// Method to display
Particle.prototype.display = function() {
  stroke(400, this.lifespan);
  strokeWeight(3);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 10, 1);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 10) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-3; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};