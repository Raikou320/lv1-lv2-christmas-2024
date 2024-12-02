import Player from './modules/player.js';
import Enemy from './modules/enemy.js';
import gameLoop from './modules/gameLoop.js';
import Life from './modules/life.js';
import rect from './modules/rect.js';

export let scene = 'lv3',
  keys = { left: false, right: false, up: false };

export const canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  setScene = function (newScene) {
    scene = newScene;
    keys = { left: false, right: false, up: false }
  },
  playerLv1 = new Player(
    50, //X
    350, //Y
    50, //Width
    50, //Height
    'red', //Color
    5, //Speed X
    -25, //Jump Power
    2, //Max Jumps
    0.5, //Gravity
    0, //Min X
    canvas.width - 50, //Max X
    0, //Min Y
    canvas.height - 50 //Ground
  ),
  enemyLv1 = new Enemy(
    250, //X
    375, //Y
    25, //Width
    25, //Height
    'blue', //Color
    5, //Speed X
    0, //Jump Power
    0, //Min X
    canvas.width - 50, //Max X
    0, //Min Y
    canvas.height - 50 //Ground
  ),
  platformsLv1 = [
    {
      x: 150,
      y: 350,
      width: 100,
      height: 30,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 400,
      y: 300,
      width: 50,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
  ],
  winPointLv1 = {
    x: 550,
    y: 190,
    width: 30,
    height: 30,
    color: 'green',
    draw: function () {
      rect(this.x, this.y, this.width, this.height, this.color);
    },
  },
  lifeLv1 = new Life(100, 100, 0, () => setScene('gameOver')),
  playerLv2 = new Player(
    50,
    550,
    50,
    50,
    'red',
    4.8,
    -22,
    2,
    0.55,
    0,
    canvas.width - 50,
    0,
    canvas.height - 50
  ),
  enemysLv2 = [
    new Enemy(
      200,
      400,
      30,
      30,
      'blue',
      -4,
      0,
      0,
      canvas.width - 30,
      0,
      canvas.height - 30
    ),
    new Enemy(
      555,
      400,
      35,
      35,
      'blue',
      6,
      0,
      0,
      canvas.width - 35,
      0,
      canvas.height - 35
    ),
  ],
  lifeLv2 = new Life(90, 80, 0, () => setScene('gameOver')),
  platformsLv2 = [
    {
      x: 100,
      y: 520,
      width: 80,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 370,
      y: 440,
      width: 40,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 500,
      y: 430,
      width: 120,
      height: 25,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 725,
      y: 360,
      width: 60,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 825,
      y: 270,
      width: 30,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
  ],
  winPointLv2 = {
    x: 860,
    y: 150,
    width: 20,
    height: 20,
    color: 'green',
    draw: function () {
      rect(this.x, this.y, this.width, this.height, this.color);
    },
  },
  playerLv3 = new Player(
    50,
    750,
    50,
    50,
    'red',
    4.5,
    -20,
    2,
    0.6,
    0,
    canvas.width - 50,
    0,
    750
  ),
  enemysLv3 = [
    new Enemy(
      250,
      500,
      45,
      45,
      'blue',
      8,
      -15,
      0,
      canvas.width - 45,
      0,
      canvas.height - 45
    ),
    new Enemy(
      500,
      450,
      50,
      50,
      'blue',
      9,
      -20,
      0,
      canvas.width - 50,
      0,
      canvas.height - 50
    ),
    new Enemy(
      900,
      400,
      55,
      55,
      'blue',
      -12,
      -30,
      0,
      canvas.width - 55,
      0,
      canvas.height - 55
    ),
  ],
  platformsLv3 = [
    {
      x: 50,
      y: 735,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 150,
      y: 685,
      width: 30,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 50,
      y: 735,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 50,
      y: 735,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 50,
      y: 735,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 50,
      y: 735,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
  ],
  lifeLv3 = new Life(80, 65, 0, () => setScene('gameOver')),
  winPointLv3 = {
    x: 1150,
    y: 50,
    width: 20,
    height: 20,
    color: 'green',
    draw: function () {
      rect(this.x, this.y, this.width, this.height, this.color);
    },
  };

gameLoop();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && scene === 'menu') {
    scene = 'lv1';
    enemyLv1.resetStats();
    enemysLv2.forEach((enemy) => enemy.resetStats());
    enemysLv3.forEach((enemy) => enemy.resetStats());
    playerLv1.resetStats();
    playerLv2.resetStats();
    playerLv3.resetStats();
    lifeLv1.reset();
    lifeLv2.reset();
    lifeLv3.reset();
  }
  if (scene === 'lv1' || scene === 'lv2' || scene === 'lv3') {
    if (e.key.toLowerCase() === 'q' || e.key === 'ArrowLeft') {
      keys.left = true;
    }
    if (e.key.toLowerCase() === 'd' || e.key === 'ArrowRight') {
      keys.right = true;
    }
    if (e.key.toLowerCase() === 'z' || e.key === 'ArrowUp' || e.key === ' ') {
      keys.up = true;
    }
  } else if (scene === 'gameOver' && e.key === 'Enter') scene = 'menu';
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'q') keys.left = false;
  if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') keys.right = false;
  if (e.key === 'ArrowUp' || e.key === ' ' || e.key.toLowerCase() === 'z') {
    keys.up = false;
  }
});