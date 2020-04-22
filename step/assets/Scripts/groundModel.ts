import { _decorator, Component, Prefab, instantiate, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("groundModel")
export class groundModel extends Component {
    @property({type: Prefab})
    public groundPrfb: Prefab = null;
    
    start () {
        var pos = cc.v3(0, 0, 0);
        //get的postion对象非引用
        this.node.getPosition(pos);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.onClick);
    }

    onClick (){
        cc.loader.loadRes("model/ground/highLightGround", Prefab , (err: any, prefab: Prefab) => {
            var pos = cc.v3(0, 0, 0);
            //get的postion对象非引用
            this.node.getPosition(pos);
            const newNode = instantiate(prefab);
            this.node.addChild(newNode);
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
