System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, systemEvent, SystemEvent, AnimationComponent, v3, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PlayerController;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      AnimationComponent = _cc.AnimationComponent;
      v3 = _cc.v3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f8217Ci0WlGtpzwtohSH8QB", "main", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PlayerController", PlayerController = (_dec = ccclass("PlayerController"), _dec2 = property({
        type: AnimationComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(PlayerController, _Component);

        function PlayerController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PlayerController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PlayerController)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._startJump = false;
          _this._jumpStep = 0;
          _this._curJumpTime = 0;
          _this._jumpTime = 0.1;
          _this._curJumpSpeed = 0;
          _this._curPos = v3();
          _this._deltaPos = v3(0, 0, 0);
          _this._targetPos = v3();
          _this._isMoving = false;

          _initializerDefineProperty(_this, "BodyAnim", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(PlayerController, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          }
        }, {
          key: "onMouseUp",
          value: function onMouseUp(event) {
            if (event.getButton() === 0) {
              this.jumpByStep(1);
            } else if (event.getButton() === 2) {
              this.jumpByStep(-1);
            }
          }
        }, {
          key: "jumpByStep",
          value: function jumpByStep(step) {
            if (this._isMoving) {
              return;
            }

            this._startJump = true;
            this._jumpStep = step;
            this._curJumpTime = 0;
            this._curJumpSpeed = this._jumpStep / this._jumpTime;
            this.node.getPosition(this._curPos);
            Vec3.add(this._targetPos, this._curPos, v3(this._jumpStep, 0, 0));
            this.BodyAnim.play('oneStep');
            this._isMoving = true;
          }
        }, {
          key: "onOnceJumpEnd",
          value: function onOnceJumpEnd() {
            this._isMoving = false;
          }
        }, {
          key: "updataCamera",
          value: function updataCamera(deltapos) {
            var scene = cc.director.getScene();
            var node = scene.getChildByName("Camera");
            var pos = cc.v3(0, 0, 0); //get的postion对象非引用

            node.getPosition(pos);
            Vec3.add(pos, pos, deltapos);
            node.setPosition(pos);
            node.lookAt(this.node.getPosition(), node.up);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this._startJump) {
              this._curJumpTime += deltaTime;

              if (this._curJumpTime > this._jumpTime) {
                this.node.getPosition(this._curPos);
                Vec3.subtract(this._deltaPos, this._targetPos, this._curPos);
                this.node.setPosition(this._targetPos);
                this.updataCamera(this._deltaPos);
                this._startJump = false;
                this.onOnceJumpEnd();
              } else {
                // tween
                this.node.getPosition(this._curPos);
                this._deltaPos.x = this._curJumpSpeed * deltaTime;
                Vec3.add(this._curPos, this._curPos, this._deltaPos);
                this.node.setPosition(this._curPos);
                this.updataCamera(this._deltaPos);
              }
            }
          }
        }]);

        return PlayerController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BodyAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvbWFpbi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVmVjMyIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJBbmltYXRpb25Db21wb25lbnQiLCJ2MyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBsYXllckNvbnRyb2xsZXIiLCJ0eXBlIiwiX3N0YXJ0SnVtcCIsIl9qdW1wU3RlcCIsIl9jdXJKdW1wVGltZSIsIl9qdW1wVGltZSIsIl9jdXJKdW1wU3BlZWQiLCJfY3VyUG9zIiwiX2RlbHRhUG9zIiwiX3RhcmdldFBvcyIsIl9pc01vdmluZyIsIm9uIiwiRXZlbnRUeXBlIiwiTU9VU0VfVVAiLCJvbk1vdXNlVXAiLCJldmVudCIsImdldEJ1dHRvbiIsImp1bXBCeVN0ZXAiLCJzdGVwIiwibm9kZSIsImdldFBvc2l0aW9uIiwiYWRkIiwiQm9keUFuaW0iLCJwbGF5IiwiZGVsdGFwb3MiLCJzY2VuZSIsImNjIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwicG9zIiwic2V0UG9zaXRpb24iLCJsb29rQXQiLCJ1cCIsImRlbHRhVGltZSIsInN1YnRyYWN0IiwidXBkYXRhQ2FtZXJhIiwib25PbmNlSnVtcEVuZCIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxXLE9BQUFBLFc7QUFBeUJDLE1BQUFBLGtCLE9BQUFBLGtCO0FBQW9CQyxNQUFBQSxFLE9BQUFBLEU7Ozs7OztBQUN4RkMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7a0NBR0pDLGdCLFdB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QUFwRDtBQUNBLHFCQUFLWSxJQUFMLENBQVVZLFdBQVYsQ0FBc0IsS0FBS3RCLFVBQTNCO0FBQ0EscUJBQUsyQixZQUFMLENBQWtCLEtBQUs1QixTQUF2QjtBQUNBLHFCQUFLTixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EscUJBQUttQyxhQUFMO0FBQ0gsZUFQRCxNQU9PO0FBQ0g7QUFDQSxxQkFBS2xCLElBQUwsQ0FBVUMsV0FBVixDQUFzQixLQUFLYixPQUEzQjtBQUNBLHFCQUFLQyxTQUFMLENBQWU4QixDQUFmLEdBQW1CLEtBQUtoQyxhQUFMLEdBQXFCNEIsU0FBeEM7QUFDQXpDLGdCQUFBQSxJQUFJLENBQUM0QixHQUFMLENBQVMsS0FBS2QsT0FBZCxFQUF1QixLQUFLQSxPQUE1QixFQUFxQyxLQUFLQyxTQUExQztBQUNBLHFCQUFLVyxJQUFMLENBQVVZLFdBQVYsQ0FBc0IsS0FBS3hCLE9BQTNCO0FBQ0EscUJBQUs2QixZQUFMLENBQWtCLEtBQUs1QixTQUF2QjtBQUNIO0FBQ0o7QUFDSjs7OztRQWxGaUNoQixTOzs7OztpQkFtQkksSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgVmVjMywgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBFdmVudE1vdXNlLCBBbmltYXRpb25Db21wb25lbnQsIHYzIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlBsYXllckNvbnRyb2xsZXJcIilcclxuZXhwb3J0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIC8vIGZvciBmYWtlIHR3ZWVuXHJcbiAgICBwcml2YXRlIF9zdGFydEp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2p1bXBTdGVwOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY3VySnVtcFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9qdW1wVGltZTogbnVtYmVyID0gMC4xO1xyXG4gICAgcHJpdmF0ZSBfY3VySnVtcFNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY3VyUG9zOiBWZWMzID0gdjMoKTtcclxuICAgIHByaXZhdGUgX2RlbHRhUG9zOiBWZWMzID0gdjMoMCwgMCwgMCk7XHJcbiAgICBwcml2YXRlIF90YXJnZXRQb3M6IFZlYzMgPSB2MygpO1xyXG4gICAgcHJpdmF0ZSBfaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogQW5pbWF0aW9uQ29tcG9uZW50fSlcclxuICAgIHB1YmxpYyBCb2R5QW5pbTogQW5pbWF0aW9uQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZVVwKGV2ZW50OiBFdmVudE1vdXNlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmdldEJ1dHRvbigpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEJ5U3RlcCgxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmdldEJ1dHRvbigpID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEJ5U3RlcCgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGp1bXBCeVN0ZXAoc3RlcDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTW92aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhcnRKdW1wID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9qdW1wU3RlcCA9IHN0ZXA7XHJcbiAgICAgICAgdGhpcy5fY3VySnVtcFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2N1ckp1bXBTcGVlZCA9IHRoaXMuX2p1bXBTdGVwIC8gdGhpcy5fanVtcFRpbWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgVmVjMy5hZGQodGhpcy5fdGFyZ2V0UG9zLCB0aGlzLl9jdXJQb3MsIHYzKHRoaXMuX2p1bXBTdGVwLCAwLCAwKSk7XHJcbiAgICAgICAgdGhpcy5Cb2R5QW5pbS5wbGF5KCdvbmVTdGVwJyk7XHJcbiAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT25jZUp1bXBFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGFDYW1lcmEoZGVsdGFwb3Mpe1xyXG4gICAgICAgIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbWVyYVwiKTtcclxuICAgICAgICB2YXIgcG9zID0gY2MudjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy9nZXTnmoRwb3N0aW9u5a+56LGh6Z2e5byV55SoXHJcbiAgICAgICAgbm9kZS5nZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIFZlYzMuYWRkKHBvcywgcG9zLCBkZWx0YXBvcyk7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIG5vZGUubG9va0F0KHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLCBub2RlLnVwKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydEp1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VySnVtcFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VySnVtcFRpbWUgPiB0aGlzLl9qdW1wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgICAgICAgICBWZWMzLnN1YnRyYWN0KHRoaXMuX2RlbHRhUG9zLCB0aGlzLl90YXJnZXRQb3MsIHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5fdGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRhQ2FtZXJhKHRoaXMuX2RlbHRhUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0SnVtcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk9uY2VKdW1wRW5kKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0d2VlblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWx0YVBvcy54ID0gdGhpcy5fY3VySnVtcFNwZWVkICogZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICAgICAgVmVjMy5hZGQodGhpcy5fY3VyUG9zLCB0aGlzLl9jdXJQb3MsIHRoaXMuX2RlbHRhUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9jdXJQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGFDYW1lcmEodGhpcy5fZGVsdGFQb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19