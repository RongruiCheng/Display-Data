import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-child',
  templateUrl: './countdown-child.component.html',
  styleUrls: ['./countdown-child.component.css']
})
export class CountdownChildComponent implements OnInit, OnDestroy {
  timer: number = 0;
  message: string = '';
  seconds: number = 10;
  constructor() { }

  clearTimer(): void {
    clearInterval(this.timer);
  }
  ngOnInit() {
    // this.start();
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at ${this.seconds}s`;
  }
  private countDown() {
    this.clearTimer();
    this.timer = window.setInterval(() => {
      this.seconds -= 1;
      if ( this.seconds === 0 ) {
        this.message = 'BOOM';
      } else if ( this.seconds < 0 ) {
        this.seconds = 10;
      }

      this.message = `countDown: ${this.seconds}`;
    }, 1000);
  }
}
