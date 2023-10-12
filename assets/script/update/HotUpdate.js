// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const CProgressBar = require("CProgressBar");
// const xxtea = require('xxtea');

cc.Class({
    extends: cc.Component,

    properties: {
        project: {
            type: cc.Asset,
            default: null,
        },
        manifest: cc.String, 
        actionTxt: cc.Label,
        nodeBar : cc.Node,
        bar: CProgressBar,
        barTxt: cc.Label,
        manifestUrl: cc.String,
    },

    // LIFE-CYCLE CALLBACKS:

    localBundleManifestStr() {
        return JSON.stringify({
        "packageUrl": `${cc.gg.hotUrl}/v${cc.gg.version}/`,
        "remoteManifestUrl": `${cc.gg.hotUrl}/v${cc.gg.version}/project.manifest`,
        "remoteVersionUrl": `${cc.gg.hotUrl}/v${cc.gg.version}/version.manifest`,
        "version": "1.0",
        "assets": {},
        "searchPaths": []
        });
    },

    onLoad() {
        if (!cc.sys.isNative) {
            logDebug("Hot update is only available in Native build");
            return;
        }

        let writablePath = jsb.fileUtils? jsb.fileUtils.getWritablePath() : '/';        
        this.manifest = writablePath + "base64.manifest"; 

        var previousVersion = cc.sys.localStorage.getItem('currentProjectVersion');
        var currentVersion = getNativeVersionName();
        if (previousVersion == currentVersion) {
            if(jsb.fileUtils.isFileExist(this.manifest)) {
                logDebug("Hot update ApkVersion Eq and base64.manifest exist.", previousVersion, currentVersion);
                return; //版本号相同，文件有存在就不需要创建了
            }
        } 

        // let assetpath = "@assets/" + hex_md5(getNativeVersionName());
        // let content = xxtea.decodeBase64(jsb.fileUtils.getStringFromFile(assetpath));

        //直接用空的，就不用去生成了
        let content = this.localBundleManifestStr();

        if(jsb.fileUtils.isFileExist(this.manifest)) {
            jsb.fileUtils.removeFile(this.manifest);
        }

        jsb.fileUtils.writeStringToFile(content, this.manifest);
        cc.sys.localStorage.setItem('currentProjectVersion', currentVersion);
    },

    start() {
        // cc.gg.bver = '1.0.0.10 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
        logDebug("cc.sys.isNative=", cc.sys.isNative);
        // this.manifest = CC_DEBUG ? this.manifestD : this.manifestR;
        // this.actionTxt.string = '1';
        if (!cc.sys.isNative) {
            logDebug("Hot update is only available in Native build");
            return;
        }
        logDebug("step11" + this.manifest.toString());
        this.initUpdate();
    },

    initUpdate() {
        this._gameName = this._gameName || 'Lami';
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + this._gameName);
        logDebug('Storage path for remote asset : ' + this._storagePath);
        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle.bind(this));
        this._am.setVerifyCallback(this.onVerifyCallBack.bind(this));
        logDebug(this._gameName + " hot update ready!");
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            // Some Android device may slow down the download process when concurrent tasks is too much.
            // The value may not be accurate, please do more test and find what's most suitable for your game.
            let maxConc = 5;
            this._am.setMaxConcurrentTask(maxConc);
            logDebug(" max concurrent task " + maxConc);
        }              
    },

    onVerifyCallBack(path, asset) {
        // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
        let compressed = asset.compressed;
        // Retrieve the correct md5 value.
        let expectedMD5 = asset.md5;
        // asset.path is relative path and path is absolute.
        let relativePath = asset.path;
        // The size of asset file, but this value could be absent.
        let size = asset.size;
        if (compressed) {
            logDebug(this._gameName + " verify : " + relativePath);
            return true;
        } else {
            logDebug(this._gameName + " verify : " + relativePath + ' (' + expectedMD5 + ')');
            return true;
        }
    },

    versionCompareHandle(versionA, versionB) {
        logDebug(this._gameName + " JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
        var vA = versionA.split('.');``
        var vB = versionB.split('.');
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) {
                continue;
            } else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        } else {
            return 0;
        }
    },

    loadManifest: function () {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            // var manifest = new jsb.Manifest(this.manifestStr, this._storagePath);
            logDebug("step22" + this.manifest.toString());

            let url = this.manifestUrl ? this.manifestUrl : this.manifest.toString();
            this._am.loadLocalManifest(url);
            logDebug(this._gameName + ' Using App manifest');
        }
    },

    retry: function () {
        if (!this._updating && this._canRetry) {
            //this.panel.retryBtn.active = false;
            this._canRetry = false;

            //this.panel.info.string = 'Retry failed Assets...';
            this._am.downloadFailedAssets();
        }
    },

    checkUpdate: function (callback) {
        this.callback = callback;
        if (this._updating) {
            logDebug(this._gameName + ' Updating ...');
            return;
        }
        // this.loadManifest();
        logDebug("step33" + this.manifest.toString());

        let url = this.manifestUrl ? this.manifestUrl : this.manifest.toString();
        logDebug('loadLocalManifest:', url);
        this._am.loadLocalManifest(url);
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            logDebug(this._gameName + ' local manifest load fail ...');
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));
        let curVersion = this._am.getLocalManifest().getVersion();
        logDebug('version:' + curVersion);
        this._updating = true;
        this._am.checkUpdate();
    },

    hotUpdate: function (callback) {
        this.callback = callback;
        if (this._am && !this._updating) {
            // if (this.isBigVersion) {
            //     jsb.fileUtils.removeDirectory(this._storagePath);
            // }
            this._am.setEventCallback(this.updateCb.bind(this));
            // this.loadManifest();
            logDebug("step44" + this.manifest.toString());

            let url = this.manifestUrl ? this.manifestUrl : this.manifest.toString();
            logDebug('loadLocalManifest:', url);
            this._am.loadLocalManifest(url);
            // logDebug(this._gameName + ' Using App manifest',this._am.getRe);
            this._failCount = 0;
            this._am.update();
            this._updating = true;
        }
    },

    /**
    * enum class EventCode
   {
       ERROR_NO_LOCAL_MANIFEST,    //0 本地没有配置文件
       ERROR_DOWNLOAD_MANIFEST,    //1 下载配置文件错误
       ERROR_PARSE_MANIFEST,       //2 解析文件错误
       NEW_VERSION_FOUND,          //3 发现新的更新
       ALREADY_UP_TO_DATE,         //4 已经是最新的
       UPDATE_PROGRESSION,         //5 最新进展  做 进度的
       ASSET_UPDATED,              //6 需要更新
       ERROR_UPDATING,             //7 更新错误
       UPDATE_FINISHED,            //8 更新完成
       UPDATE_FAILED,              //9 更新失败
       ERROR_DECOMPRESS            //10 解压失败
   };
   * @param {jsb} event 
   */
    checkCb: function (event) {
        let needUpdate = false;
        let canEnterGame = false;
        logDebug(this._gameName + ' Code:' + event.getEventCode());
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                logDebug(this._gameName + ' checkCb local no cfg file');
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                logDebug(this._gameName + ' checkCb download cfg file error');
                break;
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                logDebug(this._gameName + ' checkCb parse file error');
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                logDebug(this._gameName + ' is latest version');
                canEnterGame = true;
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                logDebug(this._gameName + ' need update');
                needUpdate = true;
                break;
            default:
                return;
        }
        this._am.setEventCallback(null);
        this._updating = false;
        if (needUpdate) {
            this.hotUpdate(); //更新游戏
        } else {
            if (this.callback) {
                this.callback();
            }
        }
    },
    /**
     * enum class EventCode
    {
        ERROR_NO_LOCAL_MANIFEST,    //0 本地没有配置文件
        ERROR_DOWNLOAD_MANIFEST,    //1 下载配置文件错误
        ERROR_PARSE_MANIFEST,       //2 解析文件错误
        NEW_VERSION_FOUND,          //3 发现新的更新
        ALREADY_UP_TO_DATE,         //4 已经是最新的
        UPDATE_PROGRESSION,         //5 最新进展  做 进度的
        ASSET_UPDATED,              //6 需要更新
        ERROR_UPDATING,             //7 更新错误
        UPDATE_FINISHED,            //8 更新完成
        UPDATE_FAILED,              //9 更新失败
        ERROR_DECOMPRESS            //10 解压失败
    };
     * @param {jsb} event 
     */
    updateCb: function (event) {
        this.needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                logDebug(this._gameName + ' no local manifest');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                // this.panel.byteProgress.progress = event.getPercent();
                // this.panel.fileProgress.progress = event.getPercentByFile();
                var msg = event.getMessage();
                if (msg) {
                    logDebug(this._gameName + ' Updated file: ' + msg + '');
                    // logDebug(event.getPercent()/100 + '% : ' + msg);
                }
                this.nodeBar.active = true;
                this.barTxt.string = 'update ：' + event.getDownloadedFiles() + '/' + event.getTotalFiles()
                // this.barTxt.string = '加载游戏资源...';
                this.bar.value = event.getPercent();
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                logDebug(this._gameName + ' download manifest faile');
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                logDebug(this._gameName + ' already up to date');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                logDebug(this._gameName + ' update suc！' + event.getMessage());
                this.needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                logDebug(this._gameName + ' update fail！' + event.getMessage());
                this._updating = false;
                this._canRetry = true;
                this.retry();
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                logDebug(this._gameName + ' res upd err: ' + event.getAssetId() + ', ' + event.getMessage());
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                logDebug(this._gameName + " res decompress err" + event.getMessage());
                break;
            default:
                break;
        }

        if (failed) {
            this._am.setEventCallback(null);
            this._updateListener = null;
            this._updating = false;
        }

        if (this.needRestart) {
            this._am.setEventCallback(null);
            this._updateListener = null;
            this._updating = false;
            let curVersion = this._am.getLocalManifest().getVersion();
            this.barTxt.string = 'Update Success！';
            logDebug('curVersion：', curVersion);
            cc.gg.version = curVersion;
            this.restart();
        }
    },

    restart: function () {
        // Prepend the manifest's search path 在 manifest 的搜索路径之前
        var searchPaths = jsb.fileUtils.getSearchPaths();
        var newPaths = this._am.getLocalManifest().getSearchPaths();
        logDebug(JSON.stringify(newPaths));
        Array.prototype.unshift.apply(searchPaths, newPaths);
        jsb.fileUtils.setSearchPaths(searchPaths);
        cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        // This value will be retrieved and appended to the default search path during game startup,
        // please refer to samples/js-tests/main.js for detailed usage.
        // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.

        cc.audioEngine.stopAll();
        cc.game.restart();
    },

    EnterGame(hotName) {
        // if (this.needRestart) {
        //     cc.game.restart();
        //     this.needRestart = false;
        //     return;
        // }
        logDebug(hotName + " enter " + hotName);
        logDebug(hotName + " require", hotName + '=>/src/main.js');
        window.require(this._basePath + hotName + '/src/main.js');
    },

    // update (dt) {},
});
