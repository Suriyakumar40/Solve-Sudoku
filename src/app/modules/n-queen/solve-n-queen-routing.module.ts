import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardNQueenComponent } from './dashboard/dashboard-n-queen.component';
import { CreateNQueenComponent } from './create/create-n-queen.component';
import { SolveNQueenComponent } from './solve/solve-n-queen.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardNQueenComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateNQueenComponent,
  },
  {
    path: 'solve',
    component: SolveNQueenComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SolveNQueenRoutingModule { }
