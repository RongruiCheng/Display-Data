import { Component, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { CountdownChildComponent } from './countdown-child/countdown-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // a = 10;
  // title: string = 'OnChanges';
  // hero: Hero = {
  //   name : 'Windstrom'
  // };
  // power: string = 'sing';
  // names: string[] = ['Dr IQ', '   ', '  Bombasto  '];
  // major: number = 1;
  // minor: number = 23;
  // constructor() { }

  // add(): void {
  //   this.a++;
  // }
  // newMinor(): void {
  //   this.minor++;
  // }
  // newMajor(): void {
  //   this.major++;
  //   this.minor = 0;
  // }
  @ViewChild(CountdownChildComponent, {static: false})
  private timerComponent: CountdownChildComponent;

  ngAfterViewInit() {
    // 被注入的定时器组件只有在Angular显示了父组件的视图之后才能使用
    setTimeout(() => {
      // rewrite the seconds function
      this.seconds = () => this.timerComponent.seconds;
    }, 0);
  }
  seconds(): number {
    return 0;
  }
  start() {
    this.timerComponent.start();
  }
  stop() {
    this.timerComponent.stop();
  }
}
