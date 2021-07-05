import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfComponent } from './prf.component';

describe('PrfComponent', () => {
  let component: PrfComponent;
  let fixture: ComponentFixture<PrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
