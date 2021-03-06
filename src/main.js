// Christian Rouse
// Rocket Patrol Mod
// 5 June 2021
// Time To Complete: 30+ hrs in-total (including designing and editing custom assets and multpile reiterations and testing of previous versions.)
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
let keyF, keyR, keyLEFT, keyRIGHT, keyW, keyA, keyD; //permitted keys.

//S(hrek) Tier:
// -Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) [military; jets, missiles, no lasers, actual explosion sound effects, all of which are free domain under creative commons, are royalty and copyright free.] (60)

//Intermediate Tier:
// -Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship [Smoke and Fire] (20)
// -Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)

//Starting Tier:
// -Create a new scrolling tile sprite for the background [Blue-ish sky with grey smokey clouds.] (5)
// -Add your own (copyright-free) background music to the Play scene (5)

//There is no code present in this assignment that was not provided by instructors (Rocket Patrol Tutorial) for use in this assignment or was not authored by the student (me).
//All visual assets are original and custom made by me.