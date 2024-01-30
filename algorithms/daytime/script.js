///<reference path="./p5.d.ts" />

let vw = 400
let vh = 400

// Here are the docs for P5.js: https://p5js.org/reference/
let isNight = false;

// Show result conditial to the actual time
let currentDate = new Date();
let time = parseInt(currentDate.getHours())
if (time > 17 || time < 6) {
  isNight = true
}

// The setup function is called once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  vw = windowWidth;
  vh = windowHeight;

  // Decide to draw either the day or the night
  // based on the isNight variable
  if (isNight) {
    drawNight();
  } else {
    drawDay();
  };
}

function drawDay() {

  background(177, 219, 227);

  noStroke()
  fill(255, 213, 97)
  circle(vw / 2, vh / 2, 40);

}

function drawNight() {

  background(20, 31, 84);

  fill(255, 255, 227)
  noStroke()
  circle(vw / 2, vh / 2, 40);

  fill(20, 31, 84)
  noStroke()
  circle(vw / 2 + 8, vh / 2 - 3, 35);
}
