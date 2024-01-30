/// <reference path="./p5.d.ts" />

const container_warped = document.getElementById("algorithm_warped")

function algorithm_warped(sketch) {
    const containerSize = container_warped.getBoundingClientRect();
        

    let w = 10; // Abstand zwischen den Punkten
    let rez = 0.001;
    let amount = 1000;
    let amount2 = 0.5;
    let color1 = '#ffffff';

    let vw = containerSize.width;
    let vh = containerSize.height;
    let fr = 60;
    
    let firstRun = true

    sketch.setup = function() {

        const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
        canvs.mouseOver(() => sketch.loop())
        canvs.mouseOut(() => sketch.noLoop())
        
        sketch.frameRate(fr)
        sketch.background('#000000')
        makeDistortedDots(amount, color1, rez, amount2)


    }

    sketch.draw = function() {
        
        sketch.background(0)
        // makeDistortedDots(amount, color1, rez, amount2) 
        makeDistortedGrid(amount, color1, rez)
        amount += 2
        amount2 += .001
        
        if (firstRun) {
            sketch.noLoop()
            firstRun = false
          }
    }


    function makeDistortedDots(amount, color, rez, amount2) {

        leeway = 500
    
        for (i=-leeway; i<vw+leeway; i+=w) {
        for (j=-leeway; j<vh+leeway; j+=w) { // j+=w for dots, j+=1 for line
            sketch.fill(color);
            sketch.stroke(color);
            sketch.circle(
            i + sketch.noise(i*rez, j*rez*2, i*rez)*amount/2*amount2,
            j + sketch.noise(j*rez, i*rez, i*rez)*amount*amount2,
            5
            )  
            // console.log(i + noise(i*rez))
        } // + (noise(i * rez, j * rez) * amount)-(amount/2) +(noise(i * rez, j * rez) * amount)-(amount/2), 
        }
    }
    
    
    function makeDistortedGrid(amount, color, rez) {
        c = 0
        leeway = 500
        for (i=-leeway; i<vw+leeway; i+=w) {
        if ((vw/w) % 2 < 1 ) {
            c++
        }
    
        for (j=-leeway; j<vh+leeway; j+=w) {
    
            sketch.noFill()
            sketch.quad(
            i+(sketch.noise(i * rez, j * rez) * amount)-(amount/2), j+(sketch.noise(i * rez, j * rez) * amount)-(amount/2) ,
            i+w+sketch.noise((i+w)* rez, j * rez) * amount-(amount/2), j+sketch.noise((i+w)* rez, j * rez) * amount-(amount/2),
            i+w+sketch.noise((i+w)* rez, (j+w)* rez) * amount-(amount/2), j+w+sketch.noise((i+w)* rez, (j+w)* rez) * amount-(amount/2),
            i+sketch.noise(i * rez, (j+w)* rez) * amount-(amount/2), j+w+sketch.noise(i * rez, (j+w)* rez) * amount-(amount/2)
            );
            c++
        }
        }
    }

    sketch.windowResized = function() {
        y = 0
        const containerSize = container_warped.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height)
    }

    return sketch;
}
new p5(algorithm_warped, container_warped)




