import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
   standalone: true,
  imports: [IonicModule],
})
export class LayoutComponent  implements OnInit {

  public alertButtons = ['OK'];
  constructor(private router: Router) {

  }

  ngOnInit(){

  }

  inicio(){
    this.router.navigate(['/inicio'])
  }

  home(){
    this.router.navigate(['/acesso/home'])
  }

  form(){
    this.router.navigate(['/acesso/tutorial'])
  }

}
