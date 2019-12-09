import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit, OnChanges {
  @Input() size: number | string;
  @Output() changeSize = new EventEmitter<number>();
  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes) {
    console.log(changes);
  }
  add(): void {
    this.resize(+1);
  }
  minus(): void {
    this.resize(-1);

  }
  resize(delta: number): void {
    // 字号最大为40 , 最小为8
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.changeSize.emit(this.size);
  }

}
