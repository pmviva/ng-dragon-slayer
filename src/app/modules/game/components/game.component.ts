import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Game } from '@game/models/game.model';
import { attack, heal, quitGame, startGame } from '@game/store/game.actions';
import { selectGame } from '@game/store/game.selectors';
import { GameState } from '@game/store/game.state';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  /**
   * Defines the game observable of the game component.
   */
  game$: Observable<Game>;

  /**
   * Constructor of the game component.
   * @param store The store of the game component.
   */
  constructor(private store: Store<GameState>) { }

  /**
   * Init hook of the game component.
   */
  ngOnInit() {
    this.game$ = this.store.select(selectGame);
  }

  /**
   * Handles attack event.
   * @param special The special status of the attack.
   */
  handleAttack(special: boolean) {
    this.store.dispatch(attack({ special }));
  }

  /**
   * Handles heal event.
   */
  handleHeal() {
    this.store.dispatch(heal());
  }

  /**
   * Handles quit game event.
   */
  handleQuitGame() {
    this.store.dispatch(quitGame());
  }

  /**
   * Handles start game event.
   */
  handleStartGame() {
    this.store.dispatch(startGame());
  }
}
