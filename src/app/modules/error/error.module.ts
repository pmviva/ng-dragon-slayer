import { NgModule } from '@angular/core';

import { Error404PageComponent } from '@error/pages/error-404-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    Error404PageComponent,
  ],
  exports: [
  ],
  imports: [
    SharedModule
  ]
})
export class ErrorModule { }
