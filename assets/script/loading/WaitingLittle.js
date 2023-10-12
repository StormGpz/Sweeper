// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const CLabel = require("CLabel")
window.WaitingLittle = cc.Class({
    extends: cc.Component,

    properties: {
        txt: CLabel,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.WaitingLittle = this;
    },

    start() {

    },

    show(time) {
        this.unschedule(this.hide);
        if(this.node){
            if(time > 0){
                this.scheduleOnce(this.hide,time);
            }
        }
        this.node.setParent(cc.find())
        this.node.active = true;
        this.node.zIndex = BaseAlert.zIndex++
    },

    hide() {
        this.unschedule(this.hide);
        this.node.active = false;
        this.node.setParent(null);
    },

    // update (dt) {},
});
