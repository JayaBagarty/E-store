import { Component, OnInit } from '@angular/core';
import { DommyApiService } from '../services/dommy-api.service';
import { CartserviceService } from '../services/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productList: any;
  productDetails:any;
  filterCategory: any;
  categoryList: any
  searchKey: string = ''
  constructor(private prodSvc: DommyApiService, private cartSvc: CartserviceService, private router:Router) { }
  ngOnInit(): void {
    this.getAllProduct()
    this.prodSvc.GetAllCategories().subscribe(res => {
      this.categoryList = res
      this.cartSvc.search.subscribe(val => {
        this.searchKey = val;
      })
    })
  }
  getAllProduct() {
    this.prodSvc.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
    })
  }
  filter(data: any) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == data || data == '') {
        return a;
      }
    })
  }
}
