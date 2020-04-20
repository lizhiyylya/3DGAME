import { _decorator, Component, Prefab, instantiate, Node, CCInteger} from "cc";
const { ccclass, property } = _decorator;

enum BlockType{
    BT_NONE,
    BT_STONE,
};

@ccclass("GroundManager")
export class GroundManager extends Component {

    @property({type: Prefab})
    public cubePrfb: Prefab = null;
    @property({type: CCInteger})
    public groundSize: Number = 50;
    private _ground: number[] = [];

    start () {
        this.generateGround();
    }

    generateGround() {
        this.node.removeAllChildren();
        this._ground = [];
        // startPos
        this._ground.push(BlockType.BT_STONE);
        for(let i = -this.groundSize; i < this.groundSize; ++i){
            for(let j = -this.groundSize; j < this.groundSize; ++j){
               let block = instantiate(this.cubePrfb);
               this.node.addChild(block);
               block.setPosition(i , -3.0, j);
            }
        }
        // for (let i = 1; i < this.roadLength; i++) {
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
    }

    // spawnBlockByType(type: BlockType) {
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
}