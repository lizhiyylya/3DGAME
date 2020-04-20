import { _decorator, Component, Vec3, systemEvent, SystemEvent, EventMouse, AnimationComponent, v3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PlayerController")
export class PlayerController extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    // for fake tween
    private _startJump: boolean = false;
    private _jumpStep: number = 0;
    private _curJumpTime: number = 0;
    private _jumpTime: number = 0.1;
    private _curJumpSpeed: number = 0;
    private _curPos: Vec3 = v3();
    private _deltaPos: Vec3 = v3(0, 0, 0);
    private _targetPos: Vec3 = v3();
    private _isMoving = false;
    @property({type: AnimationComponent})
    public BodyAnim: AnimationComponent = null;

    start () {
        // Your initialization goes here.
        systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    onMouseUp(event: EventMouse) {
        if (event.getButton() === 0) {
            this.jumpByStep(1);
        } else if (event.getButton() === 2) {
            this.jumpByStep(-1);
        }
    }

    jumpByStep(step: number) {
        if (this._isMoving) {
            return;
        }
        this._startJump = true;
        this._jumpStep = step;
        this._curJumpTime = 0;
        this._curJumpSpeed = this._jumpStep / this._jumpTime;
        this.node.getPosition(this._curPos);
        Vec3.add(this._targetPos, this._curPos, v3(this._jumpStep, 0, 0));
        this.BodyAnim.play('oneStep');
        this._isMoving = true;
    }

    onOnceJumpEnd() {
        this._isMoving = false;
    }

    updataCamera(deltapos){
        var scene = cc.director.getScene();
        var node = scene.getChildByName("Camera");
        var pos = cc.v3(0, 0, 0);
        //get的postion对象非引用
        node.getPosition(pos);
        Vec3.add(pos, pos, deltapos);
        node.setPosition(pos);
        node.lookAt(this.node.getPosition(), node.up);
    };

    update (deltaTime: number) {
        if (this._startJump) {
            this._curJumpTime += deltaTime;
            if (this._curJumpTime > this._jumpTime) {
                this.node.getPosition(this._curPos);
                Vec3.subtract(this._deltaPos, this._targetPos, this._curPos);
                this.node.setPosition(this._targetPos);
                this.updataCamera(this._deltaPos);
                this._startJump = false;
                this.onOnceJumpEnd();
            } else {
                // tween
                this.node.getPosition(this._curPos);
                this._deltaPos.x = this._curJumpSpeed * deltaTime;
                Vec3.add(this._curPos, this._curPos, this._deltaPos);
                this.node.setPosition(this._curPos);
                this.updataCamera(this._deltaPos);
            }
        }
    }
}