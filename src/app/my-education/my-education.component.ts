import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-education',
  templateUrl: './my-education.component.html',
  styleUrls: ['./my-education.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MyEducationComponent implements OnInit {
  myHTML ='';
  constructor(private backendService: BackendService) {};

  ngOnInit(): void {
    this.myHTML = this.backendService.getEdu();
  }

}
