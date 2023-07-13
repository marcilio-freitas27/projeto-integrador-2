import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';
import { CommonModule } from '@angular/common';
import { DadosCursos } from 'src/app/model/dados-cursos';
import { Formulario } from 'src/app/model/formulario';


@Component({
  selector: 'app-form-tutorial',
  templateUrl: './form-tutorial.component.html',
  styleUrls: ['./form-tutorial.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class FormTutorialComponent implements OnInit {
  experience!: string;
  languages!: string;
  angularKnowledge!: string;
  angularLevel!: string;
  dadosCursos!: DadosCursos[];
  formulario!: Formulario;
  @ViewChild(IonModal) modal: IonModal | any;

  formControl!: FormGroup;
  public progress = 0;
  constructor(
    private router: Router,
    private tutorial: TutorialService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    localStorage.getItem('formulario');
    this.dadosCursos = [];
    this.formulario = new Formulario();
    this.formControl = this.formBuilder.group({
      programacao: ['', Validators.required],
      linguagem: ['', Validators.required],
      angular: ['', Validators.required],
      nivel: ['', Validators.required],
    });
  }

  closeModal() {
    this.modal.dismiss();
  }

  setDadosCursos(dados: DadosCursos[]) {
    this.tutorial.setDadosCursos(dados);
  }

  gerarCursos() {
    this.dadosCursos = [];
    if (this.formControl.get('programacao')?.value === 'sim') {
      this.dadosCursos[0] = {
        nomeCurso: 'Poo',
        logoCurso: 'img',
        infoCurso: 'Curso muito bom',
        nivelCurso: 'Intermediario',
        porcentagemCurso: 5,
      };
      this.setDadosCursos(this.dadosCursos);
    } else {
      this.dadosCursos[0] = {
        nomeCurso: 'Algoritmos com Portugol',
        logoCurso: 'img',
        infoCurso:
          'Introdução a programação e aos algoritmos com a pseudoliguagem Porgugol',
        nivelCurso: 'Inciante',
        porcentagemCurso: 0,
      };
      this.setDadosCursos(this.dadosCursos);
    }

    if (this.formControl.get('angular')?.value === 'sim') {
      this.dadosCursos[1] = {
        nomeCurso: 'Angular',
        logoCurso: 'img',
        infoCurso: 'Curso Top',
        nivelCurso: 'Iniciante',
        porcentagemCurso: 20,
      };
      this.setDadosCursos(this.dadosCursos);
    } else {
      this.dadosCursos[1] = {
        nomeCurso: 'Lógica de programação',
        logoCurso: 'img',
        infoCurso: 'Introdução a lógica de programação.',
        nivelCurso: 'Iniciante',
        porcentagemCurso: 20,
      };
      this.setDadosCursos(this.dadosCursos);
    }
  }

  salvar() {
    this.formulario.nivel = this.formControl.get('nivel')?.value;
    this.formulario.angular = this.formControl.get('angular')?.value;
    this.formulario.linguagem = this.formControl.get('linguagem')?.value;
    this.formulario.programacao = this.formControl.get('programacao')?.value;
    localStorage.setItem('formulario', JSON.stringify(this.formulario));
    this.gerarCursos();
    this.getProgress();
    // clearInterval(this.getProgress());
  }

  pular() {
    this.formulario.nivel = this.formControl.get('nivel')?.value;
    this.formulario.angular = this.formControl.get('angular')?.value;
    this.formulario.linguagem = this.formControl.get('linguagem')?.value;
    this.formulario.programacao = this.formControl.get('programacao')?.value;
    localStorage.setItem('formulario', JSON.stringify(this.formulario));
    this.gerarCursos();
    // this.tutorial.pular();
  }

  getProgress() {
    let interval = setInterval(() => {
      this.progress += 0.01;
      if (this.progress > 1) {
        let timer = setTimeout(() => {
          this.progress = 0;
        }, 1000);
        clearTimeout(timer);
        this.closeModal();
        this.router.navigate(['/acesso/home']);
        return;
      }
    }, 50);
    return interval;
  }
}
