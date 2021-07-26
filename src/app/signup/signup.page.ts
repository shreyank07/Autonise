<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
=======
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('myEmail') inputEmail;
  @ViewChild('myName') inputName;
  @ViewChild('myNumber') inputNumber;
  @ViewChild('myPassword') inputPassword;
  numberBool = false;
  passwordBool = false;
  emailBool = false;
  users = [];
  todo = {};
<<<<<<< HEAD
  constructor(private http: HttpClient) {}
=======
  clickBool = false;
  constructor(private http: HttpClient, private user: UserService,private route : Router) {}
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d

  ngOnInit(): void {
    // this.user=this.userinfo.getdata()
  }

<<<<<<< HEAD
  login(form, e) {
    if (e.keyCode == 13) {
      if (!form.invalid) {
        console.log(this.todo);
=======
  submit(f,e){
    this.clickBool = true
    this.login(f,e)
  }

  login(form, e) {
    if (e.keyCode == 13 || this.clickBool ) {
      if (!form.invalid) {
        console.log(this.todo)
        this.user.register(this.todo).subscribe(
          data => {
            console.log("reg success",data)
            alert(data);
            this.route.navigate(["/login"])
          },
          error => {
            console.log("Reg unsucess",error)
            alert(error['error']);
          }
        );
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
      } else {
        if (!this.todo['name']) {
          this.inputName.setFocus();
        } else if (!this.todo['email']) {
          this.inputEmail.setFocus();
        } else if (!this.todo['number']) {
          this.inputNumber.setFocus();
        } else if (!this.todo['pass']) {
          this.inputPassword.setFocus();
        }
        if (this.todo['email']) {
<<<<<<< HEAD
          document.getElementById('EmailValidation').classList.remove('d-none');
=======
          if (!this.emailBool){
          document.getElementById('EmailValidation').classList.remove('d-none');
          if(this.todo['name'])
          this.inputEmail.setFocus()
          }
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
        }
      }
    }
  }

  change1(e) {
    this.check(e);
    if (this.passwordBool) {
      this.passwordBool = false;
    } else {
      this.passwordBool = true;
      // this.check(e)
    }
  }
  change2(e) {
    this.check2(e);
    if (this.numberBool) {
      this.numberBool = false;
    } else {
      this.numberBool = true;

      //
    }
  }
<<<<<<< HEAD
=======


>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
  change3(e) {
    document.getElementById('EmailValidation').classList.add('d-none');
    // this.check3(e)
  }

  check(inp) {
    let val = inp.target.value;
    let a = document.getElementById('a6char');
    let numbers = /[0-9]/g;
    let SC = /[!@#]/;
    let b = document.getElementById('NandSC');
    if (val.length >= 6) {
      a.classList.add('text-success');
      a.classList.remove('text-danger');
    } else {
      a.classList.add('text-danger');
      a.classList.remove('text-success');
    }

    if (val.match(numbers) && val.match(SC)) {
      b.classList.add('text-success');
      b.classList.remove('text-danger');
    } else {
      b.classList.add('text-danger');
      b.classList.remove('text-success');
    }
  }
  check2(e) {
    let val = e.target.value;
    let a = document.getElementById('10D');
    if (val.length == 10) {
      a.classList.add('text-success');
      a.classList.remove('text-danger');
    } else {
      a.classList.add('text-danger');
      a.classList.remove('text-success');
    }
  }
  check3(e) {
    let a = document.getElementById('EmailValidation');
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        e.target.value
      )
    ) {
      a.classList.add('text-success');
      a.classList.remove('text-danger');
<<<<<<< HEAD
    } else {
      a.classList.add('text-danger');
      a.classList.remove('text-success');
=======
      this.emailBool = true
    } else {
      a.classList.add('text-danger');
      a.classList.remove('text-success');
      this.emailBool = false
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
    }
  }
}
