System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, CCInteger, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BlockType, GameManager;

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
    _temp: void 0,
    BlockType: void 0
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
      _cclegacy._RF.push({}, "e16cboIr8ZMUYnvl4nvJFP0", "gameManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (BlockType) {
        BlockType[BlockType["BT_NONE"] = 0] = "BT_NONE";
        BlockType[BlockType["BT_STONE"] = 1] = "BT_STONE";
      })(BlockType || (BlockType = {}));

      ;

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(GameManager, _Component);

        function GameManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cubePrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "roadLength", _descriptor2, _assertThisInitialized(_this));

          _this._road = [];
          return _this;
        }

        _createClass(GameManager, [{
          key: "start",
          value: function start() {
            this.generateRoad();
          }
        }, {
          key: "generateRoad",
          value: function generateRoad() {
            this.node.removeAllChildren();
            this._road = []; // startPos

            this._road.push(BlockType.BT_STONE);

            for (var i = 1; i < this.roadLength; i++) {
              if (this._road[i - 1] === BlockType.BT_NONE) {
                this._road.push(BlockType.BT_STONE);
              } else {
                this._road.push(Math.floor(Math.random() * 2));
              }
            }

            for (var j = 0; j < this._road.length; j++) {
              var block = this.spawnBlockByType(this._road[j]);

              if (block) {
                this.node.addChild(block);
                block.setPosition(j, 0, 0);
              }
            }
          }
        }, {
          key: "spawnBlockByType",
          value: function spawnBlockByType(type) {
            var block = null;

            switch (type) {
              case BlockType.BT_STONE:
                block = instantiate(this.cubePrfb);
                break;
            }

            return block;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return GameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubePrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roadLength", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvZ2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiQ0NJbnRlZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQmxvY2tUeXBlIiwiR2FtZU1hbmFnZXIiLCJ0eXBlIiwiX3JvYWQiLCJnZW5lcmF0ZVJvYWQiLCJub2RlIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJwdXNoIiwiQlRfU1RPTkUiLCJpIiwicm9hZExlbmd0aCIsIkJUX05PTkUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJqIiwibGVuZ3RoIiwiYmxvY2siLCJzcGF3bkJsb2NrQnlUeXBlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImN1YmVQcmZiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUJDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7O0FBQ25EQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztpQkFFWkMsUztBQUFBQSxRQUFBQSxTLENBQUFBLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO1NBQUFBLFMsS0FBQUEsUzs7QUFHSjs7NkJBR1lDLFcsV0FEWkgsT0FBTyxDQUFDLGFBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFUDtBQUFQLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFTDtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFFRE0sSyxHQUFrQixFOzs7Ozs7a0NBRWpCO0FBQ0wsaUJBQUtDLFlBQUw7QUFDSDs7O3lDQUVjO0FBQ1gsaUJBQUtDLElBQUwsQ0FBVUMsaUJBQVY7QUFFQSxpQkFBS0gsS0FBTCxHQUFhLEVBQWIsQ0FIVyxDQUlYOztBQUNBLGlCQUFLQSxLQUFMLENBQVdJLElBQVgsQ0FBZ0JQLFNBQVMsQ0FBQ1EsUUFBMUI7O0FBRUEsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLQyxVQUF6QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxrQkFBSSxLQUFLTixLQUFMLENBQVdNLENBQUMsR0FBQyxDQUFiLE1BQW9CVCxTQUFTLENBQUNXLE9BQWxDLEVBQTJDO0FBQ3ZDLHFCQUFLUixLQUFMLENBQVdJLElBQVgsQ0FBZ0JQLFNBQVMsQ0FBQ1EsUUFBMUI7QUFDSCxlQUZELE1BRU87QUFDSCxxQkFBS0wsS0FBTCxDQUFXSSxJQUFYLENBQWdCSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQWhCO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtaLEtBQUwsQ0FBV2EsTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsa0JBQUlFLEtBQVcsR0FBRyxLQUFLQyxnQkFBTCxDQUFzQixLQUFLZixLQUFMLENBQVdZLENBQVgsQ0FBdEIsQ0FBbEI7O0FBQ0Esa0JBQUlFLEtBQUosRUFBVztBQUNQLHFCQUFLWixJQUFMLENBQVVjLFFBQVYsQ0FBbUJGLEtBQW5CO0FBQ0FBLGdCQUFBQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JMLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCO0FBQ0g7QUFDSjtBQUNKOzs7MkNBRWdCYixJLEVBQWlCO0FBQzlCLGdCQUFJZSxLQUFLLEdBQUcsSUFBWjs7QUFDQSxvQkFBT2YsSUFBUDtBQUNJLG1CQUFLRixTQUFTLENBQUNRLFFBQWY7QUFDSVMsZ0JBQUFBLEtBQUssR0FBR3JCLFdBQVcsQ0FBQyxLQUFLeUIsUUFBTixDQUFuQjtBQUNBO0FBSFI7O0FBTUEsbUJBQU9KLEtBQVA7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQWpENkJ2QixTOzs7OztpQkFHSCxJOzs7Ozs7O2lCQUVFLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIFByZWZhYiwgaW5zdGFudGlhdGUsIE5vZGUsIENDSW50ZWdlcn0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEJsb2NrVHlwZXtcclxuICAgIEJUX05PTkUsXHJcbiAgICBCVF9TVE9ORSxcclxufTtcclxuXHJcbkBjY2NsYXNzKFwiR2FtZU1hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXHJcbiAgICBwdWJsaWMgY3ViZVByZmI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IENDSW50ZWdlcn0pXHJcbiAgICBwdWJsaWMgcm9hZExlbmd0aDogTnVtYmVyID0gNTA7XHJcbiAgICBwcml2YXRlIF9yb2FkOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlUm9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlUm9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcm9hZCA9IFtdO1xyXG4gICAgICAgIC8vIHN0YXJ0UG9zXHJcbiAgICAgICAgdGhpcy5fcm9hZC5wdXNoKEJsb2NrVHlwZS5CVF9TVE9ORSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5yb2FkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvYWRbaS0xXSA9PT0gQmxvY2tUeXBlLkJUX05PTkUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvYWQucHVzaChCbG9ja1R5cGUuQlRfU1RPTkUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9hZC5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9yb2FkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBibG9jazogTm9kZSA9IHRoaXMuc3Bhd25CbG9ja0J5VHlwZSh0aGlzLl9yb2FkW2pdKTtcclxuICAgICAgICAgICAgaWYgKGJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgYmxvY2suc2V0UG9zaXRpb24oaiwgMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25CbG9ja0J5VHlwZSh0eXBlOiBCbG9ja1R5cGUpIHtcclxuICAgICAgICBsZXQgYmxvY2sgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQmxvY2tUeXBlLkJUX1NUT05FOlxyXG4gICAgICAgICAgICAgICAgYmxvY2sgPSBpbnN0YW50aWF0ZSh0aGlzLmN1YmVQcmZiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn0iXX0=