"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WatermarkIcon = exports.Watermarks = exports.SelectWatermarkLabel = exports.PositionSquare = exports.WatermarkPositionWrapper = exports.WatermarkInputs = exports.WrapperForOpacity = exports.WrapperForControls = exports.WrapperForURL = exports.WatermarkWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 200px;\n  height: 70px;\n  display: inline-block;\n  vertical-align: middle;\n  background: ", " url(", ") 50% 50% / contain no-repeat; \n  margin: 10px;\n  padding: 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  \n  :hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  line-height: 100px;\n  background: ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n  cursor: pointer;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  border: 1px solid ", ";\n  background: ", ";\n  cursor: ", ";\n  \n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  padding: 5px;\n  display: inline-block;\n  font-size: 0;\n  \n  div:nth-child(1) {\n    border-radius: 4px 0 0 0;\n  }\n  \n  div:nth-child(3) {\n    border-radius: 0 4px 0 0;\n  }\n  \n  div:nth-child(7) {\n    border-radius: 0 0 0 4px;\n  }\n  \n  div:nth-child(9) {\n    border-radius: 0 0 4px 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 100px);\n  display: inline-block;\n  vertical-align: top;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n\n  label {\n    min-width: 100px;\n    display: inline-block;\n    vertical-align: middle;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  \n  label {\n    min-width: 100px;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0;\n  }\n  \n  input {\n    width: calc(100% - 100px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  color: ", ";\n  text-align: left;\n  white-space: normal;\n  \n  .image-editor-range {\n    display: inline-block;\n    padding: 5px;\n    vertical-align: middle;\n  \n    :after {\n      display: none;\n    }\n    \n    label {\n      display: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WatermarkWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.text;
});

exports.WatermarkWrapper = WatermarkWrapper;
var WrapperForURL = (0, _styledComponents.default)('div')(_templateObject2());
exports.WrapperForURL = WrapperForURL;
var WrapperForControls = (0, _styledComponents.default)('div')(_templateObject3(), function (p) {
  if (p.switcherPosition === 'right') {
    return ".cloudimage-url-generator-switch {\n        margin-left: 100px;\n        margin-top: -6px;\n        \n        label {\n          min-width: auto;\n        }\n      }";
  } else {
    return 'padding: 10px;';
  }
});
exports.WrapperForControls = WrapperForControls;
var WrapperForOpacity = (0, _styledComponents.default)('div')(_templateObject4());
exports.WrapperForOpacity = WrapperForOpacity;
var WatermarkInputs = (0, _styledComponents.default)('div')(_templateObject5());
exports.WatermarkInputs = WatermarkInputs;
var WatermarkPositionWrapper = (0, _styledComponents.default)('div')(_templateObject6());
exports.WatermarkPositionWrapper = WatermarkPositionWrapper;
var PositionSquare = (0, _styledComponents.default)('div')(_templateObject7(), function (p) {
  return p.theme.colors.secondaryBgHover;
}, function (p) {
  return p.clickable ? p.active ? p.theme.colors.accent : p.theme.colors.secondaryBg : p.theme.colors.disabledBg;
}, function (p) {
  return p.clickable ? 'pointer' : 'not-allowed';
}, function (p) {
  if (p.clickable !== 0 && !p.active) {
    return "\n        :hover {\n          background: ".concat(p.theme.colors.primaryBg, ";\n        }\n      ");
  }
});
exports.PositionSquare = PositionSquare;
var SelectWatermarkLabel = (0, _styledComponents.default)('div')(_templateObject8());
exports.SelectWatermarkLabel = SelectWatermarkLabel;
var Watermarks = (0, _styledComponents.default)('div')(_templateObject9(), function (p) {
  return p.theme.colors.secondaryBg;
});
exports.Watermarks = Watermarks;
var WatermarkIcon = (0, _styledComponents.default)('div')(_templateObject10(), function (p) {
  return p.theme.colors.primaryBgHover;
}, function (p) {
  return p.src;
}, function (p) {
  return p.theme.colors.secondaryBgHover;
});
exports.WatermarkIcon = WatermarkIcon;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WatermarkWrapper, "WatermarkWrapper", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");

  __REACT_HOT_LOADER__.register(WrapperForURL, "WrapperForURL", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");

  __REACT_HOT_LOADER__.register(WrapperForControls, "WrapperForControls", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");

  __REACT_HOT_LOADER__.register(WrapperForOpacity, "WrapperForOpacity", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");

  __REACT_HOT_LOADER__.register(WatermarkInputs, "WatermarkInputs", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");

  __REACT_HOT_LOADER__.register(WatermarkPositionWrapper, "WatermarkPositionWrapper", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");

  __REACT_HOT_LOADER__.register(PositionSquare, "PositionSquare", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");

  __REACT_HOT_LOADER__.register(SelectWatermarkLabel, "SelectWatermarkLabel", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");

  __REACT_HOT_LOADER__.register(Watermarks, "Watermarks", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");

  __REACT_HOT_LOADER__.register(WatermarkIcon, "WatermarkIcon", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Watermark.ui.js");
}();

;