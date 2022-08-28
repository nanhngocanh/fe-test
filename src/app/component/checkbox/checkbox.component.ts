import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  @Input() lstData: any;
  @Input() data: any;
  @Input() labelField: string = 'name';
  @Input() label!: string;
  @Output() check: EventEmitter<any> = new EventEmitter();
  value: boolean = false;
  lstValue: boolean[] = [];
  ngOnInit(): void {
    if (this.lstData) {
      this.resetLstCheckbox();
    }
  }
  resetLstCheckbox() {
    for (let index = 0; index < this.lstData.length; index++) {
      this.lstValue[index] = false;
    }
  }
  selectItem(item: any, checked: boolean) {
    if (!checked) {
      this.check.emit(item);
      this.resetLstCheckbox();
    }
  }
}
