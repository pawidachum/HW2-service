import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MySkillComponent implements OnInit {
  myHTML='';
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.myHTML = this.backendService.getSkill();
  }

}
