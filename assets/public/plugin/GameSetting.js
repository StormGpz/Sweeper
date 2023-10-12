
//定义全局变量
//TODO 考虑方法全挪到一个类下面
window.API_IOS = "AppController";
window.GameName = "Lucky Winner - Mines";


/**
 * 线上包要配置这几个参数
 */
const DEFAULT_ENV="prod";
const DEFAULT_SPREADID=3123;
const DEFAULT_PKGID=3;


const Level_Debug = 0;
const Level_Info = 1;
const Level_Error = 2;

window.nativeFun = {
    //MUSH EXISTS
        fbRecordEvent : ["org.cocos2dx.javascript.AppActivity", "recordAppEvent", "(Ljava/lang/String;Ljava/lang/String;)V"],
        getInstallReferrer : ["org.cocos2dx.javascript.AppActivity", "installReferrer", "()Ljava/lang/String;"],
    
    //NEED EXISTS
        shareSystem : ["org.cocos2dx.javascript.AppActivity", "shareToSystem", "(Ljava/lang/String;)V"],
        whatsappChat : ["org.cocos2dx.javascript.AppActivity", "wakeWAChat", "(Ljava/lang/String;)V"],
        shareFacebook : ["org.cocos2dx.javascript.AppActivity", "shareToSystem", "(Ljava/lang/String;)V"],
        shareWhatsApp : ["org.cocos2dx.javascript.AppActivity", "shareToSystem", "(Ljava/lang/String;)V"],

    //org.cocos2dx.lib.Cocos2dxHelper
        copyToStr : ["org.cocos2dx.lib.Cocos2dxHelper", "copyTextToClipboard", "(Ljava/lang/String;)V"],
        getDPI : ["org.cocos2dx.lib.Cocos2dxHelper", "getDPI", "()I"],
        getLanguage : ["org.cocos2dx.lib.Cocos2dxHelper", "getCurrentLanguage", "()Ljava/lang/String;"],
        vibratorRun : ["org.cocos2dx.lib.Cocos2dxHelper", "vibrate", "(I)V"],
        getVersionName : ["org.cocos2dx.lib.Cocos2dxHelper", "getVersion", "()Ljava/lang/String;"],
        getVersion : ["org.cocos2dx.lib.Cocos2dxHelper", "getVersion", "()Ljava/lang/String;"],
    
    
    //com.madaitd.rummymaza.AppsFlyerFunc => com.madaitd.rummymaza.OooO00o
        afCreateShareLink : ["com.madaitd.rummymaza.AppsFlyerFunc", "afCreateShareLink", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"],
        afRecordEvent : ["com.madaitd.rummymaza.AppsFlyerFunc", "afRecordEvent", "(Ljava/lang/String;Ljava/lang/String;)V"],
    //com.madaitd.rummymaza.BranchFunc => com.madaitd.rummymaza.OooO0O0
        brCreateShareLink : ["com.madaitd.rummymaza.BranchFunc", "brCreateShareLink", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"],
        brRecordEvent : ["com.madaitd.rummymaza.BranchFunc", "brRecordEvent", "(Ljava/lang/String;Ljava/lang/String;)V"],
    //com.madaitd.rummymaza.GameFunc => com.madaitd.rummymaza.OooO0o0
        getInviterId : ["com.madaitd.rummymaza.GameFunc", "getInviterId", "()I"],
        chmod : ["com.madaitd.rummymaza.GameFunc", "chmod", "(Ljava/lang/String;Ljava/lang/String;)V"],
        downloadApk : ["com.madaitd.rummymaza.GameFunc", "downloadApk", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"],
        setOrientation : ["com.madaitd.rummymaza.GameFunc", "setOrientation", "(I)V"],
        checkInstallPermission : ["com.madaitd.rummymaza.GameFunc", "checkInstallPermission", "()V"],
        installApk : ["com.madaitd.rummymaza.GameFunc", "installApk", "(Ljava/lang/String;)V"],
        getBrand : ["com.madaitd.rummymaza.GameFunc", "getBrand", "()Ljava/lang/String;"],
        getBuildMD5 : ["com.madaitd.rummymaza.GameFunc", "getBuildMD5", "()Ljava/lang/String;"],
        getCountry : ["com.madaitd.rummymaza.GameFunc", "getCountry", "()Ljava/lang/String;"],
        getDeviceId : ["com.madaitd.rummymaza.GameFunc", "getDeviceId", "()Ljava/lang/String;"],
        getEnv : ["com.madaitd.rummymaza.GameFunc", "getEnv", "()Ljava/lang/String;"],
        getLatitude : ["com.madaitd.rummymaza.GameFunc", "getLatitude", "()D"],
        getLongitude : ["com.madaitd.rummymaza.GameFunc", "getLongitude", "()D"],
        getPkgId : ["com.madaitd.rummymaza.GameFunc", "getPkgId", "()I"],
        getModel : ["com.madaitd.rummymaza.GameFunc", "getModel", "()Ljava/lang/String;"],
        getScreenHeight : ["com.madaitd.rummymaza.GameFunc", "getScreenHeight", "()I"],
        getScreenWidth : ["com.madaitd.rummymaza.GameFunc", "getScreenWidth", "()I"],
        getSimOperator : ["com.madaitd.rummymaza.GameFunc", "getSimOperator", "()Ljava/lang/String;"],
        getSimCountry : ["com.madaitd.rummymaza.GameFunc", "getSimCountry", "()Ljava/lang/String;"],
        getSimOperatorName : ["com.madaitd.rummymaza.GameFunc", "getSimOperatorName", "()Ljava/lang/String;"],
        showFreshchat : ["com.madaitd.rummymaza.GameFunc", "showFreshchat", "()V"],
        getSpreadId : ["com.madaitd.rummymaza.GameFunc", "getSpreadId", "()I"],
        showFreshFAQ : ["com.madaitd.rummymaza.GameFunc", "showFreshFAQ", "()V"],
    //com.madaitd.rummymaza.GoogleMap => com.madaitd.rummymaza.OooO0oO
        mapCheckPermissions : ["com.madaitd.rummymaza.GoogleMap", "mapCheckPermissions", "()I"],
        mapGetCurLocation : ["com.madaitd.rummymaza.GoogleMap", "mapGetCurLocation", "()Ljava/lang/String;"],
        mapRequestPermissions : ["com.madaitd.rummymaza.GoogleMap", "mapRequestPermissions", "()V"],
    //com.madaitd.rummymaza.ImagePickerFunc => com.madaitd.rummymaza.OooO0oo
        openCamera : ["com.madaitd.rummymaza.ImagePickerFunc", "openCamera", "(III)V"],
        imageToBase64 : ["com.madaitd.rummymaza.ImagePickerFunc", "imageToBase64", "(Ljava/lang/String;)Ljava/lang/String;"],
        openPhoto : ["com.madaitd.rummymaza.ImagePickerFunc", "openPhoto", "(III)V"],
    //org.cocos.javascript.AppActivity => org.cocos.javascript.AppActivity
        startGooglePay : ["org.cocos.javascript.AppActivity", "startGooglePay", "(Ljava/lang/String;)V"],
        facebookLogin : ["org.cocos.javascript.AppActivity", "facebookLogin", "()V"],
        hideSplash : ["org.cocos.javascript.AppActivity", "hideSplash", "()V"],
        googleLogin : ["org.cocos.javascript.AppActivity", "googleLogin", "()V"],
    //APP
        initFchat : ["com.madaitd.rummymaza.RummyMazaApp", "initFchat", "(Ljava/lang/String;Ljava/lang/String;)V"],
    } 
    


/**
 * 获取产品标识
 * testj -- 表示测试环境
 * prod -- 表示正式环境
 * @returns 
 */
function getEnv() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getEnv[0], nativeFun.getEnv[1], "()Ljava/lang/String;");
        if(!r){
            logError("failed to call getEnv aa:", r);
            return DEFAULT_ENV;
        }
        
        return r;
    }

    // if (cc.sys.os == cc.sys.OS_IOS) {
    //     return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getEnv[1]);
    // }
}


function getSpreadId() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getSpreadId[0], nativeFun.getSpreadId[1], "()I");
        if(!r) {
            logError("failed to call getSpreadId:", r);
            return DEFAULT_SPREADID;
        }

        return r;
    } 
    
    // else if (cc.sys.os == cc.sys.OS_IOS) {
    //     return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getSpreadId[1]);
    // };
}

async function Sleep(ms,sfxID){
    return new Promise(resolve => {
        let id = setTimeout(()=>resolve(), ms)
        if(sfxID) sfxID["id"] = id
    })
}

function getPkgId() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getPkgId[0], nativeFun.getPkgId[1], "()I");
        if(!r) {
            logError("failed to call getPkgId:", r);
            return DEFAULT_PKGID;
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS,  nativeFun.getPkgId[1]);
    };
}

function getCountry() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getCountry[0], nativeFun.getCountry[1], "()Ljava/lang/String;");
        if(!r) {
            logError("failed to call getPkgId:", r);
            return "in";
        }

        return r;
    }
    
    // else if (cc.sys.os == cc.sys.OS_IOS) {
    //     return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getCountry[1]);
    // };
}

function getLanguage() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getLanguage[0], nativeFun.getLanguage[1], "()Ljava/lang/String;");
        if(!r) {
            logError("failed to call getLanguage:", r);
            return "en";
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getLanguage[1]);
    };
}


function getSimCountry() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getSimCountry[0], nativeFun.getSimCountry[1], "()Ljava/lang/String;");
        if(!r) {
            logError("failed to call getSimCountry:", r);
            return "0000";
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getSimCountry[1]);
    };
}


function getSimOperator() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getSimOperator[0], nativeFun.getSimOperator[1], "()Ljava/lang/String;");
        if(!r) {
            logError("failed to call getSimOperator:", r);
            return "0000";
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getSimOperator[1]);
    };
}


function getSimOperatorName() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getSimOperatorName[0], nativeFun.getSimOperatorName[1], "()Ljava/lang/String;");
        if(!r) {
            logError("failed to call getSimOperatorName:", r);
            return "0000";
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getSimOperatorName[1]);
    };
}

function getBrand() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getBrand[0], nativeFun.getBrand[1], "()Ljava/lang/String;");
        if(!r) {
            logError("failed to call getBrand:", r);
            return "0000";
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getBrand[1]);
    };
}



function getModel() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getModel[0], nativeFun.getModel[1], "()Ljava/lang/String;");
        if(!r) {
            logError("failed to call getModel:", r);
            return "0000";
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getModel[1]);
    };
}


function getLongitude() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getLongitude[0], nativeFun.getLongitude[1], "()D");
        if(!r) {
            logError("failed to call getLongitude:", r);
            return 0;
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getLongitude[1]);
    };
}


function getLatitude() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getLatitude[0], nativeFun.getLatitude[1], "()D");
        if(!r) {
            logError("failed to call getLatitude:", r);
            return 0;
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getLatitude[1]);
    };
}

function getDPI() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getDPI[0], nativeFun.getDPI[1], "()I");
        if(!r) {
            logError("failed to call getDPI:", r);
            return 0;
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getDPI[1]);
    };
}

function getScreenWidth() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getScreenWidth[0], nativeFun.getScreenWidth[1], "()I");
        if(!r) {
            logError("failed to call getScreenWidth:", r);
            return 0;
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getScreenWidth[1]);
    };
}


function getScreenHeight() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getScreenHeight[0], nativeFun.getScreenHeight[1], "()I");
        if(!r) {
            logError("failed to call getScreenHeight:", r);
            return 0;
        }

        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getScreenHeight[1]);
    };
}


function getInstallReferrer() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getInstallReferrer[0], nativeFun.getInstallReferrer[1], "()Ljava/lang/String;");
        if(!r) {
            logError("failed to call getInstallReferrer:", r);
            return "unsupported";
        }
        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getInstallReferrer[1]);
    }else{
        return ""
    }
}

function initFchat() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(nativeFun.initFchat[0], nativeFun.initFchat[1], nativeFun.initFchat[2], "0a2aca89-caad-4d2c-90d6-f3e1acec56db", "4b1e7263-a8a4-41f8-a3df-4e2ac77fc425");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        jsb.reflection.callStaticMethod(API_IOS, nativeFun.initFchat[1]);
    }
}


function consoleLog(level, ...data) {
    console.log(cc.gg.logLevel, level, data);
    if (level >= cc.gg.logLevel) {
        if (level == Level_Error) {
            console.error.apply(console, ...data);
            //console.error(...data);
        } else {
            console.log.apply(console, ...data);
            console.log(...data);
        }
    }
}

function logInfo(...data) {
    consoleLog(Level_Info, data);
}

function logDebug(...data) {
    consoleLog(Level_Debug, data);
}

function logError(...data) {
    consoleLog(Level_Error, data);
}

function getLogLevel() {
    try {
        let level = cc.sys.localStorage.getItem('logLevel');
        if (level == Level_Debug || level == Level_Info || level == Level_Debug) {
            return level;
        } else {
            //TODO 如果出错了这里还能打印出来吗
        }
    } catch (error) {
        logError("getLogLevel", error);
    }
    return Level_Error;
}


cc.gg = cc.gg || {};
cc.gg.name = GameName;
//是否Debug
cc.gg.isDebug = CC_DEBUG;
// cc.gg.isDebug = true;
if (cc.gg.isDebug) {
    cc.gg.logLevel = Level_Debug;
} else {
    cc.gg.logLevel = getLogLevel();
}

//事件体
cc.gg.evt = cc.gg.evt || new cc.EventTarget();
//断线重连标记
cc.gg.isNetReconnect = false;
cc.gg.isVerifyLogin = false;
cc.gg.verifyLoginNum = 0;
cc.gg.isLogout = false;
cc.gg.isNewMail = false;
cc.gg.isHideGame = false;
cc.gg.needRestartGame = false;
cc.gg.loginSwitch = false;
cc.gg.onlyBtnName = "";
cc.gg.gateIdx = 0;
cc.gg.version = '1.1.1';
cc.gg.mailList = [];
cc.gg.keepAlive = 10;
cc.gg.isShow24hAct = 0;
cc.gg.fortuneShownTime = 0;
cc.gg.isSinglegame = false;
cc.gg.afInviteUser = "0";

cc.gg.remoteBundleUrl = function(){
    if(cc.gg.baseBundleUrl && cc.gg.spreadId && cc.gg.version){
        return `${cc.gg.baseBundleUrl}${cc.gg.spreadId}/v${cc.gg.version}/`
    }else{
        return null;
    }
}

cc.gg.ihGWj = 0; //google上架 0 上架 1已上架(开branch) 2已上架(全开)

cc.gg.spreadType = 1; // 1-线下(游客登录 旧) 2-线上(密码登录 新)
cc.gg.model = 2; //模式 1 金币模式(没有热更 直接进游戏) 2 真金模式(有热更有大厅)， 热更是客户端控制，为了让非正常用户不看到更新，主要是不让google看到

cc.gg.cashMode = 1;
cc.gg.gisMode = 1;
cc.gg.isInPlayableArea = 1;//是否在可以玩的区域
cc.gg.pactiseMax = 3;
cc.gg.pactiseNum = 0;
cc.gg.kyc = 3200;

cc.gg.isShowWebView = false;

cc.gg.httpResVersion = 1;

cc.gg.actionLogObj = {};

cc.gg.localBundleVer = {};

cc.gg.remoteBundleVer = {};

cc.gg.srvtime = 0;
// cc.gg.srvdate = null;
cc.gg.srvmillisecond = 0;
cc.gg.starttime = 0;
cc.gg.referre = getInstallReferrer();
cc.gg.InviteLink = "";
cc.gg.DownloadLink = "https://rummymaza.com/";
cc.gg.webHost = "https://web2.rummyshummy.in/"
cc.gg.privacyUrl = 'https://sites.google.com/view/privacy-policy-for-lucky-winne';
cc.gg.termsUrl = 'https://sites.google.com/view/lucky-winner-mines-terms-of-se';
let env = getEnv();
if (CC_DEBUG) {
    cc.gg.spreadId = 1;
    // 渠道号改为未上架;
    // cc.gg.spreadId = 1001;
    cc.gg.ihGWj = 1;
    cc.gg.pkgId = 1;
    env = "testj";
} else {
    // cc.gg.spreadId = 100;
    cc.gg.spreadId = getSpreadId();
    cc.gg.pkgId = getPkgId();
    logDebug("SpreadId", cc.gg.spreadId ,"PkgId",cc.gg.pkgId);
    cc.gg.DownloadLink = "https://d.rummymaza.com/download/" + cc.gg.spreadId;
}
//cc.gg.imsi = "Rummy_test"
cc.gg.imsi = "Rummy_" + Math.random().toString();
// cc.gg.imsi = 'c6b074e84ccad7c661fcf2a18ff99202';
// cc.gg.imsi = '3ab81b66036405e9733101ebd5019ba4';
// cc.gg.imsi = '0.6132419438182473';
cc.gg.xxteaKey = "87d2676474c5d267";
cc.gg.sceneName = '';

cc.gg.DesignWidth = 1280;
cc.gg.DesignHeight = 720;
cc.gg.ExtendWidth = 0;

cc.gg.isSinglegame = false;

// let baseUrl = 'http://192.168.3.236:18080';
// let baseUrl = 'http://192.168.1.139:18080';
// let baseUrl = 'http://192.168.1.132:18080';
let baseUrl = 'http://127.0.0.1:18080';
// let baseUrl = 'https://api.rummymaza.com';
// let baseUrl = 'http://192.168.31.104:18080';
// let baseUrl = 'https://mytest.rummymaza.com';
// cc.gg.h5Sub = "http://192.168.1.139:8019/#/";
if (!cc.gg.isDebug) {
    // baseUrl = 'https://ec2-15-206-188-191.ap-south-1.compute.amazonaws.com';
    // baseUrl = 'http://47.119.187.74:18080';
    // cc.gg.h5Sub = "http://47.119.187.74:8018/#/";
    baseUrl = 'https://api.rummymaza.com';
    cc.gg.h5Sub = "https://h5.rummymaza.com/#/";
}

if ("prod" == env) {
    baseUrl = 'https://d37utzqtw3o85y.cloudfront.net';
    cc.gg.h5Sub = "https://h5.rummymaza.com/#/";
    // cc.gg.privacyUrl = "https://web2.rummyshummy.in/{spreadId}/home/privacy.html";
    // cc.gg.termsUrl = "https://web2.rummyshummy.in/{spreadId}/home/terms.html";
} else if ("test" == env) {
    baseUrl = 'https://mytest.rummymaza.com';
    cc.gg.h5Sub = "";
} else if ("testj" == env) {
    // baseUrl = 'http://apitestj.rummymaza.com';
    cc.gg.h5Sub = "http://h5testj.rummymaza.com/#/";
    baseUrl = 'https://testapictrlrummy.rummyshummy.in';
    cc.gg.logLevel = Level_Debug;
    cc.gg.ihGWj = 2;
} else {
    baseUrl = 'https://testapictrlrummy.rummyshummy.in';
    // baseUrl = 'http://127.0.0.1:18080';
    // baseUrl = 'http://ec2-65-1-167-115.ap-south-1.compute.amazonaws.com:9400';
    // baseUrl = 'https://mytest.rummymaza.com';
    // baseUrl = 'https://api.rummymaza.com';
    // cc.gg.h5Sub = "https://h5.rummymaza.com/#/";
}

//跟渠道有关的URL
cc.gg.privacyUrl = 'https://sites.google.com/view/privacy-policy-for-lucky-winne';
cc.gg.termsUrl = 'https://sites.google.com/view/lucky-winner-mines-terms-of-se';


// cc.gg.h5Sub = "http://192.168.3.230:8019/#/";
// cc.gg.Api = baseUrl + ':18080/';
cc.gg.Api = baseUrl + '/';
cc.gg.download = cc.gg.Api + 'image/download';

cc.gg.setup = {
    bgmVolume: 1.0, //背景音乐音量
    sfxVolume: 1.0, //音效音量
    vibration: true,    //震动提醒
    sound: true,  //音效开关
    colorDeck4: false,  //游戏中4色牌开关
    i18n: 'en',
    backgroundIndex: 1,
}

cc.gg.waitingTimes = [0];

cc.gg.dayflag = {
    initTime: Date.now(),
    activity: true,//今日活动提示
}

cc.gg.user = {
    UserID: 0,
    NickName: "USER_235",
    LocalFaceUrl:"atlas/head/1",
    FaceUrl: "d3ae0c53-3578-45e6-a21e-420786bbf873",
    _Phone: "",
    set Phone(v){
        if(v!=this._Phone){
            this._Phone = v
            cc.gg.evt.emit(cc.GGEventType.PHONE_UPDATE)
        }
    },
    get Phone(){
        return this._Phone
    },
    get isPhoneBind(){
        return this.Phone!=""
    },
    set isPhoneBind(v){

    },
    _Score: 0, //总金额
    set Score(v){
        this._Score = v
        cc.gg.evt.emit(cc.GGEventType.GOLD_UPDATE)  
    },
    get Score(){
        return this._Score
    },
    BindScore: 0, //绑定金额（只能用来输)
    BindCard:{
        BindCardName:"",
        BindCardNum: "",
        BindCardIFSCCode:"",
    }, 
    set isBindCard(v){

    },
    get isBindCard(){
        return (this.BindCard.BindCardName!="" && this.BindCard.BindCardNum!= "" && this.BindCard.BindCardIFSCCode!= "" )
    },
    RechargeNum: 0,
    InviteID: 0,   //邀請人ID
    InviteScore: 0,   //邀請积分
    UniqueID: "",
    Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTg0NzE2MjcsInVpZCI6MH0.5jX0zRNtmTffelGOHOQfaV77HGIBqEKjrD_tp0Rr2Sc",
    GateInfo: "oKRsZE3udQr7EoQmjA2iV/HErsTDk/5LSU+xFGOglsI=",
    TokenTime: 0,
    ClubLv: 0,    //俱乐部等级
    ClubPoint: 0,  //俱乐部积分
    Bonus: 0,  //奖金
    usedBonus:0,  ////碗里面收集的bonus
    RealStatus: 0,   //未实名
    BonusInvite: 0, //邀请奖金(邀请好友获得)
    FirstLogin: 0,   //第一次登陆
    TodayAssist: 0,  //今日补助  >0 今日已补助
    TodayRoll: 0,    //今日抽獎  中奖ID，=0表示今日未抽奖
    RollState: 0,    //今日奖品  0表示已使用，>0表示未使用（也表示比赛ROOMID）
    ExpScore: 0,     //用户经验
    Gate: ['ws://172.16.10.103:6001'],
    WheelNum:0,
    // Gate: [],
    vipLevel:0,
    bonusRate:0,
}

cc.gg.rollconfig = {
    Award: [],
    DateBegin: "2020-12-01 00:00:00",
    DateEnd: "2030-01-01 00:00:00",
    Status: 1,
    TimeBegin: 8,
    TimeEnd: 21,
    Matchbegin: 20,
    Matchend: 22,
}

cc.gg.setIhGWj = function (ihGWj) {
    if (ihGWj === 1 || ihGWj === 2) {
        cc.gg.ihGWj = ihGWj;
        cc.gg.DownloadLink = "https://d.rummymaza.com/download/" + cc.gg.spreadId;
    } else {
        cc.gg.ihGWj = 0;
        cc.gg.DownloadLink = "";
    }
}

cc.gg.isZjMode = function () {
    if (cc.gg.isBranchLink == -1) {
        let isBranchLink = localStorage.getItem('isBranchLink');
        if (isBranchLink === '1') {
            cc.gg.isBranchLink = 1;
        }
    }
    if (cc.gg.ihGWj == 0) {//未上架 不管哪里来都不开zj模式
        return false;
    } else if (cc.gg.ihGWj == 1 && cc.gg.isBranchLink == 1) {
        //已上架 -> 只有branch进来的才开ZJ
        return true;
    } else if (cc.gg.ihGWj == 2) {
        //已上架 -> 所有的都开ZJ
        return true;
    }
    return false;
}

cc.gg.shouldHideRecharge = function () {
    if (cc.gg.ihGWj == 0) {
        return true;
    }
    return false;
}

cc.gg.shouldHideGame = function () {
    // if (cc.gg.user.RechargeNum < 1000 * 100) {
    //     return true;
    // }
    // return false;
    // return true;

    if (cc.gg.ihGWj == 0) {
        return true;
    }

    if ((cc.gg.spreadId == 1002 || cc.gg.spreadId == 1003) && cc.gg.user.RechargeNum < 10000 * 100) {
        return true;
    }
    return false;
}

cc.gg.setUser = function (msg) {
    // let msg = new proto.message.LoginResp();
    let user = cc.gg.user;
    user.UserID = msg.getUserid();
    user.NickName = msg.getNickname();
    if (user.NickName == "") {
        user.NickName = "USER_" + user.UserID;
    }
    user.FaceUrl = msg.getFaceurl();
    user.Phone = msg.getPhone();
    user.Score = msg.getScore();
    user.InviteID = msg.getInviteid();
    user.InviteScore = msg.getInvitescore();
    user.BindScore = msg.getBindscore();
    user.UniqueID = msg.getUniqueid();
    user.GateInfo = msg.getGateinfo();
    user.RealStatus = msg.getRealstatus();
    user.FirstLogin = msg.getFirstlogin();
    user.TodayAssist = msg.getTodayassist();
    user.TodayRoll = msg.getTodayroll();
    user.RollState = msg.getRollstate();
    user.ExpScore = msg.getExpscore();
    user.ispremium = msg.getIspremium() || false;
    cc.gg.srvtime = msg.getSrvtime();
    let date = new Date(cc.gg.srvtime);
    cc.gg.srvmillisecond = date.getTime();
    cc.gg.starttime = Date.now();

    user.vipLevel = msg.getViplevel();
    user.bonusRate = msg.getBonusrate();
    
    // let dateNow = new Date();
    // cc.log(date.toLocaleString(), date.getTime(), dateNow.toLocaleString(), dateNow.getTime());
    if (!cc.gg.cashMode) {
        cc.gg.pactiseNum = user.ExpScore;
        cc.gg.cashMode = cc.gg.pactiseNum >= cc.gg.pactiseMax ? 1 : 0;
    }
    cc.gg.setToken(msg.getToken());
}

cc.gg.srvCurms = function () {
    let curtime = Date.now();
    let runTime = curtime - cc.gg.starttime;
    let srvms = cc.gg.srvmillisecond + runTime;
    return srvms;
}

cc.gg.srvCurDate = function () {
    let srvms = cc.gg.srvCurms();
    return new Date(srvms);
}

cc.gg.setToken = function (token) {
    let user = cc.gg.user;
    user.Token = token;
    // user.Token = "123";
    user.TokenTime = Date.now() + 86400000;
    cc.gg.saveUserData();
}

cc.gg.saveUserData = function () {
    cc.sys.localStorage.setItem("user", JSON.stringify(cc.gg.user));
}
cc.gg.saveSetupData = function () {
    cc.sys.localStorage.setItem("setup", JSON.stringify(cc.gg.setup));
}
cc.gg.saveDayFlag = function () {
    cc.sys.localStorage.setItem("dayflag", JSON.stringify(cc.gg.dayflag));
}

cc.gg.withdrawScore = function () {
    return cc.gg.user.Score - cc.gg.user.BindScore;
}
/**
 * 房间桌子列表，值为1则是已用，目前最多支持同时创建三个房间
 */
cc.gg.roomTables = [1, 0, 0, 0];
/**
 *  等待进入房间列表
 *  @type{[{tab:1,room:1}]}
 */
cc.gg.waitEnterRooms = [];

cc.gg.roomFilter = {
    chip: 'Cash',
    play: 100,
    players: {
        //2人场
        players2: true,
        //6人场
        players6: true,
    },
    pool: {
        //101积分场
        pool101: true,
        //201积分场
        pool201: true,
    },
    deals: {
        //2局场
        deals2: true,
        //3局场
        deals3: true,
        //6局场
        deals6: true,
    },
    bet: {
        //低倍场
        small: true,
        //中倍场
        medium: true,
        //高倍场
        high: true,
    },
}

cc.gg.backhideViews = [];

cc.gg.queueViews = [];

/**
 * @type [[proto.message.LobbyRoomConfig]]
 */
cc.gg.roomList = {};

cc.gg.imagesCache = {};

/**
 * 
 * activplayer: 0
blind: 1000
deals: 0
entryfee: 0
gameid: 100
isprac: 1
maxplayer: 6
minentry: 0
pool: 0
prize: 0
roomid: 2
roomname: "Points-Joker"
 */
cc.gg.roomDic = {};

cc.GGEventType = {
    //ws链接成功
    CONNECT_SUCC: 'connect_succ',
    //ws链接失败
    CONNECT_FAIL: 'connect_fail',
    //ws链接关闭
    CONNECT_CLOSE: 'connect_close',

    I18N_UPDATE: 'i18nUpdate',
    ROOM_UPDATE: 'roomUpdate',
    NICK_UPDATE: 'nickUpdate',
    HEAD_UPDATE: 'headUpdate',
    GOLD_UPDATE: 'goldUpdate',
    PHONE_UPDATE:"phoneUpdate",
    MSG_TIPS: 'msgTis',//显示tips消息，showWaitMsg('wait pay!');
    SWITCHSCENECOMPLETE: 'switchSceneComplete',
    GO_TO_MATCH: "goToMatch",

    HALL: {
        ROLL_CONFIG: "hall_rollconfig",
        BUY_SHOP_COMPLETE: "buyShopComplete",
        OPEN_VIEW:"open_view",
        VIP_UPGRADE:"vip_upgrade",
    },

    KEYUP: {
        BACK: "KEYUP_BACK",
        BACK_SLASH: "KEYUP_BACK_SLASH",
    },

    Panel: {
        Roll: 'Panel/Roll',
        Room: 'Panel/Room'
    },
    Game: {
        RECONNECT_CLEAR_GAME: "game.reconnect",//重新连接游戏后，删除掉已不存在的房间
        JOIN_ROOM: "game.join_room",
        DESK_INFO: "game.desk_info",
        GAME_START_WAIT: "game.start_waitTime",
        UPDATE_SCORE: "game.update_score",
        JOIN_ROOM_FAIL_NOT_PREMIUM: "game.join_room_fail_not_premium",
        JOIN_VIP_ROOM_FROM_LINK: "game.join_vip_room_from_link",

        RUMMY_DESK_INFO_RET: "game.rummy_desk_info_ret",

        UPDATE_ROOMNAME: "game.update_roomName",
        TIPS_TO_DECLARE: "game.TipsToDeclare",
        CHANGE_STATE_READY: "game.change_state_ready",
        CHNAGE_STATE_CHIP: "game.change_state_chip",
        CHNAGE_STATE_SHOWCARD: "game.change_state_showCard",
        CHNAGE_STATE_END: "game.change_state_end",
    },
    Guide: {
        GROUP_CARD: 'GroupCard',
        SELECT_CARD: 'SelectCard',
        FINISH_CARD: 'FinishCard',
    },
    Animation: {
        ACTING_CARD: "rm.acting_card",
        TOUCH_CARD_END: "rm.touch_card_end",
        SWAP_CARD_GROUP: "rm.swap_card_group",
        ADD_TO_CARD_GROUP: "rm.addto_card_group"
    },
    System: {
        SWITCH_CARD_COLOR: "sm.switch_card_color",
        SWITCH_BACKGROUND: "sm.switch_background"
    },
    Email: {
        NEW_RET: "email.new.ret",
        READ_RET: "email.read.ret",
    },
    SysNotice: {
        NEW_RET: "sys_notice.new.ret",
    },
}


cc.gg.avatars = {
    0: "ZamFjZ4S8xLVnBuZOw==",
    1: "ZpmFjZ7S8yL4nBuZ4w==",
    2: "ZYmFjZLS8zLGnBuZEw==",
    3: "ZUmFjZMS80L3nBuZMw==",
    4: "ZymFjZxS81LAnBuZfw==",
    5: "ZWmFjZaS82LRnBuZww==",
    6: "ZTmFjZCS83L0nBuZaw==",
    7: "Z2mFjZfS84LanBuZ9w==",
    8: "Z0mFjZhS85LznBuZ4w==",
    9: "Z4mFjZcS8xMKC5wbhmc=",
    10: "ZRmFjZIS8xMZS5wbSmc=",
    11: "Z0mFjZqS8xMXi5wblmc=",
    12: "ZimFjZoS8xMXy5wbImc=",
    13: "Z9mFjZRS8xNCC5wblmc=",
    14: "ZEmFjZgS8xNkS5wbPmc=",
    15: "ZpmFjZJS8xNDi5wbCmc=",
    16: "ZimFjZLS8xNby5wb0mc=",
}

cc.gg.config = {
    vip: [],
    roll: [],
    init: function () {
        // cc.loader.loadResArray(['json/vip', 'json/roll'], cc.JsonAsset, function (err, resArr) {
        //     for (let i = 0; i < resArr.length; i++) {
        //         const res = resArr[i];
        //         cc.gg.config[res.name] = res.json;
        //     }
        //     logDebug("cc.gg.config=", cc.gg.config);
        // })
    },
    getDataById: function (name, key, value) {
        // let configs = cc.gg.config[name];
        // for (let i = 0; i < configs.length; i++) {
        //     const data = configs[i];
        //     if (data[key] == value) {
        //         return data;
        //     }
        // }
        return null;
    }
}

cc.CTabEventType = {
    SELECT: 'C_Tab_SELECT'
}

// 追加加入桌子信息，注意数据变更和置空
cc.gg.deskInfo = {

}

//系统公告
cc.gg.notices = new Map();
//测试数据
if (cc.gg.isDebug) {
    cc.gg.notices.set(1, [{
        id: 1,
        showCount: 2,
        priority: 1,
        content: "<color=#ff0000>Red Text</color>Normal"
    }, {
        id: 2,
        showCount: 1,
        priority: 1,
        content: "<color=#ff0000>Red Text</color>Normal2"
    }]);
    cc.gg.notices.set(100, [{
        id: 101,
        showCount: 1,
        priority: 100,
        content: "<color=#ff0000>Red Text</color>Normal 101"
    }, {
        id: 102,
        showCount: 1,
        priority: 100,
        content: "<color=#ff0000>Red Text</color>Normal 102"
    }]);
}

cc.gg.mainBundle = null;

cc.gg.linkProps = {};
cc.gg.isBranchLink = -1; //是否是从branch里面进来的(也就是clicked_branch_link的值) -1 未知 0 false 1 true

cc.gg.setLinkProps = function (props) {
    logDebug("setLinkProps", props);
    try {
        cc.gg.linkProps = JSON.parse(props);
        if (cc.gg.linkProps) {
            if (cc.gg.linkProps['+clicked_branch_link'] == true) {
                cc.gg.isBranchLink = 1;
                cc.sys.localStorage.setItem('isBranchLink', "1");
                //如果是branch过来的日志基本是debug
                cc.gg.logLevel = Level_Debug;
                cc.sys.localStorage.setItem('logLevel', Level_Debug);
            } else if (cc.gg.linkProps['+clicked_branch_link'] == false) {
                //cc.gg.isBranchLink = 0;
            }

            cc.gg.evt.emit(cc.GGEventType.Game.JOIN_VIP_ROOM_FROM_LINK);
        }

        //只要点过就存下来 -> 后续直接拿
        let isBranchLink = localStorage.getItem('isBranchLink');
        if (isBranchLink === '1') {
            cc.gg.isBranchLink = 1;
        }
    } catch (error) {
        logError("setLinkProps", error);
    }
}

cc.gg.setLogLevel = function (level) {
    logError("setLogLevel", level);
    try {
        cc.gg.logLevel = level;
        cc.sys.localStorage.setItem('logLevel', level);
    } catch (error) {
        logError("setLogLevel", error);
    }
}



var gameIds = [100, 101, 102, 103, 110];
var gameNames = ['Points', 'Pool', 'Deals', '10Card', 'Match'];

// import  i18n from "../../script/i18n/LanguageData";
function gameIdByName(name) {
    var i = gameNames.indexOf(name);
    if (i > -1) {
        return gameIds[i];
    } else {
        return 0;
    }
}

function showNetdisconnectAlert() {
    cc.promptAlert.show("Network disconnection", "Please confirm the network status and reconnect", ['Reconnect'], (val) => {
        if (val == '0') {
            gameRestart();
        }
    }, false,"",false);
}

function gameNameById(id) {
    var i = gameIds.indexOf(id);
    if (i > -1) {
        return gameNames[i];
    } else {
        return "";
    }
}

function actionLog(action, content) {
    if (cc.gg.actionLogObj[action]) {
        return;
    }
    var msg = new proto.message.MsgUserActionLog();
    msg.setUniqueid(cc.gg.imsi);
    msg.setUserid(cc.gg.user.UserID);
    msg.setAction(action);
    msg.setContent(content);
    cc.http.buf({
        // path: 'action/log',
        path: 'ytjjeh88376',
        msg: msg,
        handler: (ret) => {
            if (ret.code != 0) {
                logDebug("ActionLog:" + action, " Err:" + ret.code);
                // showTipsMsg(ret.msg);
                return;
            }
            logDebug("ActionLog:" + action, " Ret:", ret.data);
        }
    });
    cc.gg.actionLogObj[action] = 1;
    cc.sys.localStorage.setItem(cc.gg.imsi + "actionLog", JSON.stringify(cc.gg.actionLogObj));
}

function isPractice() {
    return cc.gg.roomFilter.chip == 'Practice';
}

function getCurVipData(curExp) {
    let configs = cc.gg.config.vip;
    for (let i = 0; i < configs.length; i++) {
        const data = configs[i];
        if (data.exp > curExp) {
            return data;
        }
    }
    return configs[configs.length - 1];
}

function isIOS() {
    return cc.sys.os == cc.sys.OS_IOS;
}

/**
 * Facebook登陆
 */
cc.gg.facebookLogin = function () {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(nativeFun.facebookLogin[0], nativeFun.facebookLogin[1], "()V");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.facebookLogin[1]);
    };
}

cc.gg.facebookLoginSuccess = function (userId) {
    logDebug('[jsback]facebookLoginSuccess：userid=', userId);
    cc.login.loginFacebook(userId);
}

/**
 * google登陆
 */
cc.gg.googleLogin = function () {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(nativeFun.googleLogin[0], nativeFun.googleLogin[1], "()V");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.googleLogin[1]);
    };
}

cc.gg.googleLoginSuccess = function (userId) {
    logDebug('[jsback]googleLoginSuccess：userid=', userId);
    cc.login.loginGoogle(userId);
}

/**
 * apple登陆
 */
cc.gg.appleLogin = function () {
    if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "appleLogin");
    };
}

cc.gg.appleLoginSuccess = function (userId) {
    logDebug('[jsback]AppleLoginSuccess：userid=', userId);
    cc.login.loginApple(userId);
}

cc.gg.showFreshchat = function () {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.showFreshchat[0], nativeFun.showFreshchat[1], "()V");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.showFreshchat[1]);
    }
    showTipsMsg(window["i18n"].t("web is not support"))
}

cc.gg.showFreshFAQ = function () {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.showFreshFAQ[0], nativeFun.showFreshFAQ[1], "()V");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.showFreshFAQ[1]);
    }
    showTipsMsg(window["i18n"].t("web is not support"))
}

function recordAllChannelEvent(name, jsonStr) {
    recordEventAF(name, jsonStr);
    recordEventFB(name, jsonStr);
    recordEventBranch(name, jsonStr);
}


function recordAllChannelEventOnce(name, jsonStr) {
    let isRecorded = cc.sys.localStorage.getItem(name);
    if (isRecorded === '1') {
        return;
    }

    cc.sys.localStorage.setItem(name, "1");
    recordEventAF(name, jsonStr);
    recordEventFB(name, jsonStr);
    recordEventBranch(name, jsonStr);
}


function recordEventAF(name, jsonStr) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.afRecordEvent[0], nativeFun.afRecordEvent[1], "(Ljava/lang/String;Ljava/lang/String;)V", name, jsonStr);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "recordEventAF:jsonStr:", name, jsonStr);
    } else {
        return 0;
    }
}

function recordEventBranch(name, jsonStr) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.brRecordEvent[0], nativeFun.brRecordEvent[1], "(Ljava/lang/String;Ljava/lang/String;)V", name, jsonStr);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "recordEventBranch:jsonStr:", name, jsonStr);
    } else {
        return 0;
    }
}

function recordEventFB(name, jsonStr) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.fbRecordEvent[0], nativeFun.fbRecordEvent[1], "(Ljava/lang/String;Ljava/lang/String;)V", name, jsonStr);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "recordEventFB:jsonStr:", name, jsonStr);
    } else {
        return 0;
    }
}

function shareAFInviteLink(channel, msgTxt) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.afCreateShareLink[0], nativeFun.afCreateShareLink[1], "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", channel, cc.gg.user.UserID + "", msgTxt);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "createShareLink:userID:msgTxt:", channel, cc.gg.user.UserID, msgTxt);
    } else {
        return 0;
    }
}


function shareBranchLink(channel, title, content, json) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.brCreateShareLink[0], nativeFun.brCreateShareLink[1], "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", channel, title, content, json);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "createShareLink:userID:msgTxt:", channel, cc.gg.user.UserID, msgTxt);
    } else {
        return 0;
    }
}

function shareSystem(shareMsg) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.shareSystem[0], nativeFun.shareSystem[1], "(Ljava/lang/String;)V", shareMsg);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return 0;
    } else {
        return 0;
    }
}
function shareFacebook(shareMsg) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.shareFacebook[0], nativeFun.shareFacebook[1], "(Ljava/lang/String;)V", shareMsg);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return 0;
    } else {
        return 0;
    }
}
function shareWhatsApp(shareMsg) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.shareWhatsApp[0], nativeFun.shareWhatsApp[1], "(Ljava/lang/String;)V", shareMsg);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return 0;
    } else {
        return 0;
    }
}

function whatsappChat(phone) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.shareWhatsApp[0], nativeFun.shareWhatsApp[1], "(Ljava/lang/String;)V", phone);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return 0;
    } else {
        return 0;
    }
}

cc.gg.checkLocation = function (handler, isPromptBack = false) {
    if (cc.gg.gisMode == 0 || checkGpsPermissions() == 0) {
        if (cc.sys.os == cc.sys.OS_IOS) {
            getCurLocation();
        }
        if (!cc.gg.isInPlayableArea) {
            cc.promptAlert.show("", "Because of the state laws, players belonging to Assam, Kerala, Nagaland, Odisha, Sikkim and Telangana are not Allowed to play cash games. Thankyou for your understanding.",
                ['OK'], (val) => {
                    logDebug(val);

                }, false);
            return false;
        }
        if (handler) {
            handler();
        }
        return true;
    } else {
        cc.promptAlert.show("Please turn on Location Services", "Because of the state laws, players belonging to Assam, Kerala, Nagaland, Odisha, Sikkim and Telangana are not Allowed to play cash games. Please turn on Location Services to verify your location. Thankyou for your understanding.",
            ['Cancel', 'Open'], (val) => {
                logDebug(val);
                if (val == '2') {
                    requestGpsPermissions();
                }
                if (isPromptBack && handler) {
                    handler();
                }
            }, false);
        return false;
    }
}

//检测gps是否开启
function checkGpsPermissions() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.mapCheckPermissions[0], nativeFun.mapCheckPermissions[1], "()I");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "checkGpsPermissions");
    } else {
        return 0;
    }
}

function requestGpsPermissions() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(nativeFun.mapRequestPermissions[0], nativeFun.mapRequestPermissions[1], "()V");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "requestGpsPermissions");
    };
}

//获取当前位置gps
function getCurLocation() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.mapGetCurLocation[0], nativeFun.mapGetCurLocation[1], "()Ljava/lang/String;");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "getCurLocation");
    } else {
        return "";
    }
}
//设置当前gps位置，纬度，经度
function setCurLocation(latitude, longitude) {
    cc.http.request({
        path: 'geo/geovalid',
        data: {
            t: cc.gg.user.Token,
            x: longitude,
            y: latitude
        },
        handler: function onGeoRet(ret) {
            if (ret.code == 0) {
                logDebug('Ret:' + ret.code);
                // showTipsMsg(ret.msg);
                cc.gg.isInPlayableArea = 1;
            } else {
                cc.gg.isInPlayableArea = 0;
            }
            // cc.gg.isInPlayableArea = 0;
            logDebug('onGeoRet', ret.data);
        },
    })
}
/**
 * 购买内购商品,区分ios和android
 * @param shopID 商品id 
 */
function buyShop(shopID) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        logDebug("shopID:", shopID);
        return jsb.reflection.callStaticMethod(nativeFun.startGooglePay[0], nativeFun.startGooglePay[1], "(Ljava/lang/String;)V", shopID);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "buyShop:", shopID);
    } else {
        return "";
    }
}
/**
 * 内购商品购买成功后，调用cocos方法，去向服务器校验，加币
 * @param data 
 */
function buyShopComplete(data) {
    logDebug('buyShopComplete reception data =', data);
    let path = "order/PayFromGGLShop";
    let msg = null;
    if (isIOS()) {
        path = "order/payfromiosshop";
        msg = new proto.message.MsgPayFromIosShop();
        msg.setToken(cc.gg.user.Token);
        msg.setIostoken(data);
    } else {
        let params = JSON.parse(data);
        msg = new proto.message.MsgPayFromGGLShop();
        msg.setToken(cc.gg.user.Token);
        msg.setGgltoken(params.token);
        msg.setProductid(params.productid);
    }
    cc.http.buf({
        path: path,
        msg: msg,
        handler: (val) => {
            if (val.code != '0') {
                cc.gg.evt.emit(cc.GGEventType.MSG_TIPS, val.code);
            } else {
                if (isIOS()) {
                    jsb.reflection.callStaticMethod(API_IOS, "shopFinishTransaction");
                } else {

                }

                // showTipsMsg('Buy complete!');
            }
            cc.waiting && cc.waiting.hide();
            logDebug("buyShopComplete response code=", val.code);
        },
        errorHandler: (val) => {
            cc.waiting && cc.waiting.hide();
            cc.gg.evt.emit(cc.GGEventType.MSG_TIPS, val);
            logDebug("buyShopComplete response error code=", val.code);
        },
    });
    // } else {
    //     return "";
    // }
}
//内购失败
function buyShopError(data) {
    cc.waiting.hide();
    cc.gg.evt.emit(cc.GGEventType.MSG_TIPS, data);
}
/**
 * 当app用户登录成功后，到大厅时调用initApp，检测下是否有未完成的订单
 */
function initApp() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        // return jsb.reflection.callStaticMethod(API_Android_Utils, "getBuildMD5", "()Ljava/lang/String;");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, "initApp");
    };
}


/**
 * 这个函数要通过反射改造一下：
 * 获取android id
 * @returns 
 */
function buildMd5() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getBuildMD5[0], nativeFun.getBuildMD5[1], "()Ljava/lang/String;");
        if(!r) {
            r = cc.sys.localStorage.getItem("machine_id");
            logDebug("buildMd5=",r);
            if(!r) {
                r = randomUUID();
                cc.sys.localStorage.setItem("machine_id",r);
            }
        }
        logDebug("buildMd5=",r);
        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getBuildMD5[1]);
    };
}


/**
 * 模拟生成一个uuid 代替 machineid
 * @returns 
 */
function randomUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}


/**
 * 在google 版本上不提供这个函数
 * 
 * @returns 获取邀请者ID
 */
function getInviterId() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        let r = jsb.reflection.callStaticMethod(nativeFun.getInviterId[0], nativeFun.getInviterId[1], "()I");
        if(!r){
            logError("failed to call getInviterId:", r);
            return 0;
        }
        
        return r;
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getInviterId[1]);
    } else {
        return 0;
    }
}


function hideSplash() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.hideSplash[0], nativeFun.hideSplash[1], "()V");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.hideSplash[1]);
    };
}



function vibratorPhone(ms) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.vibratorRun[0], nativeFun.vibratorRun[1], "(I)V", ms);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.vibratorRun[1], ms);
    };
}

/**
 * 时间范围判断
 * @param {int} start 
 * @param {int} end 
 */
function rangeInTime(start, end) {
    let srvTime = cc.gg.srvCurms();
    let srvDate = new Date(srvTime);
    let srvHour = srvDate.getHours();
    return srvHour >= start && srvHour < end;
}

/**
 * 横竖屏切换 0：横屏 1：竖屏
 * @param {number} type 
 */
function setOrientation(type) {
    let frameSize = cc.view.getFrameSize();
    // cc.view.setFrameSize(frameSize.width, frameSize.height);
    logDebug("SetOrientation", frameSize.width, frameSize.height, cc.gg.DesignWidth, cc.gg.DesignHeight);
    if (type == 1) {
        logDebug('set portrait')
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        if (frameSize.width > frameSize.height) {
            cc.view.setFrameSize(frameSize.height, frameSize.width);
        }
        //或者考虑FIXED_WIDTH?
        cc.view.setDesignResolutionSize(cc.gg.DesignHeight, cc.gg.DesignWidth, cc.ResolutionPolicy.SHOW_ALL);
    } else {
        logDebug('set landscape')
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
        //如果是宽比长小于1.7，则canvas.fitWidth = true; 转屏时宽高互换,从竖到橫时，高是比宽大的
        var rate = cc.winSize.height / cc.winSize.width;
        cc.winSize.height < cc.winSize.width && (rate = cc.winSize.width / cc.winSize.height);
        if (rate < 1.7) {
            cc.view.setDesignResolutionSize(cc.gg.DesignHeight, cc.gg.DesignWidth, cc.ResolutionPolicy.SHOW_ALL);
        } else {
            cc.view.setDesignResolutionSize(cc.gg.DesignWidth, cc.gg.DesignHeight, cc.ResolutionPolicy.SHOW_ALL);
        }
    }

    if (cc.sys.os == cc.sys.OS_ANDROID) {
        logDebug('CallAndroidSetOrientation')
        return jsb.reflection.callStaticMethod(nativeFun.setOrientation[0], nativeFun.setOrientation[1], "(I)V", type);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.setOrientation[1], type + "");
    } else {

    }
}

/**
 *  安装Apk 
 * @param {String} path 
 */
function installApk(path) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.installApk[0], nativeFun.installApk[1], "(Ljava/lang/String;)V", path);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.installApk[1], path);
    };
}

/**
 *  安装Apk 
 * @param {String} path 
 */
 function checkInstallPermission() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.checkInstallPermission[0], nativeFun.checkInstallPermission[1], "()V");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.checkInstallPermission[1]);
    };
}


function copyToStr(value) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.copyToStr[0], nativeFun.copyToStr[1], "(Ljava/lang/String;)V", value);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        var ret = jsb.reflection.callStaticMethod(API_IOS, "addStringToPasteboard:", value);
        if (ret) {
            logDebug("paste ok:" + value);
        }
    };
    logDebug("cur os=", cc.sys.os, ret, value);
    // cc.log("当前设置UUid=", getUUID());
}

function byteToSize(limit) {
    var size = "";
    if (limit < 0.1 * 1024) {                            //小于0.1KB，则转化成B
        size = limit.toFixed(2) + "B"
    } else if (limit < 0.1 * 1024 * 1024) {            //小于0.1MB，则转化成KB
        size = (limit / 1024).toFixed(2) + "KB"
    } else if (limit < 0.1 * 1024 * 1024 * 1024) {        //小于0.1GB，则转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + "MB"
    } else {                                            //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB"
    }

    var sizeStr = size + "";                        //转成字符串
    var index = sizeStr.indexOf(".");                    //获取小数点处的索引
    var dou = sizeStr.substr(index + 1, 2)            //获取小数点后两位的值
    if (dou == "00") {                                //判断后两位是否为00，如果是则删除00
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size;
}

/**
 * 获取底层版本号 数字版本：9
 */
function getNativeVersion() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.getVersion[0], nativeFun.getVersion[1], "()I");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getVersion[1]);
    };
}
/**
 * 获取底层版本号 如：1.0.1
 */
function getNativeVersionName() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(nativeFun.getVersionName[0], nativeFun.getVersionName[1], "()Ljava/lang/String;");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        return jsb.reflection.callStaticMethod(API_IOS, nativeFun.getVersionName[1]);
    } else {
        return "dev";
    }
}

function sendActionHttp(action) {
    cc.http.sendRequest('/scene/getscene/params', {
        cid: cc.tcp.user.getCid(),
        scene: action
    }, null, 'http://wangwang456.com:8888')
}

function resetCdn(cdn) {
    manifest.cdn = cdn;
    manifest.app['packageUrl'] = manifest.cdn + "/ALLGame/main/";
    manifest.app['remoteManifestUrl'] = manifest.cdn + "/ALLGame/main/project.manifest";
    manifest.app['remoteVersionUrl'] = manifest.cdn + "/ALLGame/main/version.manifest";
}


/**
 * 需要获取一个设备ID
 * @returns 
 */
function getUUID() {
    var value = "";
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        value = jsb.reflection.callStaticMethod(nativeFun.getDeviceId[0], nativeFun.getDeviceId[1], "()Ljava/lang/String;");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        value = jsb.reflection.callStaticMethod(API_IOS, "uuid");
    };
    if (value != undefined) {
        var reg = new RegExp(/-/g);
        return value.replace(reg, '');
    } else {
        return value;
    }
}

function getWechatApi() {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod("", "getWechatApi", "()V");
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        jsb.reflection.callStaticMethod(API_IOS, "openWechat");
    }
}

function jointHttpUrl(url, data) {
    var str = "?";
    for (var k in data) {
        if (str != "?") {
            str += "&";
        }
        str += k + "=" + data[k];
    }
    return url + encodeURI(str);
}

function GetQueryJson(url) {
    let param = {}; // 存储最终JSON结果对象
    url.replace(/([^?&]+)=([^?&]+)/g, function (s, v, k) {
        param[v] = decodeURIComponent(k);//解析字符为中文
        return k + '=' + v;
    });
    return param;
}

function permute(temArr, testArr, temLen, callback) {
    var permuteArr = [];
    var arr = testArr;
    temLen = Math.min(temLen, testArr.length);
    function innerPermute(temArr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (temArr.length == temLen - 1) {
                if (temArr.indexOf(arr[i]) < 0) {
                    let group = temArr.concat([arr[i]])
                    permuteArr.push(group);
                    if (callback(group)) {
                        return true;
                    }
                }
                continue;
            }
            if (temArr.indexOf(arr[i]) < 0) {
                let bool = innerPermute(temArr.concat([arr[i]]));
                if (bool) {
                    return true;
                }
            }
        }
        return false;
    }
    innerPermute(temArr);
    logDebug("permute:", permuteArr);
    return false;
}

function objToPostDataStr(data) {
    var str = "";
    for (var k in data) {
        str += "&";
        str += k + "=" + data[k];
    }
    return str;
}

/**
 *
 * 下载Apk, 并设置Apk地址, 默认位置: /storage/sdcard0/Download
 *
 * @param {String} downLoadUrl 下载地址
 * @param {String} description 通知名称
 * @param {String} infoName 通知描述
 */
function downloadApk(downLoadUrl, description, infoName) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(nativeFun.downloadApk[0], nativeFun.downloadApk[1], "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", downLoadUrl, description, infoName);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        jsb.reflection.callStaticMethod(API_IOS, "share:shareTitle:shareDesc:", value);
    }
}

var imageCallBack = null;
/**
 * 打开相册
 */
function openPhoto(hander, width, height, quality = 100) {
    imageCallBack = hander;
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(nativeFun.openPhoto[0], nativeFun.openPhoto[1],"(III)V", width, height, quality);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        jsb.reflection.callStaticMethod(API_IOS, "openPhoto");
    }
}

/**
 * 打开摄像头
 */
function openCamera(width, height, quality = 80) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(nativeFun.openCamera[0], nativeFun.openCamera[1],"(III)V", width, height, quality);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        jsb.reflection.callStaticMethod(API_IOS, "openCamera");
    }
}

function onImageBackBase64(base64) {
    // base64 = Base64ImageSub(base64);
    logDebug(base64);
    if (imageCallBack) {
        if (cc.sys.os == cc.sys.OS_IOS) {
            base64 = jsb.reflection.callStaticMethod(API_IOS, "imageToBase64");
        }
        imageCallBack(base64);
    }
    // if (this.onSaveCb) {
    //     this.onSaveCb(path);
    // }
}

function Base64ToSpriteFrame(base64) {
    let img = new Image();
    img.src = base64;
    let texture = new cc.Texture2D();
    texture.initWithElement(img);
    let sf = new cc.SpriteFrame(texture);
    return sf;
}

function Base64ImageSub(base64) {
    return "data:image/jpeg;base64," + base64;
}

/**
 * 图片转Base64
 * @param {String} path 
 */
function imageToBase64(path) {
    path = path.replace('file://', '');
    let b64 = '';
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        b64 = jsb.reflection.callStaticMethod(nativeFun.imageToBase64[0], nativeFun.imageToBase64[1], "(Ljava/lang/String;)Ljava/lang/String;", path);
    } else if (cc.sys.os == cc.sys.OS_IOS) {
        b64 = jsb.reflection.callStaticMethod(API_IOS, "imageToBase64:", path);
    }
    return "data:image/jpeg;base64," + b64;
}

function CanvasWidth() {
    return cc.winSize.width;
}

function CanvasHeight() {
    return cc.winSize.height;
}

function EnterGame(hotName) {
    let basePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + "ALLGame/";
    logDebug(hotName + " enter" + hotName);
    logDebug(hotName + " requie", hotName + '=>/src/main.js');
    window.require(basePath + hotName + '/src/main.js');
}

function switchScene(sceneName, callback = null) {
    logInfo('switchScene to =', sceneName);
    if (sceneName == "hall" || sceneName == "hall_A") {
        cc.gg.roomTables = [1, 0, 0, 0];
    }
    if (sceneName === cc.gg.sceneName) {
        logInfo('sceneName === cc.gg.sceneName !!! ');
        return;
    }
    if (cc.gg.needRestartGame && gameSceneNames.indexOf(sceneName) == -1) {
        logInfo('to hall restart');
        gameRestart();
        return;
    }
    if (sceneName.indexOf("db:") != -1) {
        sceneName = sceneName.replace("db://assets/Scene/", "");
        sceneName = sceneName.replace(".fire", "");
    }
    cc.gg.sceneName = sceneName;
    cc.director.loadScene(sceneName, function () {
        logInfo('load scene suc:' + sceneName);
        if (callback) {
            callback();
        }
        cc.waiting && cc.waiting.hide();
        cc.gg.evt.emit(cc.GGEventType.SWITCHSCENECOMPLETE);
    });
}

function alertShow(node) {
    node.active = true;
    node.getComponent("BaseAlert").show();
}

function alertHide(node) {
    node.getComponent("BaseAlert").hide();
}

function sendTcpMsg(msg, msgId) {
    logDebug(Date.now(), "sendMsg:" + msgId, msg ? msg.toObject() : "");
    if (msg) {
        var writer = msg.serializeBinary();
        tcpclient.do_send_data(msgId, writer);
    } else {
        tcpclient.do_send_data(msgId);
    }
}

function setScore(score, bind, exp, rechargeNum,bonusScore,usedBonus) {
    if(bind!=undefined)cc.gg.user.BindScore = bind;
    if(exp!=undefined)cc.gg.user.ExpScore = exp;
    if(bonusScore!=undefined)cc.gg.user.Bonus = bonusScore;
    if(usedBonus!=undefined)cc.gg.user.usedBonus = usedBonus;
    if (rechargeNum) {
        cc.gg.user.RechargeNum = rechargeNum;
    }
    cc.gg.pactiseNum = exp;
    if (!cc.gg.cashMode) {
        cc.gg.cashMode = cc.gg.pactiseNum >= cc.gg.pactiseMax ? 1 : 0;
    }
    //防止多次发updategold
    if(score ==cc.gg.user.Score){
        cc.gg.evt.emit(cc.GGEventType.GOLD_UPDATE);
    }else{
        cc.gg.user.Score = score;
    }
}


function setVip(vip, exp) {
    cc.tcp.user.setVip(vip);
    cc.tcp.user.setVipexp(exp);
    cc.gg.evt.emit(cc.gg.GEventType.VipUpdate);
}

function showAlert(label, btnStrs = null, callBack = null) {
    if (label === "" || label === undefined) {
        return;
    }
    cc.loader.loadRes("prefab/alert", cc.Prefab, (error, data) => {
        show(data);
    });

    function show(prefab) {
        let node = cc.instantiate(prefab);
        let scene = cc.find("Canvas").parent;
        scene.addChild(node);
        let alert = node.getComponent("CAlert");
        alert.show(label, btnStrs, callBack);
    }
}
/* 
 * 舞台中间上顶消息
 */
function showTipsMsg(msg,ypos) {
    if (msg == null || msg == "") {
        return;
    }
    if (cc.gg.tipsMsg == null) {
        cc.gg.tipsMsg = new TipsMsg();
    }
    cc.gg.tipsMsg.showMsg(msg,ypos);
}

/* 
 * 游戏公告消息，舞台上方从右向左滚动的消息
 */
function showNoticeMsg(msg) {
    if (cc.gg.noticeMsg == null) {
        cc.gg.noticeMsg = new NoticeMsg();
    }
    cc.gg.noticeMsg.showMsg(msg);
}
/**
 * 远程加载图片
 * @param {cc.Sprite} sp 
 * @param {string} url 
 */
function loadImg(sp, url) {
    cc.loader.load({ url: url, type: 'png' }, function (err, texture) {
        if (err) {
            logError(err);
        } else {
            var spf = new cc.SpriteFrame(texture);
            sp.spriteFrame = spf;
        }
    });
}

function isViewNoticeMsg(value) {
    if (cc.gg.noticeMsg == null) {
        cc.gg.noticeMsg = new NoticeMsg();
    }
    cc.gg.noticeMsg.isView(value);
}
/* 
 * 等待信息， 前面一个转圈的动画， 后面跟上等待信息
 */
function showWaitMsg(msg = "") {
    if (cc.connecting) {
        if (msg == null || msg == "") {
            cc.connecting.hide();
        } else {
            cc.connecting.show(msg);
        }
    }
}

function parseGold(num) {
    return num / 100;
}

function packageGold(num) {
    return Math.round(num * 100);
}
/**
 * 字符串(str)超过指定的长度(length)后，指定长度后面的文字显示为...
 * @param str 
 * @param length 
 */
function strOverflowEllipsis(str, length = 13) {
    if (str.length > (length)) {
        return str.substring(0, length) + "...";
    } else {
        return str;
    }
}

function dimNickname(value, dim = "***") {
    if (value.length < 4) {
        return value;
    }
    // let str = "";
    let sub = value.slice(0, 1);
    let end = value.slice(value.length - 3, value.length);
    return sub + dim + end;
}

function setGoldTo_0(gold, sub = "") {
    // var subStr = gold % 100 == 0 ? ".0" : gold % 10 == 0 ? "0" : "";
    // return sub + parseGold(gold) + subStr;
    return (gold / 100).toFixed(1);
}

function setGoldTo_00(gold, sub = "") {
    var subStr = gold % 100 == 0 ? ".00" : gold % 10 == 0 ? "0" : "";
    return sub + parseGold(gold) + subStr;
    // return sub + Math.floor(gold/100);
}

function setGoldToFloor(gold) {
    return Math.floor(gold / 100).toString();
}

function setGoldToZero(gold, pow, sub = "") {
    gold = Math.floor(gold);
    let subStr = '';
    for (let i = pow; i > 0; i--) {
        let bet = Math.pow(10, i);
        if (gold % bet == 0) {
            if (i == pow) {
                subStr += '.';
            }
            for (let j = 0; j < i; j++) {
                subStr += '0';
            }
            break;
        }
    }
    return sub + (gold / Math.pow(10, pow)) + subStr;
}

/* 
 * 数字按二进制位取值，返回0，1
 */
function getBitValueByNumber(value, index) {
    return (value >> index) & 1;
}

function gameRestart() {
    cc.log("gameRestart 11111111111111111111111111111111");
    // cc.ws.close(true);
    cc.gg.queueViews = [];
    cc.gg.tipsMsg = null;
    cc.audioEngine.stopAll();
    cc.game.restart();
    // var searchPaths = jsb.fileUtils.getSearchPaths();
    // for (let i = 0; i < searchPaths.length; i++) {
    //     let path = searchPaths[i];
    //     if (path.indexOf(HotName.Main) != -1) {
    //         jsb.fileUtils.setSearchPaths([path]);
    //         cc.audioEngine.stopAll();
    //         cc.game.restart();
    //         return;
    //     }
    // }
}

/**
 * 获得性别 1：男，2：女
 */
function getGender(iconIndex) {
    return iconIndex > 2 ? 2 : 1;
}
/**
 * 获取视图大小
 * @param {cc.Node} node 
 */
function getViewSize(node) {
    return new cc.Size(node.width * node.scaleX, node.height * node.scaleY);
}

function cloneObj(object) {
    let clone = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            clone[key] = value;
        }
    }
    return clone;
}

function cloneObject(value) {
    return JSON.parse(JSON.stringify(value));
}
/**
 * 复制源对像的值到目标对像
 * @param targetObj 
 * @param sourceObj 
 */
function copyObjectToObject(targetObj, sourceObj) {
    if (!targetObj) targetObj = {};
    for (var key in sourceObj) targetObj[key] = sourceObj[key];
    return targetObj;
}
function stringToByte(str) {
    var bytes = new Array();
    var len, c;
    len = str.length;
    for (var i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x010000 && c <= 0x10FFFF) {
            bytes.push(((c >> 18) & 0x07) | 0xF0);
            bytes.push(((c >> 12) & 0x3F) | 0x80);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000800 && c <= 0x00FFFF) {
            bytes.push(((c >> 12) & 0x0F) | 0xE0);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000080 && c <= 0x0007FF) {
            bytes.push(((c >> 6) & 0x1F) | 0xC0);
            bytes.push((c & 0x3F) | 0x80);
        } else {
            bytes.push(c & 0xFF);
        }
    }
    return bytes;
}

function byteToString(arr) {
    if (typeof arr === 'string') {
        return arr;
    }
    var str = '',
        _arr = arr;
    for (var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
            v = one.match(/^1+?(?=0)/);
        if (v && one.length == 8) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for (var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
        } else {
            str += String.fromCharCode(_arr[i]);
        }
    }
    return str;
}

function Uint8ArrayToString(fileData) {
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }

    return dataString
}

function stringToUint8Array(str) {
    var arr = [];
    for (var i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }
    var tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array
}
/**
 * 16进制的颜色转成cocos color
 * @param color 16进制："#0d8ff2"
 */
function hexToColor(color) {
    return cc.Color.BLACK.fromHEX(color);
}

function isPTSGame(gameID) {
    return gameID == 101 || gameID == 102 || gameID == 110;
}





function TipsMsg() {
    this._viewMsgs = [];
    this._tempMsgs = [];
    this._tipsMsgPrefab = null;
};

TipsMsg.prototype.showMsg = function showMsg(msg,ypos) {
    var self = this;
    if (this._tipsMsgPrefab) {
        var msgItem = cc.instantiate(this._tipsMsgPrefab);
        msgItem.scale = 0.3;
        if(ypos) msgItem.y += ypos;
        var label = msgItem.getNode("bg/text");
        var bg = msgItem.getChildByName("bg");
        label.getComponent(cc.Label).string = msg;
        label.getComponent(cc.Label)._forceUpdateRenderData();
        bg.width = label.width + 50;
        msgItem.zIndex = BaseAlert.zIndex++;
        cc.director.getScene().addChild(msgItem);
        msgItem.runAction(cc.sequence(cc.scaleTo(0.2, 1), cc.delayTime(3), cc.fadeTo(1, 0), cc.callFunc(this.removeMsgItem, this, msgItem)));
        for (var i = this._viewMsgs.length; i > 0; i--) {
            var toY = bg.height + 3;
            this._viewMsgs[i - 1].runAction(cc.moveBy(0.2, 0, toY));
        }
        this._viewMsgs.push(msgItem);
    } else {
        this._tempMsgs.push(msg);
        if (this._tempMsgs.length == 1) {
            cc.loader.loadRes("prefab/tipsMsg", cc.Prefab, null, function (err, data) {
                self.loadedPrefabComplete(data);
            });
        }
    }
}

TipsMsg.prototype.loadedPrefabComplete = function loadedPrefabComplete(data) {
    this._tipsMsgPrefab = data;
    this._tempMsgs.forEach(element => {
        this.showMsg(element);
    });
    this._tempMsgs = [];
}

TipsMsg.prototype.removeMsgItem = function removeMsgItem(item) {
    // cc.log(item);
    item.parent.removeChild(item);
    this._viewMsgs.shift();
}