import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { product } from '../data-type';

@Component({
  selector: 'app-admin-add-projects',
  templateUrl: './admin-add-projects.component.html',
  styleUrl: './admin-add-projects.component.css'
})
export class AdminAddProjectsComponent { addProductMessage: string | undefined;
  constructor(private product: ProjectsService) {}
  ngOnInit(): void {}
  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
      setTimeout(() => {
        this.addProductMessage=undefined
      }, 3000);
    });
    

}
}
