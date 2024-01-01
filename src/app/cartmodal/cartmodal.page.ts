import { Component, OnInit } from '@angular/core';
import { KluwihserviceService } from '../kluwihservice.service';
import { ModalController } from '@ionic/angular';
import { format, formatISO9075, parseISO } from 'date-fns';

@Component({
  selector: 'app-cartmodal',
  templateUrl: './cartmodal.page.html',
  styleUrls: ['./cartmodal.page.scss'],
})
export class CartmodalPage implements OnInit {
  constructor(
    private kluservice: KluwihserviceService,
    private modalCtrl: ModalController
  ) {}
  cart: any[] = [];
  formated_tgl = '';
  date = '';
  min_date = new Date().toISOString();
  
  ngOnInit() {
    this.cart = this.kluservice.getCart();
  }

  increaseCartItem(product: any) {
    this.kluservice.addProduk(product);
  }

  formatTgl() {
    //this.formated_tgl = formatISO9075(Date.parse(this.date));
    return formatISO9075(Date.parse(this.date));
  }

  checkout() {
    let totHarga = 0;
    let id_pembeli = localStorage.getItem('app_id_pembeli') ?? 'SS';
    this.cart.forEach((data) => {
      totHarga = data.harga * data.amount;
      this.kluservice
        .inputPesanan(
          totHarga,
          Number.parseInt(id_pembeli),
          1,
          this.formatTgl()
        )
        .subscribe((response: any) => {
          if (response.result == '200') {
            this.kluservice
              .inputDetailpesanan(
                data.id,
                response.message.id,
                data.amount,
                data.opsi
              )
              .subscribe((responses: any) => {
                if (responses.result == '200') {
                  alert('Yay berhasil :D');
                  this.close();
                } else {
                  alert('something wong');
                }
              });
          }
        });
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
