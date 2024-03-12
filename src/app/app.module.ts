import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProfilerComponent } from './profiler/profiler.component';
import { ProfilerModule } from './profiler/profiler.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';





const routes: Routes = [
  {
    path: '',
    component: ProfilerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
   }),
    ProfilerModule,
    HttpClientModule,
    NgbModule,
   // AuthServiceService

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
