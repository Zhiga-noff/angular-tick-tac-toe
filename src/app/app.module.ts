import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CellFieldComponent} from './cell-field/cell-field.component';
import {TypeFieldRunComponent} from './type-field-run/type-field-run.component';


@NgModule({
  declarations: [
    AppComponent,
    CellFieldComponent,
    TypeFieldRunComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
