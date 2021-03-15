import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor (private backendService: BackendService) {}
  title = 'HW1-Portfolio-angularProject';
  
  home: HomeComponent;

  
  ngOnInit (): void {
    // let somethingHome = this.backendService.getHome();
    // console.log(somethingHome);
    
  }
}
;


