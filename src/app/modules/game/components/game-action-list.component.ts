import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-action-list',
  templateUrl: './game-action-list.component.html',
  styleUrls: ['./game-action-list.component.scss']
})
export class GameActionListComponent {
  /**
   * Defines the running status of the game action list component.
   */
  @Input()
  running: boolean;

  /**
   * Defines the attack output property of the game action list component.
   */
  @Output()
  attack: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Defines the heal output property of the game action list component.
   */
  @Output()
  heal: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Defines the quit game output property of the game action list component.
   */
  @Output()
  quitGame: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Defines the start game output property of the game action list component.
   */
  @Output()
  startGame: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Emits the attack event.
   * @param special The special status of the attack.
   */
  emitAttack(special: boolean) {
    this.attack.emit(special);
  }

  /**
   * Emits the heal event.
   */
  emitHeal() {
    this.heal.emit();
  }

  /**
   * Emits the quit game event.
   */
  emitQuitGame() {
    this.quitGame.emit();
  }

  /**
   * Emits the start game event.
   */
  emitStartGame() {
    this.startGame.emit();
  }
}
