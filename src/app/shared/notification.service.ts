import { Injectable } from '@angular/core';
import{MatSnackBar , MatSnackBarConfig} from '@angular/material'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar:MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration:3000,
    horizontalPosition:"right",
    verticalPosition: "bottom",
    
  }

  success(msg){
    this.snackBar.open(msg,'',this.config);
  } 
}
