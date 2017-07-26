import * as AFRAME from 'aframe';
const Component = AFRAME.registerComponent('reset-static-body', {
  init() {
    this.el.addEventListener(
      'trackpaddown',
      this._resetBoundingBoxOnLongPress.bind(this)
    );
    this.el.addEventListener(
      'trackpadup',
      this._clearResetBoundingBox.bind(this)
    );
  },
  _resetBoundingBoxOnLongPress() {
    this._reset = setTimeout(() => {
      this.el.removeAttribute('static-body');
      this.el.setAttribute('static-body', 'shape: box');
    }, 2000);
  },
  _clearResetBoundingBox() {
    clearTimeout(this._reset);
  }
});

export { Component };
