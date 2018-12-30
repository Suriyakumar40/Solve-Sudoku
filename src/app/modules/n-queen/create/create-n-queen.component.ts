import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-queen',
  templateUrl: './create-n-queen.component.html',
  styleUrls: ['./create-n-queen.component.scss']
})

export class CreateNQueenComponent implements OnInit {
  public inputGrid: Array<Array<any>> = new Array<any>();
  public sizeOfSudoku: number;
  public sqrt: number;

  constructor(private router: Router) {
  }

  async ngOnInit() {
    // this.inputGrid = [[0, 2, 0, 1], [1, 0, 0, 4], [0, 4, 0, 3], [3, 0, 4, 0]];
    // this.inputGrid = [[0, 0, 0, 0], [4, 0, 2, 0], [0, 2, 0, 1], [0, 0, 0, 0]];
    this.inputGrid = [
      [3, 0, 6, 5, 0, 8, 4, 0, 0],
      [5, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 8, 7, 0, 0, 0, 0, 3, 1],
      [0, 0, 3, 0, 1, 0, 0, 8, 0],
      [9, 0, 0, 8, 6, 3, 0, 0, 5],
      [0, 5, 0, 0, 9, 0, 6, 0, 0],
      [1, 3, 0, 0, 0, 0, 2, 5, 0],
      [0, 0, 0, 0, 0, 0, 0, 7, 4],
      [0, 0, 5, 2, 0, 6, 3, 0, 0]
    ];
    this.sizeOfSudoku = this.inputGrid ? this.inputGrid.length : 0;
    this.sqrt = Math.sqrt(this.sizeOfSudoku);
  }
}
