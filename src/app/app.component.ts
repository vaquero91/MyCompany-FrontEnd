import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>MyCompany</h1> <app-header></app-header><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCompany-FrontEnd';
}
