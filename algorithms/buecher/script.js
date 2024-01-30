/// <reference path="./p5.d.ts" />

let vw = 500;
let vh = 500;
let fr = 10;

function preload() {
    data = loadJSON("assets/books.json");
    img_blood = loadImage('assets/blood.png');
    font_fraktur = loadFont("assets/typographergotisch.a-regular.ttf")
    font_typewriter = loadFont("assets/font_typewriter.otf")
    bg_img = loadImage('assets/paper_texture.jpeg')
}

function setup() {
    // Canvas
    vw = windowWidth;
    vh = windowHeight;
    createCanvas(vw, vh);

    background(bg_img)

    // First, we load the file
    //loadJSONFile(jsonURL);
    angleMode(DEGREES);
    colorMode(HSL);
    noStroke();
    frameRate(fr);
    // console.log(data)

}

let idx = 0;
let letter_idx = 0;
let name_idx = 0;
let line_y = 50;

// initial



function draw() {

    // Check if there is a name
    if (!data.index[name_idx].authorfirstname) {
        name_idx += 1
        return
    }

    // Include irregularity in typing
    if (floor(random(0,3)) == 1) {
        return
    }

    // Semi-irregular drip of blood
    if (idx % 5 == 0) { // every fifth frame
        if (floor(random(0,5)) == 1) { // by a chance of 20%
            push()
            rotate(random(0,360))
            image(img_blood,random(-vw/4,vw/2),random(-vw/4,vh/2))
            pop()
        }
    }

    // set name 
    let name_str = data.index[name_idx].authorfirstname+" "+data.index[name_idx].authorlastname+": "+data.index[name_idx].title+" ("+data.index[name_idx].firsteditionpublicationyear+")"
    // Figure out length of name
    let name_len = name_str.length
    // Text size (textsize corr pages banned)
    let text_size = floor(2*Math.pow(int(data.index[name_idx].pagenumberinocrdocument),0.5))

    textSize(text_size);
    fill(0,0,0,0.8)
    textFont(font_typewriter)

    // print firstt letter
    text(
        name_str[letter_idx],
        30 + letter_idx * 0.7 * text_size, // x-coord
        line_y // y-coord
    ) 
    // console.log(name_idx, text_size, name_str)
    
    letter_idx += 1

    // Nächstes Buch
    if (letter_idx >= name_len) { // wenn das wort zuende ist:
        letter_idx = 0;
        
        // Gibt es noch ein nächstes Buch? Sonst wieder erstes Buch
        if (name_idx < data.index.length) {
            name_idx += 1;
        } else {
            name_idx = 0;
        }

        // set name 
        name_str = data.index[name_idx].authorfirstname+" "+data.index[name_idx].authorlastname
        // Figure out length of name
        name_len = name_str.length
        // text size
        if (data.index[name_idx].pagenumberinocrdocument) {
            text_size = floor(2*Math.pow(int(data.index[name_idx].pagenumberinocrdocument),0.5))
        } else { text_size = 12}

        push()
        tint(255, 0.1)
        background(bg_img)
        pop()

        // line height
        if (line_y > height-30) {
            line_y = 50
        } else { line_y = line_y + text_size + 10 }


    }

    idx += 1;
}





