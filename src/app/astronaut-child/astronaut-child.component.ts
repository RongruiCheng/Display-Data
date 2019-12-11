import { Component, OnInit, Input } from '@angular/core';
import { MissionService } from '../mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-astronaut-child',
  templateUrl: './astronaut-child.component.html',
  styleUrls: ['./astronaut-child.component.css']
})
export class AstronautChildComponent implements OnInit {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;
  constructor(private missionService: MissionService) {
    // 子组件订阅获取父组件发布了什么任务
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  ngOnInit() {
  }
  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
