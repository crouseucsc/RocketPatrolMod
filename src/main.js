let config = {
  type: Phaser.AUTO,
  width: 720,
  height: 480,
  scene: [Menu, Play],
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyLEFT, keyRIGHT, keyUP, keyW, keyR, keyA, keyD;