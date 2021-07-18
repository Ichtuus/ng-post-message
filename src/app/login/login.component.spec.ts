import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DispatcherService } from '../core/services/dispatcher.service';
import { Action, Dispatcher } from '../core/interfaces/dispatcher';
import { ApplicationState } from '../core/interfaces/application-state';

import { BehaviorSubject } from 'rxjs';

import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from './login.component';
import { MatImportModule } from '../mat-import/mat-import.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


class MockDispatcher implements Dispatcher<ApplicationState> {
  state$ = new BehaviorSubject<ApplicationState> (
    {
      currentUser: null,
      users: [],
      messages: []
    }
  )
  action$ = new BehaviorSubject<Action> ({type: 'TEST', data: null});
  dispatch(action: Action): void {
    throw new Error('Method not implemented.');
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        MatImportModule,
        BrowserAnimationsModule
      ],
      providers: [ 
        { provide: DispatcherService, useClass: MockDispatcher }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Should input field', () => {
    const compiled = fixture.nativeElement

    expect(component).toBeTruthy()
    expect(compiled.querySelector('form>mat-form-field input[matInput][name=username]')).not.toBeNull()
  })
  
  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a binding value', async () => {
    const TEST_VALUE = 'TEST_VALUE'
    fixture.componentInstance.username = 'TEST_VALUE'
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    await fixture.whenStable()
    
    expect(compiled.querySelector('input[matInput]').value).toBe(TEST_VALUE)
  })

  it('Should have value in TS', async () => {
    const compiled = fixture.nativeElement
    fixture.autoDetectChanges(true)
    await fixture.whenStable()

    compiled.querySelector('input[matInput]').value = 'TEST_VALUE'
    compiled.querySelector('input[matInput]').dispatchEvent(new Event('input'))


    expect(fixture.componentInstance.username).toBe(compiled.querySelector('input[matInput]').value)
  })

  it('Should have an event click', async () => {
    const connectSpy = spyOn(fixture.componentInstance, 'sendMessage').and.callThrough()
    const mockDispatcherSpy = spyOn(fixture.componentInstance.dispatcher, 'dispatch')

    fixture.componentInstance.username = 123
    fixture.autoDetectChanges(true)
    fixture.nativeElement.querySelector('button').click()
    await fixture.whenStable()

    expect(connectSpy).toHaveBeenCalled()
    expect(mockDispatcherSpy).toHaveBeenCalledWith({type: 'LOGIN', data: 123 })
  })
});