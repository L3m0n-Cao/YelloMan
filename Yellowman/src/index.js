let game
window.addEventListener("load", () => {
  //GameObject
  game = {
    textArea: document.getElementById("TextArea"),
    player: {
      exp: 0,
      visibleExp: 0,
      canRecieveWood: true,
      playerObject: undefined,
    },
    pickaxeSqr: undefined,
    resources: {
      wood: 0
    },
    tools: {
      pickTier: 6000
    },
    mouse: {
      x: undefined,
      y: undefined
    },
    textOutput: 0,
    canrecieveWood: true,
  };
  // Canvas Setup
  loadDivAndCanv();
  addEventListener("resize", () => {
    loadDivAndCanv();
  });
  //Canvas manipulation
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle="rgb(105,142,65)"
    c.fillRect(0, 0, canvas.width, canvas.height);
    game.player.playerObject.update();
    game.trees.forEach((tree, i) => {
      tree.update();
    });
    game.lvlBar.update();

    //manipulation
  }
  init();
  animate();


//Misc code
  (function collectResource() {
      setTimeout(function() {
        game.canRecieveWood=true;
        collectResource();
      }, game.tools.pickTier);
  }());
});

//Error
//MAKE SURE TO UNCOOMENT THIS
// window.onerror = () => {
//  alert("Make sure you have javascript enabled and the screen is not vertical. This is not gonna work if you are on a mobile device"+
//  "I am working on a fix! If problems persist umm... ask some1 to do something about it.");
// }
