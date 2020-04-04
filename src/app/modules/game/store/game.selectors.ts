import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GameState } from '@game/store/game.state';

/**
 * Defines the select game state selector.
 */
export const selectGameState = createFeatureSelector<GameState>('game');

/**
 * Defines the select game selector.
 */
export const selectGame = createSelector(selectGameState, (state) => state.game);
