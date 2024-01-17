import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFieldRunComponent } from './type-field-run.component';

describe('TypeFieldRunComponent', () => {
  let component: TypeFieldRunComponent;
  let fixture: ComponentFixture<TypeFieldRunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeFieldRunComponent]
    });
    fixture = TestBed.createComponent(TypeFieldRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
