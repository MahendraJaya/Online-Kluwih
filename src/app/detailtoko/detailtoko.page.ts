import { Component, OnInit } from '@angular/core';
import { KluwihserviceService } from '../kluwihservice.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CartmodalPage } from '../cartmodal/cartmodal.page';

@Component({
  selector: 'app-detailtoko',
  templateUrl: './detailtoko.page.html',
  styleUrls: ['./detailtoko.page.scss'],
})
export class DetailtokoPage implements OnInit {
  cartItemCount: BehaviorSubject<number>;

  constructor(private kluservice:KluwihserviceService, private route: ActivatedRoute, private modalCtrl:ModalController) { }
  produk: any[] = [];
  cart:any [] = [];
  coba_num = ""

  index = 0;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.index = params['index'];
    });

    this.cart = this.kluservice.getCart();
    this.cartItemCount = this.kluservice.getCartITemCount();
  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: CartmodalPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }

  addToCart(ids:number) {
    this.kluservice.addProduk(this.produk[ids]);  
  }
}
