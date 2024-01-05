import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { KluwihserviceService } from '../kluwihservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  isGanti = "0"
  new_password = ""
  constructor(private appC:AppComponent, private kluservice:KluwihserviceService) { }
  nama_pembeli = this.appC.nama_pembeli;
  iduser= this.appC.id_pembeli;
  ngOnInit() {
  }

  changePassword(num:string){
    this.isGanti = num;
  }

  gantiPassword(){
    this.kluservice.gantiPasswordpembeli(this.iduser, this.new_password)
    .subscribe();
  }
}
