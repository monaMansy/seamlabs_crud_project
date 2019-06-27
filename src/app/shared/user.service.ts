import { Injectable } from '@angular/core';
import {FormGroup , FormControl ,  Validator, Validators} from'@angular/forms';
import {AngularFireDatabase , AngularFireList} from'angularfire2/database' 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersList: AngularFireList<{}>;

  constructor( private fireBase :AngularFireDatabase) { }
  form : FormGroup = new FormGroup({
    $key :new FormControl('null'),
    name:new FormControl('',Validators.required),
    phone : new FormControl('',[ Validators.maxLength(11) , Validators.required  ]),
    email : new FormControl('',[Validators.email]),
    status:new FormControl('')
  })

  getUsers(){
    this.usersList  = this.fireBase.list('users');
    return this.usersList.snapshotChanges();
  }


  createUser(user){
    this.usersList.push({
      name:user.name,
      phone:user.phone,
      email:user.email,
      status:user.status
    })
  }
  updateUser(user){
    this.usersList.update(user.$key,{
      name:user.name,
      phone:user.phone,
      email:user.email,
      status:user.status
    })
  }

  deleteUser(user){
    this.usersList.remove(user.$key)
  }

  fillFromToEdit(user){
    this.form.setValue(user);

  }

}
 