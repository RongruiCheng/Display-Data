import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-lifecyle-test',
  templateUrl: './lifecyle-test.component.html',
  styleUrls: ['./lifecyle-test.component.css']
})
export class LifecyleTestComponent implements OnInit {
  @Input() a: number ;
  @Input() hero: Hero;
  @Input() power: string;
  @Output() plusa = new EventEmitter();
  changeLog: string[]  = [];
  constructor() { }
  ngOnChanges(changes: SimpleChange): void {
    // 如果是传的引用类型值的改变, ngOnChanges不会被触发
      for ( let k in changes ) {
        if ( changes.hasOwnProperty(k)) {
          const chng = changes[k];
          const cur = JSON.stringify(chng.currentValue);
          const prev = JSON.stringify(chng.previousValue);
          this.changeLog.push(`父亲传的值:${k}----currentValue=${cur} / PreviousValue = ${prev}`);
        }
      }
    console.log('ngOnChanges当设置父子组件传值/传值改变的时候调用');
  }
  ngDoCheck() {
    // ngDoCheck 用来检测Angular忽略的更改(比如引用类型值的改变);
    console.log(this.hero.name);
  }
  ngOnInit() {
    // It's place that we can fetch data;
    console.log('ngOnInit在angular第一次显示数据绑定和设置指令/组件的输入属性时触发');
  }
  // ngDoCheck() {
  //   console.log('ngDocheck');
  // }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit在angular初始完组件视图及其子视图之后调用');
    // const btn = document.getElementById('btn');
    // console.log(btn);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked当angular做完组件视图和子视图的变更检测之后调用');
  }
  ngOnDestroy() {
    // It's place that we can prevent memory leaks;
    console.log('ngOnDestroy每次销毁指令/组件之前调用');
  }
}
