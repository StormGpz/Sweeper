// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var LocalizedLabel = require("LocalizedLabel");
window.CLabel = cc.Class({
    extends: cc.Label,
    editor: {
        // executeInEditMode: true,
        menu: '自定义/CLabel'
    },
    properties: {
        isI18n: cc.Boolean,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.cacheMode = cc.Label.CacheMode.NONE;
        if (!CC_EDITOR && this.isI18n) {
            this.i18nLabel = this.node.addComponent(LocalizedLabel);
            this.i18nLabel.dataID = this.string;
            this.i18nLabel.i18nParams = this.i18nParams;
        };
    },

    start() {

    },

    setI18nDataID(value) {
        if (this.i18nLabel) {
            this.i18nLabel.dataID = value;
        } else {
            this.string = value;
        }
    },

    setI18nParams(params) {
        if (this.i18nLabel) {
            this.i18nLabel.i18nParams = params;
        } else {
            this.i18nParams = params;
        }
    }

});