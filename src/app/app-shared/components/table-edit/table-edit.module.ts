import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableEditComponent } from './table-edit.component';
import { SharedMaterialModule } from '../../shared-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

const components = [TableEditComponent];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ], 
  exports:[components]
})
export class TableEditModule { }
