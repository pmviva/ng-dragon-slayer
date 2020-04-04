import { randomNumber } from '@game/helpers/random-number.helper';
import { GameConstants } from '@game/models/game-constants.model';
import { GameState } from '@game/store/game.state';

/**
 * Simulates a dragon attack.
 * @param state The game state.
 */
export function dragonAttack(state: GameState) {
  const damage = randomNumber(GameConstants.MIN_DRAGON_DAMAGE, GameConstants.MAX_DRAGON_DAMAGE);

  state.game.player.health = state.game.player.health - damage;

  if (state.game.player.health <= GameConstants.MIN_PLAYER_HEALTH) {
    state.game.player.health = GameConstants.MIN_PLAYER_HEALTH;
  }

  state.game.messageList.push({ key: 'game.messages.dragonattack', params: { damage } });
}
