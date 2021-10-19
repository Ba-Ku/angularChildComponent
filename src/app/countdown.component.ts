import {Component, Input, Output, EventEmitter} from '@angular/core';
import {timer} from "rxjs";
import {tick} from "@angular/core/testing";

@Component({
  selector: 'app-countdown',
  template: `
    <div *ngIf="running==false">
      <input type="number" [(ngModel)]="time" min="1" max="300">
      <button (click)="startCountdown()">{{buttonLabel}}</button>
    </div>
    <div *ngIf="running==true">
      {{time}}
    </div>
  `,
  styles: []
})
export class CountdownComponent {

  constructor() {
  }

  @Input() time = 10;
  @Input() buttonLabel = "Start the clock!";
  @Output() timeChange = new EventEmitter<number>();
  @Output() finish = new EventEmitter;
  running = false;

  startCountdown(): void {
    this.running = true;
    const startTime = this.time;
    const subscription = timer(1000, 1000).subscribe(tick => {
      this.time--;
      this.timeChange.emit(this.time);

      if (this.time <= 0) {
        subscription.unsubscribe();
        this.running = false;
        this.finish.emit();
        this.time = startTime;
      }
    });
  }


}
