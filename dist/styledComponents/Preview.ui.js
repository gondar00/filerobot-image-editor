"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Watermark = exports.PreResizeBox = exports.PreviewImgBox = exports.Canvas = exports.PreviewWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  max-height: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: ", "px;\n  display: inline-block;\n  max-height: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n  position: absolute;\n  background-image: url('", "');\n  background-position: ", ";\n  background-repeat: no-repeat;\n  background-size: ", ";\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  opacity:", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  max-height: 100%;\n  max-width: 100%;\n  /*width: 100%;*/\n  height: 100%;\n  vertical-align: middle;\n  \n  ", "\n  \n  /* Limit image width to avoid overflow the container */\n  img {\n    max-width: 100% !important; /* This rule is very important, please do not ignore this! */\n  }\n  \n  #scaleflex-image-edit-box {\n    display: ", ";\n    max-height: 100%;\n    max-width: 100%;\n    vertical-align: middle;\n  }\n  \n   ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: calc(100% - 170px);\n  text-align: center;\n  line-height: calc(100% - 170px);\n  padding: 20px;\n  position: relative;\n  \n  :before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PreviewWrapper = _styledComponents.default.div(_templateObject());

exports.PreviewWrapper = PreviewWrapper;
var PreResizeBox = (0, _styledComponents.default)('div')(_templateObject2());
exports.PreResizeBox = PreResizeBox;

var PreviewImgBox = _styledComponents.default.div(_templateObject3(), function (props) {
  return !props.hideCanvas ? "\n  :before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }" : "\n  canvas {\n    position: relative;\n    left: -9999px;\n  }\n  ";
}, function (props) {
  return props.hide ? 'none' : 'inline-block';
}, function (p) {
  return p.isShowWatermark && "\ncanvas:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: red;\n    opacity: 0.5;\n  }";
});

exports.PreviewImgBox = PreviewImgBox;
var Watermark = (0, _styledComponents.default)('div')(_templateObject4(), function (p) {
  return p.width || 0;
}, function (p) {
  return p.height || 0;
}, function (p) {
  return p.url ? p.url : 'none';
}, function (p) {
  return "".concat(p.wx, "px ").concat(p.wy, "px");
}, function (p) {
  return "".concat(p.ww, "px ").concat(p.wh, "px");
}, function (p) {
  return p.opacity || 0;
}); //watermarkURL
//isShowWatermark

exports.Watermark = Watermark;

var Canvas = _styledComponents.default.canvas.attrs(function () {
  return {};
})(_templateObject5(), function (props) {
  return props.hide ? 'none' : 'inline-block';
});

exports.Canvas = Canvas;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PreviewWrapper, "PreviewWrapper", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js");

  __REACT_HOT_LOADER__.register(PreResizeBox, "PreResizeBox", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js");

  __REACT_HOT_LOADER__.register(PreviewImgBox, "PreviewImgBox", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js");

  __REACT_HOT_LOADER__.register(Watermark, "Watermark", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js");

  __REACT_HOT_LOADER__.register(Canvas, "Canvas", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js");
}();

;