/// <reference path="./p5.d.ts" />

const container_balls = document.getElementById("algorithm_balls")

function algorithm_balls(sketch) {
    
    let fr = 60;

    let ballCount = 1000

    const containerSize = container_balls.getBoundingClientRect();

    let vw = containerSize.width;
    let vh = containerSize.height;


    // let d = [25, 40];
    let d = Array.from({length: ballCount}, () => Math.floor(Math.random() * 20 + 10));
    let x = Array(ballCount).fill(vw/2)
    let y = Array(ballCount).fill(vh/2);
    // let xDir = [1,-1];
    let xDir = Array.from({length: ballCount}, () => Math.random() < 0.5 ? -1 : 1);
    // let yDir = [1,-1];
    let yDir = Array.from({length: ballCount}, () => Math.random() < 0.5 ? -1 : 1);
    // let xSpeed = [2,4];
    let xSpeed = Array.from({length: ballCount}, () => Math.floor(Math.random() * 3 + 1))
    // let ySpeed = [8,6];
    let ySpeed = Array.from({length: ballCount}, () => Math.floor(Math.random() * 3 + 1))

    // let r = [Math.round(Math.random()*225),Math.round(Math.random()*225)]
    let r = Array.from({length: ballCount}, () => Math.floor(Math.random() * 255))

    // let g = [Math.round(Math.random()*225),Math.round(Math.random()*225)]
    let g = Array.from({length: ballCount}, () => Math.floor(Math.random() * 255))

    // let b = [Math.round(Math.random()*225),Math.round(Math.random()*225)]
    let b = Array.from({length: ballCount}, () => Math.floor(Math.random() * 255))

    let friction = 0 // 0-10 (no fr - high fr)
        
    let firstRun = true

    sketch.setup = function() {
        
        const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
        canvs.mouseOver(() => sketch.loop())
        canvs.mouseOut(() => sketch.noLoop())

        sketch.frameRate(fr);
        sketch.background(0);

    }

    sketch.draw = function() {

        // Trace of balls
        // background(0, 50);
        sketch.background(0, 50);

        // Style of balls
        sketch.noStroke()
        
        // Number of balls
        for (let i = 0; i < ballCount; i++) {
            sketch.fill(r[i], g[i], b[i]);
            sketch.ellipse(x[i], y[i], d[i], d[i]);
            
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



        if (firstRun) {
            sketch.noLoop()
            firstRun = false
          }
    }

    sketch.windowResized = function() {
        y = 0
        const containerSize = container_balls.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height)
    }

    return sketch;
}
new p5(algorithm_balls, container_balls)