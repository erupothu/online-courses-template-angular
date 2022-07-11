import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatFormFieldModule, MatCardModule, MatTableModule, MatToolbarModule, MatSidenavModule,
MatIconModule, MatStepperModule, MatMenuModule, MatListModule, MatDividerModule } from "@angular/material";



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatTableModule, MatToolbarModule, MatSidenavModule, MatIconModule,
    MatStepperModule, MatMenuModule,MatListModule, MatDividerModule
  ],
  exports: [CommonModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatTableModule, MatToolbarModule, MatSidenavModule,
    MatIconModule, MatStepperModule, MatMenuModule, MatListModule, MatDividerModule]
})
export class AngularMaterialModule { }
