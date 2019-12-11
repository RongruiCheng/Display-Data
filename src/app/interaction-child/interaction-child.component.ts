import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.css']
})
export class InteractionChildComponent implements OnInit, OnChanges {
  private _NAME: string = '';
  @Input()
  set name(name: string) {
    this._NAME = (name && name.trim() || '<no name set>');
  }
  get name(): string {
    return this._NAME;
  }

  @Input() major: number;
  @Input() minor: number;
  changelog: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(changes);
    const log: string[] = [];
    for (let propName in changes) {
      if ( changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];
        const to = JSON.stringify(changedProp.currentValue);
        if (changedProp.isFirstChange()) {
          log.push(`Initial value of ${propName} set to ${to}`);
        } else {
          const from = JSON.stringify(changedProp.previousValue);
          log.push(`${propName} changed from ${from} to ${to}`);
        }
      }
    }
    this.changelog.push(log.join(', '));
  }

}
