import { Component } from '@angular/core'; 
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{club.name}} is my club!</h2>'
})
export class AppComponent { 
	title = 'My tennis clubs';
	club : Club = {
		id: 1,
		name: 'MIK Tennis'
	};
	
}
export class Club {
  id: number;
  name: string;
}

const CLUBS: Club[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

