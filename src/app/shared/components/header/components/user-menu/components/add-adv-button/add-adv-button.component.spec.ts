import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvButtonComponent } from './add-adv-button.component';

describe('AddAdvButtonComponent', () => {
  let component: AddAdvButtonComponent;
  let fixture: ComponentFixture<AddAdvButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdvButtonComponent]
    });
    fixture = TestBed.createComponent(AddAdvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
