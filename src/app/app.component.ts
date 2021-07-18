import { Component, Inject } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(@Inject(UserService) public us: UserService) {
  // }
  constructor () {}
}
