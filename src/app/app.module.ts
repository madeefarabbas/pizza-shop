import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Modules

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
