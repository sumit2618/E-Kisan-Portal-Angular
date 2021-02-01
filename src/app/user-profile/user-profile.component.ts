import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { OrderdetailsService } from '../orderdetails.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  constructor(private userservice:UserserviceService , private orderservice:OrderdetailsService,public loginservice: AuthenticationService, private router: Router,  private activatedroute: ActivatedRoute) { }

  userid = sessionStorage.getItem('userid');

  user:any=[];
  orderDetails:any=[];
  msg!:string;

  getUserData(){
    if(this.userid!=null){
      this.userservice.getDataById(this.userid).subscribe((data) => {
        this.user = data;
        console.log(this.user)
      })
    }
  }
  
  getOrerDatayUserId(){
    if(this.userid!=null){
      this.orderservice.getDataByUserId(this.userid).subscribe((data) => {
        this.orderDetails= data;
        console.log(this.orderDetails)
      })
    }
  }
  
  ngOnInit(): void {
    this.getOrerDatayUserId();
    this.getUserData();
  }
}
