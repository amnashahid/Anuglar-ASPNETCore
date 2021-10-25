
import { Component } from '@angular/core';
import { AspNetApiService } from '../asp-net-api.service';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-root',
  templateUrl: './product-list.component.html'
})
export class ProductList {
  title = 'app';
  products: Product[] = [];

  constructor(private rs: AspNetApiService,private router:Router) {
  }
  delete(id: number)
  {
    this.rs.DeleteProducts(id).subscribe(
      (res:Product) => { this.products.splice(this.products.indexOf(res), 1);},
      (err) => { alert('Could not delete'); console.log(err);}
      
    );
  }
    
  ngOnInit(): void{
    this.rs.getProducts().subscribe(

      (res) =>
      {
        console.log(res);
        this.products = res;
      },
      (error) => { }
    );
  }
}




