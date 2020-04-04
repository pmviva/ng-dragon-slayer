import { Component, Input } from '@angular/core';

import { GameCharacter } from '@game/models/game-character.model';

@Component({
  selector: 'app-game-character',
  templateUrl: './game-character.component.html',
  styleUrls: ['./game-character.component.scss']
})
export class GameCharacterComponent {
  /**
   * Defines the character input property of the game character component.
   */
  @Input()
  character: GameCharacter;
}
