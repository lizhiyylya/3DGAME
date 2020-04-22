import { _decorator, Component, Node, Prefab, EventMouse } from "cc";
const { ccclass, property } = _decorator;

@ccclass("buildingManager")
export class buildingManager extends Component {
    @property({type: Prefab})
    public buildUIPre: Prefab = null;

    private buildUI: Node = null;

    start () {
        // this.buildUI = cc.instantiate(this.buildUIPre);
        // cc.find("Canvas").addChild(this.buildUI);
        // this.buildUI.active = false;
        this.initButton();
    }

    initButton(){
        const button = this.node.getChildByName("buildMainBuilding");
        button.on(cc.Node.EventType.MOUSE_UP, this.onClick, button);
        button.getComponent(cc.Button);
    }

    onClick (event: EventMouse) {
        const bName = this.name;
        cc.loader.loadRes("model/building/" + bName, Prefab , (err: any, prefab: Prefab) => {
            const building = cc.instantiate(prefab);
            //this.node.addChild(building);
        });        
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
