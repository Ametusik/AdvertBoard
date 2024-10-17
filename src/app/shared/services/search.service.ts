import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchQuerySource = new BehaviorSubject<string>('');
  private selectedCategorySource = new BehaviorSubject<string | null>(null);

  searchQuery$ = this.searchQuerySource.asObservable();
  selectedCategory$ = this.selectedCategorySource.asObservable();

  setSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }

  setSelectedCategory(categoryId: string | null) {
    this.selectedCategorySource.next(categoryId);
  }
}
