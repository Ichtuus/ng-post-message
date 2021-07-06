import { Component, OnInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DispatcherService } from '../core/services/dispatcher.service';
import { UserService } from '../core/services/user.service';
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

  sendMessage (data: NgForm) {
    if (data.value.username) {
      this.dispatcher.dispatch({type: 'LOGIN', data: data.value})
    }
  }
}
