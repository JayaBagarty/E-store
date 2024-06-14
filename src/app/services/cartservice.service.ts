import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product-details/product';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  public cartitemlist:any = []
  public productlist = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }

  productAddtoCart(data:Product){
   this.cartitemlist.push(data);
   this.productlist.next(this.cartitemlist);
   console.log(this.cartitemlist);
  }
  products(){
    return this.productlist.asObservable();
  }
}
