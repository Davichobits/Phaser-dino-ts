import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig ={
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 200 },
      debug: false
    }
  },
  scene: {
    preload,
    create,
  }
}

new Phaser.Game(config)