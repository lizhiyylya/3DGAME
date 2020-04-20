import { _decorator, Component, Prefab, instantiate, Node, CCInteger} from "cc";
const { ccclass, property } = _decorator;

@ccclass("GroundManager")
export class GroundManager extends Component {

    @property({type: Prefab})
    public cubePrfb: Prefab = null;
    @property({type: CCInteger})
    public groundSize: Number = 50;
    start () {
        this.generateGround();
    }

    //先暴力添加，后续再调整以提高性能
    generateGround() {
        this.node.removeAllChildren();
        for(let i = -this.groundSize; i < this.groundSize; ++i){
            for(let j = -this.groundSize; j < this.groundSize; ++j){
               let block = instantiate(this.cubePrfb);
               this.node.addChild(block);
               block.setPosition(i , -3.0, j);
            }
        }
    }
}