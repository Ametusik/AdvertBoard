import { TestBed } from '@angular/core/testing';

import { ShowCategoriesService } from './show-categories.service';

describe('ShowCategoriesServiceService', () => {
  let service: ShowCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
