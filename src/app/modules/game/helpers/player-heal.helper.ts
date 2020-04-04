import { randomNumber } from '@game/helpers/random-number.helper';
import { GameConstants } from '@game/models/game-constants.model';
import { GameState } from '@game/store/game.state';

/**
 * Simulates a player heal.
 * @param state The game state.
 */
export function playerHeal(state: GameState) {
  const recovery = randomNumber(GameConstants.MIN_PLAYER_RECOVERY, GameConstants.MAX_PLAYER_RECOVERY);

  state.game.player.health = state.game.player.health + recovery;

  if (state.game.player.health >= GameConstants.MAX_PLAYER_HEALTH) {
    state.game.player.health = GameConstants.MAX_PLAYER_HEALTH;
  }

  state.game.messageList.push({ key: 'game.messages.playerheal', params: { recovery } });
}
