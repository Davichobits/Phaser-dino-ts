import { SpriteWithDynamicBody } from "../types";

export class PlayScene extends Phaser.Scene {

  player: SpriteWithDynamicBody;

  get gameHeight() {
    return this.game.config.height as number;
  }

  constructor() {
    super('PlayScene');
  }

  create() {
    this.createEnviroment();
    this.createPlayer();
    this.registrerPlayerControl();
  }

  createPlayer(){
    this.player = this.physics.add.sprite(0, this.gameHeight, 'dino-idle').setOrigin(0, 1);
  }

  createEnviroment(){
    this.add
    .tileSprite(0, this.gameHeight, 1000, 26, 'ground')
    .setOrigin(0, 1);
  }

  registrerPlayerControl(){
    const spaceBar = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    spaceBar &&spaceBar.on('down', () => {
      this.player.setVelocityY(-300);
    });
  }

}