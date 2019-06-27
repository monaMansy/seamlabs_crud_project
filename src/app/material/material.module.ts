import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as material from "@angular/material" ;


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material.MatToolbarModule,
    material.MatInputModule,
    material.MatGridListModule,
    material.MatInputModule,
    material.MatFormFieldModule,
    material.MatSelectModule,
    material.MatButtonModule,
    material.MatSnackBarModule,
    material.MatTableModule,
    material.MatIconModule,
    material.MatPaginatorModule,
    material.MatSortModule,
    material.MatDialogModule,
    material.MatCardModule


  ],
   exports : [
    material.MatToolbarModule,
    material.MatInputModule,
    material.MatGridListModule,
    material.MatInputModule,
    material.MatFormFieldModule,
    material.MatSelectModule,
    material.MatButtonModule,
    material.MatSnackBarModule,
    material.MatTableModule,
    material.MatIconModule,
    material.MatPaginatorModule,
    material.MatSortModule,
    material.MatDialogModule,
    material.MatCardModule
   ]
})
export class MaterialModule { }
