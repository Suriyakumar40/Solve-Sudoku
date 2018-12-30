import { NgModule } from '@angular/core';
import { SolveNQueenRoutingModule } from './solve-n-queen-routing.module';
import { SolveNQueenComponent } from './solve/solve-n-queen.component';
import { CreateNQueenComponent } from './create/create-n-queen.component';
import { DashboardNQueenComponent } from './dashboard/dashboard-n-queen.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SolveNQueenRoutingModule
  ],
  declarations: [
    DashboardNQueenComponent,
    CreateNQueenComponent,
    SolveNQueenComponent,
  ],
  providers: [
  ]
})

export class SolveNQueenModule {}
