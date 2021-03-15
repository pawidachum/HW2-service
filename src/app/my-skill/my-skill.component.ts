import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.css']
})
export class MySkillComponent implements OnInit {
  myHTML: string;
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getSkill();
  }

}
