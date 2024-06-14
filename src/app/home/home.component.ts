import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  searchTerm: string = '';
  cartItems: number = 0;
  constructor(private cartSvc: CartserviceService) { }
  ngOnInit(): void {
    this.cartSvc.products().subscribe(res => {
      this.cartItems = res.length
    })
  }
  search(e: any) {
    this.searchTerm = (e.target as HTMLInputElement).value
    console.log(this.searchTerm);
    this.cartSvc.search.next(this.searchTerm);
  }
}
