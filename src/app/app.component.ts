import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>MyCompany</h1> <app-departments></app-departments><app-employees></app-employees>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCompany-FrontEnd';
}
