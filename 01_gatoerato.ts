class Entity {
  x: number;
  y: number;
  step: number;
  image: p5.Image;

  constructor (x: number, y: number, step: number, image: p5.Image){
    this.x = x;
    this.y = y;
    this.step = step;
    this.image = image;
  }

  draw (): void {
    image (this.image, this.x * this.step, this.y * this.step, this.step, this.step);
  }
}

class Board {
  nl: number;
  nc: number;
  step: number;
  background: p5.Image;

  constructor (nc: number, nl: number, step: number, background: p5.Image){
    this.nc = nc
    this.nl = nl
    this.step = step
    this.background = background; 
  }

  draw (): void {
    image (this.background, 0, 0, this.nc * this.step, this.nl * this.step);
     for (let x = 0; x < this.nc; x ++){
     for (let y = 0; y < this.nl; y ++){
         noFill ();
         stroke (0);
         strokeWeight (2);
         rect (x * this.step, y * this.step, this.step, this.step);
       }
     }
  }
}

let gato_img: p5.Image;
let rato_img: p5.Image;
let board_img: p5.Image;
let game_over: boolean = false;

let gato: Entity;
let rato: Entity;
let board: Board;

function loadImg (path: string): p5.Image {
  return loadImage (
    path,
    () => console.log ("Loading " + path + " ok"),
    () => console.log ("Loading " + path + " error")
  );
}

function preload () {
  gato_img = loadImg ('../sketch/gato.png');
  rato_img = loadImg ('../sketch/rato.png');
  board_img = loadImg ('../sketch/chão.jpg');
}

function keyPressed (){

  if (game_over == false){
    if (keyCode === LEFT_ARROW){
      gato.x--;
    } else if (keyCode === RIGHT_ARROW){
      gato.x++;
    } else if (keyCode === UP_ARROW){
      gato.y--;
    } else if (keyCode === DOWN_ARROW){
      gato.y++;
    }
  
    if (keyCode === "A".charCodeAt (0)){
      rato.x--;
    } else if (keyCode === "D".charCodeAt (0)){
      rato.x++;
    } else if (keyCode === "W".charCodeAt (0)){
      rato.y--;
    } else if (keyCode === "S".charCodeAt (0)){
      rato.y++;
    }
  }
}

function limite (): any {

  if (gato.x < 0){
    gato.x ++
  } else if (gato.x > board.nc -1){
    gato.x--
  } else if (gato.y < 0){
    gato.y++
  } else if (gato.y > board.nl - 1){
    gato.y--
  }

  if (rato.x < 0){
    rato.x++
  } else if (rato.x > board.nc - 1){
    rato.x--
  } else if (rato.y < 0){
    rato.y++
  } else if (rato.y > board.nl - 1){
    rato.y--
  }
}

function colisao (): boolean {
  if (gato.x == rato.x && gato.y == rato.y && gato.x == rato.y && gato.y == rato.x){
   background (200);
   textSize (50);
   textAlign (CENTER, CENTER);
   text ("GAME OVER", 200, 200);
   game_over = true;
   return true
  } else {
    return false;
  }
}

function setup (){
  let size = 100;
  gato = new Entity (2, 2, size, gato_img);
  rato = new Entity (1, 1, size, rato_img);
  board = new Board (4, 4, size, board_img);
  createCanvas (board.nc * size, board.nl * size);
}

function draw (){
  limite ();
  board.draw ();
  gato.draw();
  rato.draw ();
  colisao ();
}
