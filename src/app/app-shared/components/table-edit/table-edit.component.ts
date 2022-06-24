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
  constructor() { }


  users = [
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'},
    {name:'Jose A',surname:'Bisbal',cid:910,address:'Santa Clata'}
  ]

  getDataConf() {
    return [
        {
            prop: 'name',
            name: 'Name'
        },
        {
            prop: 'surname',
            name: 'Surname'
        },
        {
            prop: 'cid',
            name: 'ID number'
        },
        {
            prop: 'address',
            name: 'Address'
        }
    ];  
  }

  ngOnInit(): void {
    this.displayedColumns = this.getDataConf().map((c) => c.prop);
    this.columns = this.displayedColumns;
    this.dataSource = new MatTableDataSource<any>(this.users);
  }


}
