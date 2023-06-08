import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
   standalone: true,
  imports: [IonicModule],
})
export class LayoutComponent  implements OnInit {
  
  alert: any;
  public alertButtons = ['OK'];
  public progress = 0;
  constructor(private router: Router) {

  }

  ngOnInit(){
    this.getProgress();
    this.alert = `<ion-progress-bar  [value]='${this.progress}'></ion-progress-bar>`
  }

  onClick(){
    this.router.navigate(['/inicio'])
  }

  form(){
    this.router.navigate(['/acesso/tutorial'])
  }

  getProgress(){
    setInterval(() => {
      this.progress += 0.01;
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

}
