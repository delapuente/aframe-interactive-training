import * as AFRAME from 'aframe';
import * as physics from 'aframe-physics-system';
const Component = AFRAME.registerComponent('delayed-static-body', {
  schema: physics['static-body'].schema,
  init() {
    this.el.addEventListener('model-loaded', () => {
      window.requestAnimationFrame(this._resetBoundingBox.bind(this));
    });
  },
  _resetBoundingBox() {
    var currentRotation = this.el.getAttribute('rotation');
    this.el.setAttribute('rotation', { x: 0, y: 0, z: 0 });
    this.el.removeAttribute('static-body');
    this.el.setAttribute('static-body', this.data);
    this.el.setAttribute('rotation', currentRotation);
  }
});

export { Component };
