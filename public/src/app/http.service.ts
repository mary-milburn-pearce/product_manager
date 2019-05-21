import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private _http: HttpClient){
  }
  getProducts(){
    return this._http.get('/products/all');
  }
  getProduct(id){
    let url = '/products/' + id;
    return this._http.get(url);
  }
  postToServer(newProduct){
    return this._http.post('/products', newProduct);  
  }
  putToServer(id, editProduct){
    let url = '/products/' + id;
    console.log(`Putting to url: ${url}`, editProduct);
    return this._http.put(url, editProduct);
  }
  deleteFromServer(id){
    return this._http.delete('/products/' + id);  
  }
}
  


