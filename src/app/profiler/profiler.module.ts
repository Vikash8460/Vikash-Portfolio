import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header/header.component';
import { IntroComponent } from './intro/intro/intro.component';
import { ProfilerComponent } from './profiler.component';
import { ProfilerRoutingModule } from './profiler-routing.module';
import { FooterComponent } from './footer/footer/footer.component';
import { AboutComponent } from './about/about/about.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { ExtraCiricularComponent } from './extra-ciricular/extra-ciricular/extra-ciricular.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { EducationComponent } from './education/education/education.component';
import { ReferenceComponent } from './reference/reference/reference.component';
import { ContactComponent } from './contact/contact/contact.component';
import { SplitPipe } from './split.pipe';
import { ScrollComponent } from './scroll/scroll/scroll.component';



@NgModule({
  declarations: [
    ProfilerComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    ExtraCiricularComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    SplitPipe,
    ScrollComponent
  ],
  imports: [
    CommonModule,
    ProfilerRoutingModule
    
  ]
})
export class ProfilerModule { }
