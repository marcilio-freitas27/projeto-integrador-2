import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {


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
    this.router.navigate(['/tutorial'])
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
