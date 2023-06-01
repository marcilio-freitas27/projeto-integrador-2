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
  constructor(private router: Router) {
    this.items = ['POO', 'Lógica', 'JS', 'UX', 'MySQL', 'ORM']
  }

  ngOnInit(){
    this.getChart()
  }

  onClick(){
    this.router.navigate(['/inicio'])
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

  
}
