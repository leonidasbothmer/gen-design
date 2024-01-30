/// <reference path="./p5.d.ts" />

const container_bee = document.getElementById("algorithm_bee")

function algorithm_bee(sketch) {
    // let vw = 500; // canvas width -- need to go vw?
    // let vh = 500; // canvas height -- need to go vh?
    let fr = 60;  // frame rate
    let xoff_1 = 1000; // perlin noise offset 1
    let xoff_2 = 100;  // perlin noise offset 2
    let i = 0; // count to stop loop

    let firstRun = true

    sketch.setup = function() {

        const containerSize = container_bee.getBoundingClientRect();
        const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
        canvs.mouseOver(() => sketch.loop())
        canvs.mouseOut(() => sketch.noLoop())

        // sketch.keyIsDown((LEFT_ARROW) => sketch.loop())

        // createCanvas(vw, vh);
        sketch.colorMode(sketch.HSL)
        sketch.background(0);
        sketch.frameRate(fr)

    }

    sketch.draw = function() {

        if (i<3000) {
            // background(204);
            sketch.strokeWeight(2);
            sketch.stroke("yellow")
            xoff_1 = xoff_1 + 0.005;
            xoff_2 = xoff_2 + 0.007;
            let n1 = sketch.noise(xoff_1) * sketch.width;
            let n2 = sketch.noise(xoff_2) * sketch.height;
            sketch.point(n1,n2)
            i++
        }

        if (firstRun) {
            sketch.noLoop()
            firstRun = false
          }
    }

    sketch.windowResized = function() {
        y = 0
        const containerSize = container_bee.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height)
    }

    return sketch;
}
new p5(algorithm_bee, container_bee)