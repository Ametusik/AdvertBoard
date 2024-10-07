import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertContentComponent } from './advert-content.component';

describe('AdvertContentComponent', () => {
  let component: AdvertContentComponent;
  let fixture: ComponentFixture<AdvertContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertContentComponent]
    });
    fixture = TestBed.createComponent(AdvertContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
