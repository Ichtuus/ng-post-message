import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then( m => m.LoginModule),
   },
   {
     path: 'message',
     loadChildren: () => import('./features/message/message.module').then( m => m.MessageModule )
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
