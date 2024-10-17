import { TestBed } from '@angular/core/testing';

import { ShowAuthModalService } from './show-auth-modal.service';

describe('ShowAuthModalService', () => {
  let service: ShowAuthModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowAuthModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
