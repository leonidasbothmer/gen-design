/// <reference path="./p5.d.ts" />

let vw = 500;
let vh = 500;
  
// The setup function is called once at the beginning
function setup() {

    // vw = windowWidth
    // vh = windowHeight

    createCanvas(vw, vh);
    background("white");

    beMondrian();
}
  
function beMondrian() {

    // define colors
    let colors = [
        "#d50707",
        "#2e4fb2",
        "#141415",
        "#ffeb38",
    ]

    // random number of x-lines between 3 and 6
    let num_x = round(random(3, 6))
    let x_coords = sort(Array.from(Array(num_x)).map(x=>round(random(20,vw-20))))

    // random number of y-lines between 3 and 6
    let num_y = round(random(3, 6))
    let y_coords = sort(Array.from(Array(num_y)).map(x=>round(random(20,vw-20))))
    
    // add 0 and vw/vh to arrays t be able to fill squares at the borders
    x_coords.push(vh)
    x_coords.unshift(0)

    y_coords.push(vh)
    y_coords.unshift(0)

    // fill squares randomly
    for (let i = 0; i<10; i++) {

        // random square
        let sx = round(random(0,x_coords.length-2))
        let sy = round(random(0,y_coords.length-2))

        fill(colors[round(random(0,3))])
        rect(
            x_coords[sx],
            y_coords[sy],
            x_coords[sx+1] - x_coords[sx],
            y_coords[sy+1] - y_coords[sy]
        )
    }

    // define stroke
    stroke("black")
    strokeWeight(4)

    // place x-lines
    for (x of x_coords) {
        line(x,0,x,vh)
    }

    // place y-lines
    for (y of y_coords) {
        line(0,y,vw,y)
    }

    // tic tac toe

    // o
    for (let i = 0; i<3; i++) {

        let ox = round(random(0,x_coords.length-2))
        let oy = round(random(0,y_coords.length-2))

        fill(colors[round(random(0,3))])
        stroke("black")

        circle(
            x_coords[ox] + (x_coords[ox+1] - x_coords[ox])/2,
            y_coords[oy] + (y_coords[oy+1] - y_coords[oy])/2,
            min(
                (x_coords[ox+1] - x_coords[ox])/2,
                (y_coords[oy+1] - y_coords[oy])/2
            )
        )
    }

    // o
    for (let i = 0; i<2; i++) {

        let xx = round(random(0,x_coords.length-2))
        let xy = round(random(0,y_coords.length-2))

        stroke("black")

        console.log(xx)
        console.log(x_coords)
        console.log(x_coords[xx+1]-x_coords[xx])

        line(
            x_coords[xx],
            y_coords[xy],
            x_coords[xx+1],
            y_coords[xy+1],
        )
        line(
            x_coords[xx+1],
            y_coords[xy],
            x_coords[xx],
            y_coords[xy+1],
        )
    }
}
