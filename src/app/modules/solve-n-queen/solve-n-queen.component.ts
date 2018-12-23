import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solven-queen',
  templateUrl: './solve-n-queen.component.html',
  styleUrls: ['./solve-n-queen.component.scss']
})

export class SolveNQueenComponent implements OnInit {
  public grid: Array<Array<any>>;
  public length: number;
  public sqrt: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.grid = [[0, 0, 0, 0], [4, 0, 2, 0], [0, 2, 0, 1], [0, 0, 0, 0]];
    this.length = this.grid ? this.grid.length : 0;
    this.sqrt = Math.sqrt(this.length);
    const result = this.solveSudoku();
  }

  public async solveSudoku() {
    for (let num = 1; num <= this.length; num++) {
      const [row, column] = await this.findUnassignedPosition();
      const safe = await this.isSafe(row, column, num);
    }
  }

  public async findUnassignedPosition(): Promise<Array<any>> {
    for (let row = 0; row < this.length; row++) {
      for (let col = 0; col < this.length; col++) {
        if (this.grid[row][col] === 0) {
          return [row, col];
        }
      }
    }
  }

  public async isSafe(row, col, number) {
    let isNotUsed = !this.alreadyInRow(row, number) && !this.alreadyInColumn(col, number);
    if (isNotUsed) {
      isNotUsed = await !this.alreadyInBox(row, col, number);
    }
    return isNotUsed;
  }

  public alreadyInRow(row, number): boolean {
    for (let col = 0; col < this.length; col++) {
      if (this.grid[row][col] === number) {
        return true;
      }
    }
    return false;
  }

  public alreadyInColumn(col, number): boolean {
    for (let row = 0; row < this.length; row++) {
      if (this.grid[row][col] === number) {
        return true;
      }
    }
    return false;
  }

  public async alreadyInBox(startRow, startColumn, number): Promise<boolean> {
    const boxStartRow = startRow - (startRow % this.sqrt);
    const boxStartCol = startColumn - (startColumn % this.sqrt);
    for (let row = boxStartRow; row < (boxStartRow + this.sqrt); row++) {
      for (let col = boxStartCol; col < (boxStartCol + this.sqrt); col++) {
        if (this.grid[row][col] === number) {
          return true;
        }
      }
    }
    return false;
  }
}
