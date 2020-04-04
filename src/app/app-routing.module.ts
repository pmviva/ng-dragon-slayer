import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404PageComponent } from '@error/pages/error-404-page.component';

/**
 * Defines the routes of the app routing module.
 */
const routes: Routes = [
  {
    /**
     * Defines the load children of the route.
     */
    loadChildren: () => import('@about/about.module').then(m => m.AboutModule),

    /**
     * Defines the path of the route.
     */
    path: 'about'
  },
  {
    /**
     * Defines the load children of the route.
     */
    loadChildren: () => import('@game/game.module').then(m => m.GameModule),

    /**
     * Defines the path of the route.
     */
    path: 'game'
  },
  {
    /**
     * Defines the load children of the route.
     */
    loadChildren: () => import('@home/home.module').then(m => m.HomeModule),

    /**
     * Defines the path of the route.
     */
    path: 'home'
  },
  {
    /**
     * Defines the path of the route.
     */
    path: '',

    /**
     * Defines the path match of the route.
     */
    pathMatch: 'full',

    /**
     * Defines the redirect to of the route.
     */
    redirectTo: 'home'
  },
  {
    /**
     * Defines the component of the route.
     */
    component: Error404PageComponent,

    /**
     * Defines the path of the route.
     */
    path: '**'
  }
];

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
