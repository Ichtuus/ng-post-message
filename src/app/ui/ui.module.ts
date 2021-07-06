import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { MatImportModule } from '../mat-import/mat-import.module';


@NgModule({
  declarations: [
    UiHeaderComponent,
    UiButtonComponent
  ],
  imports: [
    CommonModule,
    MatImportModule
  ],
  exports: [
    UiHeaderComponent,
    UiButtonComponent
  ]
})
export class UiModule { }
