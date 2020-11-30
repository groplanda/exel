class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector;
  }
  html (html) {
    if(typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }
  clear () {
    this.html('');
    return this;
  }
  append (node) {
    if(node instanceof Dom) {
      node = node.$el;
    }
    if(Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
  on (eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }
  off (eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }
  closest (selector) {
    return $(this.$el.closest(selector));
  }
  getCords () {
    return this.$el.getBoundingClientRect();
  }
  get data () {
    return this.$el.dataset;
  }

  findAll (selector) {
    return this.$el.querySelectorAll(selector);
  }
  /*
  * height: 30px;
  * width: 30px;
  * backgroundColor: '#f4f4f4';
  */
  css (styles = {}) {
    return Object
    .keys(styles)
    .forEach(key => this.$el.style[key] = styles[key]);
  }
};

export default function $ (selector) {
  return new Dom(selector);
};

$.create = (tagName, classesName) => {
  const el = document.createElement(tagName);
  if(classesName) {
    el.classList.add(classesName);
  }
  return $(el);
};
