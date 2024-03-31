import Phaser from 'phaser'

export class PlayScene extends Phaser.Scene {

  get gameHeight() {
    return this.game.config.height as number
  }
  constructor() {
    super('PlayScene')
  }
  create() {
    this.add
    .tileSprite(0, this.gameHeight, 1000, 26, 'ground')
    .setOrigin(0, 1)
  }
}