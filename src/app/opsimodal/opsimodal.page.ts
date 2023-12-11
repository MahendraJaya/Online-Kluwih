import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KluwihserviceService } from '../kluwihservice.service';

@Component({
  selector: 'app-opsimodal',
  templateUrl: './opsimodal.page.html',
  styleUrls: ['./opsimodal.page.scss'],
})
export class OpsimodalPage implements OnInit {
  constructor(
    private kluservice: KluwihserviceService,
    private modalCtrl: ModalController
  ) {}
  id_produk = 0;
  tmp_opsi = '';
  data_produk: any = []
  data_opsi: { [key: string]: string[] } = {};
  keys: string[] = [];
  selectedOptions: { [key: string]: { [option: string]: boolean } } = {};
  opsi_result: any[] = [];

  ngOnInit() {
    this.kluservice.dataOpsi(this.id_produk).subscribe((response) => {
      this.data_opsi = response.result;
      this.keys = Object.keys(this.data_opsi);

      // Initialize selected options object with 'false' for every option
      this.keys.forEach((key) => {
        this.selectedOptions[key] = {};
        this.data_opsi[key].forEach((option) => {
          this.selectedOptions[key][option] = false;
        });
      });
    });
  }

  ionViewWillEnter() {
    this.kluservice.dataOpsi(this.id_produk).subscribe((response) => {
      this.data_opsi = response.result;
      this.keys = Object.keys(this.data_opsi);

      // Initialize selected options object with 'false' for every option
      this.keys.forEach((key) => {
        this.selectedOptions[key] = {};
        this.data_opsi[key].forEach((option) => {
          this.selectedOptions[key][option] = false;
        });
      });
    });
  }

  // Function to handle checkbox changes
  onCheckboxChange(key: string, option: string) {
    // Toggle the boolean value for the clicked option
    this.selectedOptions[key][option] = !this.selectedOptions[key][option];
  }

  // Function to get selected values with 'true' values
  getSelectedValues() {
    const result: string[] = [];
    this.keys.forEach((key) => {
      Object.keys(this.selectedOptions[key]).forEach((option) => {
        if (this.selectedOptions[key][option]) {
          result.push(option);
          this.tmp_opsi = this.tmp_opsi + option + ', ';
        }
      });
    });
    this.opsi_result = result;
    this.data_produk['opsi'] = this.tmp_opsi
    this.kluservice.addProduk(this.data_produk)
    this.close();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
