import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Countodown</h1>
    <br>
    <app-countdown></app-countdown>
    <br>
    <app-countdown
    [time]="15"
    buttonLabel="Start second countdown!"
    (timeChange)="countdownTimeChanged($event)"
    (finish)="countdownFinished()"
    ></app-countdown>
  `,
  styles: []
})
export class AppComponent {
  countdownTimeChanged(time: number): void {
    console.log("Time changed: " + time)
  }

  countdownFinished(): void {
    alert('done');
  }
}
