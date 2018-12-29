import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solven-queen',
  templateUrl: './solve-n-queen.component.html',
  styleUrls: ['./solve-n-queen.component.scss']
})

export class SolveNQueenComponent implements OnInit {
  public grid: Array<Array<any>> = new Array<any>();
  public length: number;
  public sqrt: number;
  public unAssignPosition: Array<Array<any>> = new Array<any>();
  public finish = false;

  constructor(private router: Router) {
  }

  async ngOnInit() {
    this.grid = [[0, 2, 0, 1], [1, 0, 0, 4], [0, 4, 0, 3], [3, 0, 4, 0]];
    // this.grid = [[0, 0, 0, 0], [4, 0, 2, 0], [0, 2, 0, 1], [0, 0, 0, 0]];
    // this.grid = [
    //   [3, 0, 6, 5, 0, 8, 4, 0, 0],
    //   [5, 2, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 8, 7, 0, 0, 0, 0, 3, 1],
    //   [0, 0, 3, 0, 1, 0, 0, 8, 0],
    //   [9, 0, 0, 8, 6, 3, 0, 0, 5],
    //   [0, 5, 0, 0, 9, 0, 6, 0, 0],
    //   [1, 3, 0, 0, 0, 0, 2, 5, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 7, 4],
    //   [0, 0, 5, 2, 0, 6, 3, 0, 0]
    // ];
    this.length = this.grid ? this.grid.length : 0;
    this.sqrt = Math.sqrt(this.length);
    const result = await this.solveSudoku();
    console.log(this.grid);
  }

  public async solveSudoku() {
    let [row, column] = await this.findUnassignedPosition();
    if ((row && column) > -1) {
      for (let num = 1; num <= this.length; num++) {
        console.log(`*** row *** ${row} *** column *** ${column}`);
        const safe = await this.isSafe(row, column, num);
        if (safe) {
          this.grid[row][column] = num;
          this.unAssignPosition.push([row, column]);
          const isSolve = await this.solveSudoku();
          if (this.finish) {
            return this.grid;
          } else if (!isSolve) { // back tracking method
            [row, column] = await this.backtrackingColumn();
            num = this.grid[row][column];
            this.grid[row][column] = 0;
          }
        }
      }
      return false;
    }
    this.finish = true;
    return this.finish;
  }

  public async backtrackingColumn() {
    if (this.unAssignPosition.length > 0) {
      const [previousUnassignRow, previousUnassignColumn] = this.unAssignPosition[this.unAssignPosition.length - 1];
      this.unAssignPosition.pop();
      return [previousUnassignRow, previousUnassignColumn];
    }
    return [];
  }

  public async findUnassignedPosition(): Promise<Array<any>> {
    for (let row = 0; row < this.length; row++) {
      for (let col = 0; col < this.length; col++) {
        if (this.grid[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return [-1, -1];
  }

  public async isSafe(row, col, number) {
    const usedInRow = await this.alreadyInRow(row, number);
    if (!usedInRow) {
      const usedInColumn = await this.alreadyInColumn(col, number);
      if (!usedInColumn) {
        const usedInBox = await this.alreadyInBox(row, col, number);
        return !usedInBox;
      }
    }

    return false;
  }

  public async alreadyInRow(row, number): Promise<boolean> {
    for (let col = 0; col < this.length; col++) {
      if (this.grid[row][col] === number) {
        return true;
      }
    }
    return false;
  }

  public async alreadyInColumn(col, number): Promise<boolean> {
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
    console.log(`--- boxStartRow --- ${boxStartRow} --- boxStartCol --- ${boxStartCol}`);
    for (let row = 0; row < this.sqrt; row++) {
      for (let col = 0; col < this.sqrt; col++) {
        if (this.grid[row + boxStartRow][col + boxStartCol] === number) {
          return true;
        }
      }
    }
    return false;
  }
}
