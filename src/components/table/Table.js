import ExcelComponent from "@core/ExcelComponent";
import { createTable } from './table.tempate';
import Resizer from './Resizer';
import { shouldResize } from './table.functions';

export default class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    })
  }
  toHtml() {
    return createTable(20)
  }

  onMousedown (event) {
    const target = event.target;
    if(shouldResize(target)) {
      Resizer(target, this.$root);
    }
  }
}