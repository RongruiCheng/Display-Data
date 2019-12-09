import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { DisplayDataComponent } from './display-data/display-data.component';


const routes: Routes = [
  {path: 'addHero', component: AddHeroComponent},
  {path: 'displayData', component: DisplayDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
