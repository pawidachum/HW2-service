import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-education',
  templateUrl: './my-education.component.html',
  styleUrls: ['./my-education.component.css']
})
export class MyEducationComponent implements OnInit {

  constructor(private backendService: BackendService) {};

  ngOnInit(): void {
    this.backendService.getEdu();
  }

}
