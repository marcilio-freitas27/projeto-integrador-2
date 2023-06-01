import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  chart: any;
  ctx: any;
  items: any[];
  showTutorial: boolean;
  isAlertOpen = false;
  alert: any;
  public alertButtons = ['OK'];
  public progress = 0;
  constructor(private router: Router) {
    this.items = ['POO', 'Lógica', 'JS', 'UX', 'MySQL', 'ORM']
    this.showTutorial = false;
  }

  ngOnInit(){
    this.getChart();
    this.getProgress();
    this.alert = `<ion-progress-bar  [value]='${this.progress}'></ion-progress-bar>`
  }

  onClick(){
    this.router.navigate(['/inicio'])
  }

  tutorial(){
    this.showTutorial = true;
    this.setOpen(true);
  }

  closeTutorial(){
    this.showTutorial = false;
  }

  getChart(){
    this.ctx = document.getElementById('myChart');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['POO', 'Lógica', 'JS', 'UX', 'MySQL', 'ORM'],
        datasets: [{
          label: 'Cursos',
          data: [12, 19, 10, 10, 25, 15],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  loadData(event: any){
    this.items = event;
  }

  getProgress(){
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
