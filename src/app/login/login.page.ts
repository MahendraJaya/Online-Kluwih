import { Component, OnInit } from '@angular/core';
import { KluwihserviceService } from '../kluwihservice.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private kluservice: KluwihserviceService,
    private rout: Router,
    private appC: AppComponent
  ) {}

  new_username = '';
  new_password = '';

  ngOnInit() {}

  loginPembeli() {
    this.kluservice
      .loginPembeli(this.new_username, this.new_password)
      .subscribe((response: any) => {
        if (response[0].result == 'success') {
          this.appC.id_pembeli = response[0].data[0].id;
          this.appC.nama_pembeli = response[0].data[0].nama;
          this.rout.navigate(['/home']);
        } else {
          alert(response[0].data);
        }
      });
  }
}
