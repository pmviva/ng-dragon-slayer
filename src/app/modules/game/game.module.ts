import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { GameRoutingModule } from '@game/game-routing.module';
import { GameComponent } from '@game/components/game.component';
import { GameActionListComponent } from '@game/components/game-action-list.component';
import { GameCharacterComponent } from '@game/components/game-character.component';
import { GameMessageListComponent } from '@game/components/game-message-list.component';
import { GamePageComponent } from '@game/pages/game-page.component';
import { reducer } from '@game/store/game.reducers';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    GameComponent,
    GameActionListComponent,
    GameCharacterComponent,
    GameMessageListComponent,
    GamePageComponent
  ],
  exports: [
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('game', reducer),
    GameRoutingModule
  ]
})
export class GameModule { }
