import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown.component';
import { MandatoryDirective } from './mandatory.directive';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    MandatoryDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
