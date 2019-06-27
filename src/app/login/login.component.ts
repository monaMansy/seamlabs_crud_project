import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup,FormControl, Validators ,ReactiveFormsModule} from '@angular/forms';
import { first } from 'rxjs/operators';
import {AdminAuthGuardService} from '../shared/admin-auth-guard.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
  
  
})
export class LoginComponent implements OnInit {
  

  constructor(private router:Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authGuard :AdminAuthGuardService
    ) {}
  isAdmin : boolean;


  submit() {
    if (this.authGuard.form.valid) {
      if(this.authGuard.CheckIsAdmin(this.authGuard.form.value)) 
      {
        this.isAdmin = true;
      } 
      else { this.isAdmin = false; }
    }
    this.router.navigate(['/users',this.isAdmin]);
  }
  @Input() error: string | null;

 


 
    ngOnInit() {
     

      
  }
    
}

