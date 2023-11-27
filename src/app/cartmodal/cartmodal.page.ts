import { Component, OnInit } from '@angular/core';
import { KluwihserviceService } from '../kluwihservice.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cartmodal',
  templateUrl: './cartmodal.page.html',
  styleUrls: ['./cartmodal.page.scss'],
})
export class CartmodalPage implements OnInit {

  constructor(private kluservice:KluwihserviceService, private modalCtrl:ModalController) { }
  cart:any[] = []

  ngOnInit() {
    this.cart = this.kluservice.getCart();
  }

  increaseCartItem(product:any) {
    this.kluservice.addProduk(product);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
