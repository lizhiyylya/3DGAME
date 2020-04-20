System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, CCInteger, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GroundManager;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      CCInteger = _cc.CCInteger;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "01872CWvv9A+pEwsJoqdJFq", "groundManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GroundManager", GroundManager = (_dec = ccclass("GroundManager"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
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

          _initializerDefineProperty(_this, "groundSize", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(GroundManager, [{
          key: "start",
          value: function start() {
            this.generateGround();
          } //先暴力添加，后续再调整以提高性能

        }, {
          key: "generateGround",
          value: function generateGround() {
            this.node.removeAllChildren();

            for (var i = -this.groundSize; i < this.groundSize; ++i) {
              for (var j = -this.groundSize; j < this.groundSize; ++j) {
                var block = instantiate(this.cubePrfb);
                this.node.addChild(block);
                block.setPosition(i, -3.0, j);
              }
            }
          }
        }]);

        return GroundManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubePrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groundSize", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvZ3JvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJDQ0ludGVnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHcm91bmRNYW5hZ2VyIiwidHlwZSIsImdlbmVyYXRlR3JvdW5kIiwibm9kZSIsInJlbW92ZUFsbENoaWxkcmVuIiwiaSIsImdyb3VuZFNpemUiLCJqIiwiYmxvY2siLCJjdWJlUHJmYiIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQW1CQyxNQUFBQSxTLE9BQUFBLFM7Ozs7OztBQUNuREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7K0JBR0pDLGEsV0FEWkYsT0FBTyxDQUFDLGVBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFTjtBQUFQLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFSjtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUVBO0FBQ0wsaUJBQUtLLGNBQUw7QUFDSCxXLENBRUQ7Ozs7MkNBQ2lCO0FBQ2IsaUJBQUtDLElBQUwsQ0FBVUMsaUJBQVY7O0FBQ0EsaUJBQUksSUFBSUMsQ0FBQyxHQUFHLENBQUMsS0FBS0MsVUFBbEIsRUFBOEJELENBQUMsR0FBRyxLQUFLQyxVQUF2QyxFQUFtRCxFQUFFRCxDQUFyRCxFQUF1RDtBQUNuRCxtQkFBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxLQUFLRCxVQUFsQixFQUE4QkMsQ0FBQyxHQUFHLEtBQUtELFVBQXZDLEVBQW1ELEVBQUVDLENBQXJELEVBQXVEO0FBQ3BELG9CQUFJQyxLQUFLLEdBQUdaLFdBQVcsQ0FBQyxLQUFLYSxRQUFOLENBQXZCO0FBQ0EscUJBQUtOLElBQUwsQ0FBVU8sUUFBVixDQUFtQkYsS0FBbkI7QUFDQUEsZ0JBQUFBLEtBQUssQ0FBQ0csV0FBTixDQUFrQk4sQ0FBbEIsRUFBc0IsQ0FBQyxHQUF2QixFQUE0QkUsQ0FBNUI7QUFDRjtBQUNKO0FBQ0o7Ozs7UUFwQjhCYixTOzs7OztpQkFHTCxJOzs7Ozs7O2lCQUVFLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIFByZWZhYiwgaW5zdGFudGlhdGUsIE5vZGUsIENDSW50ZWdlcn0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkdyb3VuZE1hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIEdyb3VuZE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcclxuICAgIHB1YmxpYyBjdWJlUHJmYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ0NJbnRlZ2VyfSlcclxuICAgIHB1YmxpYyBncm91bmRTaXplOiBOdW1iZXIgPSA1MDtcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlR3JvdW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhYjmmrTlipvmt7vliqDvvIzlkI7nu63lho3osIPmlbTku6Xmj5Dpq5jmgKfog71cclxuICAgIGdlbmVyYXRlR3JvdW5kKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IC10aGlzLmdyb3VuZFNpemU7IGkgPCB0aGlzLmdyb3VuZFNpemU7ICsraSl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IC10aGlzLmdyb3VuZFNpemU7IGogPCB0aGlzLmdyb3VuZFNpemU7ICsrail7XHJcbiAgICAgICAgICAgICAgIGxldCBibG9jayA9IGluc3RhbnRpYXRlKHRoaXMuY3ViZVByZmIpO1xyXG4gICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmxvY2spO1xyXG4gICAgICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihpICwgLTMuMCwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=