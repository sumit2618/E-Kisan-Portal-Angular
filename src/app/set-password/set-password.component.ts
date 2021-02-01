import { Component, OnInit } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {


  constructor(private userservice:UserserviceService , private router: Router, private activatedroute: ActivatedRoute) { }

  setpassword!:FormGroup

  changePassword(){
    if (this.setpassword.value.password!=this.setpassword.value.confirmpassword) {
      alert("passwords are not matching")
      this.router.navigateByUrl('/forgot')
    }else{
      this.userservice.forgotPass(this.setpassword.value).subscribe((res)=>{
        alert("Password changed successfully..!")
        console.log(res);
        this.router.navigateByUrl('/login')
      },(err:HttpErrorResponse)=>{
        //alert(err.error.message)
        alert("User Not fount with credintial please register first")
      })
    }
  }

  ngOnInit(): void {

    this.setpassword =new FormGroup({
      phoneNumber:new FormControl(""),
      emailId:new FormControl(""),
      password:new FormControl(""),
      confirmpassword:new FormControl("")
    })
  }
}
