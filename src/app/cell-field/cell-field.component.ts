import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cell-field',
  templateUrl: './cell-field.component.html',
  styleUrls: ['./cell-field.component.css']
})
export class CellFieldComponent {
  @Input() field!: string
  @Input() index: number
  @Input() arrClickResult: string[]
  @Input() typeField: string

  @Output() redactArray: EventEmitter<any>
  @Output() typeFieldChange: EventEmitter<any>

  public classField = 'cell'

  ngOnInit() {
    this.setNewClassField()
  }

  click() {

    switch (this.typeField) {
      case 'circle':
        this.arrClickResult[this.index] = 'O';
        this.typeField = 'chest'

        // this.classField = `cell ${this.typeField}`
        // this.arrClickResult[this.index] = 'O'
        // this.typeField = 'chest'
        break
      case 'chest':
        // this.classField = `cell ${this.typeField}`
        // this.arrClickResult[this.index] = 'X'
        // this.typeField = 'circle'
        break
      default:
        break
    }
  }

  setNewClassField() {
    if (this.typeField === 'circle' && this.field === 'O') {
      this.classField = 'cell circle'
    }
    if (this.typeField === 'chest' && this.field === 'X') {
      this.classField = 'cell chest'
    }
  }
}
