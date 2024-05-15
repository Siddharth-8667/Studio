import { Component ,OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProjectsService } from '../services/projects.service';
@Component({
  selector: 'app-user-interior-projects',
  templateUrl: './user-interior-projects.component.html',
  styleUrl: './user-interior-projects.component.css'
})
export class UserInteriorProjectsComponent implements OnInit {
  popularProducts:undefined|product[];
  trendyProducts:undefined | product[];
   constructor(private product:ProjectsService) {}
 
   ngOnInit(): void {
     this.product.popularProducts().subscribe((data)=>{
       this.popularProducts=data;
     })
 
     this.product.trendyProducts().subscribe((data)=>{
       this.trendyProducts=data;
     })
   }
 }
