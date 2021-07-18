import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';
import { ApplicationState } from './core/interfaces/application-state';
import { Action, Dispatcher } from './core/interfaces/dispatcher';
import { DispatcherService } from './core/services/dispatcher.service';

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

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('should render page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('router-outlet')).not.toBeNull()
  });
});
