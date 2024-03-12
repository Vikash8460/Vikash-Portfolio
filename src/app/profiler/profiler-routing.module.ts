import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilerComponent } from './profiler.component';
import { HeaderComponent } from './header/header/header.component';
import { IntroComponent } from './intro/intro/intro.component';

const routes: Routes = [
  { path: '', component: ProfilerComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'education', component: EducationComponent },
//   { path: 'experience', component: ExperienceComponent },
//   { path: 'extra', component: ExtraCiricularComponent },
//   { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'intro', component: IntroComponent },
//   { path: 'portfolio', component: PortfolioComponent },
//   { path: 'projects', component: ProjectsComponent },
//   { path: 'reference', component: ReferenceComponent },
//   { path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfilerRoutingModule { }
