import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { UiButtonComponent } from './ui-button/ui-button.component';


@NgModule({
  declarations: [
    UiHeaderComponent,
    UiButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  
    UiHeaderComponent,
       UiButtonComponent
  ]
})
export class UiModule { }
