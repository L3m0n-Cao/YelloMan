function handleImages() {
  const woodPickaxeImage = document.getElementById("Pick1");
  woodPickaxeImage.width = (canvas.width/10);//height gets set Automatically
  let iconY = (canvas.height-woodPickaxeImage.height)-6;
  let iconX = ((canvas.width-woodPickaxeImage.width)/2);
  woodPickaxeImage.style.top = iconY + "px";
  woodPickaxeImage.style.left = iconX + "px";

  woodPickaxeImage.onclick = function() {
    game.pickHeld = true;
  }
}
