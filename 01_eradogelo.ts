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
         stroke (100);
         strokeWeight (2);
         rect (x * this.step, y * this.step, this.step, this.step);
       }
     }
  }
}

class Obstaculo {
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
    image (this.image,  this.x * this.step, this.y * this.step, this.step, this.step);
  }
}

let esquilo_img: p5.Image;
let fogo_img: p5.Image;
let noz_img: p5.Image;
let board_img: p5.Image;
let tempo: number; 
let ganhou: boolean = false;

let esquilo: Entity;
let noz: Entity;
let fogo_0: Obstaculo;
let fogo_1: Obstaculo;
let fogo_2: Obstaculo;
let fogo_3: Obstaculo;
let board: Board;

function loadImg (path: string): p5.Image {
  return loadImage (
    path,
    () => console.log ("Loading " + path + " ok"),
    () => console.log ("Loading " + path + " error")
  );
}

function preload () {
  esquilo_img = loadImg ('../sketch/esquilo.png');
  fogo_img = loadImg ('../sketch/fogo.png');
  noz_img = loadImg ('../sketch/noz.png');
  board_img = loadImg ('../sketch/gelo.png');
}

function keyPressed (){

  if (ganhou == false){
    if (keyCode === LEFT_ARROW){
      esquilo.x--;
    } else if (keyCode === RIGHT_ARROW){
      esquilo.x++;
    } else if (keyCode === UP_ARROW){
      esquilo.y--;
    } else if (keyCode === DOWN_ARROW){
      esquilo.y++;
    }
  
    if (keyCode === "A".charCodeAt (0)){
      noz.x--;
    } else if (keyCode === "D".charCodeAt (0)){
      noz.x++;
    } else if (keyCode === "W".charCodeAt (0)){
      noz.y--;
    } else if (keyCode === "S".charCodeAt (0)){
      noz.y++;
    }
  }
}

function limite (): any {

  if (esquilo.x < 0){
    esquilo.x ++
  } else if (esquilo.x > board.nc -1){
    esquilo.x--
  } else if (esquilo.y < 0){
    esquilo.y++
  } else if (esquilo.y > board.nl - 1){
    esquilo.y--
  }

  if (noz.x < 0){
    noz.x++
  } else if (noz.x > board.nc - 1){
    noz.x--
  } else if (noz.y < 0){
    noz.y++
  } else if (noz.y > board.nl - 1){
    noz.y--
  }
}

function colisao (): void {
  if (esquilo.x == noz.x && esquilo.y == noz.y){
   frameRate (0);
   background (200);
   fill (50);
   textSize (50);
   textAlign (CENTER, CENTER);
   text ("GANHOU!", 300, 250);
   ganhou = true;
  }
  if (esquilo.x == fogo_0.x && esquilo.y == fogo_0.y) {
    frameRate (0);
    background (230);
    fill (50);
    text ("MORREU :(", 200, 250);
  } if (esquilo.x == fogo_1.x && esquilo.y == fogo_1.y) {
    frameRate (0);
    fill (50);
    background (230);
    text ("MORREU :(", 200, 250);
  } if (esquilo.x == fogo_2.x && esquilo.y == fogo_2.y) {
    frameRate (0);
    fill (50);
    background (230);
    text ("MORREU :(", 200, 250);
  } if (esquilo.x == fogo_3.x && esquilo.y == fogo_3.y) {
    frameRate (0);
    fill (50);
    background (230);
    text ("MORREU :(", 200, 250);
  } 
}

function timer (){
  if (frameCount >= 30*60){
  background (200);
  fill (50);
  text ("TEMPO ESGOTADO!", 100, 250);
  } else {
  textSize (40);
  text ((Math.floor((30*60 - frameCount) / 60)), 540, 70);
  }
}

function setup (){
  let size = 100;
  esquilo = new Entity (5, 4, size, esquilo_img);
  fogo_0 = new Obstaculo (1, 1, size, fogo_img);
  fogo_1 = new Obstaculo (4, 1, size, fogo_img);
  fogo_2 = new Obstaculo (1, 3, size, fogo_img);
  fogo_3 = new Obstaculo (4, 3, size, fogo_img);
  noz = new Entity (0, 0, size, noz_img);
  board = new Board (6, 5, size, board_img);
  createCanvas (board.nc * size, board.nl * size);
}

function draw (){
  limite ();
  board.draw ();
  esquilo.draw();
  noz.draw ();
  fogo_0.draw ();
  fogo_1.draw ();
  fogo_2.draw ();
  fogo_3.draw ();
  colisao ();
  timer ();
}
