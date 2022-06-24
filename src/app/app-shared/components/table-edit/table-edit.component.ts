import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {
  displayedColumns: string[] = [];
  columns: string[] = [];
  public dataSource: any;

  editMode = false;
  editableIndex:number = -1;
  clickedRow = -1;
  selectedColumn = 1;
  rowToUpdate = null;

  cid = 0;
  name = '';
  surname = '';
  address = '';
  sexo = '';
  constructor() { }


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

  ngOnInit(): void {
    this.displayedColumns = this.getDataConf().map((c) => c.prop);
    this.columns = this.displayedColumns;
    this.dataSource = new MatTableDataSource<any>(this.users);
  }

  showInput(index: number, column: number) {
    return this.editableIndex === index && this.selectedColumn === column;
  }

  disableEditMode() {
    this.editMode = false;
    this.editableIndex = -1;
    this.clickedRow = -1;
    this.selectedColumn = -1;
    this.rowToUpdate = null;
  }

  edit(row: any, index: number, column: number) {
    this.disableEditMode();
    this.cid = row.cid;
    this.name = row.name;
    this.surname = row.surname;
    this.address = row.address;
    this.sexo = row.sexo;
    this.editMode = true;
    this.editableIndex = index;
    this.selectedColumn = column;
    this.rowToUpdate = row;
  }

}
