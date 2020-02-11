"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styledComponents");

var _temp;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

    _defineProperty(_assertThisInitialized(_this), "state", {
      isBlockRatio: false
    });

    _defineProperty(_assertThisInitialized(_this), "changeWidth", function (event) {
      var isBlockRatio = _this.state.isBlockRatio;
      var canvasDimensions = _this.props.canvasDimensions;
      var width = event.target.value;
      var height = canvasDimensions.height;
      if (!isBlockRatio) height = width && width / canvasDimensions.ratio || 1;

      _this.props.updateState({
        canvasDimensions: _objectSpread({}, canvasDimensions, {
          width: width,
          height: height
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeHeight", function (event) {
      var isBlockRatio = _this.state.isBlockRatio;
      var canvasDimensions = _this.props.canvasDimensions;
      var height = event.target.value;
      var width = canvasDimensions.width;
      if (!isBlockRatio) width = height && height * canvasDimensions.ratio || 1;

      _this.props.updateState({
        canvasDimensions: _objectSpread({}, canvasDimensions, {
          width: width,
          height: height
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyPreset", function (_ref) {
      var width = _ref.width,
          height = _ref.height;

      _this.props.updateState({
        canvasDimensions: {
          ratio: width / height,
          width: width,
          height: height
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleRatio", function () {
      _this.setState({
        isBlockRatio: !_this.state.isBlockRatio
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isBlockRatio = this.state.isBlockRatio;
      var _this$props = this.props,
          canvasDimensions = _this$props.canvasDimensions,
          processWithCloudimage = _this$props.processWithCloudimage,
          t = _this$props.t,
          config = _this$props.config;
      var _config$resizePresets = config.resizePresets,
          resizePresets = _config$resizePresets === void 0 ? [] : _config$resizePresets;
      return _react.default.createElement(_styledComponents.ResizeWrapper, null, _react.default.createElement(_styledComponents.ResizeBox, null, _react.default.createElement(_styledComponents.FieldSet, null, _react.default.createElement(_styledComponents.FieldLabel, null, t['common.width']), _react.default.createElement(_styledComponents.FieldInput, {
        fullSize: true,
        value: parseInt(canvasDimensions.width, 10) || '',
        onChange: this.changeWidth
      })), _react.default.createElement(_styledComponents.BlockRatioWrapper, null, _react.default.createElement(_styledComponents.BlockRatioBtn, {
        active: !isBlockRatio,
        style: processWithCloudimage ? {
          cursor: 'not-allowed'
        } : {},
        link: true,
        onClick: function onClick() {
          !processWithCloudimage && _this2.toggleRatio();
        }
      }, _react.default.createElement(_styledComponents.BlockRatioIcon, {
        active: !isBlockRatio,
        style: processWithCloudimage ? {
          cursor: 'not-allowed'
        } : {}
      }))), _react.default.createElement(_styledComponents.FieldSet, null, _react.default.createElement(_styledComponents.FieldLabel, null, t['common.height']), _react.default.createElement(_styledComponents.FieldInput, {
        fullSize: true,
        value: parseInt(canvasDimensions.height, 10) || '',
        onChange: this.changeHeight
      }))), _react.default.createElement(_styledComponents.SuggestionsBox, null, resizePresets.filter(function (preset) {
        return Math.abs(canvasDimensions.width / canvasDimensions.height - preset.ratio) < 0.05;
      }).map(function (preset) {
        return _react.default.createElement(_styledComponents.SuggestionOption, {
          key: preset.name,
          onClick: function onClick() {
            _this2.applyPreset(preset);
          }
        }, _react.default.createElement("div", null, preset.width, " x ", preset.height), _react.default.createElement("div", null, preset.name));
      })));
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

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/components/Toolbar/Resize.js");
}();

;