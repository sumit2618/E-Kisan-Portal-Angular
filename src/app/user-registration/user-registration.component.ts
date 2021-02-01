import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {

  constructor(private userservice: UserserviceService, private router: Router, private httpClient: HttpClient) { }

  form!: FormGroup;

  user: any;

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  image: any;

  data: any;

  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log("bro here " + this.selectedFile.name);
    this.form.value.image = this.selectedFile.name;

  }

  //Gets called when the user clicks on submit to upload the image
  onSubmit() {

    this.userservice.saveUserData(this.form.value).subscribe((res) => {
      this.user = res;
      console.log(this.user);
      console.log(this.user.Images);

      if (this.user != null) {
        alert("You have sucessfully registred")
        this.router.navigateByUrl("login");
      }
      else {
        alert(this.form.value.phoneNumber + " number already register");
      }
    })
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(""),
      emailId: new FormControl(""),
      phoneNumber: new FormControl(""),
      address: new FormControl(""),
      pincode: new FormControl(""),
      state: new FormControl(""),
      city: new FormControl(""),
      adharNumber: new FormControl(""),
      dob: new FormControl(""),
      password: new FormControl(""),
      country: new FormControl(""),
      roleId: new FormControl(""),
      status: new FormControl(""),
      image: new FormControl("")
    })
  }
}
