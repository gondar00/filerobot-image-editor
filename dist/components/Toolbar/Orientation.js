"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styledComponents");

var _Range = _interopRequireDefault(require("../Range"));

var _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "leftRotate", function () {
      var _this$props = _this.props,
          onRotate = _this$props.onRotate,
          correctionDegree = _this$props.correctionDegree,
          flipX = _this$props.flipX,
          flipY = _this$props.flipY;
      onRotate(-90, parseInt(correctionDegree), flipX, flipY);
    });

    _defineProperty(_assertThisInitialized(_this), "rightRotate", function () {
      var _this$props2 = _this.props,
          onRotate = _this$props2.onRotate,
          correctionDegree = _this$props2.correctionDegree,
          flipX = _this$props2.flipX,
          flipY = _this$props2.flipY;
      onRotate(90, parseInt(correctionDegree), flipX, flipY);
    });

    _defineProperty(_assertThisInitialized(_this), "updateCorrectionDegree", function (value) {
      var _this$props3 = _this.props,
          flipX = _this$props3.flipX,
          flipY = _this$props3.flipY;

      _this.setState({
        correctionDegree: value
      });

      _this.props.onRotate(0, parseFloat(value), flipX, flipY);
    });

    _defineProperty(_assertThisInitialized(_this), "onFlip", function (val) {
      var _this$props4 = _this.props,
          flipX = _this$props4.flipX,
          flipY = _this$props4.flipY,
          correctionDegree = _this$props4.correctionDegree;
      var nextFlipXValue = val === 'x' ? !flipX : flipX;
      var nextFlipYValue = val === 'y' ? !flipY : flipY;

      _this.props.onRotate(0, correctionDegree, nextFlipXValue, nextFlipYValue);
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          correctionDegree = _this$props5.correctionDegree,
          t = _this$props5.t,
          _this$props5$config = _this$props5.config,
          config = _this$props5$config === void 0 ? {} : _this$props5$config;
      var processWithCloudimage = config.processWithCloudimage;
      return _react.default.createElement(_styledComponents.OrientationWrapper, null, _react.default.createElement(_styledComponents.RotateWrapper, null, _react.default.createElement(_styledComponents.RotateButton, null, _react.default.createElement(_styledComponents.DarkBtn, {
        onClick: this.leftRotate
      }, _react.default.createElement(_styledComponents.RotateIcon, {
        name: "left-rotate"
      }), " ", _react.default.createElement("span", null, t['orientation.rotate_l'])), _react.default.createElement(_styledComponents.DarkBtn, {
        onClick: this.rightRotate
      }, _react.default.createElement(_styledComponents.RotateIcon, {
        name: "right-rotate"
      }), _react.default.createElement("span", null, t['orientation.rotate_r'])), !processWithCloudimage && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_styledComponents.DarkBtn, {
        onClick: function onClick() {
          _this2.onFlip('x');
        }
      }, _react.default.createElement(_styledComponents.RotateIcon, {
        name: "flip-h"
      }), _react.default.createElement("span", null, t['orientation.flip_h'])), _react.default.createElement(_styledComponents.DarkBtn, {
        onClick: function onClick() {
          _this2.onFlip('y');
        }
      }, _react.default.createElement(_styledComponents.RotateIcon, {
        name: "flip-v"
      }), _react.default.createElement("span", null, t['orientation.flip_v']))), !processWithCloudimage && _react.default.createElement("div", null, _react.default.createElement(_Range.default, {
        min: -30,
        max: 30,
        step: 0.5,
        range: correctionDegree,
        updateRange: this.updateCorrectionDegree
      }), _react.default.createElement("svg", {
        viewBox: "-90 -5 180 10",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        focusable: "false"
      }, _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-37.15555555555556",
        cy: "0",
        r: "0.2",
        opacity: "0.8"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-35.2",
        cy: "0",
        r: "0.2",
        opacity: "0.6"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-33.24444444444445",
        cy: "0",
        r: "0.2",
        opacity: "0.4"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-31.28888888888889",
        cy: "0",
        r: "0.2",
        opacity: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-29.333333333333336",
        cy: "0",
        r: "0.5"
      }), _react.default.createElement("text", {
        fill: "currentColor",
        x: "-31.583333333333336",
        y: "3.5"
      }, "-30\xB0"), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-27.37777777777778",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-25.422222222222224",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-23.46666666666667",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-21.51111111111112",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-19.555555555555557",
        cy: "0",
        r: "0.5"
      }), _react.default.createElement("text", {
        fill: "currentColor",
        x: "-21.805555555555557",
        y: "3.5"
      }, "-20\xB0"), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-17.60000000000001",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-15.644444444444446",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-13.688888888888897",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-11.733333333333334",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-9.777777777777786",
        cy: "0",
        r: "0.5"
      }), _react.default.createElement("text", {
        fill: "currentColor",
        x: "-12.027777777777786",
        y: "3.5"
      }, "-10\xB0"), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-7.822222222222223",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-5.866666666666674",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-3.9111111111111114",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "-1.9555555555555628",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "0",
        cy: "0",
        r: "0.5"
      }), _react.default.createElement("text", {
        fill: "currentColor",
        x: "-0.75",
        y: "3.5"
      }, "0\xB0"), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "1.9555555555555486",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "3.9111111111111114",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "5.86666666666666",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "7.822222222222223",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "9.777777777777771",
        cy: "0",
        r: "0.5"
      }), _react.default.createElement("text", {
        fill: "currentColor",
        x: "8.277777777777771",
        y: "3.5"
      }, "10\xB0"), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "11.733333333333334",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "13.688888888888883",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "15.644444444444446",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "17.599999999999994",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "19.555555555555557",
        cy: "0",
        r: "0.5"
      }), _react.default.createElement("text", {
        fill: "currentColor",
        x: "18.055555555555557",
        y: "3.5"
      }, "20\xB0"), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "21.511111111111106",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "23.46666666666667",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "25.422222222222217",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "27.37777777777778",
        cy: "0",
        r: "0.2"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "29.33333333333333",
        cy: "0",
        r: "0.5"
      }), _react.default.createElement("text", {
        fill: "currentColor",
        x: "27.83333333333333",
        y: "3.5"
      }, "30\xB0"), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "31.28888888888889",
        cy: "0",
        r: "0.2",
        opacity: "0.8"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "33.24444444444444",
        cy: "0",
        r: "0.2",
        opacity: "0.6"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "35.2",
        cy: "0",
        r: "0.2",
        opacity: "0.4"
      }), _react.default.createElement("circle", {
        fill: "currentColor",
        cx: "37.15555555555555",
        cy: "0",
        r: "0.2",
        opacity: "0.2"
      }))))));
    }
  }]);

  return _default;
}(_react.Component), _temp);

var _default2 = _default;
exports.default = _default2;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/components/Toolbar/Orientation.js");
}();

;