//establishing loading image variables
let landscapeImage;
let sandImage;
let rocksImage;

let oceanImage;
let oceanDetailImage;
let oceanSparkleImage;

let branchesImage;
let greeneryImage;
let darkGreeneryImage;
let pohutukawaImage;

let cloudsImage;
let familyImage;

let firstRun = true

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)

  ellipseMode(CENTER)

  if(firstRun){

  // images loading in here
    landscapeImage = loadImage ('landscape.png');
    sandImage = loadImage ('sand.png')
    oceanImage = loadImage ('ocean.png');
    oceanDetailImage = loadImage ('oceanDetail.png')
    oceanSparkleImage = loadImage ('oceanSparkle.png')
    branchesImage = loadImage ('branches.png')
    greeneryImage = loadImage ('greenery.png')
    darkGreeneryImage = loadImage ('darkGreenery.png')
    pohutukawaImage = loadImage ('pohutukawa.png')
    familyImage = loadImage ('family.png')
    seagullsImage = loadImage ('seagulls.png')
    cloudsImage = loadImage ('clouds.png')
    rocksImage = loadImage ('rocks.png')

    firstRun = false
  
  }

  //gradient colour variables
let pinkColor = color("#E18467")
let blueColor = color("#B9CEC3")

strokeWeight (3)

//size of gradient area on screen
let sizeOfCanvas = 800;

//gradient code
for (let i = 0; i < sizeOfCanvas; i++ ){
let gradientAmount = map (i, 0, sizeOfCanvas, 0, 1)
let strokeColor = lerpColor(blueColor, pinkColor, gradientAmount)
stroke (strokeColor)

line (0, i, width, i)
}

//clouds
let cloudXStart = -16000
let cloudXEnd = 0
let whenSongStart = 14 //put in here when the first line is sung
let cloudMap = map(song.currentTime(), whenSongStart, song.duration (), cloudXStart, cloudXEnd )
image (cloudsImage, cloudMap, 0)

//sun controlled by vocal variation
let sunYStart = 880;
let sunYEnd = 400;
let sunYMap = map(song.currentTime(), 0, sunYEnd,sunYStart, 0)
strokeWeight (0)

drawSun(1000,sunYMap, vocal)


//lanscape, sand and rocks
image (landscapeImage, 0,0)
image (sandImage, 0,0)
image (rocksImage, 0, 0)

//ocean
image (oceanImage,0,0)
let oceanDetailMap = map (drum,0,100, 0, 40)
image (oceanDetailImage, oceanDetailMap,0)

let oceanSparkleMap = map (drum,0,100, 0, 40)
image (oceanSparkleImage, oceanSparkleMap,0)

//trees at the top
image (branchesImage, 0,0)

let greeneryMap = map (drum,0,100,0, 40)
image (greeneryImage, greeneryMap ,0)

let darkGreeneryMap = map (drum,0,100,0, 40)
image (darkGreeneryImage, darkGreeneryMap,0)

let pohutukawaMap = map (vocal,0,100,0, 20)
image (pohutukawaImage,0, pohutukawaMap)

//extra birds and people
let familyMap = map (bass,0,100,0,40)
image (familyImage,0,familyMap)

let birdsMap = map (other,0,100,0, 100)
image (seagullsImage, 0,birdsMap)


}
//function draws the sun and rays.
function drawSun(x, y, V){
  push()

  ellipseMode(CENTER);
  translate(x,y)

  let rayColor = color(255, 227, 179, 100) // last variable is opacity 
  let longLineLength = 200
  let shortLineLength = 150

  strokeWeight(10)
  stroke(rayColor)

  // you can figure out how to use a for loop here!
   //first lines
  rotate(360/8)
  line(longLineLength + V, 0, -(longLineLength + V), 0)

  rotate(360/8)
  line(longLineLength + V, 0, -(longLineLength + V), 0)

  rotate(360/8)
  line(longLineLength + V, 0, -(longLineLength + V), 0)

  rotate(360/8)
  line(longLineLength + V, 0, -(longLineLength + V), 0)

  //second round of lines
   
  rotate(360/16)
  line(shortLineLength + V, 0, -(shortLineLength + V), 0)

  rotate(360/8)
  line(shortLineLength + V, 0, -(shortLineLength + V), 0)

  rotate(360/8)
  line(shortLineLength + V, 0, -(shortLineLength + V), 0)

  rotate(360/8)
  line(shortLineLength + V, 0, -(shortLineLength + V), 0)

  fill (255, 227, 179)
  noStroke()
  circle(0,0, 190 + V ); // Circle of sun

  pop()

}








 
