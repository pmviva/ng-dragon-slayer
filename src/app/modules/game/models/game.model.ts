import { GameCharacter } from '@game/models/game-character.model';
import { GameMessageList } from '@game/models/game-message-list.model';

/**
 * Defines the game interface.
 */
export interface Game {
  /**
   * Defines the running status of the game.
   */
  running: boolean;

  /**
   * Defines the dragon game character of the game.
   */
  dragon: GameCharacter;

  /**
   * Defines the player game character of the game.
   */
  player: GameCharacter;

  /**
   * Defines the game message list of the game.
   */
  messageList: GameMessageList;
}
