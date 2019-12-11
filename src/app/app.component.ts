import { Component, ViewChild, Input } from '@angular/core';
import { Hero } from './hero';
import { CountdownChildComponent } from './countdown-child/countdown-child.component';
import { MissionService } from './mission.service';

import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState = false;
  arr = ['hah', 'fs', 'fss' ];
  checked = false;
  @Input() hideToggle = false;
  ads: AdItem[];

  // a = 10;
  // title: string = 'OnChanges';
  // hero: Hero = {
  //   name : 'Windstrom'
  // };
  // power: string = 'sing';
  // names: string[] = ['Dr IQ', '   ', '  Bombasto  '];
  // major: number = 1;
  // minor: number = 23;
  astronauts: string[] = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = [
    'Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'
  ];
  nextMission = 0;
  constructor(private missionService: MissionService) {
    // 父组件在构造器中订阅取到哪个宇航员点击确认了,推入消息数组
    missionService.missionConfirmed$.subscribe( astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }
  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
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
  // *************************************************
  // @ViewChild(CountdownChildComponent, {static: false})
  // private timerComponent: CountdownChildComponent;

  // // 被注入的定时器组件只有在Angular显示了父组件的视图之后才能使用
  // ngAfterViewInit() {
  //     // 在这里(初始化组件视图之后)再改写seconds函数就更新不了视图了,单向数据流规则会组织在同一个周期内更新组件视图
  //     // 使用定时器
  //     setTimeout(() => {
  //       // rewrite the seconds function
  //       this.seconds = () => this.timerComponent.seconds;
  //     }, 0);

  // }
  // seconds(): number {
  //   return 0;
  // }
  // start() {
  //   this.timerComponent.start();
  // }
  // stop() {
  //   this.timerComponent.stop();
  // }
  // ******************************************************

}
