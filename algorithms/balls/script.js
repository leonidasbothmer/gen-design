/// <reference path="./p5.d.ts" />

let vw = 500;
let vh = 500;
let fr = 60;

let ballCount = 1000

// let d = [25, 40];
let d = Array.from({length: ballCount}, () => Math.floor(Math.random() * 40 + 10));
let x = Array(ballCount).fill(vw/2)
let y = Array(ballCount).fill(vh/2);
// let xDir = [1,-1];
let xDir = Array.from({length: ballCount}, () => Math.random() < 0.5 ? -1 : 1);
// let yDir = [1,-1];
let yDir = Array.from({length: ballCount}, () => Math.random() < 0.5 ? -1 : 1);
// let xSpeed = [2,4];
let xSpeed = Array.from({length: ballCount}, () => Math.floor(Math.random() * 10 + 1))
// let ySpeed = [8,6];
let ySpeed = Array.from({length: ballCount}, () => Math.floor(Math.random() * 10 + 1))

// let r = [Math.round(Math.random()*225),Math.round(Math.random()*225)]
let r = Array.from({length: ballCount}, () => Math.floor(Math.random() * 255))

// let g = [Math.round(Math.random()*225),Math.round(Math.random()*225)]
let g = Array.from({length: ballCount}, () => Math.floor(Math.random() * 255))

// let b = [Math.round(Math.random()*225),Math.round(Math.random()*225)]
let b = Array.from({length: ballCount}, () => Math.floor(Math.random() * 255))

let friction = 0 // 0-10 (no fr - high fr)

function setup() {
  // createCanvas(windowWidth, windowHeight);
  vw = windowWidth
  vh = windowHeight
  createCanvas(vw, vh)
  frameRate(fr);
  // background(0, 50);
}

function draw() {
  // Trace of balls
  // background(0, 50);
  background(0, 50);

  // Style of balls
  noStroke()
  
  // Number of balls
  for (let i = 0; i < ballCount; i++) {
    fill(r[i], g[i], b[i]);
    ellipse(x[i], y[i], d[i], d[i]);
    
    x[i] = x[i] + xDir[i] * xSpeed[i]
    y[i] = y[i] + yDir[i] * ySpeed[i]

    // Bounce back
    if (x[i] >= vw-(d[i]/2) || x[i] <= 0+(d[i]/2)) {
      xDir[i] = xDir[i] * (-1)
    }
    if (y[i] >= vh-(d[i]/2) || y[i] <= 0+(d[i]/2)) {
      yDir[i] = yDir[i] * (-1)
    }
    xSpeed[i] = xSpeed[i]/(1+friction/100)
    ySpeed[i] = ySpeed[i]/(1+friction/100)
  }

}