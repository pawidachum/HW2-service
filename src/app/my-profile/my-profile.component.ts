import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MyProfileComponent implements OnInit {
  myHTML='';
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.myHTML = this.backendService.getProfile();
  }

}
