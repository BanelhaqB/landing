/**
 * Tagify (v 3.6.10)- tags input component
 * By Yair Even-Or
 * Don't sell this code. (c)
 * https://github.com/yairEO/tagify
 */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.React.tagify = factory();
  }
}(this, function() {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _tagifyMin = _interopRequireDefault(require("./tagify.min.js"));

require("./tagify.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tags =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tags, _React$Component);

  function Tags(props) {
    var _this;

    _classCallCheck(this, Tags);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tags).call(this, props));
    _this._handleRef = _this._handleRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Tags, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.value) this.component.value = this.props.value;
      this.tagify = new _tagifyMin["default"](this.component, this.props.settings || {});
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var tagify = this.tagify; // check if value has changed

      if (nextProps.value && nextProps.value.join() !== this.props.value.join()) {
        tagify.loadOriginalValues(nextProps.value); // this.tagify.addTags(nextProps.value, true, true)
      }

      this.tagify.settings.whitelist = nextProps.settings.whitelist;

      if (nextProps.showDropdown) {
        tagify.dropdown.show.call(tagify, nextProps.showDropdown);
        tagify.toggleFocusClass(true);
      } else if ("showDropdown" in nextProps && !nextProps.showDropdown) {
        tagify.dropdown.hide.call(tagify);
      } // do not allow react to re-render since the component is modifying its own HTML


      return false;
    }
  }, {
    key: "_handleRef",
    value: function _handleRef(component) {
      this.component = component;
    }
  }, {
    key: "render",
    value: function render() {
      var attrs = {
        ref: this._handleRef,
        name: this.props.name,
        className: this.props.className,
        placeholder: this.props["class"],
        autoFocus: this.props.autofocus,
        value: this.props.children
      };
      var className = this.props.className;
      return _react["default"].createElement("div", {
        className: className
      }, _react["default"].createElement(this.props.mode, Object.assign({}, attrs, {
        defaultValue: this.props.initialValue
      })));
    }
  }]);

  return Tags;
}(_react["default"].Component);

Tags.defaultProps = {
  value: [],
  mode: "input"
};
var _default = Tags;
exports["default"] = _default;
return ;
}));