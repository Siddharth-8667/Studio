import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
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
