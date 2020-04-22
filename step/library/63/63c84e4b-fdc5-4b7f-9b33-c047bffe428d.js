System.register(["cc", "code-quality:cr", "./groundManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, SystemEvent, CameraComponent, ModelComponent, geometry, systemEvent, GroundManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, insertModel;

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

  function _reportPossibleCrUseOfGroundManager(extras) {
    _reporterNs.report("GroundManager", "./groundManager", _context.meta, extras);
  }

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
      SystemEvent = _cc.SystemEvent;
      CameraComponent = _cc.CameraComponent;
      ModelComponent = _cc.ModelComponent;
      geometry = _cc.geometry;
      systemEvent = _cc.systemEvent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_groundManagerJs) {
      GroundManager = _groundManagerJs.GroundManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "63c845L/cVLf5szwEe//kKN", "insertModel", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("insertModel", insertModel = (_dec = ccclass("insertModel"), _dec2 = property({
        type: CameraComponent
      }), _dec3 = property({
        type: ModelComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(insertModel, _Component);

        function insertModel() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, insertModel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(insertModel)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cameraCom", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "modelCom", _descriptor2, _assertThisInitialized(_this));

          _this._ray = new geometry.ray();
          _this._aabb = new geometry.aabb();
          return _this;
        }

        _createClass(insertModel, [{
          key: "onEnable",
          value: function onEnable() {
            systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onClick, this);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onClick, this);
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            var groundManagerNode = this.node.scene.getChildByName("GroundManager");
            var groundManager = groundManagerNode.getComponent(_crd && GroundManager === void 0 ? (_reportPossibleCrUseOfGroundManager({
              error: Error()
            }), GroundManager) : GroundManager);
            this.cameraCom.screenPointToRay(event.getLocationX(), event.getLocationY(), this._ray);
            groundManager.clickGrounds(event.getLocationX(), event.getLocationY(), this._ray); // this.cameraCom.screenPointToRay(event.getLocationX(), event.getLocationY(), this._ray);
            // this._aabb = this.modelCom.model.worldBounds;
            // if (geometry.intersect.ray_aabb(this._ray, this._aabb)) {
            //     let test = 0;
            // } else {
            //     let test = 1;
            // }
          }
        }]);

        return insertModel;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraCom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "modelCom", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6LzNER2FtZS9zdGVwL3N0ZXAvYXNzZXRzL1NjcmlwdHMvaW5zZXJ0TW9kZWwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlN5c3RlbUV2ZW50IiwiQ2FtZXJhQ29tcG9uZW50IiwiTW9kZWxDb21wb25lbnQiLCJnZW9tZXRyeSIsInN5c3RlbUV2ZW50IiwiR3JvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsImluc2VydE1vZGVsIiwidHlwZSIsIl9yYXkiLCJyYXkiLCJfYWFiYiIsImFhYmIiLCJvbiIsIkV2ZW50VHlwZSIsIk1PVVNFX1VQIiwib25DbGljayIsIm9mZiIsImV2ZW50IiwiZ3JvdW5kTWFuYWdlck5vZGUiLCJub2RlIiwic2NlbmUiLCJnZXRDaGlsZEJ5TmFtZSIsImdyb3VuZE1hbmFnZXIiLCJnZXRDb21wb25lbnQiLCJjYW1lcmFDb20iLCJzY3JlZW5Qb2ludFRvUmF5IiwiZ2V0TG9jYXRpb25YIiwiZ2V0TG9jYXRpb25ZIiwiY2xpY2tHcm91bmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLFcsT0FBQUEsVzs7OztBQUMvRUMsTUFBQUEsYSxvQkFBQUEsYTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JSLFUsQ0FBdEJRLE87QUFBU0MsTUFBQUEsUSxHQUFhVCxVLENBQWJTLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEMsVUFFSEMsUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsVUFFUk0sUUFBUSxDQUFDO0FBQUVFLFFBQUFBLElBQUksRUFBRVA7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRURRLEksR0FBcUIsSUFBSVAsUUFBUSxDQUFDUSxHQUFiLEU7Z0JBQ3JCQyxLLEdBQVEsSUFBSVQsUUFBUSxDQUFDVSxJQUFiLEU7Ozs7OztxQ0FFSjtBQUNSVCxZQUFBQSxXQUFXLENBQUNVLEVBQVosQ0FBZWQsV0FBVyxDQUFDZSxTQUFaLENBQXNCQyxRQUFyQyxFQUErQyxLQUFLQyxPQUFwRCxFQUE2RCxJQUE3RDtBQUNIOzs7c0NBRVk7QUFDVGIsWUFBQUEsV0FBVyxDQUFDYyxHQUFaLENBQWdCbEIsV0FBVyxDQUFDZSxTQUFaLENBQXNCQyxRQUF0QyxFQUFnRCxLQUFLQyxPQUFyRCxFQUE4RCxJQUE5RDtBQUNIOzs7a0NBRVFFLEssRUFBbUI7QUFDeEIsZ0JBQU1DLGlCQUFpQixHQUFHLEtBQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsY0FBaEIsQ0FBK0IsZUFBL0IsQ0FBMUI7QUFDQSxnQkFBTUMsYUFBYSxHQUFHSixpQkFBaUIsQ0FBQ0ssWUFBbEI7QUFBQTtBQUFBLCtDQUF0QjtBQUNBLGlCQUFLQyxTQUFMLENBQWVDLGdCQUFmLENBQWdDUixLQUFLLENBQUNTLFlBQU4sRUFBaEMsRUFBc0RULEtBQUssQ0FBQ1UsWUFBTixFQUF0RCxFQUE0RSxLQUFLbkIsSUFBakY7QUFDQWMsWUFBQUEsYUFBYSxDQUFDTSxZQUFkLENBQTJCWCxLQUFLLENBQUNTLFlBQU4sRUFBM0IsRUFBaURULEtBQUssQ0FBQ1UsWUFBTixFQUFqRCxFQUF1RSxLQUFLbkIsSUFBNUUsRUFKd0IsQ0FLeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7OztRQTVCNEJYLFM7Ozs7O2lCQUVTLEk7Ozs7Ozs7aUJBRUYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgU3lzdGVtRXZlbnQsIENhbWVyYUNvbXBvbmVudCwgTW9kZWxDb21wb25lbnQsIGdlb21ldHJ5LCBzeXN0ZW1FdmVudCwgRXZlbnRNb3VzZSxTeXN0ZW1FdmVudFR5cGUsIEV2ZW50VG91Y2gsIFRvdWNoLCBEaXJlY3RvciwgZGlyZWN0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgR3JvdW5kTWFuYWdlciB9IGZyb20gXCIuL2dyb3VuZE1hbmFnZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiaW5zZXJ0TW9kZWxcIilcclxuZXhwb3J0IGNsYXNzIGluc2VydE1vZGVsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENhbWVyYUNvbXBvbmVudCB9KVxyXG4gICAgcmVhZG9ubHkgY2FtZXJhQ29tOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTW9kZWxDb21wb25lbnQgfSlcclxuICAgIHJlYWRvbmx5IG1vZGVsQ29tOiBNb2RlbENvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9yYXk6IGdlb21ldHJ5LnJheSA9IG5ldyBnZW9tZXRyeS5yYXkoKTtcclxuICAgIHByaXZhdGUgX2FhYmIgPSBuZXcgZ2VvbWV0cnkuYWFiYigpO1xyXG5cclxuICAgIG9uRW5hYmxlICgpIHtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsIHRoaXMub25DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlICgpIHtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2sgKGV2ZW50OiBFdmVudE1vdXNlKSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdW5kTWFuYWdlck5vZGUgPSB0aGlzLm5vZGUuc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJHcm91bmRNYW5hZ2VyXCIpO1xyXG4gICAgICAgIGNvbnN0IGdyb3VuZE1hbmFnZXIgPSBncm91bmRNYW5hZ2VyTm9kZS5nZXRDb21wb25lbnQoR3JvdW5kTWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb20uc2NyZWVuUG9pbnRUb1JheShldmVudC5nZXRMb2NhdGlvblgoKSwgZXZlbnQuZ2V0TG9jYXRpb25ZKCksIHRoaXMuX3JheSk7XHJcbiAgICAgICAgZ3JvdW5kTWFuYWdlci5jbGlja0dyb3VuZHMoZXZlbnQuZ2V0TG9jYXRpb25YKCksIGV2ZW50LmdldExvY2F0aW9uWSgpLCB0aGlzLl9yYXkpO1xyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhQ29tLnNjcmVlblBvaW50VG9SYXkoZXZlbnQuZ2V0TG9jYXRpb25YKCksIGV2ZW50LmdldExvY2F0aW9uWSgpLCB0aGlzLl9yYXkpO1xyXG4gICAgICAgIC8vIHRoaXMuX2FhYmIgPSB0aGlzLm1vZGVsQ29tLm1vZGVsLndvcmxkQm91bmRzO1xyXG4gICAgICAgIC8vIGlmIChnZW9tZXRyeS5pbnRlcnNlY3QucmF5X2FhYmIodGhpcy5fcmF5LCB0aGlzLl9hYWJiKSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgdGVzdCA9IDA7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgbGV0IHRlc3QgPSAxO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iXX0=