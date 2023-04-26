import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarraComponent } from './barra/barra.component';
import { FooterComponent } from './footer/footer.component';
import { TablasComponent } from './tablas/tablas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarraComponent,
    FooterComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
