// Christian Rouse
// Rocket Patrol Mod
// 16 April 2021
// Time: Approximately 7 hours
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [Menu, Play]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
let keyW, keyS, keyA, keyD;