import { NgModule } from '@angular/core';

import { HomeRoutingModule } from '@home/home-routing.module';
import { HomePageComponent } from '@home/pages/home-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
