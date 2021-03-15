import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  myHTML ='';

  ngOnInit(): void {
    this.myHTML = this.backendService.getHome();
    
  }
  constructor (private backendService: BackendService) {};

}
