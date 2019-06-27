import { Component, OnInit } from '@angular/core';
import {  UserService } from '../../shared/user.service';
import {NotificationService} from '../../shared/notification.service';
import { MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

 

 
  constructor(private service:UserService , private NotifyService:NotificationService
              , public dialogRef:MatDialogRef<UserDetailsComponent>) { }

  ngOnInit() {
   
 

    }

  onClear(){
    this.service.form.reset();
    console.log("key", this.service.form.get("$key").value);

  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value)
           {this.service.createUser(this.service.form.value);
            this.NotifyService.success("user added successfully .. ");
           }
      else
      {this.service.updateUser(this.service.form.value); 
        this.NotifyService.success("user updated successfully .. ");}

      this.onClear();
      this.onClose();

    }

}
onEdit(user){
   this.service.fillFromToEdit(user); 
}

onClose(){
  this.service.form.reset();
  this.dialogRef.close();

}
}
