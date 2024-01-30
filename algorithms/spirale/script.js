// The line below adds autocompletion for p5.js which is very Helpful
/// <reference path="./p5.d.ts" />

// Here are the docs for P5.js: https://p5js.org/reference/

// The setup function is called once at the beginning
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    frameRate(180);
    colorMode(HSL)
  }
  let di = 1; 
  let start = 1*(Math.PI/180);
  let end = 270*(Math.PI/180);
  let rstep = 1*(Math.PI/180);
  let step = .1;
  let colorDeg = 0
  
  // The draw function is called on each frame!
  function draw() {
  
      noFill();
      // stroke(Math.random()*255, Math.random()*255, Math.random()*255);
    stroke(colorDeg,100,50);
      arc(windowWidth/2, windowHeight/2, di, di, start, end, 0, 2*PI);
      di += step; 
      start += rstep; 
      end += rstep;
      round += 1;
      
      if (colorDeg <= 360) {
        colorDeg +=1;
      }
      else {colorDeg = 0}
  }
  
  