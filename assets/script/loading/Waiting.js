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
window.Waiting = cc.Class({
    extends: cc.Component,

    properties: {
        txt: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // cc.waiting = this;
    },

    start() {

    },

    show(time,msg) {
        this.unschedule(this.hide);
        if(this.node){
            // this.node.active = true;
            if(time > 0){
                this.scheduleOnce(this.hide,time);
            }else{
                // this.unschedule(this.hide);
            }
        }
        var baseAlert = this.node.getComponent("BaseAlert");
        if(msg){
            this.txt.string = msg;
        }else{
            this.txt.string = ""
        }
        baseAlert.show();
    },

    hide() {
        this.unschedule(this.hide);
        // this.node.active = false;
        var baseAlert = this.node.getComponent("BaseAlert");
        this.txt.string = "";
        let _Layout = this.getCom(cc.Layout,"LoadingBar")
        if(_Layout)_Layout.updateLayout()
        baseAlert.hide();
    },

});
