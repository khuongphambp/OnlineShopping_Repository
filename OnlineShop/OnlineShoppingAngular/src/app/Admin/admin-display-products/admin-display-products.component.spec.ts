import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayProductsComponent } from './admin-display-products.component';

describe('AdminDisplayProductsComponent', () => {
  let component: AdminDisplayProductsComponent;
  let fixture: ComponentFixture<AdminDisplayProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
