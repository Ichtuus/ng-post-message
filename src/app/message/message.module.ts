import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';



@NgModule({
  declarations: [
    MessageListComponent,
    MessageItemComponent,
    MessageEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageListComponent,
    MessageItemComponent,
    MessageEditorComponent
  ]
})
export class MessageModule { }
