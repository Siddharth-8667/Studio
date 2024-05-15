import { Component,OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../services/projects.service';
import { product } from '../data-type';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string;
  icon = faTrash;
  iconEdit=faEdit;
  constructor(private product: ProjectsService) {}

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';

        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  list() {
    this.product.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
// import { ProjectsService } from '../services/projects.service';
// import { product } from '../data-type';
// @Component({
//   selector: 'app-seller-home',
//   templateUrl: './seller-home.component.html',
//   styleUrls: ['./seller-home.component.css'],
// })
// export class AdminHomeComponent 