// // Rocket prefab
// class Rocket extends Phaser.GameObjects.Sprite {
//     constructor(scene, x, y, texture, frame) {
//         super(scene, x, y, texture, frame);
//         this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx


//         // add object to existing scene
//         scene.add.existing(this);
//         this.isFiring = false;
//         this.moveSpeed = 2;
//     }
//     update() {
//         if (!this.isFiring) {
//             if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
//                 this.x -= this.moveSpeed;
//             } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
//                 this.x += this.moveSpeed;
//             }

//         }
//         // fire button
//         if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
//             this.isFiring = true;
//             this.sfxRocket.play();  // play sfx
//         }
//         if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
//             this.y -= this.moveSpeed;
//         }
//         if (this.y <= borderUISize * 3 + borderPadding) {
//             this.isFiring = false;
//             this.y = game.config.height - borderUISize - borderPadding;
//         }
//     }
//     reset() {
//         this.isFiring = false;
//         this.y = game.config.height - borderUISize - borderPadding;
//     }

// }
class RocketP1 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.movementSpeed = 3;
        this.isFiring = false;
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        if(!this.isFiring) {
            if (keyA.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.movementSpeed;
            } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.movementSpeed;
            }
        }
        
        if (Phaser.Input.Keyboard.JustDown(keyW) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }

        if (this.isFiring && this.y >= borderUISize*3 + borderPadding) {
            this.y -= this.movementSpeed;
        }

        if (this.y <= borderUISize*3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }

    }

    reset() {
        this.y = game.config.height - borderUISize - borderPadding;
        this.isFiring = false;
    }
         
}