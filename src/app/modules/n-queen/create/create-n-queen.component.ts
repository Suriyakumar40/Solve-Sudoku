import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CdkDragDrop, moveItemInArray, transferArrayItem,
  CdkDragEnter, CdkDragExit, CdkDragStart, CdkDrag, CdkDropList
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-queen',
  templateUrl: './create-n-queen.component.html',
  styleUrls: ['./create-n-queen.component.scss']
})

export class CreateNQueenComponent implements OnInit {
  public inputGrid: Array<Array<number | ''>>;
  public sizeOfSudoku: number;
  public sqrt: number;

  constructor(private router: Router) {
  }

  async ngOnInit() {
    this.sizeOfSudoku = 4;
    this.sqrt = Math.sqrt(this.sizeOfSudoku);
    this.inputGrid = await this.createEmptyInputGrid();
  }

  public createEmptyInputGrid(): Array<Array<number>> {
    const row = new Array<Array<number>>();
    for (let i = 0; i < this.sizeOfSudoku; i++) {
      const column = [];
      for (let j = 0; j < this.sizeOfSudoku; j++) {
        column.push(0);
      }
      row.push(column);
    }
    return row;
  }

  columnChange(rIndex, colIndex, col) {
    this.inputGrid[rIndex][colIndex] = col ? parseInt(col, null) : '';
    this.inputGrid = this.refreshModel();
  }

  refreshModel() {
    return this.inputGrid.map(row => {
      return row.map(item => {
        return item;
      });
    });
  }
}
