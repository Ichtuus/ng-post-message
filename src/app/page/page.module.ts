import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatImportModule } from '../mat-import/mat-import.module';
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    MatImportModule
    
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
