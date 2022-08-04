let canvas, c;
console.log("Hi, I see you are in the console, There is nothing here to stop you from cheating so have fun :D!");

function setupCanvas(canvasWidth, canvasHeight, canvasX, canvasY) {
  canvas  = document.getElementById("canvas1");
  c = canvas.getContext("2d");
  canvas.width = canvasWidth-canvasX;
  canvas.height = canvasHeight-canvasY;
  canvas.style.position = "absolute";
  canvas.style.left = canvasX + "px";
  canvas.style.top = canvasY + "px";
}
function loadDivAndCanv() {
  if (innerWidth<=innerHeight) {
    // setupCanvas(window.innerWidth, window.innerWidth, 0, 0);
    game.textArea.style.left=0+"px";
    game.textArea.style.top = canvas.height+"px";
    game.textArea.style.width=innerWidth-40+"px";
    game.textArea.style.height=innerHeight-canvas.height-40+"px";
    window.addEventListener("resize", () => {
      // setupCanvas(window.innerWidth, window.innerWidth, 0, 0);
      game.textArea.style.left=0+"px";
      game.textArea.style.top = canvas.height+"px";
      game.textArea.style.width=innerWidth-40+"px";
      game.textArea.style.height=innerHeight-canvas.height-40+"px";
    });
  } else if (innerHeight<innerWidth) {
    setupCanvas(window.innerHeight, window.innerHeight, 0, 0);
    window.addEventListener("resize", () => {
      // setupCanvas(window.innerHeight, window.innerHeight, 0, 0);
      game.textArea.style.width = innerWidth-canvas.width-40+"px";
      game.textArea.style.height = innerHeight-40+"px";
      game.textArea.style.left = canvas.width+"px";
      game.textArea.style.top = 0+"px";
    });
    game.textArea.style.width = innerWidth-canvas.width-40+"px";
    game.textArea.style.height = innerHeight-40+"px";
    game.textArea.style.left = canvas.width+"px";
    game.textArea.style.top = 0+"px";
  }
  //Keyboard handles
  addEventListener("keydown", (e) => {
    game.key = e.keyCode;
    game.keyIsDown = true;
    // console.log(e.keyCode);

    handleTextArea();
  });
  addEventListener("keyup", () => {
    game.key = undefined;
    game.keyIsDown = false;
  });
  //MouseMove Event handles
  addEventListener("mousemove", (e) => {
    game.mouse.x = e.clientX;
    game.mouse.y = e.clientY;
  });
  addEventListener("mousedown", () => {
    game.mouseDown =true;
  });
  addEventListener("mouseup", () => {
    game.mouseDown =false;
  });
}
//Circle utils
function circle(x, y, radius, fill, colour) {
  if(fill) {
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fillStyle = colour
    c.fill();
    c.closePath();
  } else {
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = colour
    c.stroke();
    c.closePath();
  }
}


function interactiveMovement(object) {
  switch (game.key) {
    case 87:
      object.velocity.y = -object.yVel;
    break;
    case 83:
      object.velocity.y = object.yVel;
    break;
    case 65:
      object.velocity.x = -object.xVel;
    break;
    case 68:
      object.velocity.x = object.xVel;
    break;
  }

  if(game.keyIsDown == false) {
    object.velocity.x = 0;
    object.velocity.y = 0;
  }

  object.x += object.velocity.x;
  object.y += object.velocity.y;
}
//Sheps
function drawShape(radius, inset, n, x, y, colour) {
  c.beginPath();
  c.save();
  c.translate(x, y);
  c.moveTo(0, -radius);

  for(let i=0; i<n; i++) {
    c.rotate(Math.PI/n);
    c.lineTo(0, -(radius*inset));
    c.rotate(Math.PI/n);
    c.lineTo(0, -radius);
  }
  c.rotate(Math.random()*3);
  c.restore();
  c.closePath();
  c.fillStyle = colour;
  c.fill();
}
//Collision
function collision1(x1, y1, x2, y2) {
  let xDist = x1-x2;
  let yDist = y1-y2;

  return Math.hypot(xDist, yDist);
}

function calcAngle(x, y, inDeg) {
   if (inDeg) {
     return Math.atan2(y, x)*180/Math.PI;
   } else {
      return Math.atan2(y, x);
   }
}
