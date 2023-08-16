import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
const MaterialComponent =[ 
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatIconModule,
  MatMenuModule
];
 


@NgModule({
  declarations: [],
  imports: [
    MaterialComponent ],
  exports: [
    MaterialComponent]
})
export class MaterialModule { }
