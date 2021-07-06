import { Component, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DispatcherService } from 'src/app/core/services/dispatcher.service';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {

  constructor(
    @Optional() page: PageComponent,
    documentTitle: Title,
    public dispatcher: DispatcherService
  ) { 
    if (page) {
      page.pageTitle = 'Message'
    }
    documentTitle.setTitle('Message') 
  }
}
