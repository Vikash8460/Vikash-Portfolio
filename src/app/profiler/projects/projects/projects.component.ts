import { Component, OnInit } from '@angular/core';
import { ProfilerService } from '../../profiler.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  config: any;
  projects: any =[];

  constructor(private profilerService:ProfilerService) { }

  ngOnInit() {
    this.projects = this.profilerService.getProjects()
    //console.log(this.projects)
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}


