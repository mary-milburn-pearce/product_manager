import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css']
})
export class ProdEditComponent implements OnInit {

  editProduct: object = {title: "", imageUrl: ""};
  editResults: object;
  
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.editProduct = { id: "", title: "", price: 0, imageUrl: "" }
    this.editResults = { content: "" }
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      let observable = this._httpService.getProduct(params.id);
      observable.subscribe(data => {
        console.log("Returned:", data);
        if (data['errors']) {
          this.editResults['content']=data['message']
        } else {
          this.editProduct = data;
          console.log('editProduct:', this.editProduct)
        }
      });
    })
  }

  onSubmitEdit() {
    let id = this.editProduct['_id'];
    console.log("onSubmit: ", "Id:", id, this.editProduct);
    let observable = this._httpService.putToServer(id, this.editProduct);
    observable.subscribe(data => {
      console.log("Returned:", data);
      if (data != null && data != undefined) { 
        if (data['errors']) {
          this.editResults['content']=data['message'];
        }
      } else {
        this._router.navigate(['/products']);
      }
    });
  }

  delProduct(id) {
    console.log('Delete ID:', id);
    let observable = this._httpService.deleteFromServer(id);
    observable.subscribe(data => {
      console.log("Delete Returned:", data);
      if (data['errors']) {
        this.editResults['content']=data['message']
      } else {
        this._router.navigate(['/products']);
      }
    });
  }
}
