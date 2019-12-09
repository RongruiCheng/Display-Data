import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  title = '模板语法';
  heroes = [
    new Hero(1, 'windStorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
  sem = 1;
  iscur = true;
  bad = 'bad';
  currentItem = { name: 'hh' };
  fontSizePx = 10;

  currentClasses: object = {
    cur1 :  this.iscur,
    cur2 : !this.iscur
  };

  currentStyles: object = {
    'font-style': this.iscur ? 'italic' : 'normal',
    'font-weight': !this.iscur ? 'bold' : 'normal',
    'font-size': this.iscur ? '24px' : '12px'
  };

  currentHero = {
    name: 'Magneta',
    emotion: 'happy'
  };
  values = '';
  constructor() { }

  ngOnInit() {
  }
  getVal(): number {
    return 1 + 1;
  }
  deleteHero($event): void {
    console.log($event);
  }
  isDisabled(i: number): boolean {
    return this.sem === i;
  }
  change(i: number): void {
    if ( this.sem === i ) {
      alert('clicked');
    }
    this.sem = i;
  }
  changeSize($event: any): void {
    this.fontSizePx = $event;
  }

  setUpperCase($event: any): void {
    this.currentHero.name = $event.toUpperCase();
  }

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }
  onClickme(event: any): void {
    console.log(event);
  }
  onKeyUp(event: KeyboardEvent): void {
    console.log(event);
    // type assertion
    this.values += (event.target as HTMLInputElement ).value + '|';
  }
  onKey(v: string): void {
    this.values += v + '|';
  }
  onEnter(v: string): void {
    this.values = v;
  }
  update(v: string): void {
    this.values = v;
  }
}
