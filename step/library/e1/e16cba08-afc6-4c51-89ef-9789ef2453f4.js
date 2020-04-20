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
                block.setPosition(j, -1.5, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvZ2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiQ0NJbnRlZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQmxvY2tUeXBlIiwiR2FtZU1hbmFnZXIiLCJ0eXBlIiwiX3JvYWQiLCJnZW5lcmF0ZVJvYWQiLCJub2RlIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJwdXNoIiwiQlRfU1RPTkUiLCJpIiwicm9hZExlbmd0aCIsIkJUX05PTkUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJqIiwibGVuZ3RoIiwiYmxvY2siLCJzcGF3bkJsb2NrQnlUeXBlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImN1YmVQcmZiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUJDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7O0FBQ25EQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztpQkFFWkMsUztBQUFBQSxRQUFBQSxTLENBQUFBLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO1NBQUFBLFMsS0FBQUEsUzs7QUFHSjs7NkJBR1lDLFcsV0FEWkgsT0FBTyxDQUFDLGFBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFUDtBQUFQLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFTDtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFFRE0sSyxHQUFrQixFOzs7Ozs7a0NBRWpCO0FBQ0wsaUJBQUtDLFlBQUw7QUFDSDs7O3lDQUVjO0FBQ1gsaUJBQUtDLElBQUwsQ0FBVUMsaUJBQVY7QUFFQSxpQkFBS0gsS0FBTCxHQUFhLEVBQWIsQ0FIVyxDQUlYOztBQUNBLGlCQUFLQSxLQUFMLENBQVdJLElBQVgsQ0FBZ0JQLFNBQVMsQ0FBQ1EsUUFBMUI7O0FBRUEsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLQyxVQUF6QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxrQkFBSSxLQUFLTixLQUFMLENBQVdNLENBQUMsR0FBQyxDQUFiLE1BQW9CVCxTQUFTLENBQUNXLE9BQWxDLEVBQTJDO0FBQ3ZDLHFCQUFLUixLQUFMLENBQVdJLElBQVgsQ0FBZ0JQLFNBQVMsQ0FBQ1EsUUFBMUI7QUFDSCxlQUZELE1BRU87QUFDSCxxQkFBS0wsS0FBTCxDQUFXSSxJQUFYLENBQWdCSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQWhCO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtaLEtBQUwsQ0FBV2EsTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsa0JBQUlFLEtBQVcsR0FBRyxLQUFLQyxnQkFBTCxDQUFzQixLQUFLZixLQUFMLENBQVdZLENBQVgsQ0FBdEIsQ0FBbEI7O0FBQ0Esa0JBQUlFLEtBQUosRUFBVztBQUNQLHFCQUFLWixJQUFMLENBQVVjLFFBQVYsQ0FBbUJGLEtBQW5CO0FBQ0FBLGdCQUFBQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JMLENBQWxCLEVBQXFCLENBQUMsR0FBdEIsRUFBMkIsQ0FBM0I7QUFDSDtBQUNKO0FBQ0o7OzsyQ0FFZ0JiLEksRUFBaUI7QUFDOUIsZ0JBQUllLEtBQUssR0FBRyxJQUFaOztBQUNBLG9CQUFPZixJQUFQO0FBQ0ksbUJBQUtGLFNBQVMsQ0FBQ1EsUUFBZjtBQUNJUyxnQkFBQUEsS0FBSyxHQUFHckIsV0FBVyxDQUFDLEtBQUt5QixRQUFOLENBQW5CO0FBQ0E7QUFIUjs7QUFNQSxtQkFBT0osS0FBUDtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBakQ2QnZCLFM7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBRUUsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgTm9kZSwgQ0NJbnRlZ2VyfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmVudW0gQmxvY2tUeXBle1xyXG4gICAgQlRfTk9ORSxcclxuICAgIEJUX1NUT05FLFxyXG59O1xyXG5cclxuQGNjY2xhc3MoXCJHYW1lTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcclxuICAgIHB1YmxpYyBjdWJlUHJmYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ0NJbnRlZ2VyfSlcclxuICAgIHB1YmxpYyByb2FkTGVuZ3RoOiBOdW1iZXIgPSA1MDtcclxuICAgIHByaXZhdGUgX3JvYWQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVSb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICB0aGlzLl9yb2FkID0gW107XHJcbiAgICAgICAgLy8gc3RhcnRQb3NcclxuICAgICAgICB0aGlzLl9yb2FkLnB1c2goQmxvY2tUeXBlLkJUX1NUT05FKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnJvYWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcm9hZFtpLTFdID09PSBCbG9ja1R5cGUuQlRfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9hZC5wdXNoKEJsb2NrVHlwZS5CVF9TVE9ORSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb2FkLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX3JvYWQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrOiBOb2RlID0gdGhpcy5zcGF3bkJsb2NrQnlUeXBlKHRoaXMuX3JvYWRbal0pO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jayk7XHJcbiAgICAgICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbihqLCAtMS41LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkJsb2NrQnlUeXBlKHR5cGU6IEJsb2NrVHlwZSkge1xyXG4gICAgICAgIGxldCBibG9jayA9IG51bGw7XHJcbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBCbG9ja1R5cGUuQlRfU1RPTkU6XHJcbiAgICAgICAgICAgICAgICBibG9jayA9IGluc3RhbnRpYXRlKHRoaXMuY3ViZVByZmIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufSJdfQ==