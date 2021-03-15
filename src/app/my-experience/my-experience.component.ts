import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MyExperienceComponent implements OnInit {
  myHTML ='';
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.myHTML = this.backendService.getExp();
  }

}
