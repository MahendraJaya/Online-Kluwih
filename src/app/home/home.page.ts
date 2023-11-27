import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { NavController } from '@ionic/angular';
import { KluwihserviceService } from '../kluwihservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(private kluservice:KluwihserviceService) {}
  toko: any[] = [];
  ngOnInit(){
    this.kluservice.dataTokopenjual().subscribe((response) => {
      this.toko = response;
    });
  }
}
