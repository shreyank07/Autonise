import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { UserService } from '../user.service';
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  users=[];
  todo = {};
<<<<<<< HEAD
  constructor(private http: HttpClient) {
=======
  constructor(private http: HttpClient,private User : UserService,private route : Router) {
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
  //    this.http.get('https://www.autonise.com/api/course/catalog/').subscribe((result:any) =>{
  //   console.log(result);
  //  })
   }

  ngOnInit() {
  }
  email:any;
<<<<<<< HEAD
  
=======
  failedMsg : string;
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
  password:any;

  login(form,e){
  
<<<<<<< HEAD
    if(e.keyCode == 13){
      if(!form.invalid){
        console.log(this.todo)
      }
    }

   
=======
    if(e.keyCode == 13 || e.keyCode == undefined){
      if(!form.invalid){
        this.User.login(this.todo).subscribe(data=>{
          alert("Login Successful")
          localStorage.setItem('token',data['token'])
          this.route.navigate(["/homepage"])
        },error=>{
          this.failedMsg = error['error']
        })
      }
    }

>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
  }

}
