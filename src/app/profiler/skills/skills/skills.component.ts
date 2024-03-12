import { Component, OnInit } from '@angular/core';
import { ProfilerService } from '../../profiler.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: any

  constructor(private profilerService:ProfilerService) { }

    ngOnInit() {

      this.skills =  this.profilerService.skills()
    }


}

