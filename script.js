const canvas = document.getElementById("spriteCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_HEIGHT = (canvas.height = 400);
const CANVAS_WIDTH = (canvas.width = 300);

const playerImage = new Image();
playerImage.src = "sprite.jpg";
const spriteWidth = 300;
const spriteHeight = 400;
let frameX = 0;
let frameY = 1;
let gameFrame = 0;
const staggerFrame = 20;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  ); // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  if (gameFrame % staggerFrame == 0) {
    if (frameX < 5) frameX++;
    else frameX = 0;
  }

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
