import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdvFormComponent } from './create-adv-form.component';

describe('CreateAdvFormComponent', () => {
  let component: CreateAdvFormComponent;
  let fixture: ComponentFixture<CreateAdvFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAdvFormComponent]
    });
    fixture = TestBed.createComponent(CreateAdvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
