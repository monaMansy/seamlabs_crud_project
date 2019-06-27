import { Injectable } from '@angular/core';
import {FormGroup , FormControl ,  Validator, Validators} from'@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {
     isAdmin:boolean;
  constructor() { }
  form: FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  CheckIsAdmin(user){
         
        if(user.username == "mona" && user.password== "1234"){
              return true;
        }
      else return false;
  }

}
