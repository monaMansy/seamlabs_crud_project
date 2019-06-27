import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { UserslistComponent } from './userslist/userslist.component';


const routes: Routes = [
{path:'' , component:LoginComponent},
  {path:'users/:isAdmin' , component:UserslistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
