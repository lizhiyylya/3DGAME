System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, CCInteger, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BlockType, GroundManager;

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
      _cclegacy._RF.push({}, "01872CWvv9A+pEwsJoqdJFq", "groundManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (BlockType) {
        BlockType[BlockType["BT_NONE"] = 0] = "BT_NONE";
        BlockType[BlockType["BT_STONE"] = 1] = "BT_STONE";
      })(BlockType || (BlockType = {}));

      ;

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

          _this._ground = [];
          return _this;
        }

        _createClass(GroundManager, [{
          key: "start",
          value: function start() {
            this.generateGround();
          }
        }, {
          key: "generateGround",
          value: function generateGround() {
            this.node.removeAllChildren();
            this._ground = []; // startPos

            this._ground.push(BlockType.BT_STONE);

            for (var i = -this.groundSize; i < this.groundSize; ++i) {
              for (var j = -this.groundSize; j < this.groundSize; ++j) {
                var block = instantiate(this.cubePrfb);
                this.node.addChild(block);
                block.setPosition(i, -3.0, j);
              }
            } // for (let i = 1; i < this.roadLength; i++) {
            //     if (this._ground[i-1] === BlockType.BT_NONE) {
            //         this._ground.push(BlockType.BT_STONE);
            //     } else {
            //         this._ground.push(Math.floor(Math.random() * 2));
            //     }
            // }
            // for (let j = 0; j < this._ground.length; j++) {
            //     let block: Node = this.spawnBlockByType(this._ground[j]);
            //     if (block) {
            //         this.node.addChild(block);
            //         block.setPosition(j, -1.5, 0);
            //     }
            // }

          } // spawnBlockByType(type: BlockType) {
          //     let block = null;
          //     switch(type) {
          //         case BlockType.BT_STONE:
          //             block = instantiate(this.cubePrfb);
          //             break;
          //     }
          //     return block;
          // }
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvZ3JvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJDQ0ludGVnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCbG9ja1R5cGUiLCJHcm91bmRNYW5hZ2VyIiwidHlwZSIsIl9ncm91bmQiLCJnZW5lcmF0ZUdyb3VuZCIsIm5vZGUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsInB1c2giLCJCVF9TVE9ORSIsImkiLCJncm91bmRTaXplIiwiaiIsImJsb2NrIiwiY3ViZVByZmIiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUJDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7O0FBQ25EQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztpQkFFWkMsUztBQUFBQSxRQUFBQSxTLENBQUFBLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO1NBQUFBLFMsS0FBQUEsUzs7QUFHSjs7K0JBR1lDLGEsV0FEWkgsT0FBTyxDQUFDLGVBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFUDtBQUFQLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFTDtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFFRE0sTyxHQUFvQixFOzs7Ozs7a0NBRW5CO0FBQ0wsaUJBQUtDLGNBQUw7QUFDSDs7OzJDQUVnQjtBQUNiLGlCQUFLQyxJQUFMLENBQVVDLGlCQUFWO0FBQ0EsaUJBQUtILE9BQUwsR0FBZSxFQUFmLENBRmEsQ0FHYjs7QUFDQSxpQkFBS0EsT0FBTCxDQUFhSSxJQUFiLENBQWtCUCxTQUFTLENBQUNRLFFBQTVCOztBQUNBLGlCQUFJLElBQUlDLENBQUMsR0FBRyxDQUFDLEtBQUtDLFVBQWxCLEVBQThCRCxDQUFDLEdBQUcsS0FBS0MsVUFBdkMsRUFBbUQsRUFBRUQsQ0FBckQsRUFBdUQ7QUFDbkQsbUJBQUksSUFBSUUsQ0FBQyxHQUFHLENBQUMsS0FBS0QsVUFBbEIsRUFBOEJDLENBQUMsR0FBRyxLQUFLRCxVQUF2QyxFQUFtRCxFQUFFQyxDQUFyRCxFQUF1RDtBQUNwRCxvQkFBSUMsS0FBSyxHQUFHaEIsV0FBVyxDQUFDLEtBQUtpQixRQUFOLENBQXZCO0FBQ0EscUJBQUtSLElBQUwsQ0FBVVMsUUFBVixDQUFtQkYsS0FBbkI7QUFDQUEsZ0JBQUFBLEtBQUssQ0FBQ0csV0FBTixDQUFrQk4sQ0FBbEIsRUFBc0IsQ0FBQyxHQUF2QixFQUE0QkUsQ0FBNUI7QUFDRjtBQUNKLGFBWFksQ0FZYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O1FBdEQrQmpCLFM7Ozs7O2lCQUdMLEk7Ozs7Ozs7aUJBRUUsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgTm9kZSwgQ0NJbnRlZ2VyfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmVudW0gQmxvY2tUeXBle1xyXG4gICAgQlRfTk9ORSxcclxuICAgIEJUX1NUT05FLFxyXG59O1xyXG5cclxuQGNjY2xhc3MoXCJHcm91bmRNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBHcm91bmRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXHJcbiAgICBwdWJsaWMgY3ViZVByZmI6IFByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IENDSW50ZWdlcn0pXHJcbiAgICBwdWJsaWMgZ3JvdW5kU2l6ZTogTnVtYmVyID0gNTA7XHJcbiAgICBwcml2YXRlIF9ncm91bmQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcm91bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUdyb3VuZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLl9ncm91bmQgPSBbXTtcclxuICAgICAgICAvLyBzdGFydFBvc1xyXG4gICAgICAgIHRoaXMuX2dyb3VuZC5wdXNoKEJsb2NrVHlwZS5CVF9TVE9ORSk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gLXRoaXMuZ3JvdW5kU2l6ZTsgaSA8IHRoaXMuZ3JvdW5kU2l6ZTsgKytpKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gLXRoaXMuZ3JvdW5kU2l6ZTsgaiA8IHRoaXMuZ3JvdW5kU2l6ZTsgKytqKXtcclxuICAgICAgICAgICAgICAgbGV0IGJsb2NrID0gaW5zdGFudGlhdGUodGhpcy5jdWJlUHJmYik7XHJcbiAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jayk7XHJcbiAgICAgICAgICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKGkgLCAtMy4wLCBqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucm9hZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLl9ncm91bmRbaS0xXSA9PT0gQmxvY2tUeXBlLkJUX05PTkUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2dyb3VuZC5wdXNoKEJsb2NrVHlwZS5CVF9TVE9ORSk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9ncm91bmQucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fZ3JvdW5kLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBibG9jazogTm9kZSA9IHRoaXMuc3Bhd25CbG9ja0J5VHlwZSh0aGlzLl9ncm91bmRbal0pO1xyXG4gICAgICAgIC8vICAgICBpZiAoYmxvY2spIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChibG9jayk7XHJcbiAgICAgICAgLy8gICAgICAgICBibG9jay5zZXRQb3NpdGlvbihqLCAtMS41LCAwKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzcGF3bkJsb2NrQnlUeXBlKHR5cGU6IEJsb2NrVHlwZSkge1xyXG4gICAgLy8gICAgIGxldCBibG9jayA9IG51bGw7XHJcbiAgICAvLyAgICAgc3dpdGNoKHR5cGUpIHtcclxuICAgIC8vICAgICAgICAgY2FzZSBCbG9ja1R5cGUuQlRfU1RPTkU6XHJcbiAgICAvLyAgICAgICAgICAgICBibG9jayA9IGluc3RhbnRpYXRlKHRoaXMuY3ViZVByZmIpO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gYmxvY2s7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufSJdfQ==