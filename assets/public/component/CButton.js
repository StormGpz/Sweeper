// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

window.CButton = cc.Class({
    extends: cc.Button,

    editor: {
        // executeInEditMode: true,
        menu: '自定义/CButton'
    },

    properties: {
        isDelayClick: true,
        isTransition: true,
        sendWeb: "",
        _isGray: false,
        isGray: {
            get() {
                return this._isGray;
            },
            set(val) {
                this._isGray = val;
                this.setIsGray && this.setIsGray(this._isGray)
            }
        },
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    ctor() {
        this.duration = 0.1;
        this.zoomScale = 0.9;
    },

    onLoad() {
        if (this.isTransition) {
            this.transition = cc.Button.Transition.SCALE;
            this.zoomScale = 0.9;
        } else {
            this.zoomScale = 1;
        }
        let firstNode = this.node.children[0];
        if (firstNode) {
            this.label = firstNode.getComponent(cc.Label);
        }
    },

    start() {
        // var btn = new cc.Button();
        // btn.transition;
        // btn.duration;
        // btn.zoomScale;
        this.setIsGray();
    },
    

    _updateState() {
        this._super();
        // if (this._sprite && this.label) {
        //     this.label.setState(this._sprite.getState());
        // }
    },

    setIsGray(value = -1) {
        if (value != -1) this._isGray = value;
        if (this.isGray) {
            if(this.disabledSprite){
                this.node.getComponent(cc.Sprite).spriteFrame = this.disabledSprite
            }else{
                this.node.color = this.disabledColor
            }
            this.interactable = false
        } else {
            if (this.normalSprite) {
                this.node.getComponent(cc.Sprite).spriteFrame = this.normalSprite;
            }else{
                this.node.color = this.normalColor
            }
            this.interactable = true
        }
    },

    _onTouchEnded(event) {
        if (cc.gg.onlyBtnName != '') {
            if (this.node.name != cc.gg.onlyBtnName) {
                this._pressed = false;
            } else {
                cc.gg.evt.emit(GEventType.GuideClick, this.node.name);
            }
        }
        var time = Date.now();
        if (this.isDelayClick && this._beforTime && (time - this._beforTime) < 700) {
            this._pressed = false;
        } else {
            this._beforTime = time;
        }
        if (!cc.gg.isDebug && this._pressed && cc.tcp && cc.tcp.user && this.sendWeb != "") {
            sendActionHttp(this.sendWeb);
        }
        this._super(event);
        if (cc.gg.audioMgr) {
            cc.gg.audioMgr.playSFX("sound/click");
        }
    },

    redPointVisible(value) {
        let redPoint = this.node.getChildByName('hongdian');
        if (redPoint) redPoint.active = value;
    },

    // update (dt) {},
});