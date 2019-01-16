import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numone= '';
  numtwo='';
  numthree=this.numone+this.numtwo;
}
