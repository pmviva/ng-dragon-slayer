import { NgModule } from '@angular/core';

import { AboutRoutingModule } from '@about/about-routing.module';
import { AboutPageComponent } from '@about/pages/about-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  exports: [
  ],
  imports: [
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
