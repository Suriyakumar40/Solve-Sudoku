import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolveNQueenComponent } from './solve-n-queen.component';

const routes: Routes = [
  {
    path: '',
    component: SolveNQueenComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SolveNQueenRoutingModule { }
