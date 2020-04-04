import { Game } from '@game/models/game.model';
import { GameConstants } from '@game/models/game-constants.model';

/**
 * Defines the game state interface.
 */
export interface GameState {
  /**
   * Defines the game of the game state.
   */
  game: Game;
}

/**
 * Defines the initial game state.
 */
export const initialGameState: GameState =  {
  /**
   * Defines the game of the initial game state.
   */
  game: {

    /**
     * Defines the running status of the initial game state.
     */
    running: false,

    /**
     * Defines the dragon character of the initial game state.
     */
    dragon: {

      /**
       * Defines the health of the dragon character of the initial game state.
       */
      health: GameConstants.MAX_DRAGON_HEALTH,

      /**
       * Defines the name of the dragon character of the initial game state.
       */
      name: GameConstants.DEFAULT_DRAGON_NAME
    },

    /**
     * Defines the player character of the initial game state.
     */
    player: {

      /**
       * Defines the health of the player character of the initial game state.
       */
      health: GameConstants.MAX_PLAYER_HEALTH,

      /**
       * Defines the name of the player character of the initial game state.
       */
      name: GameConstants.DEFAULT_PLAYER_NAME
    },

    /**
     * Defines the message list of the initial game state.
     */
    messageList: []
  }
};
