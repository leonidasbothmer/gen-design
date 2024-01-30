/// <reference path="./p5.d.ts" />

let vw = 500;
let vh = 500;
let fr = 80;

// center
let x1 = vw/2;
let y1 = vh/2;

// alpha
// let a = HALF_PI;

// perlin noise offsets
let xoff_1 = 1000;
let xoff_2 = 100;
let xoff_3 = 5000;
let xoff_4 = 6000;
let xoff_5 = 7000;
let xoff_6 = 8000;

let lm = 0 // number between -1 and 1
let lm_1 = 0 // number between -1 and 1

let c = 0; // color hue for hsl
let c_1 = 130; // color hue for hsl

// The setup function is called once at the beginning
function setup() {

    vw = windowWidth;
    vh = windowHeight;

    createCanvas(vw, vh);
    colorMode(HSL);
    background(0,0,0);
    frameRate(fr);

    angleMode(RADIANS);



}


let a = 0;
let a_1 = 2;

function draw() {

    background(0,0,0,0.01)



    // alter center
    xoff_1 = xoff_1 + 0.005;
    xoff_2 = xoff_2 + 0.007;
    let x1 = noise(xoff_1) * vw*1.5;
    let y1 = noise(xoff_2) * vh*1.5;



    // x1 = vw/2;
    // y1 = vh/2;

    x2 = (sin(a)+1)*vw/(1)*abs(lm);
    y2 = (cos(a)+1)*vh/(1)*abs(lm);

    strokeWeight(1)    
    stroke(120,100,50,1);
    line(x1,y1,x2,y2);

    strokeWeight(3)    
    stroke(120,100,50,0.5);
    line(x1,y1,x2,y2);

    strokeWeight(6)    
    stroke(120,100,50,0.2);
    line(x1,y1,x2,y2);

    // change angle of line
    a += 0.1

    // change color
    c++

    // change length
    xoff_3 += 0.02
    lm = noise(xoff_3);



    // ----------

    // alter center
    xoff_4 += 0.005;
    xoff_5 += 0.007;
    let x1_1 = noise(xoff_4) * vw;
    let y1_1 = noise(xoff_5) * vh;



    // x1 = vw/2;
    // y1 = vh/2;

    x2_1 = (sin(a_1)+1)*vw/(1)*abs(lm_1);
    y2_1 = (cos(a_1)+1)*vh/(1)*abs(lm_1);

    strokeWeight(1)    
    stroke(0,100,50,1);
    line(x1_1,y1_1,x2_1,y2_1);

    strokeWeight(3)    
    stroke(0,100,50,0.5);
    line(x1_1,y1_1,x2_1,y2_1);

    strokeWeight(6)    
    stroke(0,100,50,0.2);
    line(x1_1,y1_1,x2_1,y2_1);

    // change angle of line
    a_1 -= 0.05

    // change color
    c_1++

    // change length
    xoff_6 += 0.02
    lm_1 = noise(xoff_6);

}
