import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let element: any

  beforeEach( async () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
    await fixture.whenStable()
    element = fixture.nativeElement
  });


  it('should have a mat-card', () => {
    expect(element.querySelector('mat-card')).not.toBeNull()
  });

  it('should behave an matInput', () => {
    expect(element.querySelector('mat-card mat-form-field input[matInput]')).not.toBeNull()
  });

  it('should behave an button', () => {
    expect(element.querySelector('mat-card mat-form-field+button[mat-raised-button][color=primary]')).not.toBeNull()
  });

  // it('Should have a binding value', async () => {
  //   const TEST_VALUE = 'TEST_VALUE'
  //   fixture.componentInstance.username = 'TEST_VALUE'
  //   fixture.detectChanges()
  //   const compiled = fixture.nativeElement
  //   await fixture.whenStable()
    
  //   expect(compiled.querySelector('mat-card mat-form-field input[matInput]').value).toBe(TEST_VALUE)
  // })

  // it('Should have value in TS', async () => {
  //   const compiled = fixture.nativeElement
  //   fixture.autoDetectChanges(true)
  //   await fixture.whenStable()

  //   compiled.querySelector('input[matInput]').value = 'TEST_VALUE'
  //   compiled.querySelector('input[matInput]').dispatchEvent(new Event('input'))


  //   expect(fixture.componentInstance.username).toBe(compiled.querySelector('input[matInput]').value)
  // })

});
