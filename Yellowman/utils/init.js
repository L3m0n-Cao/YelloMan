function init() {
  handleImages();
  game.trees=[];
  for (var i = 0; i < Math.round(Math.random()*10)+3; i++) {
    game.trees.push(new Tree());
  }
  // game.pickaxeSqr  = new PickaxeSqr(innerWidth-20, innerHeight-20, 40, 40);
  game.player.playerObject = new Player();
  game.lvlBar = new LvlBar();
}
