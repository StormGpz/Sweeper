// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const BaseAlert = require("BaseAlert")
const CLabel = require("CLabel")
const i18n = require('LanguageData');
window.PromptAlert = cc.Class({
    extends: cc.Component,

    properties: {
        bg: cc.Sprite,
        title: CLabel,
        content: CLabel,
        noteLabel: CLabel,
        btns: {
            default: [],
            type: cc.Node,
        },
        btnContainer: cc.Node,
        btnClose: cc.Node,
        gameAtlas: {
            default: [],
            type: cc.SpriteFrame,
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    },

    start() {

    },

    hide() {
        let alert = this.node.getComponent(BaseAlert);
        alert.hide();
    },
    show(title, content, btnStrs = null, callBack = null, isViewCloseBtn = true, noteValue = "",isCanClickMaskHide = true) {
        if (!content) {
            return;
        }
        this.title.string = window["i18n"].t(title);
        this.content.string = window["i18n"].t(content);
        this._callBack = callBack;
        this.btns.forEach(value => {
            value.active = false;
            // value.color = hexToColor("#FFFFFF");
        });
        if (btnStrs) {
            for (let index = 0; index < btnStrs.length; index++) {
                let str = btnStrs[index].label || btnStrs[index];
                // if( typeof btnStrs[index] === 'object'){
                //     let config = btnStrs[index];
                //     // this.btns[index].getComponent("CButton").setIsGray(config.isGray);
                //     str = btnStrs[index].label;
                // } else {
                // }
                this.btns[index].getComponent("CButton").setIsGray(false);
                this.btns[index].getChildByName("txt").getComponent(cc.Label).string = str;
                this.btns[index].active = true;
            }
            this.btnContainer.active = true;
        } else {
            this.btnContainer.active = false;
        }
        if( noteValue != "" ){
            this.noteLabel.string = noteValue;
            this.noteLabel.node.active = true;
        }else{
            this.noteLabel.node.active = false;
        }
        this.btnClose.active = isViewCloseBtn;
        let alert = this.node.getComponent(BaseAlert);
        alert.isCanClickMaskHide = isCanClickMaskHide;
        alert.show();
        return this;
    },

    btnClickHandler: function (event, value) {
        this.hide();
        if (this._callBack) {
            this._callBack(value);
        }
    },

    hide() {
        let alert = this.node.getComponent(BaseAlert);
        alert.hide();
    }

    // update (dt) {},
});
