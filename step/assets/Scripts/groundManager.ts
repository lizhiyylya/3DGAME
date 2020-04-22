import { _decorator, Component, Prefab, instantiate, AnimationComponent, Node, CCInteger, geometry, CameraComponent, ModelComponent, Vec3} from "cc";
const { ccclass, property } = _decorator;

const pos = new Vec3();

@ccclass("GroundManager")
export class GroundManager extends Component {

    @property({type: Prefab})
    public cubePrfb: Prefab = null;

    @property({type: Prefab})
    public buildUIPre: Prefab = null;

    @property({type: Prefab})
    public highLightPre: Prefab = null;

    @property({type: CCInteger})
    public groundSize: Number = 50;

    @property({type: AnimationComponent})
    public groundAnim: AnimationComponent = null;

    public grounds: Node[] = [];
    private highLightGround: Node = null;
    private buildUI: Node = null;
//------------------------------------------
    start () {
        this.generateGround();
        this.highLightGround = instantiate(this.highLightPre);
        this.node.addChild(this.highLightGround);

        this.buildUI = instantiate(this.buildUIPre);
        cc.find("Canvas").addChild(this.buildUI);
        this.buildUI.active = false;

        // button.node.on(cc.Node.EventType.TOUCH_START, (event) => {
        //     cc.log("This is a callback after the trigger event");
        // });
        // // You could also add a click event
        // //Note: In this way, you can't get the touch event info, so use it wisely.
        // button.node.on('click', (button) => {
        //    //The event is a custom event, you could get the Button component via first argument
        // })
    }
//------------------------------------------
    // initButton(){
    //     const bmb = this.buildUI.getChildByName("buildMainBuilding");
    //     bmb.on(cc.Node.EventType.MOUSE_UP, this.onClick, this);
    //     bmb.getComponent(cc.Button);
    //     //this.manualMetallic.getComponentInChildren(LabelComponent).string = e.progress.toFixed(1);
    // }
//------------------------------------------
    //先暴力添加，后续再调整以提高性能
    generateGround() {
        this.node.removeAllChildren();
        for(let i = -this.groundSize; i < this.groundSize; ++i){
            for(let j = -this.groundSize; j < this.groundSize; ++j){
               const block = instantiate(this.cubePrfb);
               this.node.addChild(block);
               block.setPosition(i , 0, j);
               this.grounds.push(block);
            }
        }
    }
//------------------------------------------
    clickGrounds(x: number, y: number, ray: geometry.ray) {
        for(let i = 0 ; i < this.grounds.length; ++i){
            const modelComponent = this.grounds[i].getComponent(ModelComponent);            
            const aabb = modelComponent.model.worldBounds;
            if (geometry.intersect.ray_aabb(ray, aabb)) {
                this.grounds[i].getPosition(pos);
                this.createAnimation(pos);
                this.ActiveBuildUI(x, y);
                break;
            } 
        }
    }
//------------------------------------------
    ActiveBuildUI(x: number, y: number) {
        this.buildUI.setPosition(x, y, -1);
        this.buildUI.active = true;
    }
//------------------------------------------
    createAnimation (position: Vec3){
        this.highLightGround.setPosition(position);
        const animation = this.highLightGround.getComponent(AnimationComponent);
        animation.play('highLight');
        // cc.loader.loadRes("model/ground/highLightGround", Prefab , (err: any, prefab: Prefab) => {  ///可以执行
        //     const animNode = instantiate(prefab);
        //     this.node.addChild(animNode);
        //     animNode.setPosition(position);
        //     const animation = animNode.getComponent(AnimationComponent);
        //     animation.play('highLight');
        // });
    }
//------------------------------------------
}