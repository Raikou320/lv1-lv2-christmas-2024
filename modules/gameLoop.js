import {
  canvas,
  setScene,
  keys,
  playerLv1,
  enemyLv1,
  lifeLv1,
  platformsLv1,
  winPointLv1,
  playerLv2,
  enemysLv2,
  lifeLv2,
  platformsLv2,
  winPointLv2,
  playerLv3,
  enemysLv3,
  lifeLv3,
  platformsLv3,
  winPointLv3,
} from '../app.js';
import { scene } from '../app.js';
import Collider from './collider.js';
import drawMenu from './menu.js';
import drawLevel1 from './lv1.js';
import drawLevel2 from './lv2.js';
import drawLevel3 from './lv3.js';
import drawGameOver from './gameOver.js';
let previousScene = null;

export default function gameLoop() {
  if (scene !== previousScene) {
    if (scene === 'menu') {
      canvas.width = 300;
      canvas.height = 300;
    } else if (scene === 'lv1') {
      canvas.width = 600;
      canvas.height = 400;
    } else if (scene === 'lv2') {
      canvas.width = 900;
      canvas.height = 600;
    } else if (scene === 'lv3') {
      canvas.width = 1200;
      canvas.height = 800;
    } else if (scene === 'gameOver') {
      canvas.width = 600;
      canvas.height = 400;
    }
    previousScene = scene;
  }
  if (scene === 'menu') {
    drawMenu();
  } else if (scene === 'lv1') {
    const colliderLv1 = new Collider(playerLv1, enemyLv1, () =>
      lifeLv1.takeDamages(1)
    );
    enemyLv1.setLimits(
      0,
      canvas.width - enemyLv1.width,
      0,
      canvas.height - enemyLv1.height
    );
    playerLv1.setLimits(
      0,
      canvas.width - playerLv1.width,
      0,
      canvas.height - playerLv1.height
    );
    drawLevel1();
    enemyLv1.move(true, false);
    playerLv1.applyPhysics();
    playerLv1.move(keys.left, keys.right, keys.up);
    colliderLv1.collide('rect');
    colliderLv1.collide('rect', 'high', () => enemyLv1.destroy());
    colliderLv1.changeObjs(playerLv1, winPointLv1);
    colliderLv1.collide('rect', 'all', () => setScene('lv2'));
    platformsLv1.forEach((platform) => {
      colliderLv1.changeObjs(playerLv1, platform);
      colliderLv1.collide('rect', 'high', () => {
        playerLv1.y = platform.y - playerLv1.height;
        playerLv1.jumpCount = 0;
      });
      colliderLv1.changeObjs(enemyLv1, platform);
      colliderLv1.collide('rect', 'all', () => (enemyLv1.sx *= -1));
    });
  } else if (scene === 'lv2') {
    const colliderLv2 = new Collider(null, null, null);
    drawLevel2();
    playerLv2.applyPhysics();
    playerLv2.move(keys.left, keys.right, keys.up);
    enemysLv2.forEach((enemy) => {
      enemy.move(true, false);
      colliderLv2.changeObjs(playerLv2, enemy);
      colliderLv2.collide('rect', 'high', () => enemy.destroy());
    });
    platformsLv2.forEach((platform) => {
      colliderLv2.changeObjs(playerLv2, platform);
      colliderLv2.collide('rect', 'high', () => {
        playerLv2.y = platform.y - playerLv2.height;
        playerLv2.jumpCount = 0;
      });
    });
    enemysLv2.forEach((enemy) => {
      colliderLv2.changeObjs(playerLv2, enemy);
      colliderLv2.collide('rect', 'all', () => lifeLv2.takeDamages(1.2));
      if (enemy.y <= enemy.ground && !enemy.isJumping) {
        enemy.y += 2.5;
      }
    });
    colliderLv2.changeObjs(playerLv2, winPointLv2);
    colliderLv2.collide('rect', 'all', () => setScene('lv3'));
  } else if (scene === 'lv3') {
    drawLevel3();
    const colliderLv3 = new Collider(null, null, null);
    playerLv3.applyPhysics();
    playerLv3.move(keys.left, keys.right, keys.up);
    enemysLv3.forEach((enemy) => {
      enemy.move(true, false);
      enemy.setLimits(
        0,
        canvas.width - enemy.width,
        0,
        canvas.height - enemy.height
      );
      colliderLv3.changeObjs(playerLv3, enemy);
      colliderLv3.collide('rect', 'all', () => lifeLv3.takeDamages(1.44));
      colliderLv3.collide('rect', 'high', () => enemy.destroy());
      if (enemy.y <= enemy.ground) {
        enemy.y += 3;
      }
    });
    platformsLv3.forEach((platform) => {
      colliderLv3.changeObjs(playerLv3, platform);
      colliderLv3.collide(
        'rect',
        'high',
        () => (playerLv3.y = platform.y - playerLv3.height)
      );
      playerLv3.jumpCount = 0;
    });
  } else if (scene === 'gameOver') {
    drawGameOver();
  }
  requestAnimationFrame(gameLoop);
}
