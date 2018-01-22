(function(factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports", "./clock"], factory);
  }
})(function(require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var clock_1 = require("./clock");
  exports.Clock = clock_1.default;
});
