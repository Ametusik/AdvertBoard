import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdvComponent } from './create-adv.component';

describe('CreateAdvComponent', () => {
  let component: CreateAdvComponent;
  let fixture: ComponentFixture<CreateAdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAdvComponent]
    });
    fixture = TestBed.createComponent(CreateAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
