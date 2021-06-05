class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/assets_explosion38.wav');
        this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
        this.load.audio('music', './assets/Pirates.mp3');
    }
    create() {
        let menuConfig = {
            fontFamily: 'Arial',
            fontSize: '40px',
            backgroundColor: '#0000FF',
            color: '#FFFF00',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'ROCKET PATROL MOD REDUX', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, 'Use (A) and (D) to move, and (W) to fire.', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#0000FF';
        menuConfig.color = '#FFFF00';
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy/beginner mode
            game.settings = {
                spaceshipSpeed: 3, //instance ship speed. 
                gameTimer: 69000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard/expert mode
            game.settings = {
                spaceshipSpeed: 5,//instance ship speed. 
                gameTimer: 69000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}