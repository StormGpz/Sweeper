//  cc.http.sendRequest("login", {
//      pid: 33111,
//      amount: 100,
//      pay_type: 1

const  i18n = require("../../script/i18n/LanguageData");

// import FormDataEx from './FormDataEx';
//  }, this.httpR.bind(this))
cc.http = {
    url: 'http://172.16.11.252:18080/',
    request: function ({ path, data, handler, extraUrl, errorHandler, isParse = true, method = "GET" }) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 15000;
        if (extraUrl == null) {
            extraUrl = this.url;
        }
        var requestURL = extraUrl + path;
        if (method == 'GET' || method == 'get') {
            requestURL = this.joinHttpUrl(requestURL, data);
        }
        logDebug("RequestURL:" + requestURL, method);
        xhr.open(method, requestURL, true);
        // if (cc.sys.isNative) {
        //     xhr.setRequestHeader("Accept-Encoding", "text/html;charset=UTF-8");
        // } else {
        xhr.setRequestHeader("Content-Type", "application/json");
        // }
        if (isParse) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    logDebug("http res(" + xhr.responseText.length + "):" + xhr.responseText);
                    let xhrTxt = xhr.responseText;
                    let firstCode = xhrTxt.charCodeAt(0);
                    if (firstCode < 0x20 || firstCode > 0x7f) {
                        logDebug('response error 0:' + firstCode);
                        xhrTxt = xhrTxt.substring(1); // 去除第一个字符
                        logDebug('response:' + xhrTxt);
                    }
                    var ret = JSON.parse(xhrTxt);
                    if (handler) {
                        handler(ret);
                    }
                }
            };
        } else {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    logDebug("http res(" + xhr.response.length + "):", xhr.response);
                    if (handler) {
                        //直接输入字节流
                        handler(xhr.response);
                    }
                }
            };
        }
        xhr.onerror = function () {
            logError("on error timeout:", requestURL, this.message);
            if (errorHandler) {
                errorHandler("Request timeout:" + requestURL);
            }
        }
        xhr.ontimeout = function (e) {
            logDebug("ontimeout timeout:", requestURL, this.message);
            // XMLHttpRequest 超时。在此做某事。
            if (errorHandler) {
                errorHandler("Request timeout:" + requestURL);
            }
        };
        // xhr.onload = function () {
        //     cc.log("onload :", xhr.status);
        //     //如果请求成功
        //     if (xhr.status == 200) {
        //         //do successCallback
        //     }
        // }

        if (method == 'POST' || method == 'post') {
            if (data) {
                xhr.send(data);
            } else {
                xhr.send();
            }
        } else {
            xhr.send();
        }
        return xhr;
    },

    postFormData: function (path, data, handler, extraUrl, errorHandler, isParse = true) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 15000;
        if (extraUrl == null) {
            extraUrl = this.url;
        }
        var requestURL = extraUrl + path;
        var method = "POST";
        logDebug("RequestURL:" + requestURL, method);
        xhr.open(method, requestURL, true);
        // if (cc.sys.isNative) {
        //     xhr.setRequestHeader("Accept-Encoding", "text/html;charset=UTF-8");
        // } else {
        xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=testformdata");
        // }
        if (isParse) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    logDebug("http res(" + xhr.responseText.length + "):" + xhr.responseText);
                    let xhrTxt = xhr.responseText;
                    let firstCode = xhrTxt.charCodeAt(0);
                    if (firstCode < 0x20 || firstCode > 0x7f) {
                        logDebug('response error 0:' + firstCode);
                        xhrTxt = xhrTxt.substring(1); // 去除第一个字符
                        logDebug('response:' + xhrTxt);
                    }
                    var ret = JSON.parse(xhrTxt);
                    if (handler) {
                        handler(ret);
                    }
                }
            };
        } else {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    logDebug("http res(" + xhr.response.length + "):", xhr.response);
                    if (handler) {
                        //直接输入字节流
                        handler(xhr.response);
                    }
                }
            };
        }
        xhr.onerror = function () {
            logError("on error timeout:", requestURL, this.message);
            if (errorHandler) {
                errorHandler("Request timeout:" + requestURL);
            }
        }
        xhr.ontimeout = function (e) {
            logError("ontimeout timeout:", requestURL, this.message);
            // XMLHttpRequest 超时。在此做某事。
            if (errorHandler) {
                errorHandler("Request timeout:" + requestURL);
            }
        };
        // xhr.onload = function () {
        //     cc.log("onload :", xhr.status);
        //     //如果请求成功
        //     if (xhr.status == 200) {
        //         //do successCallback
        //     }
        // }
        xhr.send(this.getFormData(data));
        return xhr;
    },

    curBufList:[],      //正在提交的buf，防止重复提交。
    buf: function ({ path, msg, handler, extraUrl, errorHandler ,isWaiting = false}) {
        let self = this;
        if(!self.curBufList) self.curBufList = [];
        if(self.curBufList.includes(path)) return;
        self.curBufList.push(path);
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 15000;
        if (extraUrl == null) {
            extraUrl = self.url;
        }
        if(isWaiting && cc.waiting){
            cc.waiting.show()
        }
        var requestURL = extraUrl + path;
        var method = "POST";
        if (msg) {
            logDebug("RequestURL:" + requestURL, " body=", msg.toObject());
        } else {
            logDebug("RequestURL:" + requestURL);
        }
        xhr.open(method, requestURL, true);
        if (cc.sys.isNative) {
            //xhr.setRequestHeader("Accept-Encoding", "text/html;charset=UTF-8");
            xhr.setRequestHeader("Content-Type", "application/x-protobuf");
        } else {
            xhr.setRequestHeader("Content-Type", "application/x-protobuf");
        }
        xhr.setRequestHeader("resVer",cc.gg.version);
        xhr.setRequestHeader("apkVer",getNativeVersionName());
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                logDebug("http res(" + xhr.responseText.length + "):" + xhr.responseText);
                let xhrTxt = xhr.responseText;
                let firstCode = xhrTxt.charCodeAt(0);
                if (firstCode < 0x20 || firstCode > 0x7f) {
                    logDebug('response error 0:' + firstCode);
                    xhrTxt = xhrTxt.substring(1); // 去除第一个字符
                    logDebug('response:' + xhrTxt);
                }
                var ret = JSON.parse(xhrTxt);
                if (handler) {
                    handler(ret);
                }
            }
            let curID = self.curBufList.findIndex(value=>{return value === path});
            if(curID!==-1) self.curBufList.splice(curID,1);
            if(isWaiting && cc.waiting){
                cc.waiting.hide()
            }
        };
        xhr.onerror = function () {

            logDebug("onerror timeout:", requestURL, this.message);
            if (errorHandler) {
                errorHandler("Request timeout:" + requestURL);
            } else {

            }
            let curID = self.curBufList.findIndex(value=>{return value === path});
            if(curID!==-1) self.curBufList.splice(curID,1);
            if(isWaiting && cc.waiting){
                cc.waiting.hide()
            }
        }
        xhr.ontimeout = function (e) {
            logDebug("ontimeout timeout:", requestURL, this.message);
            // XMLHttpRequest 超时。在此做某事。
            if (errorHandler) {
                errorHandler("Request timeout:" + requestURL);
            } else {
                // cc.promptAlert.show("Network disconnection","Please confirm the network status and reconnect",['Reconnect'],(val)=>{
                //     if(val == '1'){
                //         gameRestart();
                //     }
                // },false);
            }
            let curID = self.curBufList.findIndex(value=>{return value === path});
            if(curID!==-1) self.curBufList.splice(curID,1);
            if(isWaiting && cc.waiting){
                cc.waiting.hide()
            }
        };
        // xhr.onload = function () {
        //     cc.log("onload :", xhr.status);
        //     //如果请求成功
        //     if (xhr.status == 200) {
        //         //do successCallback
        //     }
        // }

        if (msg) {
            xhr.send(msg.serializeBinary());
        } else {
            xhr.send();
        }
        return xhr;
    },

    joinHttpUrl: function (url, data) {
        var str = "?";
        for (var k in data) {
            if (str != "?") {
                str += "&";
            }
            str += k + "=" + data[k];
        }
        return url + encodeURI(str);
    },

    getFormData: function (data) {
        var boundary = '--testformdata';
        var endBoundary = boundary + '--';
        var result = "";
        var str = "?";
        for (var key in data) {
            result += boundary + '\r\n';
            result += 'Content-Disposition: form-data; name="' + key + '"' + '\r\n\r\n';
            result += data[key] + '\r\n';
        }
        result += '\r\n' + endBoundary;

        let charArr = [];

        for (var i = 0; i < result.length; i++) { // 取出文本的charCode（10进制）
            charArr.push(result.charCodeAt(i));
        }
        let array = new Uint8Array(charArr);
        return array.buffer;
    },

    readImageFile: function (url, sp, lang = "", isRes = false, loadcall = null) {
        if (!url) {
            logDebug("url", url);
        }
        // return;
        // this.readHttpFile('image/download',{url:url},(tex)=>{
        //     let sf = Base64ToSpriteFrame(tex);
        //     sp.spriteFrame = sf;
        // });


        let imgcache = cc.gg.imagesCache[url + lang];
        if (imgcache) {
              sp.spriteFrame = imgcache;
            if (loadcall) {
                loadcall();
            }
            return;
        }

        for(let i in cc.gg.avatars){
            if(cc.gg.avatars[i] == url){
                if(cc.gg.mainBundle){
                    cc.gg.mainBundle.load(`res/head/${Number(i)+1}`,cc.SpriteFrame,(err,res)=>{
                        if(err) logError(`${cc.gg.mainBundle.name} bundle is not includes res/head/${Number(i)+1}`)
                        cc.gg.imagesCache[url] = res;
                        sp.spriteFrame = res;
                        if(loadcall) loadcall()
                    }) 
                    return;
                }else{
                    cc.Utils.loadRes(`atlas/head/${Number(i)+1}`,cc.SpriteFrame).then(res=>{
                        cc.gg.imagesCache[url] = res
                        sp.spriteFrame = res;
                        if(loadcall) loadcall()
                    })
                    return;
                }
            } 
        }

        if (isRes) {
            cc.loader.loadRes(url, cc.SpriteFrame, function (err, sf) {
                if (err) {
                    logError(err);
                } else {
                    cc.gg.imagesCache[url] = sf;
                    if (sp && sp.node) {
                        sp.spriteFrame = sf;
                        if (loadcall) {
                            loadcall();
                        }
                    }
                }
            });
        } else {
            let api = 'image/download'
            let apiObj = { url: url };
            if (lang != "") {
                api = 'image/downlang'
                apiObj.lang = lang;
                apiObj.v = cc.gg.httpResVersion;
            }
            var readURL = this.joinHttpUrl(this.url + api, apiObj);
            cc.loader.load({ url: readURL, type: 'jpg' }, function (err, tex) {
                if (err) {
                    logError("readImageFileError:", err,"   err url",url);
                } else {
                    let sf = new cc.SpriteFrame(tex);
                    cc.gg.imagesCache[url] = sf;
                    if (sp && sp.node) {
                        sp.spriteFrame = sf;
                    }
                }
            });
        }
    },

    readHttpFile: function (path, params, callback) {
        var readURL = this.joinHttpUrl(this.url + path, params);
        if (cc.sys.isNative) {
            let filePath = window['jsb'] && jsb.fileUtils && jsb.fileUtils.getWritablePath() + params.url + ".txt";
            let downloader = new jsb.Downloader();
            downloader.setOnFileTaskSuccess(() => {
                cc.loader.load(filePath, function (err, tex) {
                    if (err) {
                        logError("readHttpFileError:", err);
                    } else {
                        callback(tex);
                    }
                });
            });
            downloader.setOnTaskError((task, errorCode, errorCodeInternal, errorStr) => {
                logError(task, errorCode, errorCodeInternal, errorStr);
                downloader = null;
            });
            downloader.createDownloadFileTask(readURL, filePath, Math.random().toString());
        } else {
            cc.loader.load(readURL, function (err, tex) {
                if (err) {
                    logError("readHttpFileError:", err);
                } else {
                    callback(tex);
                }
            });
        }
    },

    checkCode(code){
        if(code.code!=undefined) code = code.code
        if(code === 0) return true
        else{
            logDebug("Ret.",code);
            showTipsMsg(window["i18n"].t(code))
            return false
        }
    }
}