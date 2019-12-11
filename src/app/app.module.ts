import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizerComponent } from './sizer/sizer.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { LifecyleTestComponent } from './lifecyle-test/lifecyle-test.component';
import { InteractionChildComponent } from './interaction-child/interaction-child.component';
import { CountdownChildComponent } from './countdown-child/countdown-child.component';
import { AstronautChildComponent } from './astronaut-child/astronaut-child.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';

@NgModule({
   declarations: [
      AppComponent,
      SizerComponent,
      AddHeroComponent,
      DisplayDataComponent,
      LifecyleTestComponent,
      InteractionChildComponent,
      CountdownChildComponent,
      AstronautChildComponent,
      AdBannerComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      MatExpansionModule,
      MatCheckboxModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
