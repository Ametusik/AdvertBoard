import { Component } from '@angular/core';
import {SearchService} from "../../../../../../services/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  searchQuery: string = '';

  constructor(private searchService: SearchService,
              private router: Router) {}

  onSearch() {
    this.searchService.setSearchQuery(this.searchQuery);
    this.searchService.setSelectedCategory(null);
    this.router.navigate(['/'])
  }
}
