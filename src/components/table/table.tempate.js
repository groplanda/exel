function toRow(content, number = '') {
  const resizer = number ? '<div class="row-resize" data-resize="row"></div>' : '',
        row = number ? `data-row="${number - 1}"` : '';
  return `
  <div class="row" ${row} data-type="resizeble">
    <div class="row-info">
      ${number}
      ${resizer}
    </div>
    <div class="row-data">${content}</div>
  </div>
  `
}
function toColumn(el, index) {
  return `
  <div class="column" data-type="resizeble" data-col="${index}">${el} <div class="col-resize" data-resize="col"></div></div>
  `
}
function toChar(code, index) {
  return String.fromCharCode(code + index);
}
function toCell(col) {
  return `
  <div class="cell" contenteditable data-col="${col}"></div>
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
  .map((el, index) => toColumn(el, index))
  .join('')

  html.push(toRow(columns));

  for(let i = 0; i < rowCount; i++) {
    const cell = new Array(columnLength)
    .fill('')
    .map((_, index) => toCell(index))
    .join('')
    html.push(toRow(cell, i+1));
  }
  return html.join('');
}
