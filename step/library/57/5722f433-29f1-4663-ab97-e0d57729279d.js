System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, buildingManager;

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
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5722fQzKfFGY6uX4NV3KSed", "buildingManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("buildingManager", buildingManager = (_dec = ccclass("buildingManager"), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(buildingManager, _Component);

        function buildingManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, buildingManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(buildingManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "buildUIPre", _descriptor, _assertThisInitialized(_this));

          _this.buildUI = null;
          return _this;
        }

        _createClass(buildingManager, [{
          key: "start",
          value: function start() {
            // this.buildUI = cc.instantiate(this.buildUIPre);
            // cc.find("Canvas").addChild(this.buildUI);
            // this.buildUI.active = false;
            this.initButton();
          }
        }, {
          key: "initButton",
          value: function initButton() {
            var button = this.node.getChildByName("buildMainBuilding");
            button.on(cc.Node.EventType.MOUSE_UP, this.onClick, button);
            button.getComponent(cc.Button);
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            var bName = this.name;
            cc.loader.loadRes("model/building/" + bName, Prefab, function (err, prefab) {
              var building = cc.instantiate(prefab); //this.node.addChild(building);
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return buildingManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buildUIPre", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvYnVpbGRpbmdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJidWlsZGluZ01hbmFnZXIiLCJ0eXBlIiwiYnVpbGRVSSIsImluaXRCdXR0b24iLCJidXR0b24iLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJvbiIsImNjIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX1VQIiwib25DbGljayIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsImV2ZW50IiwiYk5hbWUiLCJuYW1lIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInByZWZhYiIsImJ1aWxkaW5nIiwiaW5zdGFudGlhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTs7Ozs7O0FBQzlCQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROztpQ0FHSkMsZSxXQURaRixPQUFPLENBQUMsaUJBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFSjtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0RLLE8sR0FBZ0IsSTs7Ozs7O2tDQUVmO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUJBQUtDLFVBQUw7QUFDSDs7O3VDQUVXO0FBQ1IsZ0JBQU1DLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsbUJBQXpCLENBQWY7QUFDQUYsWUFBQUEsTUFBTSxDQUFDRyxFQUFQLENBQVVDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxRQUE1QixFQUFzQyxLQUFLQyxPQUEzQyxFQUFvRFIsTUFBcEQ7QUFDQUEsWUFBQUEsTUFBTSxDQUFDUyxZQUFQLENBQW9CTCxFQUFFLENBQUNNLE1BQXZCO0FBQ0g7OztrQ0FFUUMsSyxFQUFtQjtBQUN4QixnQkFBTUMsS0FBSyxHQUFHLEtBQUtDLElBQW5CO0FBQ0FULFlBQUFBLEVBQUUsQ0FBQ1UsTUFBSCxDQUFVQyxPQUFWLENBQWtCLG9CQUFvQkgsS0FBdEMsRUFBNkNuQixNQUE3QyxFQUFzRCxVQUFDdUIsR0FBRCxFQUFXQyxNQUFYLEVBQThCO0FBQ2hGLGtCQUFNQyxRQUFRLEdBQUdkLEVBQUUsQ0FBQ2UsV0FBSCxDQUFlRixNQUFmLENBQWpCLENBRGdGLENBRWhGO0FBQ0gsYUFIRDtBQUlILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBN0JpQ3pCLFM7Ozs7O2lCQUVMLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgRXZlbnRNb3VzZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJidWlsZGluZ01hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIGJ1aWxkaW5nTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXHJcbiAgICBwdWJsaWMgYnVpbGRVSVByZTogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVUk6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyB0aGlzLmJ1aWxkVUkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1aWxkVUlQcmUpO1xyXG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQodGhpcy5idWlsZFVJKTtcclxuICAgICAgICAvLyB0aGlzLmJ1aWxkVUkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0QnV0dG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEJ1dHRvbigpe1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ1aWxkTWFpbkJ1aWxkaW5nXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbkNsaWNrLCBidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrIChldmVudDogRXZlbnRNb3VzZSkge1xyXG4gICAgICAgIGNvbnN0IGJOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibW9kZWwvYnVpbGRpbmcvXCIgKyBiTmFtZSwgUHJlZmFiICwgKGVycjogYW55LCBwcmVmYWI6IFByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidWlsZGluZyA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmFkZENoaWxkKGJ1aWxkaW5nKTtcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19