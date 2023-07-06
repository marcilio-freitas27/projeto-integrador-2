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
  dadosCursos: DadosCursos[];

  @ViewChild(IonModal) modal: IonModal | any;

  formControl!: FormGroup;
  public progress = 0;
  constructor(
    private router: Router,
    private tutorial: TutorialService,
    private formBuilder: FormBuilder
  ) {
    this.dadosCursos = [];
  }

  ngOnInit() {
    this.formControl = this.formBuilder.group({
      programacao: [null, Validators.required],
      linguagem: [null, Validators.required],
      angular: [null, Validators.required],
      nivel: [null, Validators.required],
    });
  }

  closeModal() {
    this.modal.dismiss();
  }

  setDadosCursos(dados: DadosCursos[]) {
    this.tutorial.setDadosCursos(dados);
  }

  gerarCursos() {
    if (this.formControl.get('programacao')?.value === 'sim') {
      this.dadosCursos = [];
      this.setDadosCursos(this.dadosCursos);
    } else {
      null;
    }
    if (this.formControl.get('angular')?.value === 'sim') {
      this.dadosCursos = [];
      this.setDadosCursos(this.dadosCursos);
    } else {
      null;
    }
  }

  salvar() {
    console.log(
      this.formControl.get('nivel')?.value,
      this.formControl.get('angular')?.value,
      this.formControl.get('linguagem')?.value,
      this.formControl.get('programacao')?.value
    );
    this.getProgress();
  }

  pular() {
    this.tutorial.pular();
  }

  getProgress() {
    setInterval(() => {
      this.progress += 0.01;
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
        // this.tutorial.pular();
        this.closeModal();
      }
    }, 50);
  }
}
