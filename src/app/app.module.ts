import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Routing
import { routing } from './app.routing';
// components
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.welcome.component';
// import { MarketPlaceComponent } from './market-place/market-place.component';
// import { AdminComponent } from './admin/admin.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { EditProductComponent } from './edit-product/edit-product.component';
// // database
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent
    // MarketPlaceComponent,
    // AdminComponent,
    // ProductDetailComponent,
    // EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
