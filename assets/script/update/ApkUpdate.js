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
const CProgressBar = require("CProgressBar")
cc.Class({
    extends: cc.Component,

    properties: {
        bar: CProgressBar,
        txt: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        logDebug('apkurl start');
    },

    onEnable() {
        logDebug('apkurl enable');
        this.filePath = window['jsb'] && jsb.fileUtils && jsb.fileUtils.getWritablePath() + "temp_package.apk";
        this.downloader = new jsb.Downloader();
        this.downloader.setOnFileTaskSuccess(() => {
            this.downloader = null;
            this.install();
        });
        this.downloader.setOnTaskProgress((task, bytesReceived, totalBytesReceived, totalBytesExpected) => {
            this.progress(totalBytesReceived, totalBytesExpected);
        });
        this.downloader.setOnTaskError((task, errorCode, errorCodeInternal, errorStr) => {
            console.error(task, errorCode, errorCodeInternal, errorStr);
            this.downloader = null;
        });
        this.downloader.createDownloadFileTask(this.apkurl, this.filePath, Math.random().toString());
    },

    progress(totalBytesReceived, totalBytesExpected) {
        this.bar.value = totalBytesReceived / totalBytesExpected;
        this.txt.string = byteToSize(totalBytesReceived) + "/" + byteToSize(totalBytesExpected);
    },

    install() {
        logDebug("download suc");
        installApk(this.filePath);
        this.hide();
    },

    show(apkurl) {
        logDebug('apkurl show');
        this.apkurl = apkurl;
        let alert = this.node.getComponent(BaseAlert);
        alert.show();
    },

    hide() {
        let alert = this.node.getComponent(BaseAlert);
        alert.hide();
    },

    // update (dt) {},
});
