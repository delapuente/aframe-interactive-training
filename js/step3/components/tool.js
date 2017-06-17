const Component = AFRAME.registerComponent('tool', {
  schema: {
    position: { type: 'vec3', default: '0 0 0' },
    rotation: { type: 'vec3', default: '0 0 0' }
  },
  init() {
    this.el._tool = this.el._tool || {};
  },
  grab() {
    this._rememberLocation();
    this.el.setAttribute('position', this.data.position);
    this.el.setAttribute('rotation', this.data.rotation);
    this.el._tool._isGrabbed = true;
  },
  drop() {
    this._restoreLocation();
    this.el._tool._isGrabbed = false;
  },
  _rememberLocation() {
    this.el._tool._originalParent = this.el.parentNode;
    this.el._tool._originalPosition = this.el.getAttribute('position');
    this.el._tool._originalRotation = this.el.getAttribute('rotation');
  },
  _restoreLocation() {
    this.el._tool._originalParent.appendChild(this.el);
    this.el.setAttribute('position', this.el._tool._originalPosition);
    this.el.setAttribute('rotation', this.el._tool._originalRotation);
  },
  isGrabbed() {
    return this.el._tool._isGrabbed;
  }
});

export { Component };
