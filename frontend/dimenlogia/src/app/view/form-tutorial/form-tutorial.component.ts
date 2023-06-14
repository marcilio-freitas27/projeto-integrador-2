import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-form-tutorial',
  templateUrl: './form-tutorial.component.html',
  styleUrls: ['./form-tutorial.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule],
})
export class FormTutorialComponent  implements OnInit {

  experience!: string;
  languages!: string;
  angularKnowledge!: string;
  angularLevel!: string;

  @ViewChild(IonModal) modal: IonModal | any;
  
  formControl!: FormGroup;
  public progress = 0;
  constructor(
    private router: Router,
    private tutorial: TutorialService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.formControl = this.formBuilder.group({
      programacao:["", Validators.required],
      linguagem: ["", Validators.required],
      angular:["", Validators.required],
      nivel:["", Validators.required],
    })
  }

  closeModal() {
    this.modal.dismiss();
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

  getProgress(){
    setInterval(() => {
      this.progress += 0.01;
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
        this.tutorial.pular();
        this.closeModal();
      }
    }, 50);
  }

}
