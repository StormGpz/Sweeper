export default class Utils {
    static showTimeToStr(time: number, showDate: boolean = true, showHMS: boolean = true) {
        let date = new Date(time);
        let str = "";
        if (showDate) {
            let year = this.PrefixInteger(date.getFullYear(), 4);
            let month = this.PrefixInteger(date.getMonth() + 1, 2);
            let day = this.PrefixInteger(date.getDate(), 2);
            str = month + "/" + day + "/" + year + " ";
        }
        if (showHMS) {
            let h = this.PrefixInteger(date.getHours(), 2);
            let m = this.PrefixInteger(date.getMinutes(), 2);
            let s = this.PrefixInteger(date.getSeconds(), 2);
            str += h + ":" + m + ":" + s;
        }
        return str;
    }

    private static monthSim = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sept",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    };

    static getMonthInSim(monthNum: number): string {
        return this.monthSim[monthNum.toString()];
    }

    static showCDtoStr(cd: number, showDay: boolean = true) {
        let str = "";
        let d = Math.floor(cd / 86400);
        let h = this.PrefixInteger(Math.floor(cd % 86400 / 3600), 2);
        let m = this.PrefixInteger(Math.floor(cd % 3600 / 60), 2);
        let s = this.PrefixInteger(Math.floor(cd % 60), 2);
        if (d !== 0 && showDay) { str += d + "d"; }
        str += h + ":" + m + ":" + s;
        // if(h!=="00"){str += h += "h "};
        // if(m!=="00"){str += m += "m "};
        // if(s!=="00"){str += s += "s "};
        return str;
    }

    static PrefixInteger(num: number | string, n: number) {
        return ("00000000" + num).slice(-n);
    }

    static readImageLocalFile(url: string, sp: cc.Sprite) {
        let res = cc.resources.get(url);
        if (res && res instanceof cc.SpriteFrame) {
            sp.spriteFrame = res;
            return;
        }
        cc.resources.load(url, cc.SpriteFrame, (err, res) => {
            if (err) {
                logError(err);
                return;
            }
            sp.spriteFrame = res as cc.SpriteFrame;
        });
    }

    static getLocalFaceUrl(url: string) {
        for (let i in cc.gg.avatars) {
            if (url == cc.gg.avatars[i]) {
                let _url = "atlas/head/" + (Number(i) + 1);
                return _url;
            }
        }
        let random = Math.floor(Math.random() * Object.keys(cc.gg.avatars).length);
        return "atlas/head/" + (random + 1);
    }

    static getLocalStoreUrl(id: number) {
        return "uinew/uiAddCash/ico_cashIcon" + id;
    }

    static getLocalGiftPackUrl(type: number) {
        return "uinew/uiGiftPack/bg_gift" + type;
    } 

    static addPerfabToSence(pf: string, fun?: (node: cc.Node) => void, isRoot: boolean = true, isActive: boolean = false) {
        if(cc.gg.mainBundle){
            cc.gg.mainBundle.load(`res/${pf}`,cc.Prefab,(err,res)=>{
                if (err) {
                    logError(err);
                    return null;
                }
                if (res instanceof cc.Prefab) {
                    let newNode = cc.instantiate(res);
                    (newNode as cc.Node).active = isActive;
                    if (isRoot) {
                        newNode.setParent(cc.find(""));
                        cc.game.addPersistRootNode(newNode);
                    } else {
                        newNode.setParent(cc.find("Canvas"));
                    }
                    if (fun)
                        fun(newNode);
                    return newNode;
                }
            })
        }else{
            cc.resources.load(pf, cc.Prefab, (err, res) => {
                if (err) {
                    logError(err);
                    return null;
                }
                if (res instanceof cc.Prefab) {
                    let newNode = cc.instantiate(res);
                    (newNode as cc.Node).active = isActive;
                    if (isRoot) {
                        newNode.setParent(cc.find(""));
                        cc.game.addPersistRootNode(newNode);
                    } else {
                        newNode.setParent(cc.find("Canvas"));
                    }
                    if (fun)
                        fun(newNode);
                    return newNode;
                }
            });
        }
    }

    static ChineseRegTest(str: string) {
        str = str.toString();
        if (!str || str.length == 0) {
            logDebug(str + "str length error");
            return false;
        }
        let reg = /[\u4e00-\u9fa5]/;
        let _test = reg.test(str);
        return _test;
    }

    static async loadRes<T extends cc.Asset>(url: string, type: { prototype: T; }, bundleName?: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            try {
                if (bundleName) {
                    this.loadLocalBundle(bundleName).then(bundle=>{
                        let res = bundle.get(url,type as any)
                        if(res) resolve(res as T)
                        bundle.load(url, type as any, undefined, (err, asset) => {
                            if (err)
                                reject(err);
                            resolve(asset as T);
                        });
                    }).catch(err=>{
                        reject(err)
                    })
                }
                else {
                    let res = cc.resources.get(url,type as any);
                    if(res) resolve(res as T);
                    cc.resources.load(url, type as any, undefined, (err, asset) => {
                        if (err)
                            reject(err);
                        resolve(asset as T);
                    });

                }
            } catch (e) {
                reject(e);
            }
        });
    }

    // static async loadRemoteBundle(bundleName:string,onProgress?:Function,onFinished?:Function):Promise<cc.AssetManager.Bundle>{
    //     return new Promise<cc.AssetManager.Bundle>((resolve,reject)=>{
    //         let bundle = cc.assetManager.getBundle(bundleName);
    //         if(bundle){
    //             resolve(bundle);
    //             return;
    //         }
    //         let options = {
    //             onFileProgress:onProgress
    //         }
    //         // logDebug("===cc.gg.spreadId:"+cc.gg.spreadId+"===cc.gg.version:"+cc.gg.version+"===cc.gg.baseBundleUrl:"+cc.gg.baseBundleUrl)
    //         if(cc.sys.os == cc.sys.OS_ANDROID && cc.gg.remoteBundleUrl()){
    //             let bundleUrl = cc.gg.remoteBundleUrl() + bundleName;

    //             cc.assetManager.loadBundle(bundleUrl,options,(err,bundle)=>{
    //                 if(err){
    //                     showTipsMsg("bundle load err:"+err.message);
    //                     reject(err);
    //                     return;
    //                 }
    //                 if(onFinished) onFinished(bundle);
    //                 resolve(bundle)
    //             })
    //         }else{
    //            cc.assetManager.loadBundle(bundleName,options,(err,bundle)=>{
    //                 if(err){
    //                     showTipsMsg("bundle load err:"+err.message);
    //                     reject(err);
    //                     return;
    //                 }
    //                 if(onFinished) onFinished(bundle);
    //                 resolve(bundle) 
    //            })
    //         }
    //     })
    // }

    static async loadLocalBundle(bundleName:string,onProgress?:Function){
        return new Promise<cc.AssetManager.Bundle>((resolve,reject)=>{
            let bundle = cc.assetManager.getBundle(bundleName);
            if(bundle){
                resolve(bundle);
                return;
            }
            let options = {
                onFileProgress:onProgress
            }
            cc.assetManager.loadBundle(bundleName,options,(err,bundle)=>{
                if(err){
                    showTipsMsg(window["i18n"].t("bundle load err:"+err.message));
                    reject(err);
                    return;
                }
                resolve(bundle)
           })
        })
    }

    static async playDBAni(db: dragonBones.ArmatureDisplay, aniName?: string, time: number = 1, isFinishHide = true , isDelay = 0) {
        return new Promise<void>((resolve, reject) => {
            try {
                // logDebug("======playDBAni=========");
                // // if(!time) time = 1;
                // if (!aniName){
                //     let aniNames = db.getAnimationNames(db.armatureName);
                //     logDebug("======playDBAni========= : ", aniNames.length);
                //     if(aniNames.length > 0) {
                //         aniName = aniNames[0];
                //     }
                //     logDebug("======playDBAni========= : ", aniName);
                // }

                if(!aniName) 
                    aniName = "animation";
                
                // let names = db.getArmatureNames();
                // logDebug("======names=========",names);
                db.node.active = true;
                db.removeEventListener(dragonBones.EventObject.COMPLETE);
                db.once(dragonBones.EventObject.COMPLETE, evt => {
                    if (isFinishHide){
                        if (isDelay){
                            setTimeout(() => {
                                db.node.active = false;
                                resolve();
                            }, isDelay * 1000);
                        }else{
                            db.node.active = false;
                            resolve(); 
                        }
                    }else{
                        resolve();
                    }
                }, this);
                db.playAnimation(aniName, time);
            } catch (err) {
                reject(err);
            }
        });
    }

    private static grayMtl:cc.Material
    private static normalMtl:cc.Material

    public static async setGrayMtl(sp:cc.Sprite,isGray = false){
        if(!this.grayMtl){
            this.grayMtl = cc.assetManager.builtins.getBuiltin("material","builtin-2d-gray-sprite") as cc.Material
            
            // this.grayMtl = await cc.Utils.loadRes("materials/builtin-2d-gray-sprite",cc.Material,"INTERNAL")
        }
        if(!this.normalMtl){
            this.normalMtl = cc.assetManager.builtins.getBuiltin("material","builtin-2d-sprite") as cc.Material
            // this.normalMtl = await cc.Utils.loadRes("materials/builtin-2d-sprite",cc.Material,"INTERNAL")
        }
        if(isGray){
            sp.setMaterial(0,this.grayMtl);
        }else{
            sp.setMaterial(0,this.normalMtl);
        }
    }

    
}

cc.Utils = Utils
