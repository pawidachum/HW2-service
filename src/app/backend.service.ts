import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  getHome(): void { 
    console.log("from Home");
  }
  getEdu(): void { 
    console.log("from Edu");
  }
  getSkill(): any { 
    console.log("from Skill");
  }
  getProfile(): void { 
    console.log("from Profile");
  }
  getExp(): void { 
    console.log("from Exp");
  }
  

    constructor(public router: Router) {}
   }

