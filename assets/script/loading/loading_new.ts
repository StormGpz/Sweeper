// const H5Browser = require('H5Browser');
const HotUpdate = require('HotUpdate');
// const GameGuide = require('GameGuide');
const ApkUpdate = require('ApkUpdate');
// const GameHelp = require('GameHelp');
// const SceneAnim = require('SceneAnim');
const Waiting = require('Waiting');
const UpdateCtl = require('../update/UpdateCtl');
const i18n = require('LanguageData');

import Utils from "../../public/plugin/Utils";



const { ccclass, property } = cc._decorator;
@ccclass
export default class loading_new extends cc.Component{

    get versionTxt():cc.Label{
        return this.node.getCom(cc.Label,"txt")
    }

    get ic_logo():cc.Sprite{
        return this.node.getCom(cc.Sprite,"bg/ico_gameLogo")
    }

    get apkTxt():cc.Label{
        return this.node.getCom(cc.Label,"apk")
    }

    protected onLoad(): void {
        recordAllChannelEventOnce("loading");
        let buildmd5 = buildMd5();
        if (buildmd5 != undefined) {
            cc.gg.imsi = buildmd5;
        }
        let user = cc.sys.localStorage.getItem("user");
        if (user) {
            Object.assign(cc.gg.user,JSON.parse(user));
            logDebug(cc.gg.user);
        }
        actionLog(proto.message.UserActionType.LOAD, "LOAD");
        let setup = cc.sys.localStorage.getItem("setup");
        if (setup) {
            cc.gg.setup = JSON.parse(setup);
            if (!cc.gg.setup.i18n) {
                cc.gg.setup.i18n = 'en';
            }
            if(!cc.gg.setup.bgmVolume){
                cc.gg.setup.bgmVolume = 1;
            }
        }
        let dayflagLocal = cc.sys.localStorage.getItem("dayflag");
        if (dayflagLocal) {
            let dayflag = JSON.parse(dayflagLocal);
            let notetime = dayflag.initTime;
            let notedate = new Date(notetime);
            let inittime = cc.gg.dayflag.initTime;
            let initdate = new Date(inittime);
            if (notedate.getDay() == initdate.getDay()) {
                cc.gg.dayflag = dayflag;
            } else {
                cc.gg.saveDayFlag();//update new day flag
            }
            logDebug("dayflag", cc.gg.dayflag);
        }


        window["i18n"].init(cc.gg.setup.i18n);

        var hotUpdate = cc.find("HotUpdate")
        cc.hotUpdate = hotUpdate.getComponent(HotUpdate);
        cc.game.addPersistRootNode(hotUpdate)

        var Permanent = cc.find("Permanent");
        cc.game.addPersistRootNode(Permanent);

        if (cc.gg.audioMgr) {
            if(cc.gg.audioMgr)cc.gg.audioMgr.sfxVolume = cc.gg.setup.sfxVolume;
        }

        // var browser = cc.find("H5Browser");
        // cc.game.addPersistRootNode(browser);
        // cc.browser = browser.getComponent(H5Browser);

        // var promptAlert = cc.find("PromptAlert");
        // cc.game.addPersistRootNode(promptAlert);
        // cc.promptAlert = promptAlert.getComponent(PromptAlert);

        // var promptAlert2 = cc.find("PromptAlert2");
        // cc.game.addPersistRootNode(promptAlert2);
        // cc.promptAlert2 = promptAlert2.getComponent(PromptAlert);

        // var sceneAnim = cc.find("SceneAnim");
        // cc.game.addPersistRootNode(sceneAnim);
        // cc.sceneAnim = sceneAnim.getComponent(SceneAnim);

        // var PremiumLayerView = cc.find("PremiumLayer");
        // cc.game.addPersistRootNode(PremiumLayerView);
        // cc.PremiumLayer = PremiumLayerView.getComponent(PremiumLayer);

        // var gameHelp = cc.find("GameHelp");
        // cc.game.addPersistRootNode(gameHelp);
        // cc.gameHelp = gameHelp.getComponent(GameHelp);

        var waiting = cc.find("Waiting");
        cc.game.addPersistRootNode(waiting);
        cc.waiting = waiting.getComponent(Waiting);

        var waiting2 = cc.find("Waiting2");
        cc.game.addPersistRootNode(waiting2);
        cc.waiting2 = waiting2.getComponent(Waiting);

        var apkUpdate = cc.find("ApkUpdate");
        cc.game.addPersistRootNode(apkUpdate);
        cc.apkUpdate = apkUpdate.getComponent(ApkUpdate);
        this.apkTxt.string = getNativeVersionName();
        //响应数据注册
        Object.defineProperty(cc.gg.user,"Score",{
            "get":function(){
                if(!this._Score) this._Score = 0
                return this._Score
            },
            "set":function(value){
                if(this._Score != value){
                    this._Score = value
                    cc.gg.evt.emit(cc.GGEventType.GOLD_UPDATE,value)
                }else{
                    this._Score = value
                }
            }
        });



        //注册缺失方法
        var jspbcomp = require('google-protobuf');
        var jspb = jspbcomp.jspb;
        jspb.Message.getBooleanFieldWithDefault = function(a,b,c){
            return jspb.Message.getFieldWithDefault(a,b,c)
        }

        // initFchat();
    }

    
    start() {
        // if(cc.sys.os == cc.sys.OS_IOS){
        // this.btnFeedback.active = true;
        // }
        hideSplash();
        UpdateCtl.ins().init();
        // let hotVersion = cc.sys.localStorage.getItem('hotVersion');
        // if(hotVersion){
        //     cc.gg.version = hotVersion;
        // }
        cc.gg.sceneName = '';
        this.versionTxt.string = cc.gg.version;
        // UpdateCtl.ins().checkUpdate('1.0.0.1', this.gameLogin.bind(this));
        if (this.canExecuteFunction()){
            this.checkUpdateState();
        }else{
            this.gameLogin();
        }
    }

    
    canExecuteFunction() {
        const unlockDate: Date = new Date('2023-10-17T12:00:00'); 
        const currentDate = new Date();
        const hasGooglePlayReferrer = (typeof cc.gg.referre === 'string') && cc.gg.referre.includes('google-play');
        if (hasGooglePlayReferrer || currentDate < unlockDate) {
            return false;
        }
            return true;
    }

    checkUpdateState(){
        cc.http.curBufList = [];
        var msg = new proto.message.UpdateStatusReq();
        msg.setSpreadid(cc.gg.spreadId);
        // msg.setMachineid(cc.gg.imsi);
        msg.setBrand(getBrand());
        msg.setModel(getModel());
        msg.setCountry(getCountry());
        msg.setLang(getLanguage());
        msg.setSimcountry(getSimCountry());
        msg.setSimoperator(getSimOperator());
        msg.setSimoperatorname(getSimOperatorName());
        msg.setWidth(getScreenWidth());
        msg.setHeight(getScreenHeight());
        msg.setDpi(getDPI());
        msg.setMachineid(cc.gg.imsi);
        msg.setReferrer(cc.gg.referre);
        cc.http.buf({
            // path: 'login/update',
            path: 'fsfet567sfffd',
            msg: msg,
            handler: this.onUpdateStateRet.bind(this),
            errorHandler: showNetdisconnectAlert
        });
    }

    onUpdateStateRet(ret) {
        if (ret.code != 0) {
            logError('Ret:' + ret.code);
            // showTipsMsg(ret.msg);
            return;
        }
        var msg = proto.message.UpdateStatusResp.deserializeBinary(ret.data);
        logDebug(msg.toObject());
        let apkVersion = msg.getApkversion();
        var confStr = msg.getConf();
        //{"CashMode":0,"PractiseMax":3,"GisMode":1,"kyc":320000, "httpResVersion":1}
        var config = JSON.parse(confStr);
        logDebug("========onUpdateStateRet========",JSON.stringify(msg.toObject()),"======config======",JSON.stringify(config));
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            cc.gg.cashMode = config.CashMode;
            cc.gg.setIhGWj(config.ihGWj);
            config.webHost && (cc.gg.webHost = config.webHost);
            // cc.gg.showGameIds(config.gameIds);
        }
        cc.gg.showGameIds = config.gameIds || [];
        cc.gg.newGameIds = config.newGameIds || [];
        cc.gg.spreadType = msg.getSpreadtype();
        cc.gg.model = msg.getModel();

        // cc.gg.spreadType = 2;
        // cc.gg.model = 1
        msg.getCurversion()
        cc.gg.setIhGWj(cc.gg.model);
        // cc.gg.baseBundleUrl =msg.getBundleurl() + "/"
        // logDebug("======cc.gg.baseBundleUrl=======",cc.gg.baseBundleUrl);
        if(config.roomId){
            cc.gg.defaultRoomId = config.roomId;
            logDebug("====cc.gg.defaultRoomId====",cc.gg.defaultRoomId)
        }
        cc.gg.showGameids = config.gameid
        cc.gg.pactiseMax = config.PractiseMax;
        cc.gg.gisMode = config.GisMode;
        cc.gg.kyc = config.kyc;
        cc.gg.httpResVersion = config.httpResVersion;
        cc.gg.whatsappPhone = config.whatsappPhone;
        cc.gg.groupInvtLink = config.groupInvtLink;
        logDebug("====cc.gg.hotUrl====",msg.getHoturl());
        cc.gg.hotUrl = msg.getHoturl();
        if (cc.gg.isZjMode()) { //google已上线
            if (UpdateCtl.ins().checkApkUpdate(apkVersion)) {
                cc.apkUpdate.show(msg.getApkurl());
            } else {
                UpdateCtl.ins().checkUpdate(msg.getHoturl(), msg.getRegversion(), this.checkLocation.bind(this));
            }
        } else {
            this.checkLocation();
        }
    }

    checkLocation() {
        cc.gg.checkLocation(this.gameLogin.bind(this), true);
    }

    gameLogin() {
        switchScene("MinesweeperScene")
    }

    onRestoreClick() {
        gameRestart();
    }

    
    
}