import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { messageEffects } from './effects/message.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      messageEffects
    ])
  ],
  providers: [
    UserService,
    MessageService
  ],
  exports: [
    StoreModule
  ]
})
export class CoreModule { 
  constructor(store: Store) {
  }
}