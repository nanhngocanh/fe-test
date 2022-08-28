import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  @Input() data: any;
  @Input() labelField: string = 'name';
  @Output() check: EventEmitter<any> = new EventEmitter();
}
