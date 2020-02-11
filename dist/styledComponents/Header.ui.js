"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkBtn = exports.CancelBtn = exports.ToolbarWrapper = exports.RightActions = exports.LeftActions = exports.Title = exports.HeaderTop = exports.HeaderWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("./Button");

var _styleUtils = require("./styleUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-color: ", ";\n  color: ", ";\n  text-transform: capitalize;\n  \n  :hover {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";  \n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  width: 115px;\n  padding: 5px 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  width: 100px;\n  padding: 5px 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  text-transform: capitalize;\n  color: ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  line-height: 35px;\n  border-bottom: 1px solid ", ";\n  background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.secondaryBg;
});

exports.HeaderWrapper = HeaderWrapper;

var HeaderTop = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.primaryBg;
}, function (props) {
  return props.theme.colors.primaryBg;
});

exports.HeaderTop = HeaderTop;

var Title = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.theme.colors.text;
});

exports.Title = Title;

var LeftActions = _styledComponents.default.div(_templateObject4());

exports.LeftActions = LeftActions;

var RightActions = _styledComponents.default.div(_templateObject5());

exports.RightActions = RightActions;

var ToolbarWrapper = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.theme.colors.secondaryBg;
});

exports.ToolbarWrapper = ToolbarWrapper;
var CancelBtn = (0, _styledComponents.default)(_Button.Button)(_templateObject7(), function (props) {
  return props.theme.colors.primaryBg;
}, function (props) {
  return props.theme.colors.primaryBg;
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return (0, _styleUtils.getHoverColor)(props.theme.colors.primaryBg);
}, function (props) {
  return props.theme.colors.primaryBg;
}, function (props) {
  return props.theme.colors.text;
});
exports.CancelBtn = CancelBtn;
var DarkBtn = (0, _styledComponents.default)(CancelBtn)(_templateObject8());
exports.DarkBtn = DarkBtn;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HeaderWrapper, "HeaderWrapper", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Header.ui.js");

  __REACT_HOT_LOADER__.register(HeaderTop, "HeaderTop", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Header.ui.js");

  __REACT_HOT_LOADER__.register(Title, "Title", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Header.ui.js");

  __REACT_HOT_LOADER__.register(LeftActions, "LeftActions", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Header.ui.js");

  __REACT_HOT_LOADER__.register(RightActions, "RightActions", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Header.ui.js");

  __REACT_HOT_LOADER__.register(ToolbarWrapper, "ToolbarWrapper", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Header.ui.js");

  __REACT_HOT_LOADER__.register(CancelBtn, "CancelBtn", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Header.ui.js");

  __REACT_HOT_LOADER__.register(DarkBtn, "DarkBtn", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Header.ui.js");
}();

;