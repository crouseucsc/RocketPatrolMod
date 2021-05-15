//Christian Rouse
//CMPM/ARTG - 120 - 02
//Template Code Credential: Rutvik Katkoriya
//Time: 20hrs+
//19 April 2021 17:00
let config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scene: [Menu, Play],
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyLEFT, keyRIGHT, keyUP, keyW, keyR, keyA, keyD;