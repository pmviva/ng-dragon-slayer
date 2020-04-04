import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/components/app.component';
import { environment } from '@env/environment';
import { ErrorModule } from '@error/error.module';
import { LayoutModule } from '@layout/layout.module';

/**
 * Creates a translate http loader instance.
 * @param http The http client of the http loader factory.
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

/**
 * Defines the service working configuration of the app module.
 */
const serviceWorkerConfig = {
  /**
   * Defines the enabled of the configuration.
   */
  enabled: environment.production
};

/**
 * Defines the store configuration of the app module.
 */
const storeConfig = {
};

/**
 * Defines the store devtools configuration of the app module.
 */
const storeDevtoolsConfig = {
  /**
   * Defines the log only of the configuration.
   */
  logOnly: environment.production
};

/**
 * Defines the translate configuration of the app module.
 */
const translateConfig = {
  /**
   * Defines the default language of the configuration.
   */
  defaultLanguage: 'en',

  /**
   * Defines the loader of the configuration.
   */
  loader: {
    /**
     * Defines the deps of the loader.
     */
    deps: [
      HttpClient
    ],

    /**
     * Defines the provide of the loader.
     */
    provide: TranslateLoader,

    /**
     * _Defines the use factory of the loader.
     */
    useFactory: HttpLoaderFactory
  }
};

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', serviceWorkerConfig),
    StoreModule.forRoot(storeConfig),
    StoreDevtoolsModule.instrument(storeDevtoolsConfig),
    TranslateModule.forRoot(translateConfig),
    AppRoutingModule,
    ErrorModule,
    LayoutModule
  ],
  providers: [
  ]
})
export class AppModule { }
