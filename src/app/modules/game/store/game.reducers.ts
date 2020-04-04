import { Action, createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';

import { checkWinner } from '@game/helpers/check-winner.helper';
import { dragonAttack } from '@game/helpers/dragon-attack.helper';
import { playerAttack } from '@game/helpers/player-attack.helper';
import { playerHeal } from '@game/helpers/player-heal.helper';
import { GameConstants } from '@game/models/game-constants.model';
import { attack, heal, quitGame, startGame } from '@game/store/game.actions';
import { GameState, initialGameState } from '@game/store/game.state';

/**
 * Reduces the attack action.
 * @param state The game state.
 * @param special The special status of the attack.
 */
const attackReducer = (state: GameState, special: boolean) => {
  const nextState = cloneDeep(state);

  playerAttack(nextState, special);
  dragonAttack(nextState);
  checkWinner(nextState);

  return nextState;
};

/**
 * Reduces the heal action.
 * @param state The game state.
 */
const healReducer = (state: GameState) => {
  const nextState = cloneDeep(state);

  playerHeal(nextState);
  dragonAttack(nextState);
  checkWinner(nextState);

  return nextState;
};

/**
 * Reduces the quit game action.
 * @param state The game state.
 */
const quitGameReducer = (state: GameState) => {
  const nextState = cloneDeep(state);

  nextState.game.running = false;
  nextState.game.messageList.push({ key: 'game.messages.quitgame', params: {} });

  return nextState;
};

/**
 * Reduces the start game action.
 * @param state The game state.
 */
const startGameReducer = (state: GameState) => {
  const nextState = cloneDeep(state);

  nextState.game.running = true;
  nextState.game.dragon.health = GameConstants.MAX_DRAGON_HEALTH;
  nextState.game.player.health = GameConstants.MAX_PLAYER_HEALTH;
  nextState.game.messageList = [];

  return nextState;
};

/**
 * Defines the game reducer.
 */
const gameReducer =
  createReducer(initialGameState,
    on(attack, (state, { special }) => (attackReducer(state, special))),
    on(heal, (state) => (healReducer(state))),
    on(quitGame, (state) => (quitGameReducer(state))),
    on(startGame, (state) => (startGameReducer(state))),
  );

/**
 * Reduces a game state given an actrion.
 * @param state The state to reduce.
 * @param action The action to reduce.
 */
export function reducer(state: GameState, action: Action) {
  return gameReducer(state, action);
}
