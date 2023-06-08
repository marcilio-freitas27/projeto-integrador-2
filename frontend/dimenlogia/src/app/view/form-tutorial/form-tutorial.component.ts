import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-form-tutorial',
  templateUrl: './form-tutorial.component.html',
  styleUrls: ['./form-tutorial.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule],
})
export class FormTutorialComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  experience!: string;
  languages!: string;
  angularKnowledge!: string;
  angularLevel!: string;

  salvar() {
    console.log(this.experience, this.languages, this.angularKnowledge, this.angularLevel);
  }

}
