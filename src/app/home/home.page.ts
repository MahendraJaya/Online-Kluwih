import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { NavController } from '@ionic/angular';
import { KluwihserviceService } from '../kluwihservice.service';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CartmodalPage } from '../cartmodal/cartmodal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  cartItemCount: BehaviorSubject<number>;
  constructor(private kluservice:KluwihserviceService, private appC:AppComponent, private modalCtrl:ModalController) {}
  toko: any[] = [];
  cart:any [] = [];
  id_produk_fav:any[] = [];
  produk_favorite :any[] = [];
  coba_num = ""
  ngOnInit(){
    this.kluservice.dataProduk().subscribe((response) => {
      this.toko = response;
    });
    this.kluservice.dataFavorite(Number.parseInt(this.appC.id_pembeli)).subscribe((response) => {
      this.id_produk_fav = response;
    });
    
    this.cart = this.kluservice.getCart();
    this.cartItemCount = this.kluservice.getCartITemCount();
  }

  logout(){
    this.appC.nama_pembeli = '';

    localStorage.removeItem('app_username_pembeli'); 
    localStorage.removeItem('app_nama_pembeli');
    localStorage.removeItem('app_id_pembeli');
  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: CartmodalPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }

  addToCart(ids:number) {
    this.kluservice.addProduk(this.toko[ids]);
    
  }
}
