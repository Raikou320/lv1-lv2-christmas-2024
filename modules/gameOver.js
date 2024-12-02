import rect from './rect.js';
import text from './text.js';
import { canvas } from '../app.js';

export default function drawGameOver() {
  rect(0, 0, canvas.width, canvas.height, 'brown');
  text(
    'Game Over',
    canvas.width / 2 - 55,
    canvas.height / 2 - 10,
    'black',
    '20px Arial'
  );
  text(
    'Appuyez sur Entrée pour recommencer',
    canvas.width / 2 - 131.25,
    canvas.height / 2 + 50,
    'black',
    '15px Arial'
  );
}
