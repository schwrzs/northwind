import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
categories : Category[]=[];
currentCategory : Category;
isAllSelected = true;
constructor(private categoryService:CategoryService) {}
ngOnInit(): void{
  this.getCategories()
}
getCategories(){
this.categoryService.getCategories().subscribe(response=>{
  this.categories = response.data
})
}
setCurrentCategory(category:Category){
  this.currentCategory =category;
  this.isAllSelected = false;
}

toggleAllSelection() {
  // this.isAllSelected = true;

  // this.currentCategory = null;
  this.isAllSelected = !this.isAllSelected; // Toggle the selection for "All of Them"
}

getCurrentCategoryClass(category:Category){
  if(category == this.currentCategory){
    return  "list-group-item active"
  }
  return "list-group-item"
}

getAllCategoryClass(){
  if(!this.currentCategory){
        return  "list-group-item active"
  }
  else{
    return "list-group-item"
  }
}
}
