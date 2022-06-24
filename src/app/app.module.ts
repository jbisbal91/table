import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MultiSelectModule } from './app-shared/components/multi-select/multi-select.module';
import { TableEditModule } from './app-shared/components/table-edit/table-edit.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    TableEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
