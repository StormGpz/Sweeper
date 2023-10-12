
var UpdateCtl = function () {
    this.gameName = 'Lami';
    this.writablePath = "/";
    this.storagePath = this.writablePath + this.gameName;
    this.manifest = null;
    this.manifestUrl = null;
    this.callback = null;
}
var _ins = null;
/**
 * @return {UpdateCtl}
 */
UpdateCtl.ins = function () {
    if (!_ins) {
        _ins = new UpdateCtl();
    }
    return _ins;
}

UpdateCtl.prototype.init = function () {
    if (!cc.sys.isNative) {
        logDebug("Hot update is only available in Native build");
        return;
    }

    this.writablePath = jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/';
    this.storagePath = this.writablePath + this.gameName;
    let projectUrl = this.storagePath + "/project.manifest";

    // 之前保存在 local Storage 中的版本号，如果没有，则认为是新版本
    var previousVersion = cc.sys.localStorage.getItem('currentVersion');
    // 和当前版本的版本号比较
    var currentVersion = getNativeVersionName();
    if (previousVersion == currentVersion) {
        logDebug("Hot update ApkVersion Eq.", previousVersion, currentVersion, this.storagePath);
    } else {
        // 热更新的储存路径，如果旧版本中有多个，可能需要记录在列表中，全部清理
        jsb.fileUtils.removeDirectory(this.storagePath);
        jsb.fileUtils.removeDirectory(this.writablePath + "remote");
        logDebug("Hot update ApkVersion Not Eq, So remove", previousVersion, currentVersion, this.storagePath);
        cc.sys.localStorage.setItem('currentVersion', currentVersion);
    }


    logDebug(jsb.fileUtils);
    let isFileExist = jsb.fileUtils.isFileExist(projectUrl);
    logDebug(projectUrl, isFileExist);
    this.manifestUrl = isFileExist ? projectUrl : cc.hotUpdate.manifest.toString();
    logDebug("manifestUrl", this.manifestUrl);
    logDebug("manifestStr", jsb.fileUtils.getStringFromFile(this.manifestUrl));
    this.manifest = JSON.parse(jsb.fileUtils.getStringFromFile(this.manifestUrl));
    cc.gg.version = this.manifest.version;
    logDebug("manifest", this.manifest);
    logDebug("cur manifest ver：" + this.manifest.version);
}

UpdateCtl.prototype.checkApkUpdate = function (version) {
    if (!cc.sys.isNative) {
        logDebug("Apk update is only available in Native build");
        return false;
    }
    if (cc.sys.os == cc.sys.OS_IOS) {
        logDebug("Apk update is only available in Android");
        return false;
    }
    let curVersion = getNativeVersionName();
    if (UpdateCtl.versionCompare(version, curVersion) > 0) {
        logDebug(this.gameName + 'Apk need update,new=' + version);
        checkInstallPermission();
        return true;
    } else {
        logDebug(this.gameName + 'Apk is latest');
        return false;
    }

}

UpdateCtl.prototype.checkUpdate = function (hotUrl, version, callback) {
    this.callback = callback;
    if (!cc.sys.isNative) {
        this.callback();
        return;
    }
    if (UpdateCtl.versionCompare(version, cc.gg.version) > 0) {
        logDebug(this.gameName + ' need update,new=' + version);
        this.hotUpdate(hotUrl + '/v' + version + '/');
    } else {
        logDebug(this.gameName + ' is latest');
        this.callback();
    }
}

UpdateCtl.prototype.hotUpdate = function (packageUrl) {
    let newManifestUrl = this.writeNewVersionManifest(packageUrl);
    cc.hotUpdate.manifestUrl = newManifestUrl;
    cc.hotUpdate.hotUpdate(this.callback);
}

UpdateCtl.prototype.writeNewVersionManifest = function (packageUrl) {
    // let newManifestDir = this.writablePath + 'new_manifest/';
    let projectUrl = this.storagePath + "/project.manifest";
    let isDirExist = jsb.fileUtils.isDirectoryExist(this.storagePath);
    logDebug(this.storagePath, isDirExist);
    if (!isDirExist) {
        jsb.fileUtils.createDirectory(this.storagePath);
    }
    // let isFileExist = jsb.fileUtils.isFileExist(this.manifestUrl);
    // if(isFileExist){
    //     jsb.fileUtils.removeFile(this.manifestUrl);
    // }

    // let packageUrl = this.manifest.packageUrl.replace(cc.gg.version, version);
    this.manifest.packageUrl = packageUrl;
    this.manifest.remoteManifestUrl = packageUrl + "project.manifest";
    this.manifest.remoteVersionUrl = packageUrl + "version.manifest";
    // let newManifestUrl = newManifestDir + "project.manifest";
    // return newManifestUrl;
    jsb.fileUtils.writeStringToFile(JSON.stringify(this.manifest), projectUrl);
    return projectUrl;
}

UpdateCtl.versionCompare = function (versionA, versionB) {
    logDebug("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
    var vA = versionA.split('.');
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
}

module.exports = UpdateCtl;