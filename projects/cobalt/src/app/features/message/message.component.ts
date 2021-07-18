import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMessages } from '../../core/actions';

@Component({
  selector: 'feature-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {
  }

  loadMessagesHandler () {
    this.store.dispatch( loadMessages() )
  }
}
