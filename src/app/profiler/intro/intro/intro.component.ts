import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cvUrl: any
  // constructor(private profileService:ProfileService) { }

  // ngOnInit() {

  //   this.cvUrl =  this.profileService.resumeurl
  // }

}
