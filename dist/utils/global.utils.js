"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSecretHeaderName = exports.getBaseUrl = exports.getBaseAPI = exports.getCanvasNode = void 0;

var getCanvasNode = function getCanvasNode() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'scaleflex-image-edit-box';
  return window.document.getElementById(id);
};

exports.getCanvasNode = getCanvasNode;

var getBaseAPI = function getBaseAPI(baseAPI, container, platform) {
  return baseAPI ? baseAPI + '/' : getBaseUrl(container, platform);
};

exports.getBaseAPI = getBaseAPI;

var getBaseUrl = function getBaseUrl(container) {
  var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'filerobot';
  return platform === 'filerobot' ? "https://api.filerobot.com/".concat(container, "/v3/") : "https://".concat(container, ".api.airstore.io/v1/");
};

exports.getBaseUrl = getBaseUrl;

var getSecretHeaderName = function getSecretHeaderName() {
  var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'filerobot';
  return platform === 'filerobot' ? "X-Filerobot-Key" : "X-Airstore-Secret-Key";
};

exports.getSecretHeaderName = getSecretHeaderName;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getCanvasNode, "getCanvasNode", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/utils/global.utils.js");

  __REACT_HOT_LOADER__.register(getBaseAPI, "getBaseAPI", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/utils/global.utils.js");

  __REACT_HOT_LOADER__.register(getBaseUrl, "getBaseUrl", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/utils/global.utils.js");

  __REACT_HOT_LOADER__.register(getSecretHeaderName, "getSecretHeaderName", "/Users/gandharv/image-editor/filerobot-image-editor/projects/react/utils/global.utils.js");
}();

;