import { Component, OnInit } from '@angular/core';
import {
  AdvertDto,
  AdvertSearchRequestDto,
  AdvertService,
} from "../../../../../../client/src/app/core/modules/openapi";
import { SearchService } from "../../../../shared/services/search.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  search: string = '';
  advertList: AdvertDto[] = [];
  currentCategoryId: string | null = null;

  constructor(
    private searchService: SearchService,
    private advertService: AdvertService,
  ) {}

  ngOnInit() {
    this.searchService.searchQuery$.subscribe(query => {
      this.search = query;
      this.loadFilteredAds();
    });

    this.searchService.selectedCategory$.subscribe(categoryId => {
      this.currentCategoryId = categoryId;

      if (categoryId) {
        this.loadAds(categoryId);
      } else {
        this.loadFilteredAds();
      }
    });

    this.loadFilteredAds();
  }

  loadAds(categoryId: string) {
    let adv: AdvertSearchRequestDto = {
      search: this.search,
      category: categoryId,
      showNonActive: true
    };
    this.advertService.advertSearchPost(adv).subscribe(ads => {
      this.advertList = ads;
    });
  }

  loadFilteredAds() {
    let adv: AdvertSearchRequestDto = {
      search: this.search,
      category: this.currentCategoryId,
      showNonActive: true
    };
    this.advertService.advertSearchPost(adv).subscribe(ads => {
      this.advertList = ads;
    });
  }
}
