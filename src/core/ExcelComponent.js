import DomListener from './DomListener';

export default class ExcelComponent extends DomListener {
  constructor ($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name;
  }
  toHtml() {
    return '';
  }
  init () {
    this.initDomListener();
  }
  destroy () {
    this.removeDomListener();
  }
}
