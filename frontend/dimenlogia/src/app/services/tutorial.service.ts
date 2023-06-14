import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  pulou: boolean;
  constructor(private router: Router) { 
     this.pulou = false;
  }
 
  getPulou(){
    return this.pulou;
  }

  pular() {
    this.pulou = true;
    this.router.navigate(['/acesso/home'])
  }
}
