"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateIcon = exports.RotateLabel = exports.RotateButton = exports.RotateWrapper = exports.OrientationWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styleUtils = require("./styleUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  height: 16px;\n  font-size: 16px;\n  margin-top: -4px;\n  display: inline-block;\n  vertical-align: middle;\n  color: ", ";\n  margin-right: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  \n  button {\n    text-transform: none;\n    font-size: 12px;\n    min-width: 142px;\n    margin-right: 5px;\n  }\n  \n  button:focus,  button:active {\n    outline: none !important;\n    box-shadow: none !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  //padding: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-align: center;\n  \n  svg {\n    margin-top: -7px;\n    width: 750px;\n    \n    text {\n      font-size: 2px;\n    }\n  }\n  \n  .image-editor-range-wrapper {\n    width: 280px;\n    padding: 0;\n    margin: 12px auto 0;\n    \n    input#range {\n      background: none;\n      width: 280px;\n      \n      &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        width: 9px;\n        height: 18px;\n        border-radius: 50%;\n        background: ", ";\n      }\n      \n      &::-moz-range-thumb {\n        border: none;\n        width: 9px;\n        height: 18px;\n        border-radius: 50%;\n        background: ", ";\n        cursor: pointer;\n      }\n    }\n    \n    label {\n      display: none;\n    }\n    \n    :after {\n      display: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrientationWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.text;
}, function (p) {
  return p.theme.colors.text;
}, function (p) {
  return p.theme.colors.text;
});

exports.OrientationWrapper = OrientationWrapper;

var RotateWrapper = _styledComponents.default.div(_templateObject2());

exports.RotateWrapper = RotateWrapper;

var RotateLabel = _styledComponents.default.div(_templateObject3());

exports.RotateLabel = RotateLabel;

var RotateButton = _styledComponents.default.div(_templateObject4());

exports.RotateButton = RotateButton;

var RotateIcon = _styledComponents.default.span(_templateObject5(), function (props) {
  return (0, _styleUtils.getIconStyles)(props);
}, function (props) {
  return (0, _styleUtils.getIconByName)(props.name);
}, function (props) {
  return props.theme.colors.text;
});

exports.RotateIcon = RotateIcon;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OrientationWrapper, "OrientationWrapper", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js");

  __REACT_HOT_LOADER__.register(RotateWrapper, "RotateWrapper", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js");

  __REACT_HOT_LOADER__.register(RotateLabel, "RotateLabel", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js");

  __REACT_HOT_LOADER__.register(RotateButton, "RotateButton", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js");

  __REACT_HOT_LOADER__.register(RotateIcon, "RotateIcon", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js");
}();

;