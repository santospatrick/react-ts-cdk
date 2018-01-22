"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Clock = /** @class */ (function(_super) {
  __extends(Clock, _super);
  function Clock(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      date: new Date()
    };
    return _this;
  }
  Clock.prototype.componentDidMount = function() {
    this.timeId = setInterval(this.handleTick.bind(this), 1000);
  };
  Clock.prototype.tick = function() {
    this.setState({
      date: new Date()
    });
  };
  Clock.prototype.componentWillUnmount = function() {
    clearInterval(this.timeId);
  };
  Clock.prototype.render = function() {
    var msg = this.props.msg;
    var date = this.state.date;
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, msg),
      React.createElement("h2", null, "It is ", date.toLocaleTimeString())
    );
  };
  Clock.prototype.handleTick = function() {
    this.tick();
  };
  return Clock;
})(React.Component);
exports.default = Clock;
//# sourceMappingURL=clock.js.map
