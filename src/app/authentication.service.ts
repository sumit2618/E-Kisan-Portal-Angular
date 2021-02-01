import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  authenticate(data:any){
    if(data!=null){
      sessionStorage.setItem('userid' , data.id)
      return true;
    }else{
      return false;
    }
  }
  isUserLogin(){
      let user = sessionStorage.getItem('userid');
      console.log(!(user===null))
      return !(user===null);
  }
  logout(){
    sessionStorage.removeItem('userid');
    alert("Logout Successfull")
  }
}
