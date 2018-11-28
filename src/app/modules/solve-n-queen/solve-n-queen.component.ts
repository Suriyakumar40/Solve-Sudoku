import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solven-queen',
  templateUrl: './solve-n-queen.component.html',
  styleUrls: ['./solve-n-queen.component.scss']
})
export class SolveNQueenComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
}
