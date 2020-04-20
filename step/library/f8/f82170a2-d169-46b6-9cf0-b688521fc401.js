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
          } // updataCamera(deltapos){
          // };

        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this._startJump) {
              this._curJumpTime += deltaTime;

              if (this._curJumpTime > this._jumpTime) {
                // end
                this.node.getPosition(this._curPos);
                Vec3.subtract(this._deltaPos, this._targetPos, this._curPos);
                this.node.setPosition(this._targetPos);
                var scene = cc.director.getScene();
                var node = scene.getChildByName("Camera");
                var pos = cc.v3(0, 0, 0);
                node.getPosition(pos);
                Vec3.add(pos, pos, this._deltaPos);
                node.setPosition(pos);
                node.lookAt(this.node.getPosition(), node.up);
                this._startJump = false;
                this.onOnceJumpEnd();
              } else {
                // tween
                this.node.getPosition(this._curPos);
                this._deltaPos.x = this._curJumpSpeed * deltaTime;
                Vec3.add(this._curPos, this._curPos, this._deltaPos);
                this.node.setPosition(this._curPos);
                var scene = cc.director.getScene();
                var node = scene.getChildByName("Camera");
                var pos = cc.v3(0, 0, 0);
                node.getPosition(pos);
                Vec3.add(pos, pos, this._deltaPos);
                node.setPosition(pos);
                node.lookAt(this.node.getPosition(), node.up);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvbWFpbi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVmVjMyIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJBbmltYXRpb25Db21wb25lbnQiLCJ2MyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBsYXllckNvbnRyb2xsZXIiLCJ0eXBlIiwiX3N0YXJ0SnVtcCIsIl9qdW1wU3RlcCIsIl9jdXJKdW1wVGltZSIsIl9qdW1wVGltZSIsIl9jdXJKdW1wU3BlZWQiLCJfY3VyUG9zIiwiX2RlbHRhUG9zIiwiX3RhcmdldFBvcyIsIl9pc01vdmluZyIsIm9uIiwiRXZlbnRUeXBlIiwiTU9VU0VfVVAiLCJvbk1vdXNlVXAiLCJldmVudCIsImdldEJ1dHRvbiIsImp1bXBCeVN0ZXAiLCJzdGVwIiwibm9kZSIsImdldFBvc2l0aW9uIiwiYWRkIiwiQm9keUFuaW0iLCJwbGF5IiwiZGVsdGFUaW1lIiwic3VidHJhY3QiLCJzZXRQb3NpdGlvbiIsInNjZW5lIiwiY2MiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJwb3MiLCJsb29rQXQiLCJ1cCIsIm9uT25jZUp1bXBFbmQiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsVyxPQUFBQSxXO0FBQXlCQyxNQUFBQSxrQixPQUFBQSxrQjtBQUFvQkMsTUFBQUEsRSxPQUFBQSxFOzs7Ozs7QUFDeEZDLE1BQUFBLE8sR0FBc0JQLFUsQ0FBdEJPLE87QUFBU0MsTUFBQUEsUSxHQUFhUixVLENBQWJRLFE7O2tDQUdKQyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQyxVQW1C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Q0QsSUFBSSxDQUFDZSxFQUExQztBQUVBLHFCQUFLaEMsVUFBTCxHQUFrQixLQUFsQjtBQUNBLHFCQUFLaUMsYUFBTDtBQUNILGVBakJELE1BaUJPO0FBQ0g7QUFDQSxxQkFBS2hCLElBQUwsQ0FBVUMsV0FBVixDQUFzQixLQUFLYixPQUEzQjtBQUNBLHFCQUFLQyxTQUFMLENBQWU0QixDQUFmLEdBQW1CLEtBQUs5QixhQUFMLEdBQXFCa0IsU0FBeEM7QUFDQS9CLGdCQUFBQSxJQUFJLENBQUM0QixHQUFMLENBQVMsS0FBS2QsT0FBZCxFQUF1QixLQUFLQSxPQUE1QixFQUFxQyxLQUFLQyxTQUExQztBQUNBLHFCQUFLVyxJQUFMLENBQVVPLFdBQVYsQ0FBc0IsS0FBS25CLE9BQTNCO0FBR0Esb0JBQUlvQixLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxRQUFaLEVBQVo7QUFDQSxvQkFBSVgsSUFBSSxHQUFHUSxLQUFLLENBQUNJLGNBQU4sQ0FBcUIsUUFBckIsQ0FBWDtBQUNBLG9CQUFJQyxHQUFHLEdBQUdKLEVBQUUsQ0FBQy9CLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FBVjtBQUNBc0IsZ0JBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQlksR0FBakI7QUFDQXZDLGdCQUFBQSxJQUFJLENBQUM0QixHQUFMLENBQVNXLEdBQVQsRUFBY0EsR0FBZCxFQUFtQixLQUFLeEIsU0FBeEI7QUFDQVcsZ0JBQUFBLElBQUksQ0FBQ08sV0FBTCxDQUFpQk0sR0FBakI7QUFDQWIsZ0JBQUFBLElBQUksQ0FBQ2MsTUFBTCxDQUFZLEtBQUtkLElBQUwsQ0FBVUMsV0FBVixFQUFaLEVBQXFDRCxJQUFJLENBQUNlLEVBQTFDO0FBQ0g7QUFDSjtBQUNKOzs7O1FBN0ZpQzFDLFM7Ozs7O2lCQW1CSSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBWZWMzLCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnQsIEV2ZW50TW91c2UsIEFuaW1hdGlvbkNvbXBvbmVudCwgdjMgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiUGxheWVyQ29udHJvbGxlclwiKVxyXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG4gICAgLy8gZm9yIGZha2UgdHdlZW5cclxuICAgIHByaXZhdGUgX3N0YXJ0SnVtcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfanVtcFN0ZXA6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9jdXJKdW1wVGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2p1bXBUaW1lOiBudW1iZXIgPSAwLjE7XHJcbiAgICBwcml2YXRlIF9jdXJKdW1wU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9jdXJQb3M6IFZlYzMgPSB2MygpO1xyXG4gICAgcHJpdmF0ZSBfZGVsdGFQb3M6IFZlYzMgPSB2MygwLCAwLCAwKTtcclxuICAgIHByaXZhdGUgX3RhcmdldFBvczogVmVjMyA9IHYzKCk7XHJcbiAgICBwcml2YXRlIF9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBBbmltYXRpb25Db21wb25lbnR9KVxyXG4gICAgcHVibGljIEJvZHlBbmltOiBBbmltYXRpb25Db21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsIHRoaXMub25Nb3VzZVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlVXAoZXZlbnQ6IEV2ZW50TW91c2UpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZ2V0QnV0dG9uKCkgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5qdW1wQnlTdGVwKDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZ2V0QnV0dG9uKCkgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5qdW1wQnlTdGVwKC0xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcEJ5U3RlcChzdGVwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFydEp1bXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2p1bXBTdGVwID0gc3RlcDtcclxuICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fY3VySnVtcFNwZWVkID0gdGhpcy5fanVtcFN0ZXAgLyB0aGlzLl9qdW1wVGltZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICBWZWMzLmFkZCh0aGlzLl90YXJnZXRQb3MsIHRoaXMuX2N1clBvcywgdjModGhpcy5fanVtcFN0ZXAsIDAsIDApKTtcclxuICAgICAgICB0aGlzLkJvZHlBbmltLnBsYXkoJ29uZVN0ZXAnKTtcclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25PbmNlSnVtcEVuZCgpIHtcclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0YUNhbWVyYShkZWx0YXBvcyl7XHJcblxyXG4gICAgLy8gfTtcclxuXHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0SnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJKdW1wVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJKdW1wVGltZSA+IHRoaXMuX2p1bXBUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbmRcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuICAgICAgICAgICAgICAgIFZlYzMuc3VidHJhY3QodGhpcy5fZGVsdGFQb3MsIHRoaXMuX3RhcmdldFBvcywgdGhpcy5fY3VyUG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FtZXJhXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgVmVjMy5hZGQocG9zLCBwb3MsIHRoaXMuX2RlbHRhUG9zKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIG5vZGUubG9va0F0KHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLCBub2RlLnVwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydEp1bXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25PbmNlSnVtcEVuZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdHdlZW5cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLl9jdXJQb3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsdGFQb3MueCA9IHRoaXMuX2N1ckp1bXBTcGVlZCAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgICAgIFZlYzMuYWRkKHRoaXMuX2N1clBvcywgdGhpcy5fY3VyUG9zLCB0aGlzLl9kZWx0YVBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5fY3VyUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FtZXJhXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgVmVjMy5hZGQocG9zLCBwb3MsIHRoaXMuX2RlbHRhUG9zKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIG5vZGUubG9va0F0KHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLCBub2RlLnVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==