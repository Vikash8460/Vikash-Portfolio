import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './profiler/skills/skills/skills.component';
import { ProfilerComponent } from './profiler/profiler.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ProfilerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
