import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header/header.component';
import { IntroComponent } from './intro/intro/intro.component';
import { ProfilerComponent } from './profiler.component';
import { ProfilerRoutingModule } from './profiler-routing.module';
import { FooterComponent } from './footer/footer/footer.component';



@NgModule({
  declarations: [
    ProfilerComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ProfilerRoutingModule
    
  ]
})
export class ProfilerModule { }
