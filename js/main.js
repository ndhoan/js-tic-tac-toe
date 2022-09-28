import {
  getCellElementAtIdx,
  getCellElementList,
  getCurrentTurnElement,
  getGameStatusElement,
} from './selectors.js';

import { TURN, CELL_VALUE, GAME_STATUS } from './constants.js';
import { checkGameStatus } from './utils.js';

/**
 * Global variables
 */
let currentTurn = TURN.CROSS;
let isGameEnded = false;
let cellValues = new Array(9).fill('');

function toggleTurn() {
    
}

function handleCellClick(cell, index) {
  if (cellValues[index] !== '') return;
  // Mark current turn to the selected cell
  cell.classList.add(currentTurn);
  const currentCellValue =
    currentTurn === TURN.CROSS ? CELL_VALUE.CROSS : CELL_VALUE.CIRCLE;
  cellValues[index] = currentCellValue;

  const currentTurnElement = getCurrentTurnElement();
  currentTurnElement.classList.remove(currentTurn);
  // Toggle current turn
  currentTurn = currentTurn === TURN.CROSS ? TURN.CIRCLE : TURN.CROSS;
  currentTurnElement.classList.add(currentTurn);

  //   const gameStatus = checkGameStatus(cellValues);
  const currentStatusElement = getGameStatusElement();
  currentStatusElement.textContent = GAME_STATUS.PLAYING;
}

function initCellElementList() {
  const cellElementList = getCellElementList();
  cellElementList.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
  });
}

/**
 * TODOs
 *
 * 1. Bind click event for all cells
 * 2. On cell click, do the following:
 *    - Toggle current turn
 *    - Mark current turn to the selected cell
 *    - Check game state: win, ended or playing
 *    - If game is win, highlight win cells
 *    - Not allow to re-click the cell having value.
 *
 * 3. If game is win or ended --> show replay button.
 * 4. On replay button click --> reset game to play again.
 *
 */
(() => {
  initCellElementList();
})();
