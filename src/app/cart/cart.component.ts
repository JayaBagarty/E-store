import { Component, OnInit } from '@angular/core';
import { DommyApiService } from '../services/dommy-api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-details/product';
import { CartserviceService } from '../services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  ProductId: null | string = null;
  Product: any = {};
  CartItems: any[] = [];
  CartCount: number = 0;
  constructor(private api: DommyApiService, private cartapi: CartserviceService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.ProductId = this.route.snapshot.paramMap.get('id')
    this.ProductId && this.api.GetProductsById(this.ProductId).subscribe((data) => {
      this.Product = data
    });
  }
  addToCart(item: Product) {
    this.cartapi.productAddtoCart(item);
  }
}