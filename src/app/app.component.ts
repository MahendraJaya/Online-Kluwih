import { Component } from '@angular/core';
import { KluwihserviceService } from './kluwihservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private kluservice:KluwihserviceService) {
    this.username_pembeli = localStorage.getItem('app_username_pembeli') ?? '';
    this.nama_pembeli = localStorage.getItem('app_nama_pembeli') ?? '';
    this.id_pembeli = localStorage.getItem('app_id_pembeli') ?? '';
  }
  id_pembeli = "";
  nama_pembeli = "";
  username_pembeli = "";
  password_pembeli = "";
  isLogin = "login";

  new_username = ""
  new_nama = ""
  new_tlp = ""
  new_email = ""
  new_password = ""
  
  loginPembeli(){
    this.kluservice
      .loginPembeli(this.username_pembeli, this.password_pembeli)
      .subscribe((response: any) => {
        if (response[0].result == 'success') {
          this.id_pembeli = response[0].data[0].id;
          this.nama_pembeli = response[0].data[0].nama;
          this.username_pembeli = response[0].data[0].username;

          localStorage.setItem('app_username_pembeli', this.username_pembeli); 
          localStorage.setItem('app_nama_pembeli', this.nama_pembeli);
          localStorage.setItem('app_id_pembeli', this.id_pembeli);
        } else {
          alert(response[0].data);
        }
      });
  }

  login(){
    this.isLogin = "login";
  }

  register(){
    this.isLogin = "register";
  }

  registerPembeli(){
    this.kluservice.registerPembeli(this.new_nama, this.new_tlp, this.new_email, this.new_username, this.new_password).subscribe((data:any) =>{
      if(data.result == "success"){
        alert(data.message);
      }else{
        alert(data.message);
      }
    });
  }
}
