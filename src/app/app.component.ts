import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-CRUD';
  actualUsers: any;
  users: any;
  snrUsers: any;
  newUsers: any;
  wfm: any;
  searchTerm = "";
  addUserForm: any = FormGroup
  constructor(private commonService: CommonService ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.readUserJson();

  }

  // add user 
  addUser(data: any){
    console.log(data);
    this.commonService.createUser(data);

    alert("New Record Added Successfully!...");

    this.refreshUsers();
  }

  readUserJson(){
    this.commonService.readUserJson().subscribe((data)=>{
      localStorage.setItem("userList", JSON.stringify(data))

      this.refreshUsers();
    })
  }
  refreshUsers(){
    let tmpusers = localStorage.getItem("userList");
    if(tmpusers != null)
      this.users = JSON.parse(tmpusers)
  }

  deleteUser(index: number){
    this.users.usersData.splice(index, 1);
    localStorage.setItem("userList", JSON.stringify( this.users))
    alert("The User has been deleted successfully!...");
  }
  
  deleteSnrUser(index: number){
    this.users.snrUsers.splice(index, 1);
    alert("The User has been deleted successfully!...");
  }

  deleteWfm(index: number){
    this.users.wfm.splice(index, 1);
    alert("The User has been deleted successfully!...");
  }
  search(){
    let originalUsers = []
    
    originalUsers = JSON.parse(JSON.stringify(this.actualUsers));
    if(!this.searchTerm){
      this.users = originalUsers;
      return;
    }
    
  
  }
}
