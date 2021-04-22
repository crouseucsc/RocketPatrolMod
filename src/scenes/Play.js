class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('rocketp1', './assets/rocketP1.png');
        this.load.image('rocketp2', './assets/rocketP2.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        // load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', { frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9 });
    }
    create() {
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        // add rocket
        this.rocketp1 = new RocketP1(this, game.config.width / 2, game.config.height - borderUISize - borderPadding, 'rocketp1').setOrigin(0.5, 0);
        this.rocketp2 = new RocketP2(this, game.config.width / 2, game.config.height - borderUISize - borderPadding, 'rocketp2').setOrigin(0.5, 0);
        this.ship01 = new Spaceship(this, game.config.width + borderUISize * 6, borderUISize * 4, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize * 3, borderUISize * 5 + borderPadding * 2, 'spaceship', 0, 20).setOrigin(0, 0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize * 6 + borderPadding * 4, 'spaceship', 0, 10).setOrigin(0, 0);
        // define keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0 }),
            frameRate: 30
        });
        // initialize score
        this.p1Score = 0;
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(
            borderUISize + borderPadding,
            borderUISize + borderPadding * 2,
            this.p1Score, scoreConfig);

        this.p2Score = 0;
        let p2ScoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#b689d5',
            color: 'white',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreRight = this.add.text(
            borderUISize + borderPadding * 103.5,
            borderUISize + borderPadding * 2,
            this.p2Score,
            p2ScoreConfig);

        let textDisplay = {
            fontFamily: 'Copperplate',
            fontSize: '28px',
            backgroundColor: '#89d5d1',
            color: 'black',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }

        this.fireUI = this.add.text(
            borderUISize + borderPadding * 52,
            borderUISize + borderPadding * 2,
            'FIRE!',
            textDisplay);

        textDisplay.fixedWidth = 0;
        // GAME OVER flag
        this.gameOver = false;

        this.clock = this.time.delayedCall(
            game.settings.gameTimer, () => {
                if (this.p1Score > this.p2Score) {
                    this.add.text(game.config.width / 2, game.config.height / 2, 'Player One wins!', textDisplay).setOrigin(0.5);
                } else if (this.p1Score < this.p2Score) {
                    this.add.text(game.config.width / 2, game.config.height / 2, 'Player Two wins!', textDisplay).setOrigin(0.5);
                } else {
                    this.add.text(game.config.width / 2, game.config.height / 2, 'Draw!', textDisplay).setOrigin(0.5);
                };
                this.add.text(game.config.width / 2, game.config.height / 2 + 64, '[R]estart or [<-] for Menu', textDisplay).setOrigin(0.5);
                this.gameOver = true;
            }, null, this);
    }

    //     update() {
    //         // check key input for restart
    //         if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
    //             this.scene.restart();
    //         }
    //         if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
    //             this.scene.start("menuScene");
    //         }
    //         this.starfield.tilePositionX -= 4;
    //         if (!this.gameOver) {
    //             this.rocketp1.update();         // update rocket sprite
    //             this.ship01.update();           // update spaceships (x3)
    //             this.ship02.update();
    //             this.ship03.update();
    //         }
    //         // check collisions
    //         if (this.checkCollision(this.p1Rocket, this.ship03)) {
    //             this.p1Rocket.reset();
    //             this.shipExplode(this.ship03);
    //         }
    //         if (this.checkCollision(this.p1Rocket, this.ship02)) {
    //             this.p1Rocket.reset();
    //             this.shipExplode(this.ship02);
    //         }
    //         if (this.checkCollision(this.p1Rocket, this.ship01)) {
    //             this.p1Rocket.reset();
    //             this.shipExplode(this.ship01);
    //         }
    //     }
    //     checkCollision(rocket, ship) {
    //         // simple AABB checking
    //         if (rocket.x < ship.x + ship.width &&
    //             rocket.x + rocket.width > ship.x &&
    //             rocket.y < ship.y + ship.height &&
    //             rocket.height + rocket.y > ship.y) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    //     shipExplode(ship) {
    //         // temporarily hide ship
    //         ship.alpha = 0;
    //         // create explosion sprite at ship's position
    //         let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
    //         boom.anims.play('explode');             // play explode animation
    //         boom.on('animationcomplete', () => {    // callback after ani completes
    //             ship.reset();                       // reset ship position
    //             ship.alpha = 1;                     // make ship visible again
    //             boom.destroy();                     // remove explosion sprite
    //         });
    //         // score add and repaint
    //         this.p1Score += ship.points;
    //         this.scoreLeft.text = this.p1Score;
    //         this.sound.play('sfx_explosion');
    //     }
    // }
    update() {

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }
        if (!this.gameOver) {
            this.rocketp1.update();
            this.rocketp2.update();
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
        }

        if (this.checkCollision(this.rocketp1, this.ship03)) {
            this.rocketp1.reset();
            this.shipExplode(this.ship03);
            this.p1Score += this.ship03.points;
            this.scoreLeft.text = this.p1Score;

            return true;

        }
        if (this.checkCollision(this.rocketp1, this.ship02)) {
            this.rocketp1.reset();
            this.shipExplode(this.ship02);
            this.p1Score += this.ship02.points;
            this.scoreLeft.text = this.p1Score;

            return true;

        }
        if (this.checkCollision(this.rocketp1, this.ship01)) {
            this.rocketp1.reset();
            this.shipExplode(this.ship01);
            this.p1Score += this.ship01.points;
            this.scoreLeft.text = this.p1Score;

            return true;
        }
        if (this.checkCollision(this.rocketp2, this.ship03)) {
            this.rocketp2.reset();
            this.shipExplode(this.ship03);
            this.p2Score += this.ship03.points;
            this.scoreRight.text = this.p2Score;

            return true;
        }

        if (this.checkCollision(this.rocketp2, this.ship02)) {
            this.rocketp2.reset();
            this.shipExplode(this.ship02);
            this.p2Score += this.ship02.points;
            this.scoreRight.text = this.p2Score;

            return true;
        }
        if (this.checkCollision(this.rocketp2, this.ship01)) {
            this.rocketp2.reset();
            this.shipExplode(this.ship01);
            this.p2Score += this.ship01.points;
            this.scoreRight.text = this.p2Score;

            return true;
        }

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }

    }

    checkCollision(rocket, ship) {
        if (rocket.x + rocket.width > ship.x &&
            rocket.x < ship.x + ship.width &&
            rocket.y + rocket.height > ship.y &&
            rocket.y < ship.y + ship.height) {
            ship.alpha = 0;
            rocket.reset();
            return true;
        } else {
            return false;
        }
    }

    shipExplode(ship) {
        ship.alpha = 0
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');
        boom.on('animationcomplete', () => {
            ship.reset();
            ship.alpha = 1;
            boom.destroy();
        }
        );
        this.sound.play('sfx_explosion');
    }
}