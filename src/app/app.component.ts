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

  getDataConf() {
    return [
        {
            prop: 'cid',
            name: 'ID number'
        },
        {
            prop: 'name',
            name: 'Name'
        },
        {
            prop: 'surname',
            name: 'Surname'
        },
        {
            prop: 'address',
            name: 'Address'
        },
        {
            prop: 'sexo',
            name: 'Sexo'
        }
    ];  
  }

  users = [
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:12,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:34,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:454,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:232,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:9564510,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:45,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:945410,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:945410,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'},
    {cid:910,name:'Jose A',surname:'Bisbal',address:'Santa Clata',sexo:'M'}
  ]


  selectionChange(event:any){
    this.values = event.data.toString();
  }
}
