import { Component, Input } from '@angular/core';

import { GameMessageList } from '@game/models/game-message-list.model';
import { GameMessage } from '../models/game-message.model';

@Component({
  selector: 'app-game-message-list',
  templateUrl: './game-message-list.component.html',
  styleUrls: ['./game-message-list.component.scss']
})
export class GameMessageListComponent {
  /**
   * Defines the message list of the game message list component.
   */
  @Input()
  messageList: GameMessageList;

  /**
   * Tracks a mesage by index
   * @param index The index of the message to track.
   * @param message The message to track.
   */
  trackByIndex(index: number, message: GameMessage) {
    return index;
  }
}
