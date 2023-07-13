import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { DadosCursos } from '../model/dados-cursos';
import { TutorialService } from '../services/tutorial.service';

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
  itens!: any[];
  alert: any;
  public alertButtons = ['OK'];
  public progress = 0;
  itensCursos!: any;
  dadosCursos!: DadosCursos[];
  constructor(private router: Router, private tutorial: TutorialService) {}

  ngOnInit() {
    this.itens = ['POO', 'Lógica', 'JS', 'UX', 'MySQL', 'ORM'];
    this.buscarCursos();
    this.dadosCursos = this.tutorial.getDadosCursos();
    console.log(this.dadosCursos);
    this.getChart();
    // this.getProgress();
    this.alert = `<ion-progress-bar  [value]='${this.progress}'></ion-progress-bar>`;
  }

  getChart() {
    this.ctx = document.getElementById('myChart');
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.itens,
        datasets: [
          {
            label: 'Cursos',
            data: [10, 20, 40, 30, 50, 33],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  getProgress() {
    setInterval(() => {
      this.progress += 0.01;
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

  buscarCursos() {
    this.tutorial.buscarDadosCursos().subscribe({
      next: (res) => {
        this.itensCursos = res;
      },
    });
  }
}
