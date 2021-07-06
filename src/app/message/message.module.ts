import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MessageListComponent
  }
]


@NgModule({
  declarations: [
    MessageListComponent,
    MessageItemComponent,
    MessageEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MessageListComponent,
    MessageItemComponent,
    MessageEditorComponent,
    RouterModule
  ]
})
export class MessageModule { }
