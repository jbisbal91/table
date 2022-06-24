import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-edit';
  data: Array<string> = ['Hugo','Martín','Lucas','Mateo','Leo','Daniel','Alejandro','Pablo',' Manuel','Álvaro','Adrián','David','Mario','Enzo','Diego','Marcos','Izan','Javier','Marco','Álex','Bruno'];
  values: string = '';

  selectionChange(event:any){
    this.values = event.data.toString();
  }
}
