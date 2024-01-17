import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellFieldComponent } from './cell-field.component';

describe('CellFieldComponent', () => {
  let component: CellFieldComponent;
  let fixture: ComponentFixture<CellFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellFieldComponent]
    });
    fixture = TestBed.createComponent(CellFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
