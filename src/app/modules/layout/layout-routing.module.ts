import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'solve-n-queen',
    loadChildren: './../solve-n-queen/solve-n-queen.module#SolveNQueenModule',
  },
  {
    path: 'page-not-found',
    loadChildren: './../page-not-found/page-not-found.module#PageNotFoundModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule { }
