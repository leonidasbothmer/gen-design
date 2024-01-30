/// <reference path="./p5.d.ts" />

let vw = 500;
let vh = 500;
let fr = 60;

// center
let x1 = vw/2;
let y1 = vh/2;

// alpha
// let a = HALF_PI;

// perlin noise offsets
let xoff_1 = 1000;
let xoff_2 = 100;


// The setup function is called once at the beginning
function setup() {

    // vw = windowWidth;
    // vh = windowHeight;

    createCanvas(vw, vh);
    colorMode(HSL);
    background(0,0,0);
    frameRate(fr);

    angleMode(RADIANS);
}


let a = 0;

function draw() {

    xoff_1 = xoff_1 + 0.005;
    xoff_2 = xoff_2 + 0.007;
    let x1 = noise(xoff_1) * vw;
    let y1 = noise(xoff_2) * vh;



    // x1 = vw/2;
    // y1 = vh/2;

    x2 = (sin(a)+1)*vw/2;
    y2 = (cos(a)+1)*vh/2;

    console.log(x2)
    console.log(y2)

    
    // fill("white");
    stroke(255,255,255,0.1);
    line(x1,y1,x2,y2);

    // change angle of line
    a += 0.1


}
