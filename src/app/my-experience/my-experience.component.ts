import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.css']
})
export class MyExperienceComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getExp();
  }

}
