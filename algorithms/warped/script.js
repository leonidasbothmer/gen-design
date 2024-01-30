let w = 15; // Abstand zwischen den Punkten
let rez = 0.001;
let amount = 1000;
let amount2 = 0.5;
let color1 = '#ffffff';

let vw = 500;
let vh = 500;
let fr = 60;


function setup() {
    vw = windowWidth;
    vh = windowHeight;
    frameRate(fr)
    createCanvas(vw, vh);
    background('#000000')
    makeDistortedDots(amount, color1, rez, amount2)
}

function draw() {
  background(0)
  // makeDistortedDots(amount, color1, rez, amount2) 
  makeDistortedGrid(amount, color1, rez)
  amount += 2
  amount2 += .001
  // noLoop()
  // amount2 
  console.log("draw")
}

function makeDistortedDots(amount, color, rez, amount2) {

  leeway = 500

  for (i=-leeway; i<width+leeway; i+=w) {
    for (j=-leeway; j<height+leeway; j+=w) { // j+=w for dots, j+=1 for line
      fill(color);
      stroke(color);
      circle(
        i + noise(i*rez, j*rez*2, i*rez)*amount/2*amount2,
        j + noise(j*rez, i*rez, i*rez)*amount*amount2,
        5
      )  
      // console.log(i + noise(i*rez))
    } // + (noise(i * rez, j * rez) * amount)-(amount/2) +(noise(i * rez, j * rez) * amount)-(amount/2), 
  }
}


function makeDistortedGrid(amount, color, rez) {
  c = 0
  leeway = 500
  for (i=-leeway; i<width+leeway; i+=w) {
    if ((width/w) % 2 < 1 ) {
      c++
    }

    for (j=-leeway; j<height+leeway; j+=w) {

      // if (c % 2) {
      //   fill(color);
      // } else {
      //   noFill()
      // }
      noFill()
      quad(
        i+(noise(i * rez, j * rez) * amount)-(amount/2), j+(noise(i * rez, j * rez) * amount)-(amount/2) ,
        i+w+noise((i+w)* rez, j * rez) * amount-(amount/2), j+noise((i+w)* rez, j * rez) * amount-(amount/2),
        i+w+noise((i+w)* rez, (j+w)* rez) * amount-(amount/2), j+w+noise((i+w)* rez, (j+w)* rez) * amount-(amount/2),
        i+noise(i * rez, (j+w)* rez) * amount-(amount/2), j+w+noise(i * rez, (j+w)* rez) * amount-(amount/2)
      );
      c++
    }
  }
}