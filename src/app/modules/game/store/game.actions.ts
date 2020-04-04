import { createAction, props } from '@ngrx/store';

/**
 * Defines the attack action.
 */
export const attack = createAction('[GAME] ATTACK',
  props<{ special: boolean }>());

/**
 * Defines the heal action.
 */
export const heal = createAction('[GAME] HEAL');

/**
 * Defines the quit game action.
 */
export const quitGame = createAction('[GAME] QUIT GAME');

/**
 * Defines the start game action.
 */
export const startGame = createAction('[GAME] START GAME');
