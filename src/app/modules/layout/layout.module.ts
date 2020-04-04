import { NgModule } from '@angular/core';

import { FooterComponent } from '@layout/components/footer.component';
import { HeaderComponent } from '@layout/components/header.component';
import { LayoutComponent } from '@layout/components/layout.component';
import { MainComponent } from '@layout/components/main.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        LayoutComponent,
        MainComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        SharedModule
    ]
})
export class LayoutModule { }
