import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KluwihserviceService {

  cart:any [] = [];
  produk:any[] = [];
  private cartItemCount = new BehaviorSubject(0);
  constructor(private http: HttpClient) {}

  registerPembeli(nama:string, no_tlp:string, email:string, username:string, password:string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('nama', nama);
    body.set('no_tlp', no_tlp);
    body.set('email', email);
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.me/hybrid/160421043/sew_register.php',
      urlEncodedData,
      { headers }
    );
  }

  loginPembeli(username:string, password:string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.me/hybrid/160421043/sew_login.php',
      urlEncodedData,
      { headers }
    );
  }

  dataProduk() : Observable<any>{
    return this.http.get(
      'https://ubaya.me/hybrid/160421043/sew_getproduk.php'
    );
  }

  dataFavorite(id:number) : Observable<any>{
    return this.http.get(
      'https://ubaya.me/hybrid/160421043/sew_getfavorite.php?id_pembeli=' + id
    );
  }

  getCartITemCount(){
    return this.cartItemCount;
  }

  getCart(){
    return this.cart;
  }

  addProduk(product:any){
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
}
