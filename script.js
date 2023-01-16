// 1st row of the image (slide)
const canvas1 = document.getElementById("spriteCanvas1");
const ctx1 = canvas1.getContext("2d");

const CANVAS1_HEIGHT = (canvas1.height = 350);
const CANVAS1_WIDTH = (canvas1.width = 300);

const playerImage1 = new Image();
playerImage1.src = "sprite.jpg";
const sprite1Width = 300;
const sprite1Height = 350;
let frameX1 = 0;
let frameY1 = 0;
let gameFrame1 = 0;
const staggerFrame1 = 10;

function animate1() {
  ctx1.clearRect(0, 0, CANVAS1_WIDTH, CANVAS1_HEIGHT);
  ctx1.drawImage(
    playerImage1,
    frameX1 * sprite1Width,
    frameY1 * sprite1Height,
    sprite1Width,
    sprite1Height,
    0,
    0,
    sprite1Width,
    sprite1Height
  ); // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  if (gameFrame1 % staggerFrame1 == 0) {
    if (frameX1 < 4) frameX1++;
    else frameX1 = 0;
  }

  gameFrame1++;
  requestAnimationFrame(animate1);
}

animate1();

// 2nd row of the image (run)
const canvas2 = document.getElementById("spriteCanvas2");
const ctx2 = canvas2.getContext("2d");

const CANVAS2_HEIGHT = (canvas2.height = 350);
const CANVAS2_WIDTH = (canvas2.width = 300);

const playerImage2 = new Image();
playerImage2.src = "sprite.jpg";
const sprite2Width = 300;
const sprite2Height = 350;
let frameX2 = 0;
let frameY2 = 1;
let gameFrame2 = 0;
const staggerFrame2 = 10;

function animate2() {
  ctx2.clearRect(0, 0, CANVAS2_WIDTH, CANVAS2_HEIGHT);
  ctx2.drawImage(
    playerImage2,
    frameX2 * sprite2Width,
    frameY2 * sprite2Height,
    sprite2Width,
    sprite2Height,
    0,
    0,
    sprite2Width,
    sprite2Height
  ); // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  if (gameFrame2 % staggerFrame2 == 0) {
    if (frameX2 < 5) frameX2++;
    else frameX2 = 0;
  }

  gameFrame2++;
  requestAnimationFrame(animate2);
}

animate2();

// 3rd row of the image (fal3)
const canvas3 = document.getElementById("spriteCanvas3");
const ctx3 = canvas3.getContext("2d");

const CANVAS3_HEIGHT = (canvas3.height = 350);
const CANVAS3_WIDTH = (canvas3.width = 300);

const playerImage3 = new Image();
playerImage3.src = "sprite.jpg";
const sprite3Width = 300;
const sprite3Height = 350;
let frameX3 = 0;
let frameY3 = 2;
let gameFrame3 = 0;
const staggerFrame3 = 10;

function animate3() {
  ctx3.clearRect(0, 0, CANVAS3_WIDTH, CANVAS3_HEIGHT);
  ctx3.drawImage(
    playerImage3,
    frameX3 * sprite3Width,
    frameY3 * sprite3Height,
    sprite3Width,
    sprite3Height,
    0,
    0,
    sprite3Width,
    sprite3Height
  ); // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  if (gameFrame3 % staggerFrame3 == 0) {
    if (frameX3 < 4) frameX3++;
    else frameX3 = 0;
  }

  gameFrame3++;
  requestAnimationFrame(animate3);
}

animate3();
