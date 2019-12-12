import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'puzzle',
    loadChildren: './modules/layout/layout.module#LayoutModule',
  },
  {
    path: '',
    redirectTo: 'puzzle/n-queen',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'puzzle/page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
