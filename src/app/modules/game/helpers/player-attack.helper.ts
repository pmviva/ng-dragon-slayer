import { randomNumber } from '@game/helpers/random-number.helper';
import { GameConstants } from '@game/models/game-constants.model';
import { GameState } from '@game/store/game.state';

/**
 * Simulates a player attack.
 * @param state The game state.
 * @param special The special status of the attack.
 */
export function playerAttack(state: GameState, special: boolean) {
  let damage: number;

  if (special) {
    damage = randomNumber(GameConstants.MIN_PLAYER_DAMAGE, GameConstants.MAX_PLAYER_SPECIAL_DAMAGE);
  } else {
    damage = randomNumber(GameConstants.MIN_PLAYER_DAMAGE, GameConstants.MAX_PLAYER_NORMAL_DAMAGE);
  }

  state.game.dragon.health = state.game.dragon.health - damage;

  if (state.game.dragon.health <= GameConstants.MIN_DRAGON_HEALTH) {
    state.game.dragon.health = GameConstants.MIN_DRAGON_HEALTH;
  }

  if (special) {
    state.game.messageList.push({ key: 'game.messages.playerspecialattack', params: { damage } });
  } else {
    state.game.messageList.push({ key: 'game.messages.playernormalattack', params: { damage } });
  }
}
