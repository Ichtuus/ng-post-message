import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  beforeEach( async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  let fixture, component, element: any

  beforeEach( async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
    await fixture.whenStable()
    element = fixture.nativeElement
  });


  it('should create a router-outlet', () => {
    expect(element.querySelector('router-outlet')).not.toBeNull()
  });

  it('Should have mat-toolbar', () => {
    expect(element.querySelector('mat-toolbar')).not.toBeNull()
    expect(element.querySelector('mat-toolbar>h2')).not.toBe('COBALT')
  })
});
