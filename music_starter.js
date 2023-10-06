
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  // textFont('Helvetica'); // please use CSS safe fonts
  ellipseMode(CENTER)
  // textSize(24);

let pinkColor = color("#E18467")
let blueColor = color("#B9CEC3")

strokeWeight (3)

let sizeOfCanvas = 800;

//gradient code
for (let i = 0; i < sizeOfCanvas; i++ ){
let gradientAmount = map (i, 0, sizeOfCanvas, 0, 1)
let strokeColor = lerpColor(blueColor, pinkColor, gradientAmount)
stroke (strokeColor)

line (0, i, width, i)
}

//vocal sun
let sunYStart = height/0;
let sunYEnd = height/8;
let whenSingingStart = 25.5 //put in here when the first line is sung

let sunYMap = map(song.currentTime(), 0, song.duration(),800, 0)
strokeWeight (0)

drawSun(1000,sunYMap, vocal)
//circle(1000, 800 + vocal, 300 + vocal )

//sea
fill ("#B9CEC3") // blue
rect(0, 800, width+2, 600);
//add in image with extra texture and movement.

}

function drawSun(x, y, V){
  push()

  ellipseMode(CENTER);
  translate(x,y)

  let rayColor = color(255,0,0, 100) // last variable is opacity 

  strokeWeight(10)

  stroke(rayColor)

  // you can figure out how to use a for loop here! Ask us for help if needed 
  rotate(360/8)
  line(300 + V, 0, -(300 + V), 0)

  rotate(360/8)
  line(300 + V, 0, -(300 + V), 0)

  rotate(360/8)
  line(300 + V, 0, -(300 + V), 0)

  rotate(360/8)
  line(300 + V, 0, -(300 + V), 0)

  fill ("#ffd67d")
  noStroke()
  circle(0,0, 300 + V );

  pop()

}
