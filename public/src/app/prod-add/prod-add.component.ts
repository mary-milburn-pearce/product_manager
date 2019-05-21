import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css']
})
export class ProdAddComponent implements OnInit {

  newProduct: object;
  addResults: object;

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.newProduct = { title: "", imageUrl: "", price: 0 }
    this.addResults = { content: "" }
  }

  onSubmitAdd() { 
    console.log(this.newProduct)
    let observable = this._httpService.postToServer(this.newProduct);
    observable.subscribe(data => {
      if (data['errors']) {
        this.addResults['content']=data['message']
      } else {
        this._router.navigate(['/products']);
      }
    });
    this.newProduct = { title: "", imageUrl: "", price: 0 }
    this.addResults = { content: "" };
  }
}
