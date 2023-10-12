// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const i18n = require('LanguageData');
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label,
            // serializable: true,
        },
    },

    onLoad() {
        if (cc.sys.isNative && jsb) {
            jsb.Device.setKeepScreenOn(true);
        }
        // cc.debug.setDisplayStats(false);
        var rate = cc.winSize.width / cc.winSize.height;
        let frameSize = cc.view.getFrameSize();
        let ww = frameSize.height / 9;
        // let hs = Math.round(frameSize.width/ww*100)/100;
        let hs = frameSize.width / ww;
        let ow = 720 / 9;
        let originalWidth = cc.gg.DesignWidth;
        cc.gg.DesignWidth = ow * hs;
        if (rate >= 1.7) {
            cc.gg.ExtendWidth = cc.gg.DesignWidth - originalWidth;
        }

        // i18n.init('en');
        cc.http.url = cc.gg.Api;
        // let localizedString = window["i18n"].t('ACCOUNT ID: %{0}', { "0": 1000 });
        logDebug('[root load] rate=' + rate, " ww=" + ww, " hs=" + hs, " ow=" + ow, " cc.gg.DesignWidth=" + cc.gg.DesignWidth, " cc.gg.ExtendWidth=" + cc.gg.ExtendWidth);
        logDebug('[root load] spreadId=' + cc.gg.spreadId, " Api=" + cc.gg.Api," pkgId="+cc.gg.pkgId);
        cc.gg.config.init();
    },

    start() {
    },

});
