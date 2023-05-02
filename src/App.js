import React, { useEffect } from "react";
import Phaser from "phaser";

const Game = () => {
  let game;

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: "game-container",
      width: 800,
      height: 600,
      // scale: {
      //   mode: Phaser.Scale.ScaleModes.EXACT_FIT,
      //   autoCenter: Phaser.Scale.CENTER_BOTH,
      // },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    game = new Phaser.Game(config);

    function preload() {
      this.load.image("hero", window.location.origin +'/assets/images/hero.png', { width: 30 });
      this.load.image("rock", window.location.origin +'/assets/images/rock.png', { width: 30 });


    }

    function create() {
      this.hero = this.physics.add.sprite(400, 300, "hero").setScale(0.5);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.rocksGroup = this.physics.add.staticGroup();
      this.rocksGroup.create(400, 100, "rock");
      this.rocksGroup.create(400, 400, "rock");
      this.rocksGroup.create(600, 300, "rock");
      this.rocksGroup.create(100, 300, "rock");
    }

    function update(time, deltaTime) {
      const speed = 25000;
      const movementSpeed = 1;
      const velocity = new Phaser.Math.Vector2();
      const boundaryPadding = 60;
      const { width, height } = game.scale.gameSize;

      if (this.cursors.left.isDown && this.hero.x > boundaryPadding) {
        velocity.x -= movementSpeed;
      }
      if (this.cursors.right.isDown && this.hero.x < width - boundaryPadding) {
        velocity.x += movementSpeed;
      }
      if (this.cursors.up.isDown && this.hero.y > boundaryPadding) {
        velocity.y -= movementSpeed;
      }
      if (this.cursors.down.isDown && this.hero.y < height - boundaryPadding) {
        velocity.y += movementSpeed;
      }


      velocity.normalize();
      velocity.scale(speed * deltaTime / 1000);

      this.hero.setVelocity(velocity.x, velocity.y);
      this.physics.collide(this.hero, this.rocksGroup);
    }
  }, []);

  return (
    <div id="game-container" />
  );
};

export default Game;
