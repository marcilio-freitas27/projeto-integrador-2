import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DadosCursos } from '../model/dados-cursos';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  pulou: boolean;
  dadosCursos: DadosCursos[];
  url: any;
  constructor(private router: Router, private http: HttpClient) {
    this.pulou = false;
    this.dadosCursos = [];
    this.url = 'http://localhost:3000/dadosCursos';
  }

  getPulou() {
    return this.pulou;
  }

  getDadosCursos() {
    return this.dadosCursos;
  }

  buscarDadosCursos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  setDadosCursos(dados: DadosCursos[]) {
    this.dadosCursos = dados;
  }

  async pular() {
    this.pulou = true;
    await this.router.navigate(['/acesso/home']);
  }
}
