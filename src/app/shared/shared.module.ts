import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  exports: [
    CommonModule,
    UiModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
