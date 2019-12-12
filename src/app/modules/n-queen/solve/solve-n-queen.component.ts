import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solve-queen',
  templateUrl: './solve-n-queen.component.html',
  styleUrls: ['./solve-n-queen.component.scss']
})

export class SolveNQueenComponent implements OnInit {
  public inputGrid: Array<Array<any>> = new Array<any>();
  public outputGrid: false | Array<Array<any>> = new Array<any>();
  public sizeOfSudoku: number;
  public sqrt: number;
  public unAssignPosition: Array<Array<any>> = new Array<any>();

  constructor(private router: Router) {
  }

  async ngOnInit() {
    this.inputGrid = [[0, 2, 0, 1], [1, 0, 0, 4], [0, 4, 0, 3], [3, 0, 4, 0]];
    // this.inputGrid = [[0, 0, 0, 0], [4, 0, 2, 0], [0, 2, 0, 1], [0, 0, 0, 0]];
    // this.inputGrid = [
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
    // this.inputGrid = [
    //   [0, 0, 0, 0, 0, 0, 7, 0, 4],
    //   [0, 0, 3, 2, 0, 7, 0, 0, 0],
    //   [0, 8, 0, 0, 9, 0, 5, 3, 0],
    //   [0, 0, 0, 0, 7, 4, 0, 0, 0],
    //   [0, 4, 9, 5, 0, 6, 2, 8, 0],
    //   [0, 0, 0, 8, 2, 0, 0, 0, 0],
    //   [0, 1, 2, 0, 5, 0, 0, 9, 0],
    //   [0, 0, 0, 7, 0, 2, 3, 0, 0],
    //   [5, 0, 6, 0, 0, 0, 0, 0, 0]
    // ];
    // this.inputGrid = [
    //   [0, 8, 0, 0, 7, 0, 0, 1, 0],
    //   [0, 0, 0, 1, 5, 0, 7, 0, 2],
    //   [0, 0, 0, 0, 0, 0, 6, 0, 9],
    //   [0, 0, 0, 6, 1, 8, 0, 7, 0],
    //   [6, 0, 0, 0, 0, 0, 0, 0, 3],
    //   [0, 1, 0, 3, 2, 4, 0, 0, 0],
    //   [4, 0, 5, 0, 0, 0, 0, 0, 0],
    //   [8, 0, 2, 0, 4, 7, 0, 0, 0],
    //   [0, 9, 0, 0, 6, 0, 0, 5, 0]
    // ];
    // this.inputGrid = [
    //   [9, 0, 6, 0, 0, 0, 0, 2, 0],
    //   [0, 3, 0, 7, 5, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 6, 0, 0, 0],
    //   [5, 6, 0, 0, 0, 2, 3, 0, 9],
    //   [0, 0, 4, 0, 0, 0, 1, 0, 0],
    //   [3, 0, 2, 1, 0, 0, 0, 7, 6],
    //   [0, 0, 0, 6, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 8, 3, 0, 1, 0],
    //   [0, 4, 0, 0, 0, 0, 2, 0, 7]
    // ];
    this.inputGrid = [
      [3, 0, 1, 9, 0, 0, 0, 0, 5],
      [0, 5, 2, 0, 0, 0, 0, 0, 0],
      [7, 0, 9, 2, 0, 3, 1, 0, 6],
      [9, 0, 7, 3, 2, 0, 0, 0, 0],
      [0, 1, 5, 8, 0, 4, 6, 3, 0],
      [0, 0, 0, 0, 1, 9, 5, 0, 7],
      [4, 0, 8, 7, 0, 1, 3, 0, 2],
      [0, 0, 0, 0, 0, 0, 7, 6, 0],
      [1, 0, 0, 0, 0, 2, 9, 0, 8]
    ];
    this.sizeOfSudoku = this.inputGrid ? this.inputGrid.length : 0;
    this.sqrt = Math.sqrt(this.sizeOfSudoku);
    console.time('solveSudoku');
    this.outputGrid = await this.solveSudoku();
    console.timeEnd('solveSudoku');
  }

  public async solveSudoku() {
    let [row, column] = await this.findUnassignedPosition();
    if ((row && column) > -1) {
      for (let num = 1; num <= this.sizeOfSudoku; num++) {
        const safe = await this.isSafe(row, column, num);
        if (safe) {
          this.inputGrid[row][column] = num;
          this.unAssignPosition.push([row, column]);
          const isSolve = await this.solveSudoku();
          if (isSolve) {
            return this.inputGrid;
          } else { // back tracking method
            [row, column] = await this.backtrackingColumn();
            num = this.inputGrid[row][column];
            this.inputGrid[row][column] = 0; // current row , column set 0
          }
        }
      }
      return false;
    }
    return this.inputGrid;
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
    for (let row = 0; row < this.sizeOfSudoku; row++) {
      for (let col = 0; col < this.sizeOfSudoku; col++) {
        if (this.inputGrid[row][col] === 0) {
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
    for (let col = 0; col < this.sizeOfSudoku; col++) {
      if (this.inputGrid[row][col] === number) {
        return true;
      }
    }
    return false;
  }

  public async alreadyInColumn(col, number): Promise<boolean> {
    for (let row = 0; row < this.sizeOfSudoku; row++) {
      if (this.inputGrid[row][col] === number) {
        return true;
      }
    }
    return false;
  }

  public async alreadyInBox(startRow, startColumn, number): Promise<boolean> {
    const boxStartRow = startRow - (startRow % this.sqrt);
    const boxStartCol = startColumn - (startColumn % this.sqrt);
    for (let row = 0; row < this.sqrt; row++) {
      for (let col = 0; col < this.sqrt; col++) {
        if (this.inputGrid[row + boxStartRow][col + boxStartCol] === number) {
          return true;
        }
      }
    }
    return false;
  }
}
