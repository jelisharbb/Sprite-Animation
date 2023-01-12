const canvas = document.getElementById("spriteCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_HEIGHT = (canvas.height = 300);
const CANVAS_WIDTH = (canvas.width = 300);

const playerImage = new Image();
playerImage.src = "sporty_boy.jpg";
