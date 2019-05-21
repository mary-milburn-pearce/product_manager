import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: [];

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService() {
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.products = data['data'];
    })
  }

  delProduct(id) {
    let observable = this._httpService.deleteFromServer(id);
    observable.subscribe(data => {
      console.log("Delete Returned:", data);
      if (data['errors']) {
        //
      } else {
        this.getProductsFromService();
      }
    });
  }
}
