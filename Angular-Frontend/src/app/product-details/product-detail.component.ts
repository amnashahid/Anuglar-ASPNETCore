import { Component ,OnInit} from '@angular/core';
import { AspNetApiService } from '../asp-net-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
@Component({
    templateUrl: './product-detail.component.html'
  })
export class ProductDetail  {
    product: Product;
    isAdd: boolean = true;
    constructor(
    private productService:AspNetApiService,
        private route: ActivatedRoute,
    private router:Router) {
        this.product=new Product(0,"","","",0,0,0);
        
        
    }
    Save() {
        console.log(this.product);
        if (this.isAdd)
            this.productService.AddProducts(this.product).subscribe(res => { 
                this.router.navigateByUrl('/list');
            },
                err => { alert("dssd")});
        else
            this.productService.UpdateProducts(this.product).subscribe(res => { 
                this.router.navigateByUrl('/list');});
       
}


    ngOnInit(): void {
        
        this.route.params.subscribe(params => {
            if (params.id) {
                this.isAdd = !params.id;
                this.productService.getProductDetails(params.id).subscribe(

                    (res: Product) => this.product=res,
                    (err: any) => console.log(err)
                );
            }
        
        
        }
        );
    
    

    }
}
