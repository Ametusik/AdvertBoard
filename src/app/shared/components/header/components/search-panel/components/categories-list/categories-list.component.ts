import { Component } from '@angular/core';
import { CategoriesService, ShortCategoryDto } from "../../../../../../../../../client/src/app/core/modules/openapi";
import { ShowCategoriesService } from "../../../../../../services/show-categories.service";
import { SearchService} from "../../../../../../services/search.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  selectedCategory: string = null;

  constructor(
    private showCategoriesService: ShowCategoriesService,
    private searchService: SearchService,
    private categoryService: CategoriesService
  ) {
    this.searchService.selectedCategory$.subscribe(categoryId => {
      this.categoryService.categoriesIdGet(categoryId).subscribe(data=>{
        this.selectedCategory = data.name;
      })
    });
  }

  changeCategoriesViewStatus() {
    this.showCategoriesService.toggleCategories();
  }
}
