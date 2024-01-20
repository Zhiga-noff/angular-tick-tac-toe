import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cell-field',
  templateUrl: './cell-field.component.html',
  styleUrls: ['./cell-field.component.css'],
})
export class CellFieldComponent {
  @Input() field!: string;
  @Input() index: number;
  @Input() arrClickResult: string[];
  @Input() typeField: string;
  @Input() isWin: boolean

  @Output() redactArrayAndType: EventEmitter<any> = new EventEmitter();

  @Input() classField: string;

  ngOnInit() {
  }

  click() {
    if (this.field !== '' || this.isWin) {
      return
    }

    switch (this.typeField) {
      case 'circle':
        this.arrClickResult[this.index] = 'O';
        this.typeField = 'chest';
        this.redactArrayAndType.emit({arr: this.arrClickResult, type: this.typeField});
        break;
      case 'chest':
        this.arrClickResult[this.index] = 'X';
        this.typeField = 'circle';
        this.redactArrayAndType.emit({arr: this.arrClickResult, type: this.typeField});
        break;
      default:
        break;
    }
  }
}
