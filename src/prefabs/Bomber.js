class Bomber extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue * 2;//20 points?
        this.moveSpeed = game.settings.spaceshipSpeed * 6; //bomber speed formula (universal)
    }
    update() {
        this.x -= this.moveSpeed;
        if (this.x <= 0 - this.width) {
            this.reset();
        }
    }
    reset() {
        this.x = game.config.width;
    }
}