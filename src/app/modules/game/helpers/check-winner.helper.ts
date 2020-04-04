import { GameConstants } from '@game/models/game-constants.model';
import { GameState } from '@game/store/game.state';

/**
 * Checks winner
 * @param state The game state.
 */
export function checkWinner(state: GameState) {
  if (state.game.dragon.health <= GameConstants.MIN_DRAGON_HEALTH) {
    state.game.running = false;
    state.game.messageList.push({ key: 'game.messages.playerwon', params: {} });
    return;
  }
  if (state.game.player.health <= GameConstants.MIN_PLAYER_HEALTH) {
    state.game.running = false;
    state.game.messageList.push({ key: 'game.messages.dragonwon', params: {} });
    return;
  }
}
