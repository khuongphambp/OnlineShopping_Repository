import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateProductsComponent } from './admin-create-products.component';

describe('AdminCreateProductsComponent', () => {
  let component: AdminCreateProductsComponent;
  let fixture: ComponentFixture<AdminCreateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
