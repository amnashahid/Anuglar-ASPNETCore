import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../app/models/product';

@Injectable({
  providedIn: 'root'
})
export class AspNetApiService {

  url: string = "https://localhost:44395/products"
  
  constructor(private http: HttpClient) { }

  getProducts()
  {
    return this.http.get<Product[]>(this.url);
  }
  getProductDetails(id: number)
  {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
  AddProducts(ob:Product)
  {
    return this.http.post(this.url, ob);
  }
  UpdateProducts(ob:Product)
  {
    return this.http.put(`${this.url}/${ob.id}`,ob);
  }
  DeleteProducts(id)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
}
