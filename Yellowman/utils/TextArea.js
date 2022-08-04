let textArea
textArea = {
  explainControls: function () {
    game.textArea.innerHTML =
    "If you by any chance forgot how to play <br/><br/>Use W, A, S, D to move the player<br/><br/>Now then... Click the pickaxe<br/>Hide in a tree to collect wood<br/><br/>SPACE to continue";
  },
  requestWood: function () {
    game.textArea.innerHTML =
    "Great! Now then... <br/><br/>I need some wood for a thing<br/> Would you mind getting me 5 peices of wood hehe<br/><br/>SPACE to continue";
  },
  //Quest 1 is gathering wood for the player
  quest1Completed: function () {
    game.textArea.innerHTML =
    "Thanks for the wood! <br/>That took way too long <br/>Maybe you would like a better pickaxe?<br/><br/>SPACE to continue";

  }
}

function handleTextArea() {
  //Logic for handling the textarea output
  //Checking if the player interacts
  if(game.key == "32") {
    switch (game.textOutput) {
      case 0:
        textArea.explainControls();
        game.textOutput += 1;
        break;

      case 1:
        if(game.pickHeld) {
          textArea.requestWood();
          game.textOutput += 1;
        }
      break;

      case 2:
        if(game.resources.wood >= 5) {
          game.resources.wood -= 5;
          textArea.quest1Completed();
          game.textOutput += 1;
          game.tools.pickTier = 1000;
        }
      break;
    }
  }

}
