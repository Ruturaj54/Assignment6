import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h2>Inside app component</h2> <h1 [class] = "'sucess'"> Marvellous Infosystems...</h1> <h1>Enter the Name here :</h1> <input [class] = "'sucess'" type = "text"> <router-outlet></router-outlet>`,
  styles: `.sucess {color : blue;}`
          
})
export class AppComponent {
  title = 'Assign6-3';
}
