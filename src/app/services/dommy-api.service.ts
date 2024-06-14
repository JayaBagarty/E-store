import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DommyApiService {

  constructor(private _http:HttpClient) { }
  getProduct():Observable<any[]>{
    return this._http.get<any[]>('https://fakestoreapi.com/products');
  }
  GetAllCategories():Observable<any[]>{
    return this._http.get<any[]>('https://fakestoreapi.com/products/categories');
  }
  GetProductsById(id:string|null):Observable<any>{
    return this._http.get<any>(`https://fakestoreapi.com/products/${id}`);
  }
}
