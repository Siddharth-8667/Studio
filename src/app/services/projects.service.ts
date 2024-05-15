// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProjectsService {

//   constructor() { }
// }
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {  product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) { }
  addProduct(data: product) {
    return this.http.post('http://localhost:3000/projects', data);
  }
  productList() {
    return this.http.get<product[]>('http://localhost:3000/projects');
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/projects/${id}`);
  }

  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/projects/${id}`);
  }

  updateProduct(product: product) {
    return this.http.put<product>(
      `http://localhost:3000/projects/${product.id}`,
      product
    );
  }
  popularProducts() {
    return this.http.get<product[]>('http://localhost:3000/projects?_limit=3');
  }

  trendyProducts() {
    return this.http.get<product[]>('http://localhost:3000/projects?_limit=8');
  }

 





}