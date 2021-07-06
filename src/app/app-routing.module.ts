import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/services/user.guard';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: 'home', 
    component: PageComponent, 
    children: [{
      path: '',
      component: LoginComponent 
    }]
  },
  {
    path: 'messages', 
    component: PageComponent,
    loadChildren: () => import('./message/message.module').then(module => module.MessageModule),
    canActivate: [UserGuard]
  },
  {
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full'
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
