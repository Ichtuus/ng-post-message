import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatImportModule } from '../mat-import/mat-import.module'



@NgModule({
  exports: [
    CommonModule,
    UiModule,
    FormsModule,
    HttpClientModule,
    MatImportModule
  ]
})
export class SharedModule { }
