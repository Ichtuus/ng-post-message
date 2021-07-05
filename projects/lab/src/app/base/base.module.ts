import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { BaseDirective } from './base.directive';
import { BasePipe } from './base.pipe';



@NgModule({
  declarations: [
    BaseComponent,
    BaseDirective,
    BasePipe
  ],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }
