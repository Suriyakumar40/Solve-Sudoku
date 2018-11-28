import { NgModule } from '@angular/core';
import { SolveNQueenRoutingModule } from './solve-n-queen-routing.module';
import { SolveNQueenComponent } from './solve-n-queen.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SolveNQueenRoutingModule
  ],
  declarations: [
    SolveNQueenComponent
  ],
  providers: [
  ]
})

export class SolveNQueenModule {}
