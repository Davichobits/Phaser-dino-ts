import Phaser from 'phaser';

export class PlayScene extends Phaser.Scene {

  get gameHeight() {
    return this.game.config.height as number;
  }
  constructor() {
    super('PlayScene');
  }
  create() {
    this.createEnviroment();
    this.add.image(0, 0, 'dino-idle').setOrigin(0, 0);
  }
  createEnviroment(){
    this.add
    .tileSprite(0, this.gameHeight, 1000, 26, 'ground')
    .setOrigin(0, 1);
  }
}