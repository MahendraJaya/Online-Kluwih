import { Component, OnInit } from '@angular/core';
import { KluwihserviceService } from '../kluwihservice.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private kluservice:KluwihserviceService, private route:Router) { }

  new_username = ""
  new_nama = ""
  new_tlp = ""
  new_email = ""
  new_password = ""

  ngOnInit() {
  }

  registerPembeli(){
    this.kluservice.registerPembeli(this.new_nama, this.new_tlp, this.new_email, this.new_username, this.new_password).subscribe((data:any) =>{
      if(data.result == "success"){
        alert(data.message);
        this.route.navigate(['/home']);
      }else{
        alert(data.message);
      }
    });
  }

}
