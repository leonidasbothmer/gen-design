/// <reference path="./p5.d.ts" />

const container_spider = document.getElementById("algorithm_spider")

function algorithm_spider(sketch) {
    const containerSize = container_spider.getBoundingClientRect();
        
    let vw = containerSize.width;
    let vh = containerSize.height;
    let fr = 60;

    // center
    let x1 = vw/2;
    let y1 = vh/2;

    // alpha
    // let a = HALF_PI;

    // perlin noise offsets
    let xoff_1 = 1000;
    let xoff_2 = 100;

    let firstRun = true

    sketch.setup = function() {

        const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
        canvs.mouseOver(() => sketch.loop())
        canvs.mouseOut(() => sketch.noLoop())
        
        sketch.colorMode(sketch.HSL);
        sketch.background(0,0,0);
        sketch.frameRate(fr);
    
        sketch.angleMode(sketch.RADIANS);

    }

    let a = 0;

    sketch.draw = function() {
        
        xoff_1 = xoff_1 + 0.005;
        xoff_2 = xoff_2 + 0.007;
        let x1 = sketch.noise(xoff_1) * vw;
        let y1 = sketch.noise(xoff_2) * vh;
    
        x2 = (sketch.sin(a)+1)*vw/2;
        y2 = (sketch.cos(a)+1)*vh/2;
        
        // fill("white");
        sketch.stroke(255,255,255,0.2);
        sketch.line(x1,y1,x2,y2);
    
        // change angle of line
        a += 0.1
        
        if (firstRun) {
            sketch.noLoop()
            firstRun = false
          }
    }

    sketch.windowResized = function() {
        y = 0
        const containerSize = container_spider.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height)
    }

    return sketch;
}
new p5(algorithm_spider, container_spider)