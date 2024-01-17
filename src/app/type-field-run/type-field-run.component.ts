import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-type-field-run',
  templateUrl: './type-field-run.component.html',
  styleUrls: ['./type-field-run.component.css']
})
export class TypeFieldRunComponent {
  @Input('type-field') typeField: string
  
}
