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
    this.createPlayer();
  }
  createPlayer(){
    this.physics.add.sprite(0, this.gameHeight, 'dino-idle').setOrigin(0, 1);
  }
  createEnviroment(){
    this.add
    .tileSprite(0, this.gameHeight, 1000, 26, 'ground')
    .setOrigin(0, 1);
  }
}