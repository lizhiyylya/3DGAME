System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, groundModel;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "00a93iq96hAmrF9uWDjZiYS", "groundModel", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("groundModel", groundModel = (_dec = ccclass("groundModel"), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(groundModel, _Component);

        function groundModel() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, groundModel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(groundModel)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "groundPrfb", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(groundModel, [{
          key: "start",
          value: function start() {
            var pos = cc.v3(0, 0, 0); //get的postion对象非引用

            this.node.getPosition(pos);
            this.node.on(cc.Node.EventType.MOUSE_UP, this.onClick);
          }
        }, {
          key: "onClick",
          value: function onClick() {
            var _this2 = this;

            cc.loader.loadRes("model/ground/highLightGround", Prefab, function (err, prefab) {
              var pos = cc.v3(0, 0, 0); //get的postion对象非引用

              _this2.node.getPosition(pos);

              var newNode = instantiate(prefab);

              _this2.node.addChild(newNode);
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return groundModel;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groundPrfb", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvZ3JvdW5kTW9kZWwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiZ3JvdW5kTW9kZWwiLCJ0eXBlIiwicG9zIiwiY2MiLCJ2MyIsIm5vZGUiLCJnZXRQb3NpdGlvbiIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX1VQIiwib25DbGljayIsImxvYWRlciIsImxvYWRSZXMiLCJlcnIiLCJwcmVmYWIiLCJuZXdOb2RlIiwiYWRkQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVzs7Ozs7O0FBQ2hDQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUVMO0FBQVAsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdBO0FBQ0wsZ0JBQUlNLEdBQUcsR0FBR0MsRUFBRSxDQUFDQyxFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsRUFBWSxDQUFaLENBQVYsQ0FESyxDQUVMOztBQUNBLGlCQUFLQyxJQUFMLENBQVVDLFdBQVYsQ0FBc0JKLEdBQXRCO0FBQ0EsaUJBQUtHLElBQUwsQ0FBVUUsRUFBVixDQUFhSixFQUFFLENBQUNLLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsUUFBL0IsRUFBeUMsS0FBS0MsT0FBOUM7QUFDSDs7O29DQUVTO0FBQUE7O0FBQ05SLFlBQUFBLEVBQUUsQ0FBQ1MsTUFBSCxDQUFVQyxPQUFWLENBQWtCLDhCQUFsQixFQUFrRGpCLE1BQWxELEVBQTJELFVBQUNrQixHQUFELEVBQVdDLE1BQVgsRUFBOEI7QUFDckYsa0JBQUliLEdBQUcsR0FBR0MsRUFBRSxDQUFDQyxFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsRUFBWSxDQUFaLENBQVYsQ0FEcUYsQ0FFckY7O0FBQ0EsY0FBQSxNQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FBVixDQUFzQkosR0FBdEI7O0FBQ0Esa0JBQU1jLE9BQU8sR0FBR25CLFdBQVcsQ0FBQ2tCLE1BQUQsQ0FBM0I7O0FBQ0EsY0FBQSxNQUFJLENBQUNWLElBQUwsQ0FBVVksUUFBVixDQUFtQkQsT0FBbkI7QUFDSCxhQU5EO0FBT0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUF2QjZCckIsUzs7Ozs7aUJBRUQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJncm91bmRNb2RlbFwiKVxyXG5leHBvcnQgY2xhc3MgZ3JvdW5kTW9kZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBQcmVmYWJ9KVxyXG4gICAgcHVibGljIGdyb3VuZFByZmI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB2YXIgcG9zID0gY2MudjMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy9nZXTnmoRwb3N0aW9u5a+56LGh6Z2e5byV55SoXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2sgKCl7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJtb2RlbC9ncm91bmQvaGlnaExpZ2h0R3JvdW5kXCIsIFByZWZhYiAsIChlcnI6IGFueSwgcHJlZmFiOiBQcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAvL2dldOeahHBvc3Rpb27lr7nosaHpnZ7lvJXnlKhcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBpbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Tm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=