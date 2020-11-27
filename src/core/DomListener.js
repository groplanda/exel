import { capitalize } from './Utils';

export default class DomListener {
  constructor ($root, listeners = []) {;
    if (!$root) {
      throw new Error(`No $root provided DomListener!`)
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListener() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);

      if(!this[method]) {
        throw new Error(`Method ${method} not implement on ${this.name}`);
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method]);
    })
  }

  removeDomListener() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    })
  }

}
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
