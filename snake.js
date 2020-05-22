console.log("Snake Game");
var canvas = document.getElementById("Screen");
var ctx = canvas.getContext("2d");

function drawSnake() {
  ctx.beginPath();
  ctx.rect(0, 0, 20, 20);
  ctx.fillStyle = "green";
  ctx.fillRect(20, 20, 20, 20);
  ctx.stroke();
}

function drawApple() {
  ctx.beginPath();
  ctx.rect(40, 40, 40, 40);
  ctx.fillStyle = "red";
  ctx.fillRect(canvas.width/2, canvas.height/2, 20, 20);
  ctx.stroke();
}

drawSnake();
drawApple();

