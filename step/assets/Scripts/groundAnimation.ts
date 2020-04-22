import { _decorator, Component,AnimationComponent, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("groundAnimation")
export class groundAnimation extends Component {
    @property({type: AnimationComponent})
    public groundAnim: AnimationComponent = null;

    start () {
        this.groundAnim.play('oneStep');
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
