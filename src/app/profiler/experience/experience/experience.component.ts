import { Component, OnInit } from '@angular/core';
import { ProfilerService } from '../../profiler.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  workexp: any

  constructor(private profilerService:ProfilerService) { }

    ngOnInit() {

      this.workexp =  this.profilerService.exprience()
    }

}
