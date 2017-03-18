import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonRangeSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
