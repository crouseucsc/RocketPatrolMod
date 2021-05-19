//Christian Rouse
//CMPM/ARTG - 120 - 02
//Template Code Credential: Rutvik Katkoriya
//Time: 35hrs+
//19 April 2021 17:00
let config = {
  type: Phaser.CANVAS,
  width: 1366,
  height: 768,
  scene: [Menu, Play],
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 75;
let borderPadding = borderUISize / 3;

let keyLEFT, keyRIGHT, keyUP, keyW, keyR, keyA, keyD;