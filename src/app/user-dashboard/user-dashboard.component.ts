import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: any = [];

  constructor(private userervice: UserserviceService) { }

  getUserData() {
    this.userervice.getData().subscribe((res) => {
      this.user = res
      console.log(this.user);
    })
  }

  delete(id: any) {
    this.userervice.deleteData(id).subscribe((res) => {
      alert("Data deleted Successfully")
      this.getUserData()
    })
  }

  ngOnInit(): void {
    this.getUserData();
  }
}
