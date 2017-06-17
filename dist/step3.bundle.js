/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(4);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zdGVwMy9jb21wb25lbnRzL2luZGV4LmpzP2I4YTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Rvb2wnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zdGVwMy9jb21wb25lbnRzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(6);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zdGVwMy9zeXN0ZW1zL2luZGV4LmpzPzVhNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL29wZXJhdG9yJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc3RlcDMvc3lzdGVtcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Component = AFRAME.registerComponent('tool', {\n  schema: {\n    position: { type: 'vec3', default: '0 0 0' },\n    rotation: { type: 'vec3', default: '0 0 0' }\n  },\n  init: function init() {\n    this.el._tool = this.el._tool || {};\n  },\n  grab: function grab() {\n    this._rememberLocation();\n    this.el.setAttribute('position', this.data.position);\n    this.el.setAttribute('rotation', this.data.rotation);\n    this.el._tool._isGrabbed = true;\n  },\n  drop: function drop() {\n    this._restoreLocation();\n    this.el._tool._isGrabbed = false;\n  },\n  _rememberLocation: function _rememberLocation() {\n    this.el._tool._originalParent = this.el.parentNode;\n    this.el._tool._originalPosition = this.el.getAttribute('position');\n    this.el._tool._originalRotation = this.el.getAttribute('rotation');\n  },\n  _restoreLocation: function _restoreLocation() {\n    this.el._tool._originalParent.appendChild(this.el);\n    this.el.setAttribute('position', this.el._tool._originalPosition);\n    this.el.setAttribute('rotation', this.el._tool._originalRotation);\n  },\n  isGrabbed: function isGrabbed() {\n    return this.el._tool._isGrabbed;\n  }\n});\n\nexports.Component = Component;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zdGVwMy9jb21wb25lbnRzL3Rvb2wuanM/N2IxMiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBRlJBTUUiLCJyZWdpc3RlckNvbXBvbmVudCIsInNjaGVtYSIsInBvc2l0aW9uIiwidHlwZSIsImRlZmF1bHQiLCJyb3RhdGlvbiIsImluaXQiLCJlbCIsIl90b29sIiwiZ3JhYiIsIl9yZW1lbWJlckxvY2F0aW9uIiwic2V0QXR0cmlidXRlIiwiZGF0YSIsIl9pc0dyYWJiZWQiLCJkcm9wIiwiX3Jlc3RvcmVMb2NhdGlvbiIsIl9vcmlnaW5hbFBhcmVudCIsInBhcmVudE5vZGUiLCJfb3JpZ2luYWxQb3NpdGlvbiIsImdldEF0dHJpYnV0ZSIsIl9vcmlnaW5hbFJvdGF0aW9uIiwiYXBwZW5kQ2hpbGQiLCJpc0dyYWJiZWQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsWUFBWUMsT0FBT0MsaUJBQVAsQ0FBeUIsTUFBekIsRUFBaUM7QUFDakRDLFVBQVE7QUFDTkMsY0FBVSxFQUFFQyxNQUFNLE1BQVIsRUFBZ0JDLFNBQVMsT0FBekIsRUFESjtBQUVOQyxjQUFVLEVBQUVGLE1BQU0sTUFBUixFQUFnQkMsU0FBUyxPQUF6QjtBQUZKLEdBRHlDO0FBS2pERSxNQUxpRCxrQkFLMUM7QUFDTCxTQUFLQyxFQUFMLENBQVFDLEtBQVIsR0FBZ0IsS0FBS0QsRUFBTCxDQUFRQyxLQUFSLElBQWlCLEVBQWpDO0FBQ0QsR0FQZ0Q7QUFRakRDLE1BUmlELGtCQVExQztBQUNMLFNBQUtDLGlCQUFMO0FBQ0EsU0FBS0gsRUFBTCxDQUFRSSxZQUFSLENBQXFCLFVBQXJCLEVBQWlDLEtBQUtDLElBQUwsQ0FBVVYsUUFBM0M7QUFDQSxTQUFLSyxFQUFMLENBQVFJLFlBQVIsQ0FBcUIsVUFBckIsRUFBaUMsS0FBS0MsSUFBTCxDQUFVUCxRQUEzQztBQUNBLFNBQUtFLEVBQUwsQ0FBUUMsS0FBUixDQUFjSyxVQUFkLEdBQTJCLElBQTNCO0FBQ0QsR0FiZ0Q7QUFjakRDLE1BZGlELGtCQWMxQztBQUNMLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS1IsRUFBTCxDQUFRQyxLQUFSLENBQWNLLFVBQWQsR0FBMkIsS0FBM0I7QUFDRCxHQWpCZ0Q7QUFrQmpESCxtQkFsQmlELCtCQWtCN0I7QUFDbEIsU0FBS0gsRUFBTCxDQUFRQyxLQUFSLENBQWNRLGVBQWQsR0FBZ0MsS0FBS1QsRUFBTCxDQUFRVSxVQUF4QztBQUNBLFNBQUtWLEVBQUwsQ0FBUUMsS0FBUixDQUFjVSxpQkFBZCxHQUFrQyxLQUFLWCxFQUFMLENBQVFZLFlBQVIsQ0FBcUIsVUFBckIsQ0FBbEM7QUFDQSxTQUFLWixFQUFMLENBQVFDLEtBQVIsQ0FBY1ksaUJBQWQsR0FBa0MsS0FBS2IsRUFBTCxDQUFRWSxZQUFSLENBQXFCLFVBQXJCLENBQWxDO0FBQ0QsR0F0QmdEO0FBdUJqREosa0JBdkJpRCw4QkF1QjlCO0FBQ2pCLFNBQUtSLEVBQUwsQ0FBUUMsS0FBUixDQUFjUSxlQUFkLENBQThCSyxXQUE5QixDQUEwQyxLQUFLZCxFQUEvQztBQUNBLFNBQUtBLEVBQUwsQ0FBUUksWUFBUixDQUFxQixVQUFyQixFQUFpQyxLQUFLSixFQUFMLENBQVFDLEtBQVIsQ0FBY1UsaUJBQS9DO0FBQ0EsU0FBS1gsRUFBTCxDQUFRSSxZQUFSLENBQXFCLFVBQXJCLEVBQWlDLEtBQUtKLEVBQUwsQ0FBUUMsS0FBUixDQUFjWSxpQkFBL0M7QUFDRCxHQTNCZ0Q7QUE0QmpERSxXQTVCaUQsdUJBNEJyQztBQUNWLFdBQU8sS0FBS2YsRUFBTCxDQUFRQyxLQUFSLENBQWNLLFVBQXJCO0FBQ0Q7QUE5QmdELENBQWpDLENBQWxCOztRQWlDU2YsUyxHQUFBQSxTIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21wb25lbnQgPSBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ3Rvb2wnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBwb3NpdGlvbjogeyB0eXBlOiAndmVjMycsIGRlZmF1bHQ6ICcwIDAgMCcgfSxcclxuICAgIHJvdGF0aW9uOiB7IHR5cGU6ICd2ZWMzJywgZGVmYXVsdDogJzAgMCAwJyB9XHJcbiAgfSxcclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5lbC5fdG9vbCA9IHRoaXMuZWwuX3Rvb2wgfHwge307XHJcbiAgfSxcclxuICBncmFiKCkge1xyXG4gICAgdGhpcy5fcmVtZW1iZXJMb2NhdGlvbigpO1xyXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgdGhpcy5kYXRhLnBvc2l0aW9uKTtcclxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdyb3RhdGlvbicsIHRoaXMuZGF0YS5yb3RhdGlvbik7XHJcbiAgICB0aGlzLmVsLl90b29sLl9pc0dyYWJiZWQgPSB0cnVlO1xyXG4gIH0sXHJcbiAgZHJvcCgpIHtcclxuICAgIHRoaXMuX3Jlc3RvcmVMb2NhdGlvbigpO1xyXG4gICAgdGhpcy5lbC5fdG9vbC5faXNHcmFiYmVkID0gZmFsc2U7XHJcbiAgfSxcclxuICBfcmVtZW1iZXJMb2NhdGlvbigpIHtcclxuICAgIHRoaXMuZWwuX3Rvb2wuX29yaWdpbmFsUGFyZW50ID0gdGhpcy5lbC5wYXJlbnROb2RlO1xyXG4gICAgdGhpcy5lbC5fdG9vbC5fb3JpZ2luYWxQb3NpdGlvbiA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xyXG4gICAgdGhpcy5lbC5fdG9vbC5fb3JpZ2luYWxSb3RhdGlvbiA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdyb3RhdGlvbicpO1xyXG4gIH0sXHJcbiAgX3Jlc3RvcmVMb2NhdGlvbigpIHtcclxuICAgIHRoaXMuZWwuX3Rvb2wuX29yaWdpbmFsUGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xyXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgdGhpcy5lbC5fdG9vbC5fb3JpZ2luYWxQb3NpdGlvbik7XHJcbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgncm90YXRpb24nLCB0aGlzLmVsLl90b29sLl9vcmlnaW5hbFJvdGF0aW9uKTtcclxuICB9LFxyXG4gIGlzR3JhYmJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsLl90b29sLl9pc0dyYWJiZWQ7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCB7IENvbXBvbmVudCB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zdGVwMy9jb21wb25lbnRzL3Rvb2wuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(1);\n\n__webpack_require__(0);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zdGVwMy9pbmRleC5qcz9kNTcyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zeXN0ZW1zJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zdGVwMy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar System = AFRAME.registerSystem('operator', {\n  schema: {\n    hands: { type: 'selectorAll' },\n    items: { type: 'selectorAll' }\n  },\n  _grabbedItems: {},\n  init: function init() {\n    var _this = this;\n\n    var hands = this.data.hands;\n    var items = this.data.items;\n    hands.forEach(function (hand) {\n      hand.addEventListener('gripdown', function () {\n        var item = _this._findNearby(hand, items);\n        _this._grab(hand, item);\n      });\n      hand.addEventListener('gripup', function () {\n        _this._drop(hand);\n      });\n    });\n  },\n  _findNearby: function _findNearby(hand, items) {\n    for (var i = 0, l = items.length; i < l; i++) {\n      var item = items[i];\n      if (distance(item) < 0.2) {\n        return item;\n      }\n    }\n    return null;\n\n    function distance(item) {\n      var handPosition = hand.getObject3D('mesh').getWorldPosition();\n      var itemPosition = item.getObject3D('mesh').getWorldPosition();\n      return handPosition.distanceTo(itemPosition);\n    }\n  },\n  _grab: function _grab(hand, item) {\n    if (item) {\n      var grab = this._isTool(item) ? _grabTool : _grabItem;\n      if (grab()) {\n        this._grabbedItems[hand.id] = item;\n      }\n    }\n\n    function _grabTool() {\n      var tool = item.components.tool;\n      if (!tool.isGrabbed()) {\n        tool.grab();\n        hand.appendChild(item);\n        return true;\n      }\n      return false;\n    }\n\n    function _grabItem() {\n      var isGrabbed = item.hasAttribute('constraint');\n      if (!isGrabbed) {\n        item.setAttribute('constraint', 'target: #' + hand.id);\n        return true;\n      }\n      return false;\n    }\n  },\n  _drop: function _drop(hand) {\n    var grabbedItem = this._grabbedItems[hand.id];\n    if (grabbedItem) {\n      var drop = this._isTool(grabbedItem) ? _dropTool : _dropItem;\n      if (drop()) {\n        this._grabbedItems[hand.id] = null;\n      }\n    }\n\n    function _dropTool() {\n      var tool = grabbedItem.components.tool;\n      tool.drop();\n      return true;\n    }\n\n    function _dropItem() {\n      grabbedItem.removeAttribute('constraint');\n      return true;\n    }\n  },\n  _isTool: function _isTool(item) {\n    return item.components['tool'];\n  }\n});\n\nexports.System = System;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zdGVwMy9zeXN0ZW1zL29wZXJhdG9yLmpzP2I0YjciXSwibmFtZXMiOlsiU3lzdGVtIiwiQUZSQU1FIiwicmVnaXN0ZXJTeXN0ZW0iLCJzY2hlbWEiLCJoYW5kcyIsInR5cGUiLCJpdGVtcyIsIl9ncmFiYmVkSXRlbXMiLCJpbml0IiwiZGF0YSIsImZvckVhY2giLCJoYW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJfZmluZE5lYXJieSIsIl9ncmFiIiwiX2Ryb3AiLCJpIiwibCIsImxlbmd0aCIsImRpc3RhbmNlIiwiaGFuZFBvc2l0aW9uIiwiZ2V0T2JqZWN0M0QiLCJnZXRXb3JsZFBvc2l0aW9uIiwiaXRlbVBvc2l0aW9uIiwiZGlzdGFuY2VUbyIsImdyYWIiLCJfaXNUb29sIiwiX2dyYWJUb29sIiwiX2dyYWJJdGVtIiwiaWQiLCJ0b29sIiwiY29tcG9uZW50cyIsImlzR3JhYmJlZCIsImFwcGVuZENoaWxkIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZ3JhYmJlZEl0ZW0iLCJkcm9wIiwiX2Ryb3BUb29sIiwiX2Ryb3BJdGVtIiwicmVtb3ZlQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFNBQVNDLE9BQU9DLGNBQVAsQ0FBc0IsVUFBdEIsRUFBa0M7QUFDL0NDLFVBQVE7QUFDTkMsV0FBTyxFQUFFQyxNQUFNLGFBQVIsRUFERDtBQUVOQyxXQUFPLEVBQUVELE1BQU0sYUFBUjtBQUZELEdBRHVDO0FBSy9DRSxpQkFBZSxFQUxnQztBQU0vQ0MsTUFOK0Msa0JBTXhDO0FBQUE7O0FBQ0wsUUFBTUosUUFBUSxLQUFLSyxJQUFMLENBQVVMLEtBQXhCO0FBQ0EsUUFBTUUsUUFBUSxLQUFLRyxJQUFMLENBQVVILEtBQXhCO0FBQ0FGLFVBQU1NLE9BQU4sQ0FBYyxnQkFBUTtBQUNwQkMsV0FBS0MsZ0JBQUwsQ0FBc0IsVUFBdEIsRUFBa0MsWUFBTTtBQUN0QyxZQUFNQyxPQUFPLE1B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QWhCLENBQVA7QUFDRDtBQW5GOEMsQ0FBbEMsQ0FBZjs7UUFzRlNoQyxNLEdBQUFBLE0iLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN5c3RlbSA9IEFGUkFNRS5yZWdpc3RlclN5c3RlbSgnb3BlcmF0b3InLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBoYW5kczogeyB0eXBlOiAnc2VsZWN0b3JBbGwnIH0sXHJcbiAgICBpdGVtczogeyB0eXBlOiAnc2VsZWN0b3JBbGwnIH1cclxuICB9LFxyXG4gIF9ncmFiYmVkSXRlbXM6IHt9LFxyXG4gIGluaXQoKSB7XHJcbiAgICBjb25zdCBoYW5kcyA9IHRoaXMuZGF0YS5oYW5kcztcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5kYXRhLml0ZW1zO1xyXG4gICAgaGFuZHMuZm9yRWFjaChoYW5kID0+IHtcclxuICAgICAgaGFuZC5hZGRFdmVudExpc3RlbmVyKCdncmlwZG93bicsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fZmluZE5lYXJieShoYW5kLCBpdGVtcyk7XHJcbiAgICAgICAgdGhpcy5fZ3JhYihoYW5kLCBpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGhhbmQuYWRkRXZlbnRMaXN0ZW5lcignZ3JpcHVwJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2Ryb3AoaGFuZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZmluZE5lYXJieShoYW5kLCBpdGVtcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICBpZiAoZGlzdGFuY2UoaXRlbSkgPCAwLjIpIHtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzdGFuY2UoaXRlbSkge1xyXG4gICAgICBjb25zdCBoYW5kUG9zaXRpb24gPSBoYW5kLmdldE9iamVjdDNEKCdtZXNoJykuZ2V0V29ybGRQb3NpdGlvbigpO1xyXG4gICAgICBjb25zdCBpdGVtUG9zaXRpb24gPSBpdGVtLmdldE9iamVjdDNEKCdtZXNoJykuZ2V0V29ybGRQb3NpdGlvbigpO1xyXG4gICAgICByZXR1cm4gaGFuZFBvc2l0aW9uLmRpc3RhbmNlVG8oaXRlbVBvc2l0aW9uKTtcclxuICAgIH1cclxuICB9LFxyXG4gIF9ncmFiKGhhbmQsIGl0ZW0pIHtcclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIGNvbnN0IGdyYWIgPSB0aGlzLl9pc1Rvb2woaXRlbSkgPyBfZ3JhYlRvb2wgOiBfZ3JhYkl0ZW07XHJcbiAgICAgIGlmIChncmFiKCkpIHtcclxuICAgICAgICB0aGlzLl9ncmFiYmVkSXRlbXNbaGFuZC5pZF0gPSBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2dyYWJUb29sKCkge1xyXG4gICAgICBjb25zdCB0b29sID0gaXRlbS5jb21wb25lbnRzLnRvb2w7XHJcbiAgICAgIGlmICghdG9vbC5pc0dyYWJiZWQoKSkge1xyXG4gICAgICAgIHRvb2wuZ3JhYigpO1xyXG4gICAgICAgIGhhbmQuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9ncmFiSXRlbSgpIHtcclxuICAgICAgY29uc3QgaXNHcmFiYmVkID0gaXRlbS5oYXNBdHRyaWJ1dGUoJ2NvbnN0cmFpbnQnKTtcclxuICAgICAgaWYgKCFpc0dyYWJiZWQpIHtcclxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY29uc3RyYWludCcsIGB0YXJnZXQ6ICMke2hhbmQuaWR9YCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgX2Ryb3AoaGFuZCkge1xyXG4gICAgY29uc3QgZ3JhYmJlZEl0ZW0gPSB0aGlzLl9ncmFiYmVkSXRlbXNbaGFuZC5pZF07XHJcbiAgICBpZiAoZ3JhYmJlZEl0ZW0pIHtcclxuICAgICAgY29uc3QgZHJvcCA9IHRoaXMuX2lzVG9vbChncmFiYmVkSXRlbSkgPyBfZHJvcFRvb2wgOiBfZHJvcEl0ZW07XHJcbiAgICAgIGlmIChkcm9wKCkpIHtcclxuICAgICAgICB0aGlzLl9ncmFiYmVkSXRlbXNbaGFuZC5pZF0gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2Ryb3BUb29sKCkge1xyXG4gICAgICBjb25zdCB0b29sID0gZ3JhYmJlZEl0ZW0uY29tcG9uZW50cy50b29sO1xyXG4gICAgICB0b29sLmRyb3AoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2Ryb3BJdGVtKCkge1xyXG4gICAgICBncmFiYmVkSXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnN0cmFpbnQnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBfaXNUb29sKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmNvbXBvbmVudHNbJ3Rvb2wnXTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgU3lzdGVtIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3N0ZXAzL3N5c3RlbXMvb3BlcmF0b3IuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);