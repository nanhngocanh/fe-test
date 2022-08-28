import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exception400Component } from './exception/exception400/exception400.component';
import { Exception403Component } from './exception/exception403/exception403.component';
import { Exception404Component } from './exception/exception404/exception404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '404',
    component: Exception404Component,
  },
  {
    path: '403',
    component: Exception403Component,
  },
  {
    path: '400',
    component: Exception400Component,
  },
  {
    path: '**',
    component: Exception404Component,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
