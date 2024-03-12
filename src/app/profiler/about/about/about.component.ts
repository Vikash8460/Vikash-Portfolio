import { Component, OnInit } from '@angular/core';
import { ProfilerService } from '../../profiler.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  
  about1: any
  about2: any  
 

 constructor(private profilerService:ProfilerService) { }

  ngOnInit() {
    this.about1 =  this.profilerService.about
    this.about2 =  this.profilerService.about2
  }

}
