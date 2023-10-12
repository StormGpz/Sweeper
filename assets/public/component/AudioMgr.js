window.AudioMgr = cc.Class({
    extends: cc.Component,

    editor: {
        // executeInEditMode: true,
        menu: '自定义/AudioMgr'
    },

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        bgmVolume: 1.0,
        sfxVolume: 1.0,

        bgmAudioID: -1,
    },

    onLoad() {
        if (cc.gg.audioMgr) {
            logError("cc.gg.audioMgr,recreate,notice here!!")
            return;
        }
        cc.gg.audioMgr = this;
        cc.game.on(cc.game.EVENT_HIDE, this.onHideHandler, this);
        cc.game.on(cc.game.EVENT_SHOW, this.onShowHandler, this);
        logInfo("audioMgr onLoad()");
    },

    onDestroy() {
        cc.game.off(cc.game.EVENT_HIDE, this.onHideHandler, this);
        cc.game.off(cc.game.EVENT_SHOW, this.onShowHandler, this);
        logInfo("audioMgr onDestroy()");
        cc.gg.audioMgr = null;
    },

    start() {
        this.init();
    },

    onHideHandler() {
        this.pauseAll();
        logInfo("cc.game.EVENT_HIDE");
    },

    onShowHandler() {
        logInfo("cc.game.EVENT_SHOW");
        if(this.curBGMUrl && this.bgmVolume){
            this.setBGMVolume(this.bgmVolume)
        }
        this.resumeAll();
    },

    // use this for initialization
    init: function () {
        // var t = cc.sys.localStorage.getItem("bgmVolume");
        // if (t != null) {
        //     this.bgmVolume = parseFloat(t);
        // }

        if (cc.gg.setup.sound) {
            this.sfxVolume = cc.gg.setup.sfxVolume;
            this.bgmVolume = cc.gg.setup.bgmVolume;
        } else {
            this.sfxVolume = 0;
            this.bgmVolume = 0;
        }

        // var t = cc.sys.localStorage.getItem("sfxVolume");
        // if (t != null) {
        //     this.sfxVolume = parseFloat(t);
        // }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    getUrl: function (url) {
        // return cc.url.raw("sounds/" + url);
        return "sound/" + url;
    },

    playBGM(url,bundle) {
        if (this.curBGMUrl == url) {
            return;
        }
        // var audioUrl = this.getUrl(url);
        // logDebug("playBGM===", audioUrl, this.bgmAudioID);
        this.stopBGM();
        var self = this;
        if(bundle){
            cc.Utils.loadLocalBundle(bundle).then(_bundle=>{
                _bundle.load(url,(err,clip)=>{
                    if(err) return logError("load sfx fail", err);
                    self.stopBGM();
                    self.bgmAudioID = cc.audioEngine.playMusic(clip, true);
                    self.setBGMVolume(self.bgmVolume)
                    self.curBGMUrl = url;
                    logDebug("playBGM curBgmAudioId=", self.bgmAudioID);
                })
            })
        }else{
            cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
                if (err == null) {
                    self.stopBGM();
                    self.bgmAudioID = cc.audioEngine.playMusic(clip, true);
                    self.setBGMVolume(self.bgmVolume)
                    self.curBGMUrl = url;
                    logDebug("playBGM curBgmAudioId=", self.bgmAudioID);
                } else {
                    logError("log bg fail", err);
                }
            });
        }
        // this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume);
    },

    playMusic(clip,isLoop = true){
        if(!(clip instanceof cc.AudioClip))return logError("is not audioClip",clip)
        this.stopBGM();
        this.bgmAudioID = cc.audioEngine.playMusic(clip,isLoop,this.bgmVolume);
        this.setBGMVolume(this.bgmVolume);
        this.curBGMUrl = "";
        return this.bgmAudioID;
        // logDebug("playBGM curBgmAudioId=", self.bgmAudioID);
    },

    play(clip,isLoop){
        if(!(clip instanceof cc.AudioClip))return logError("is not audioClip",clip)
        return cc.audioEngine.play(clip,isLoop,this.sfxVolume);
    },

    stop(audioID){
        if(cc.gg.loopAudioID && cc.gg.loopAudioID == audioID) cc.gg.loopAudioID = 0;
        return cc.audioEngine.stop(audioID);
    },

    stopAll(){
        return cc.audioEngine.stopAll();
    },

    stopBGM() {
        this.curBGMUrl = "";
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stopMusic();
            this.bgmAudioID = 0;
        }
    },
    /**
     * 设置音效开关，
     * @param value 
     */
    setSFXSwitch(value) {
        if (value) {
            this.setSFXVolume(cc.gg.setup.sfxVolume);
            this.setBGMVolume(cc.gg.setup.sfxVolume);
        } else {
            this.setSFXVolume(0);
            this.setBGMVolume(0);
        }
    },

    playSFX(url,bundle,isLoop = false) {
        // var audioUrl = this.getUrl(url);
        var self = this;
        return new Promise((resolve,reject)=>{
        if (this.sfxVolume > 0) {
            // var audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
                try{
                    if(bundle){
                        let _bundle = cc.assetManager.getBundle(bundle)
                        if(_bundle){
                            _bundle.load(url,cc.AudioClip,(err,clip)=>{
                                if(err){
                                    logError("load sfx fail", err);
                                    reject(0)
                                }
                                if(!clip instanceof cc.AudioClip){
                                    showTipsMsg("err clip:"+url);
                                    reject(0)
                                }
                                let id = cc.audioEngine.play(clip, isLoop, self.sfxVolume);
                                if(isLoop) cc.gg.loopAudioID = id
                                resolve(id)
                            })
                        }else{
                            cc.assetManager.loadBundle(bundle,(err,_bundle)=>{
                            if(err){
                                logError("load sfx fail", err);
                                reject(0)
                            }  
                            _bundle.load(url,cc.AudioClip,(err,clip)=>{
                                if(err){
                                    logError("load sfx fail", err);
                                    reject(0)
                                } 
                                let id = cc.audioEngine.play(clip, isLoop, self.sfxVolume);
                                if(isLoop) cc.gg.loopAudioID = id
                                resolve(id)
                            })
                            })
                        }
                    }else{
                        cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
                            if (err == null) {
                                let id = cc.audioEngine.play(clip, isLoop, self.sfxVolume);
                                if(isLoop) cc.gg.loopAudioID = id
                                resolve(id)
                            } else {
                                logError("load sfx fail", err);
                                reject(0)
                            }
                        });
                    }
                }catch(err){
                    reject(err);
                }

        }else{
            resolve(0)
        }
        })
    },

    setSFXVolume: function (v) {
        if (this.sfxVolume != v) {
            // cc.sys.localStorage.setItem("sfxVolume", v);
            this.sfxVolume = v;
            cc.gg.setup.sfxVolume = v;
            cc.gg.saveSetupData()
        }
    },

    setBGMVolume: function (v) {
        if (this.bgmAudioID >= 0) {
            if (v > 0) {
                cc.audioEngine.resume(this.bgmAudioID);
            } else {
                cc.audioEngine.pause(this.bgmAudioID);
            }
        }
        if (this.bgmVolume != v) {
            // cc.sys.localStorage.setItem("bgmVolume", v);
            this.bgmVolume = v;
            cc.gg.setup.bgmVolume = v;
            cc.gg.saveSetupData()
        }
        cc.audioEngine.setVolume(this.bgmAudioID, v);
    },

    pauseAll: function () {
        cc.audioEngine.pauseAll();
    },

    resumeAll: function () {
        cc.audioEngine.resumeAll();
    }
});