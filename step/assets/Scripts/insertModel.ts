import { _decorator, Component, SystemEvent, CameraComponent, ModelComponent, geometry, systemEvent, EventMouse,SystemEventType, EventTouch, Touch, Director, director } from "cc";
import { GroundManager } from "./groundManager";
const { ccclass, property } = _decorator;

@ccclass("insertModel")
export class insertModel extends Component {
    @property({ type: CameraComponent })
    readonly cameraCom: CameraComponent = null;
    @property({ type: ModelComponent })
    readonly modelCom: ModelComponent = null;
    private _ray: geometry.ray = new geometry.ray();
    private _aabb = new geometry.aabb();

    onEnable () {
        systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onClick, this);
    }

    onDisable () {
        systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onClick, this);
    }

    onClick (event: EventMouse) {
        const groundManagerNode = this.node.scene.getChildByName("GroundManager");
        const groundManager = groundManagerNode.getComponent(GroundManager);
        this.cameraCom.screenPointToRay(event.getLocationX(), event.getLocationY(), this._ray);
        groundManager.clickGrounds(event.getLocationX(), event.getLocationY(), this._ray);
        // this.cameraCom.screenPointToRay(event.getLocationX(), event.getLocationY(), this._ray);
        // this._aabb = this.modelCom.model.worldBounds;
        // if (geometry.intersect.ray_aabb(this._ray, this._aabb)) {
        //     let test = 0;
        // } else {
        //     let test = 1;
        // }
    }
}
