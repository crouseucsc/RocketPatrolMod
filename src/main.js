// Christian Rouse
// Rocket Patrol
// 16 April 2021
// Time: Approximately 7 hours
let config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [Menu, Play]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyLEFT, keyRIGHT, keyUP, keyW, keyR, keyA, keyD;