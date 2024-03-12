import { Component, OnInit } from '@angular/core';
import { ProfilerService } from '../../profiler.service';

@Component({
  selector: 'app-extra-ciricular',
  templateUrl: './extra-ciricular.component.html',
  styleUrl: './extra-ciricular.component.scss'
})
export class ExtraCiricularComponent implements OnInit {

  extras: any
  constructor(private profilerService: ProfilerService) { }
  ngOnInit() {
    this.extras = this.profilerService.extraCircular()
  }

}
