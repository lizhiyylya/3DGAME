System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, systemEvent, SystemEvent, AnimationComponent, v3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, PlayerController;

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
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
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
      }), _dec3 = property({
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

          _initializerDefineProperty(_this, "groundAnim", _descriptor2, _assertThisInitialized(_this));

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
            this.groundAnim.play('highLight');
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groundAnim", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvbWFpbi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVmVjMyIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJBbmltYXRpb25Db21wb25lbnQiLCJ2MyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBsYXllckNvbnRyb2xsZXIiLCJ0eXBlIiwiX3N0YXJ0SnVtcCIsIl9qdW1wU3RlcCIsIl9jdXJKdW1wVGltZSIsIl9qdW1wVGltZSIsIl9jdXJKdW1wU3BlZWQiLCJfY3VyUG9zIiwiX2RlbHRhUG9zIiwiX3RhcmdldFBvcyIsIl9pc01vdmluZyIsIm9uIiwiRXZlbnRUeXBlIiwiTU9VU0VfVVAiLCJvbk1vdXNlVXAiLCJldmVudCIsImdldEJ1dHRvbiIsImp1bXBCeVN0ZXAiLCJzdGVwIiwibm9kZSIsImdldFBvc2l0aW9uIiwiYWRkIiwiQm9keUFuaW0iLCJwbGF5IiwiZ3JvdW5kQW5pbSIsImRlbHRhcG9zIiwic2NlbmUiLCJjYyIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJnZXRDaGlsZEJ5TmFtZSIsInBvcyIsInNldFBvc2l0aW9uIiwibG9va0F0IiwidXAiLCJkZWx0YVRpbWUiLCJzdWJ0cmFjdCIsInVwZGF0YUNhbWVyYSIsIm9uT25jZUp1bXBFbmQiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxXLE9BQUFBLFc7QUFBeUJDLE1BQUFBLGtCLE9BQUFBLGtCO0FBQW9CQyxNQUFBQSxFLE9BQUFBLEU7Ozs7OztBQUN4RkMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEs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TCxDQUFVQyxXQUFWLENBQXNCLEtBQUtiLE9BQTNCO0FBQ0FkLGdCQUFBQSxJQUFJLENBQUMyQyxRQUFMLENBQWMsS0FBSzVCLFNBQW5CLEVBQThCLEtBQUtDLFVBQW5DLEVBQStDLEtBQUtGLE9BQXBEO0FBQ0EscUJBQUtZLElBQUwsQ0FBVWEsV0FBVixDQUFzQixLQUFLdkIsVUFBM0I7QUFDQSxxQkFBSzRCLFlBQUwsQ0FBa0IsS0FBSzdCLFNBQXZCO0FBQ0EscUJBQUtOLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxxQkFBS29DLGFBQUw7QUFDSCxlQVBELE1BT087QUFDSDtBQUNBLHFCQUFLbkIsSUFBTCxDQUFVQyxXQUFWLENBQXNCLEtBQUtiLE9BQTNCO0FBQ0EscUJBQUtDLFNBQUwsQ0FBZStCLENBQWYsR0FBbUIsS0FBS2pDLGFBQUwsR0FBcUI2QixTQUF4QztBQUNBMUMsZ0JBQUFBLElBQUksQ0FBQzRCLEdBQUwsQ0FBUyxLQUFLZCxPQUFkLEVBQXVCLEtBQUtBLE9BQTVCLEVBQXFDLEtBQUtDLFNBQTFDO0FBQ0EscUJBQUtXLElBQUwsQ0FBVWEsV0FBVixDQUFzQixLQUFLekIsT0FBM0I7QUFDQSxxQkFBSzhCLFlBQUwsQ0FBa0IsS0FBSzdCLFNBQXZCO0FBQ0g7QUFDSjtBQUNKOzs7O1FBdkZpQ2hCLFM7Ozs7O2lCQW1CSSxJOzs7Ozs7O2lCQUdFLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIFZlYzMsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudCwgRXZlbnRNb3VzZSwgQW5pbWF0aW9uQ29tcG9uZW50LCB2MyB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJQbGF5ZXJDb250cm9sbGVyXCIpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICAvLyBmb3IgZmFrZSB0d2VlblxyXG4gICAgcHJpdmF0ZSBfc3RhcnRKdW1wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9qdW1wU3RlcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2N1ckp1bXBUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfanVtcFRpbWU6IG51bWJlciA9IDAuMTtcclxuICAgIHByaXZhdGUgX2N1ckp1bXBTcGVlZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2N1clBvczogVmVjMyA9IHYzKCk7XHJcbiAgICBwcml2YXRlIF9kZWx0YVBvczogVmVjMyA9IHYzKDAsIDAsIDApO1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0UG9zOiBWZWMzID0gdjMoKTtcclxuICAgIHByaXZhdGUgX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IEFuaW1hdGlvbkNvbXBvbmVudH0pXHJcbiAgICBwdWJsaWMgQm9keUFuaW06IEFuaW1hdGlvbkNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBBbmltYXRpb25Db21wb25lbnR9KVxyXG4gICAgcHVibGljIGdyb3VuZEFuaW06IEFuaW1hdGlvbkNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbk1vdXNlVXAsIHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VVcChldmVudDogRXZlbnRNb3VzZSkge1xyXG4gICAgICAgIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBCeVN0ZXAoMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBCeVN0ZXAoLTEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqdW1wQnlTdGVwKHN0ZXA6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc01vdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YXJ0SnVtcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fanVtcFN0ZXAgPSBzdGVwO1xyXG4gICAgICAgIHRoaXMuX2N1ckp1bXBUaW1lID0gMDtcclxuICAgICAgICB0aGlzLl9jdXJKdW1wU3BlZWQgPSB0aGlzLl9qdW1wU3RlcCAvIHRoaXMuX2p1bXBUaW1lO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLl9jdXJQb3MpO1xyXG4gICAgICAgIFZlYzMuYWRkKHRoaXMuX3RhcmdldFBvcywgdGhpcy5fY3VyUG9zLCB2Myh0aGlzLl9qdW1wU3RlcCwgMCwgMCkpO1xyXG4gICAgICAgIHRoaXMuQm9keUFuaW0ucGxheSgnb25lU3RlcCcpO1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kQW5pbS5wbGF5KCdoaWdoTGlnaHQnKTtcclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25PbmNlSnVtcEVuZCgpIHtcclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0YUNhbWVyYShkZWx0YXBvcyl7XHJcbiAgICAgICAgdmFyIHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICB2YXIgbm9kZSA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FtZXJhXCIpO1xyXG4gICAgICAgIHZhciBwb3MgPSBjYy52MygwLCAwLCAwKTtcclxuICAgICAgICAvL2dldOeahHBvc3Rpb27lr7nosaHpnZ7lvJXnlKhcclxuICAgICAgICBub2RlLmdldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgVmVjMy5hZGQocG9zLCBwb3MsIGRlbHRhcG9zKTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgbm9kZS5sb29rQXQodGhpcy5ub2RlLmdldFBvc2l0aW9uKCksIG5vZGUudXApO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0SnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJKdW1wVGltZSA+IHRoaXMuX2p1bXBUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICAgICAgICAgIFZlYzMuc3VidHJhY3QodGhpcy5fZGVsdGFQb3MsIHRoaXMuX3RhcmdldFBvcywgdGhpcy5fY3VyUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGFDYW1lcmEodGhpcy5fZGVsdGFQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT25jZUp1bXBFbmQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHR3ZWVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbHRhUG9zLnggPSB0aGlzLl9jdXJKdW1wU3BlZWQgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgICAgICBWZWMzLmFkZCh0aGlzLl9jdXJQb3MsIHRoaXMuX2N1clBvcywgdGhpcy5fZGVsdGFQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2N1clBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0YUNhbWVyYSh0aGlzLl9kZWx0YVBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=