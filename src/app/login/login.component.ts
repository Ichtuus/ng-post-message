import { Component, OnInit, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DispatcherService } from '../core/services/dispatcher.service';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: any

  constructor(
    @Optional() page: PageComponent,
    public title: Title,
    public dispatcher: DispatcherService
  ) {
    if (page) {
      page.pageTitle = 'Login'
    }
    title.setTitle('Login')
   }

  ngOnInit(): void {}

  sendMessage () {
    if (this.username) {
      this.dispatcher.dispatch({type: 'LOGIN', data: this.username})
    }
  }
}
