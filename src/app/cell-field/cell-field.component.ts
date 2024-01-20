import {Component, EventEmitter, Input, Output} from '@angular/core';

interface IField {
  field: string,
  style: 'cell' | 'cell circle' | 'cell chest'
}

@Component({
  selector: 'app-cell-field',
  templateUrl: './cell-field.component.html',
  styleUrls: ['./cell-field.component.css'],
})
export class CellFieldComponent {
  @Input() field!: IField;
  @Input() index: number;
  @Input() arrClickResult: IField[];
  @Input() typeField: string;
  @Input() isWin: boolean

  @Output() redactArrayAndType: EventEmitter<any> = new EventEmitter();

  public classField = 'cell'


  click(): void {
    if (this.field.field !== '' || this.isWin) {
      return;
    }

    switch (this.typeField) {
      case 'circle':
        this.arrClickResult[this.index] = {field: 'O', style: 'cell circle'};
        this.typeField = 'chest';
        break;
      case 'chest':
        this.arrClickResult[this.index] = {field: 'X', style: 'cell chest'};
        this.typeField = 'circle';
        break;
      default:
        break;
    }

    this.redactArrayAndType.emit({arr: this.arrClickResult, type: this.typeField});
  }


}
