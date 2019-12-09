import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit, OnChanges {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  a = 10;
  constructor() { }
  ngOnChanges() {
    console.log('i am ngOnChanges');
  }
  ngOnInit() {
    console.log('i am ngOnInit');
  }
  addHero(v: string): void {
    if (v) {
      this.heroes.push(v);
    }
  }
  add(): void {
    this.a++;
  }
}
