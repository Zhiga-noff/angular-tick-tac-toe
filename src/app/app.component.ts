import {Component} from '@angular/core';

export const resultForWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public arrClickResult = ['', '', '', '', '', '', '', '', '',]
  public reset = false
  public isWin = false
  public typeField = 'circle'
  public classField = 'cell';

  setNewValueAll(event: { arr: string[], type: string }) {
    if (this.isWin) {
      return
    }

    this.reset = false
    this.classField = `cell ${this.typeField}`
    this.arrClickResult = event.arr
    this.typeField = event.type
    this.isWin = this.checkIsWin('O') || this.checkIsWin('X')
  }

  resetGame() {
    this.arrClickResult = ['', '', '', '', '', '', '', '', '',]
    this.typeField = 'circle'
    this.isWin = false
    this.reset = true
    this.classField = 'cell'

  }

  checkIsWin(type: string): boolean {
    const check = this.searchResult(type)
    return resultForWin.some((field) => {
      let current = 0
      check.forEach(item => {
        for (let i = 0; i < field.length; i++) {
          if (item === field[i]) {
            current += 1
          }
        }
      })
      return current === 3
    })
  }

  searchResult(type: string): number[] {
    const checkArray = []
    this.arrClickResult.forEach((field, index) => {
      if (field === type) {
        checkArray.push(index)
      }
    })
    return checkArray
  }
}
