import { Component,OnInit } from '@angular/core';
import { product } from '../data-type';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-admin-update-projects',
  templateUrl: './admin-update-projects.component.html',
  styleUrl: './admin-update-projects.component.css'
})
export class AdminUpdateProjectsComponent  implements OnInit {
  productData: undefined | product;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product:  ProjectsService) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        console.warn(data);
        this.productData = data;
      });
  }
  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has updated';
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
    console.warn(data);
  }
}

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { product } from '../data-type';
// import { ProjectsService } from '../services/projects.service';

// @Component({
//   selector: 'app-seller-update-product',
//   templateUrl: './seller-update-product.component.html',
//   styleUrls: ['./seller-update-product.component.css'],
// })
// export class AdminUpdateProjectsComponent