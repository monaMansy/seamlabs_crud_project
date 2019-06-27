import { Component, OnInit ,ViewChild} from '@angular/core';
import{UserService} from '../../shared/user.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material'
import {MatDialog , MatDialogConfig} from '@angular/material'
import { UserDetailsComponent } from '../user-details/user-details.component';
import {NotificationService} from '../../shared/notification.service';
import {Route ,Router, ActivatedRoute} from '@angular/router'
 
@Component({
  selector: 'app-view-users-list',
  templateUrl: './view-users-list.component.html',
  styleUrls: ['./view-users-list.component.css']
})
export class ViewUsersListComponent implements OnInit {
  searchKey :string;
  usersDataList :MatTableDataSource<any>;
  displayedColumns:string[] = ["name","phone" ,"email" , "status","actions"];
  @ViewChild(MatSort) sort:MatSort ;
  @ViewChild(MatPaginator) paginator:MatPaginator
   isAdmin:string;
  constructor(private userService:UserService , private Dialog:MatDialog 
    , private notification:NotificationService , private route: ActivatedRoute
    ) { }

  ngOnInit() {

   console.log("route",this.route.snapshot.paramMap.get('isAdmin')) ;
   this.isAdmin = this.route.snapshot.paramMap.get('isAdmin');
    this.userService.getUsers().subscribe(
      list=>{
        let array = list.map(item=> {
          return {
            $key : item.key,
            ...item.payload.val()
          };
           
      })
      this.usersDataList = new MatTableDataSource(array);
      this.usersDataList.sort = this.sort ;
      this.usersDataList.paginator = this.paginator;
      })
     
  }

  applySearchFilter(){
    this.usersDataList.filter = this.searchKey.trim().toLowerCase();
  }

  onClearFilter(){
    this.searchKey = "";
    this.applySearchFilter();
  }

  openCreateDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "40%";
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.Dialog.open(UserDetailsComponent , dialogConfig );

  }

  onEdit(user){
    this.userService.fillFromToEdit(user);
    this.openCreateDialog();
  }

  onDelete(user)
  { if(confirm("Are you sure to need to delete this user .. ? "))
    {this.userService.deleteUser(user);}
    this.notification.success("Deleted Successfully ...");
  }

}
