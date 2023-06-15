import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DadosCursos } from '../model/dados-cursos';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  pulou: boolean;
  dadosCursos: DadosCursos[];
  constructor(private router: Router) { 
    this.pulou = false;
    this.dadosCursos = [];
  }
 
  getPulou(){
    return this.pulou;
  }

  getDadosCursos(){
    return this.dadosCursos;
  }

  setDadosCursos(dados: DadosCursos[]){
    this.dadosCursos = dados;
  }

  async pular() {
    this.pulou = true;
    await this.router.navigate(['/acesso/home'])
  }
}
