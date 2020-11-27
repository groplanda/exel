function toRow(content, number = '') {
  return `
  <div class="row">
    <div class="row-info">${number}</div>
    <div class="row-data">${content}</div>
  </div>
  `
}
function toColumn(el) {
  return `
  <div class="column">${el}</div>
  `
}
function toChar(code, index) {
  return String.fromCharCode(code + index);
}
function toCell() {
  return `
  <div class="cell" contenteditable></div>
  `
}
export function createTable(rowCount = 15) {
  const CODES = {
    A: 65,
    Z: 90
  }
  const columnLength = CODES.Z - CODES.A + 1;
  const html = [];

  const columns = new Array(columnLength)
  .fill('')
  .map((_, index) => toChar(CODES.A, index))
  .map(el => toColumn(el))
  .join('')

  html.push(toRow(columns));

  for(let i = 0; i < rowCount; i++) {
    const cell = new Array(columnLength)
    .fill('')
    .map(() => toCell())
    .join('')
    html.push(toRow(cell, i+1));
  }
  return html.join('');
}
