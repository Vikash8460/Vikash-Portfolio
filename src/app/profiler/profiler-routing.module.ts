import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilerComponent } from './profiler.component';
import { HeaderComponent } from './header/header/header.component';
import { IntroComponent } from './intro/intro/intro.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ExtraCiricularComponent } from './extra-ciricular/extra-ciricular/extra-ciricular.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { ReferenceComponent } from './reference/reference/reference.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { EducationComponent } from './education/education/education.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AboutComponent } from './about/about/about.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';

const routes: Routes = [
    { path: '', component: ProfilerComponent },
    //   { path: 'dashboard', component: DashboardComponent },
    //   { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'extra', component: ExtraCiricularComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'intro', component: IntroComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'reference', component: ReferenceComponent },
    { path: 'skills', component: SkillsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProfilerRoutingModule { }
