import { NgModule } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { MessageModule } from '../message/message.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    SharedModule,
    LoginModule,
    MessageModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
