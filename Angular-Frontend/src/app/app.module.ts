import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetail } from './product-details/product-detail.component';
import { ProductList } from './product-list/product-list.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,ProductDetail,ProductList
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'list',  pathMatch: 'full' },
      { path: 'list', component: ProductList, pathMatch: 'full' },
      { path: 'details/:id', component: ProductDetail },
      { path: 'add', component: ProductDetail },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
