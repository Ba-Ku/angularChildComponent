import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Countodown</h1>
    <br>
    <app-countdown></app-countdown>
    <br>
    <app-countdown></app-countdown>
  `,
  styles: []
})
export class AppComponent {

}
