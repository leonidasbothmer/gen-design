/// <reference path="./p5.d.ts" />

let vw = 500;
let vh = 500;
let fr = 60;

let xoff_1 = 1000;
let xoff_2 = 100;

let i = 0;

// The setup function is called once at the beginning
function setup() {

    // vw = windowWidth
    // vh = windowHeight

    createCanvas(vw, vh);
    colorMode(HSL)
    background(0,0,0);
    frameRate(fr)

}

function draw() {

    if (i<3000) {
        // background(204);
        strokeWeight(2);
        stroke("yellow")
        xoff_1 = xoff_1 + 0.005;
        xoff_2 = xoff_2 + 0.007;
        let n1 = noise(xoff_1) * width;
        let n2 = noise(xoff_2) * height;
        point(n1,n2)
        i++
    }

}
