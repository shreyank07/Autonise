import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

<<<<<<< HEAD

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss','../homepage/homepage.page.scss'],
})
export class NavbarComponent implements OnInit {

  user:any=[]
  userstatus;
  logged;

  constructor(private userinfo: UserService,private router:Router) {
    this.userstatus=localStorage.getItem('loginstatus');
    if (this.userstatus=="true"){
      this.logged="Logout";
    }
    else{
      this.logged="Login";
    }

   }

  ngOnInit():void{
    this.user=this.userinfo.getdata()
    
  }
  history(){
    this.userstatus=localStorage.getItem('loginstatus');
    if (this.userstatus=="true"){
      this.router.navigate(['/history']); 
    }
    else{
      alert('Login Please');
      this.router.navigate(['/page1']); 
    }
    
  }
  isloggedin(){
    if (this.userstatus=='true'){

      localStorage.removeItem('loginstatus');
      this.logged="Login";
    }
    else{
      this.router.navigate(['/page1']);
    }
  }
  
  

=======
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../homepage/homepage.page.scss'],
})
export class NavbarComponent implements OnInit {
  token: any;
  user: any = [];
  userstatus;

  constructor(private service: UserService, private router: Router) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.service.getUser(this.token).subscribe((data) => {
      this.user = data;
    });
  }

  logOut(){
    console.log("Logged out")
    this.token = null
    localStorage.removeItem('token')
    this.router.navigate(["/signup"])
  }
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
}
