import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup
  data: any = [];
  invalidLogin = false;
  constructor(private loginservice: AuthenticationService, private userService: UserserviceService, private router: Router) { }

  register() {
    this.userService.login(this.userForm.value).subscribe((res) => {
      this.data = res;
      if (this.loginservice.authenticate(res)) {
        alert("Login Successfull")
        this.router.navigate(['']);
        this.invalidLogin = false
      } else {
        this.invalidLogin = true;
      }
    }, (err: HttpErrorResponse) => {
      //alert(err.error.message)
      alert("Please Enter Valid Credentials")
    })
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      phoneNumber: new FormControl(""),
      password: new FormControl("")
    })
  }
}