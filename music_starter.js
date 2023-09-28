
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


for (let i = 0; i < sizeOfCanvas; i++ ){
let gradientAmount = map (i, 0, sizeOfCanvas, 0, 1)
let strokeColor = lerpColor(blueColor, pinkColor, gradientAmount)
stroke (strokeColor)

line (0, i, width, i)
}

//sun
fill ("#ffd67d")
ellipse(1000, 800, 300);
//create a map here to get it to slowly rise with a certain point in the song to have rays from it.


//sea
fill ("#4898a8")
rect(0, 800, width+2, 600);
//add in image with extra texture and movement.


}
