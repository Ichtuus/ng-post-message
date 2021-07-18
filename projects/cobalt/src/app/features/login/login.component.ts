import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { connectUser } from '../../core/actions';

@Component({
  selector: 'feature-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: any

  constructor(
    public store: Store,
    public router: Router
    ) { }

  ngOnInit(): void {
  }

  connect () {
    // console.log('Username', this.username)
    this.store.dispatch( connectUser({ data: this.username }) )
  }

}
