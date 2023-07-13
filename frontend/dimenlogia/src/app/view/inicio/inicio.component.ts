import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTutorialComponent } from '../form-tutorial/form-tutorial.component';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule],
})
export class InicioComponent implements OnInit {
  constructor(private router: Router, private form: TutorialService) {}

  ngOnInit() {
    // this.setTutorial();
    localStorage.removeItem('formulario');
  }

  home() {
    this.router.navigate(['/acesso/home']);
  }

  // setTutorial() {
  //   this.form.setPulou(false);
  // }

  tutorial() {
    this.router.navigate(['/acesso/tutorial']);
  }
}
