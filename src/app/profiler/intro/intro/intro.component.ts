import { Component, OnInit } from '@angular/core';
import { ProfilerService } from '../../profiler.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  cvUrl: any
  constructor(private profilerService:ProfilerService) { }

  ngOnInit() {

    this.cvUrl =  this.profilerService.resumeurl
  }

}
