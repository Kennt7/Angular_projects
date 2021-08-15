import { Component } from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transportApp';

  subaru: Car = {make:
  'Subaru', model: 'Outback', miles:13477};
  honda: Car = {make: 'Honda', model:'Accord', miles:14724};
  bmw: Car = {make:'BMW', model: 'X3', miles:4400};
  cars:Car[ ] = [this.subaru,this.honda, this.bmw];
}
