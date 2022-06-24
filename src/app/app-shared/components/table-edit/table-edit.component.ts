import { Component, HostListener, Input, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {
  @Input() data: Array<any> = [];
  @Input() configuration: Array<{ prop: string ,name: string}> = [];

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


  ngOnInit(): void {
    this.displayedColumns = this.configuration.map((c) => c.prop);
    this.columns = this.displayedColumns;
    this.dataSource = new MatTableDataSource<any>(this.data);
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

  @HostListener("window:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    switch (event.code) {
      case "Home": { return this.KeyboardEventHome(); }
      case "End": { return this.KeyboardEventEnd(); }
      case "ArrowLeft": { return this.KeyboardEventArrowLeft();}
      case "ArrowRight": { return this.KeyboardEventArrowRight();}
      case "ArrowUp": { return this.KeyboardEventArrowUp();}
      case "ArrowDown": { return this.KeyboardEventArrowDown();}
      case "Escape": { return this.KeyboardEventEscape();}
      default: { return; }
    }
  }

  KeyboardEventHome() {
    this.edit(this.rowToUpdate, this.editableIndex, 1);
  }

  KeyboardEventEnd() {
    this.edit(this.rowToUpdate, this.editableIndex, 5);
  }

  KeyboardEventArrowLeft() {
    this.edit(this.rowToUpdate, this.editableIndex, --this.selectedColumn);
  }

  KeyboardEventArrowRight() {
    this.edit(this.rowToUpdate, this.editableIndex, ++this.selectedColumn);
  }

  KeyboardEventArrowUp() {
    this.edit(this.rowToUpdate, --this.editableIndex, this.selectedColumn); 
  }

  KeyboardEventArrowDown() {
    this.edit(this.rowToUpdate, ++this.editableIndex, this.selectedColumn); 
  }

  KeyboardEventEscape() {
    this.disableEditMode();
  }

}
