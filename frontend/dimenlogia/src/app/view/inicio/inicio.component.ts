import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

enum MyEnum {
  Option1 = 'option1',
  Option2 = 'option2',
  Option3 = 'option3'
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule],
})
export class InicioComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onClick(){
    this.router.navigate(['/home'])
  }

}
