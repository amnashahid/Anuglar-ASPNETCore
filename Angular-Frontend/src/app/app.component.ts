import { Component } from '@angular/core';
import {AspNetApiService } from '../app/asp-net-api.service';
import { Product } from '../app/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
    
  ngOnInit(): void{
    
  }
}
