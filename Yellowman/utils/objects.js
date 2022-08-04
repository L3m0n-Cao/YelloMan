class Player {
  constructor() {
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.radius = Math.round((canvas.width/100))*(6.9)/2.5;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.xVel = 1;
    this.yVel = 1;
    this.sprite =
    this.rotation = 0.1;
  }
  draw() {
    game.pickSprite = document.getElementById("Pick1");
    //This rotates the player accordingly
    if (this.error) {
      c.save();
      c.translate(this.x, this.y);
      c.rotate(this.rotation);
      if (game.pickHeld==true) {
        c.drawImage(document.getElementById("PlayerImage"), -this.radius*1.4, 0, this.radius*1.4, this.radius*1.4);
      }
      circle(0, 0, this.radius, true, "#000");
      c.restore();
      this.rotation = Math.atan2(-(game.mouse.x-this.x), (game.mouse.y-this.y));
    } else {
      c.save();
      c.translate(this.x, this.y);
      c.rotate(this.rotation);
      if (game.pickHeld==true) {
        c.drawImage(game.pickSprite, -this.radius*1.4, 0, this.radius*1.4, this.radius*1.4);
      }
      // circle(0, 0, this.radius, true, "#000");
      c.drawImage(document.getElementById("PlayerImage"), -this.radius, -this.radius, this.radius*2, this.radius*2);
      c.restore();
      this.rotation = Math.atan2(-(game.mouse.x-this.x), (game.mouse.y-this.y));
    }
  }
  update() {
    this.draw();
    interactiveMovement(this);
    //Keep Player onscreen
    if (this.x+this.radius>=canvas.width) {
      this.x = canvas.width-this.radius;
    }
    if (this.x-this.radius<=0) {
      this.x = this.radius;
    }
    if (this.y+this.radius>=canvas.width) {
      this.y = canvas.width-this.radius;
    }
    if (this.y-this.radius<=0) {
      this.y = this.radius;
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

//class tree
class Tree {
  constructor() {
    this.radius = (((Math.random() + 1) * 30)*(canvas.width/100)*(6.9))/50;
    this.x = (Math.random()) * innerWidth/3;
    this.y = (Math.random()) * innerHeight/3;
    this.hr = this.radius/4;
    this.inset = Math.random()+0.5;
    this.n = 7;
  }
  draw() {
    c.shadowOffsetX = 5;
    c.shadowOffsetY = 5;
    c.shadowColor = "#000";
    c.shadowBlur = 3;
    drawShape(this.radius, this.inset, this.n, this.x, this.y, /*"rgba(42, 64, 37, 0.5)"*/"#4e6437");
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
    c.shadowColor = "#587b3a";
    c.shadowBlur = 0;
    c.lineWidth = 3;
    c.stroke();
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
    c.shadowColor = "#4e6437";
    c.shadowBlur = 21;
    drawShape(this.radius/1.5, this.inset/1.5, this.n, this.x, this.y, "#587b3a");
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
    c.shadowColor = "rgba(105,142,65,255)";
    c.shadowBlur = 0;
    // circle(this.x, this.y, this.radius-this.inset, true, "rgba(0, 0, 0, 0.5)");
  }
  update() {
    this.draw();
    //Check if Player is colliding with tree
    if (collision1(this.x, this.y, game.player.playerObject.x, game.player.playerObject.y)<=this.radius-this.inset) {
      if (game.canRecieveWood==true && game.pickHeld == true) {
        game.resources.wood+=1;
        game.canRecieveWood=false;
        game.player.exp += 5;
        game.player.visibleExp += 5;
       }
        this.draw = function(){
        c.shadowOffsetX = 5;
        c.shadowOffsetY = 5;
        c.shadowColor = "#000";
        c.shadowBlur = 3;
        //Transpearnt Tree Thingy
        drawShape(this.radius, this.inset, this.n, this.x, this.y, "rgba(42, 64, 37, 0.5)");
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.shadowColor = "#587b3a";
        c.shadowBlur = 0;
        c.lineWidth = 3;
        c.stroke();
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.shadowColor = "#4e6437";
        c.shadowBlur = 21;
        drawShape(this.radius/1.5, this.inset/1.5, this.n, this.x, this.y, "rgba(58, 64, 47, 0)");
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.shadowColor = "rgba(105,142,65,255)";
        c.shadowBlur = 0;
        // circle(this.x, this.y, this.radius-this.inset, true, "rgba(0, 0, 0, 0.5)");
     }
    } else {
     this.draw = function() {
       {
        c.shadowOffsetX = 5;
        c.shadowOffsetY = 5;
        c.shadowColor = "#000";
        c.shadowBlur = 3;
        //Not transparent tree thigy
        drawShape(this.radius, this.inset, this.n, this.x, this.y, /*"rgba(42, 64, 37, 0.5)"*/"#4e6437");
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.shadowColor = "#587b3a";
        c.shadowBlur = 0;
        c.lineWidth = 3;
        c.stroke();
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.shadowColor = "#4e6437";
        c.shadowBlur = 21;
        drawShape(this.radius/1.5, this.inset/1.5, this.n, this.x, this.y, "#587b3a");
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.shadowColor = "rgba(105,142,65,255)";
        c.shadowBlur = 0;
        // circle(this.x, this.y, this.radius-this.inset, true, "rgba(0, 0, 0, 0.5)");
      }
     }
   }
    const wood = document.getElementById("wood");
    wood.innerText="Wood: " + game.resources.wood;
  }
}

class LvlBar {
  constructor() {
    this.width = canvas.width/1.5;
    this.height = canvas.height/80;
    this.x = (canvas.width-this.width)/2
    this.y = canvas.height/30;
    this.percentFilled = (game.player.visibleExp*this.width)/100;
    this.pixelsFilled = this.percentFilled * 100
    this.level = 0
  }
  draw() {
    c.fillStyle = "rgba(255,255,255, 1)";
    c.fillRect(this.x, this.y, this.width, this.height);
    c.lineWidth = 2;
    c.strokeRect(this.x, this.y, this.width, this.height);
    //The amount of XP
    c.fillStyle = "rgb(100, 100, 169)";
    c.fillRect(this.x, this.y, this.pixelsFilled, this.height);
    //Drawing the player EXP on the canvas
    c.font = "20px sans-serif";
    c.fillStyle = "rgb(0, 0, 255)";
    c.fillText(this.level, this.x, this.y)

  }
  update() {
    this.draw();
    //Updating the level bar
    this.percentFilled = game.player.visibleExp;
    this.pixelsFilled = (this.percentFilled * this.width)/100;
    //Resetting the Lvl bar if EXP is 100%

    if (this.percentFilled >= 100) {
      game.player.visibleExp = 0;
      this.percentFilled = 0;
      this.level += 1;
    }
  }
}

class Mountain {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    
  }
}
