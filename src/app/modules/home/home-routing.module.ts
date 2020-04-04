import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '@home/pages/home-page.component';

/**
 * Defines the routes of the game routing module.
 */
const routes: Routes = [
  {
    /**
     * Defines the component of the route.
     */
    component: HomePageComponent,

    /**
     * Defines the path of the route.
     */
    path: ''
  }
];

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
