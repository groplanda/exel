import ExcelComponent from "@core/ExcelComponent";
import { createTable } from './table.tempate';

export default class Table extends ExcelComponent {
  static className = 'excel__table';
  toHtml() {
    return createTable()
  }
}