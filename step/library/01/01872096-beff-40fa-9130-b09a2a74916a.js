System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, AnimationComponent, CCInteger, geometry, ModelComponent, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, pos, GroundManager;

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
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      AnimationComponent = _cc.AnimationComponent;
      CCInteger = _cc.CCInteger;
      geometry = _cc.geometry;
      ModelComponent = _cc.ModelComponent;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "01872CWvv9A+pEwsJoqdJFq", "groundManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      pos = new Vec3();

      _export("GroundManager", GroundManager = (_dec = ccclass("GroundManager"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: CCInteger
      }), _dec6 = property({
        type: AnimationComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(GroundManager, _Component);

        function GroundManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GroundManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroundManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cubePrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buildUIPre", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "highLightPre", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "groundSize", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "groundAnim", _descriptor5, _assertThisInitialized(_this));

          _this.grounds = [];
          _this.highLightGround = null;
          _this.buildUI = null;
          return _this;
        }

        _createClass(GroundManager, [{
          key: "start",
          //------------------------------------------
          value: function start() {
            this.generateGround();
            this.highLightGround = instantiate(this.highLightPre);
            this.node.addChild(this.highLightGround);
            this.buildUI = instantiate(this.buildUIPre);
            cc.find("Canvas").addChild(this.buildUI);
            this.buildUI.active = false; // button.node.on(cc.Node.EventType.TOUCH_START, (event) => {
            //     cc.log("This is a callback after the trigger event");
            // });
            // // You could also add a click event
            // //Note: In this way, you can't get the touch event info, so use it wisely.
            // button.node.on('click', (button) => {
            //    //The event is a custom event, you could get the Button component via first argument
            // })
          } //------------------------------------------
          // initButton(){
          //     const bmb = this.buildUI.getChildByName("buildMainBuilding");
          //     bmb.on(cc.Node.EventType.MOUSE_UP, this.onClick, this);
          //     bmb.getComponent(cc.Button);
          //     //this.manualMetallic.getComponentInChildren(LabelComponent).string = e.progress.toFixed(1);
          // }
          //------------------------------------------
          //先暴力添加，后续再调整以提高性能

        }, {
          key: "generateGround",
          value: function generateGround() {
            this.node.removeAllChildren();

            for (var i = -this.groundSize; i < this.groundSize; ++i) {
              for (var j = -this.groundSize; j < this.groundSize; ++j) {
                var block = instantiate(this.cubePrfb);
                this.node.addChild(block);
                block.setPosition(i, 0, j);
                this.grounds.push(block);
              }
            }
          } //------------------------------------------

        }, {
          key: "clickGrounds",
          value: function clickGrounds(x, y, ray) {
            for (var i = 0; i < this.grounds.length; ++i) {
              var modelComponent = this.grounds[i].getComponent(ModelComponent);
              var aabb = modelComponent.model.worldBounds;

              if (geometry.intersect.ray_aabb(ray, aabb)) {
                this.grounds[i].getPosition(pos);
                this.createAnimation(pos);
                this.ActiveBuildUI(x, y);
                break;
              }
            }
          } //------------------------------------------

        }, {
          key: "ActiveBuildUI",
          value: function ActiveBuildUI(x, y) {
            this.buildUI.setPosition(x, y, -1);
            this.buildUI.active = true;
          } //------------------------------------------

        }, {
          key: "createAnimation",
          value: function createAnimation(position) {
            this.highLightGround.setPosition(position);
            var animation = this.highLightGround.getComponent(AnimationComponent);
            animation.play('highLight'); // cc.loader.loadRes("model/ground/highLightGround", Prefab , (err: any, prefab: Prefab) => {  ///可以执行
            //     const animNode = instantiate(prefab);
            //     this.node.addChild(animNode);
            //     animNode.setPosition(position);
            //     const animation = animNode.getComponent(AnimationComponent);
            //     animation.play('highLight');
            // });
          } //------------------------------------------

        }]);

        return GroundManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubePrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buildUIPre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "highLightPre", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groundSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "groundAnim", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvZ3JvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJBbmltYXRpb25Db21wb25lbnQiLCJDQ0ludGVnZXIiLCJnZW9tZXRyeSIsIk1vZGVsQ29tcG9uZW50IiwiVmVjMyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInBvcyIsIkdyb3VuZE1hbmFnZXIiLCJ0eXBlIiwiZ3JvdW5kcyIsImhpZ2hMaWdodEdyb3VuZCIsImJ1aWxkVUkiLCJnZW5lcmF0ZUdyb3VuZCIsImhpZ2hMaWdodFByZSIsIm5vZGUiLCJhZGRDaGlsZCIsImJ1aWxkVUlQcmUiLCJjYyIsImZpbmQiLCJhY3RpdmUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImkiLCJncm91bmRTaXplIiwiaiIsImJsb2NrIiwiY3ViZVByZmIiLCJzZXRQb3NpdGlvbiIsInB1c2giLCJ4IiwieSIsInJheSIsImxlbmd0aCIsIm1vZGVsQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwiYWFiYiIsIm1vZGVsIiwid29ybGRCb3VuZHMiLCJpbnRlcnNlY3QiLCJyYXlfYWFiYiIsImdldFBvc2l0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiQWN0aXZlQnVpbGRVSSIsInBvc2l0aW9uIiwiYW5pbWF0aW9uIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsa0IsT0FBQUEsa0I7QUFBMEJDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxRLE9BQUFBLFE7QUFBMkJDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsSSxP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dEI7QUFDQTtBQUNIO0FBQ0o7QUFDSixXLENBQ0w7Ozs7d0NBQ2tCRCxDLEVBQVdDLEMsRUFBVztBQUNoQyxpQkFBS2xCLE9BQUwsQ0FBYWUsV0FBYixDQUF5QkUsQ0FBekIsRUFBNEJDLENBQTVCLEVBQStCLENBQUMsQ0FBaEM7QUFDQSxpQkFBS2xCLE9BQUwsQ0FBYVEsTUFBYixHQUFzQixJQUF0QjtBQUNILFcsQ0FDTDs7OzswQ0FDcUJ1QixRLEVBQWU7QUFDNUIsaUJBQUtoQyxlQUFMLENBQXFCZ0IsV0FBckIsQ0FBaUNnQixRQUFqQztBQUNBLGdCQUFNQyxTQUFTLEdBQUcsS0FBS2pDLGVBQUwsQ0FBcUJ1QixZQUFyQixDQUFrQ2xDLGtCQUFsQyxDQUFsQjtBQUNBNEMsWUFBQUEsU0FBUyxDQUFDQyxJQUFWLENBQWUsV0FBZixFQUg0QixDQUk1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILFcsQ0FDTDs7Ozs7UUExRm1DaEQsUzs7Ozs7aUJBR0wsSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBR0YsRTs7Ozs7OztpQkFHWSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBQcmVmYWIsIGluc3RhbnRpYXRlLCBBbmltYXRpb25Db21wb25lbnQsIE5vZGUsIENDSW50ZWdlciwgZ2VvbWV0cnksIENhbWVyYUNvbXBvbmVudCwgTW9kZWxDb21wb25lbnQsIFZlYzN9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuY29uc3QgcG9zID0gbmV3IFZlYzMoKTtcclxuXHJcbkBjY2NsYXNzKFwiR3JvdW5kTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgR3JvdW5kTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBQcmVmYWJ9KVxyXG4gICAgcHVibGljIGN1YmVQcmZiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcclxuICAgIHB1YmxpYyBidWlsZFVJUHJlOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcclxuICAgIHB1YmxpYyBoaWdoTGlnaHRQcmU6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBDQ0ludGVnZXJ9KVxyXG4gICAgcHVibGljIGdyb3VuZFNpemU6IE51bWJlciA9IDUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogQW5pbWF0aW9uQ29tcG9uZW50fSlcclxuICAgIHB1YmxpYyBncm91bmRBbmltOiBBbmltYXRpb25Db21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBncm91bmRzOiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgaGlnaExpZ2h0R3JvdW5kOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgYnVpbGRVSTogTm9kZSA9IG51bGw7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0R3JvdW5kID0gaW5zdGFudGlhdGUodGhpcy5oaWdoTGlnaHRQcmUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLmhpZ2hMaWdodEdyb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGRVSSA9IGluc3RhbnRpYXRlKHRoaXMuYnVpbGRVSVByZSk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZCh0aGlzLmJ1aWxkVUkpO1xyXG4gICAgICAgIHRoaXMuYnVpbGRVSS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gYnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCJUaGlzIGlzIGEgY2FsbGJhY2sgYWZ0ZXIgdGhlIHRyaWdnZXIgZXZlbnRcIik7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gLy8gWW91IGNvdWxkIGFsc28gYWRkIGEgY2xpY2sgZXZlbnRcclxuICAgICAgICAvLyAvL05vdGU6IEluIHRoaXMgd2F5LCB5b3UgY2FuJ3QgZ2V0IHRoZSB0b3VjaCBldmVudCBpbmZvLCBzbyB1c2UgaXQgd2lzZWx5LlxyXG4gICAgICAgIC8vIGJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIChidXR0b24pID0+IHtcclxuICAgICAgICAvLyAgICAvL1RoZSBldmVudCBpcyBhIGN1c3RvbSBldmVudCwgeW91IGNvdWxkIGdldCB0aGUgQnV0dG9uIGNvbXBvbmVudCB2aWEgZmlyc3QgYXJndW1lbnRcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gaW5pdEJ1dHRvbigpe1xyXG4gICAgLy8gICAgIGNvbnN0IGJtYiA9IHRoaXMuYnVpbGRVSS5nZXRDaGlsZEJ5TmFtZShcImJ1aWxkTWFpbkJ1aWxkaW5nXCIpO1xyXG4gICAgLy8gICAgIGJtYi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbkNsaWNrLCB0aGlzKTtcclxuICAgIC8vICAgICBibWIuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAvLyAgICAgLy90aGlzLm1hbnVhbE1ldGFsbGljLmdldENvbXBvbmVudEluQ2hpbGRyZW4oTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGUucHJvZ3Jlc3MudG9GaXhlZCgxKTtcclxuICAgIC8vIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8v5YWI5pq05Yqb5re75Yqg77yM5ZCO57ut5YaN6LCD5pW05Lul5o+Q6auY5oCn6IO9XHJcbiAgICBnZW5lcmF0ZUdyb3VuZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAtdGhpcy5ncm91bmRTaXplOyBpIDwgdGhpcy5ncm91bmRTaXplOyArK2kpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAtdGhpcy5ncm91bmRTaXplOyBqIDwgdGhpcy5ncm91bmRTaXplOyArK2ope1xyXG4gICAgICAgICAgICAgICBjb25zdCBibG9jayA9IGluc3RhbnRpYXRlKHRoaXMuY3ViZVByZmIpO1xyXG4gICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmxvY2spO1xyXG4gICAgICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihpICwgMCwgaik7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kcy5wdXNoKGJsb2NrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNsaWNrR3JvdW5kcyh4OiBudW1iZXIsIHk6IG51bWJlciwgcmF5OiBnZW9tZXRyeS5yYXkpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHRoaXMuZ3JvdW5kcy5sZW5ndGg7ICsraSl7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsQ29tcG9uZW50ID0gdGhpcy5ncm91bmRzW2ldLmdldENvbXBvbmVudChNb2RlbENvbXBvbmVudCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGFhYmIgPSBtb2RlbENvbXBvbmVudC5tb2RlbC53b3JsZEJvdW5kcztcclxuICAgICAgICAgICAgaWYgKGdlb21ldHJ5LmludGVyc2VjdC5yYXlfYWFiYihyYXksIGFhYmIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZHNbaV0uZ2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFjdGl2ZUJ1aWxkVUkoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBBY3RpdmVCdWlsZFVJKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5idWlsZFVJLnNldFBvc2l0aW9uKHgsIHksIC0xKTtcclxuICAgICAgICB0aGlzLmJ1aWxkVUkuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNyZWF0ZUFuaW1hdGlvbiAocG9zaXRpb246IFZlYzMpe1xyXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0R3JvdW5kLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmhpZ2hMaWdodEdyb3VuZC5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICBhbmltYXRpb24ucGxheSgnaGlnaExpZ2h0Jyk7XHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoXCJtb2RlbC9ncm91bmQvaGlnaExpZ2h0R3JvdW5kXCIsIFByZWZhYiAsIChlcnI6IGFueSwgcHJlZmFiOiBQcmVmYWIpID0+IHsgIC8vL+WPr+S7peaJp+ihjFxyXG4gICAgICAgIC8vICAgICBjb25zdCBhbmltTm9kZSA9IGluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5hZGRDaGlsZChhbmltTm9kZSk7XHJcbiAgICAgICAgLy8gICAgIGFuaW1Ob2RlLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAvLyAgICAgY29uc3QgYW5pbWF0aW9uID0gYW5pbU5vZGUuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgIGFuaW1hdGlvbi5wbGF5KCdoaWdoTGlnaHQnKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufSJdfQ==