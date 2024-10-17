import { Component, OnInit} from '@angular/core';
import { CategoriesService, CategoryDto } from "../../../../../../../../../client/src/app/core/modules/openapi";
import { ShowCategoriesService } from "../../../../../../services/show-categories.service";
import {SearchService} from "../../../../../../services/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories-dropdown',
  templateUrl: './categories-dropdown.component.html',
  styleUrls: ['./categories-dropdown.component.scss']
})
export class CategoriesDropdownComponent implements OnInit {
  mainCategories: CategoryDto[] = [];
  selectedSubcategories: CategoryDto[] = [];
  selectedSubcategoriesOfSubcategory: CategoryDto[] = [];
  parentCategoryId = "00000000-0000-0000-0000-000000000000";
  areCategoriesVisible: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
    private showCategoriesService: ShowCategoriesService,
    private transferCategoryService : SearchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadMainCategories();

    this.showCategoriesService.showCategories$.subscribe(visible => {
      this.areCategoriesVisible = visible;
      if (!visible) {
        this.resetCategories();
      }
    });
  }

  loadMainCategories() {
    this.categoriesService.categoriesGet().subscribe(data => {
      this.mainCategories = data.filter(category => category.parentId === this.parentCategoryId);
    });
  }

  loadSubcategories(categoryId: string) {
    this.categoriesService.categoriesIdGet(categoryId).subscribe(category => {
      this.selectedSubcategories = category.childs;
      this.selectedSubcategoriesOfSubcategory = [];
    });
  }

  loadSubcategoriesOfSubcategory(subcategoryId: string) {
    this.categoriesService.categoriesIdGet(subcategoryId).subscribe(subcategory => {
      this.selectedSubcategoriesOfSubcategory = subcategory.childs;
    });
  }

  selectCategory(categoryId: string) {
    this.transferCategoryService.setSelectedCategory(categoryId);
    this.showCategoriesService.toggleCategories();
    this.router.navigate(['/'])
  }

  onMouseEnter(categoryId: string) {
    this.loadSubcategories(categoryId);
  }

  onSubcategoryMouseEnter(subcategoryId: string) {
    this.loadSubcategoriesOfSubcategory(subcategoryId);
  }

  resetCategories() {
    this.selectedSubcategories = [];
    this.selectedSubcategoriesOfSubcategory = [];
  }
}
