import Utils from "./Utils";

export enum E_prefab{
    BindPhoneView = "newPrefab/BindPhoneView",
    DetailsView = "newPrefab/DetailsView",
    InviteView ="newPrefab/InviteView",
    ShopView = "newPrefab/ShopView",
    WithDrawView= "newPrefab/WithDrawView",
    Subsidy = "prefab/Subsidy",
    CollectCashView ="newPrefab/CollectCashView",
    Waiting = "uiAtlas/waiting/pre/waiting",
    RoomView="newPrefab/RoomView",
    WheelView="newPrefab/WheelView",
    CouponsView="newPrefab/CouponsView",
    Act24HourRechargeView="newPrefab/Act24HourRechargeView",
    BecomeVipView="newPrefab/BecomeVipView",
    BigMoneyView="newPrefab/BigMoneyPackView",
    FortuneGiftView="newPrefab/FortuneOfferPackView",
    FreshFAQView="newPrefab/FreshFAQView",
    SevenDays="newPrefab/SevenDays",
    BuyShopComplete = "newPrefab/BuyShopComplete",
    TestView = "newPrefab/test_view",
    FreeCash = "newPrefab/FreeCashView",
    LuckCode = "newPrefab/LuckCodeView",
    VipBenefits = "newPrefab/VipBenefits",
    VipUpgradePack = "newPrefab/VipUpgradePack",
    ChestOpen = "newPrefab/ChestOpen",
    VipUpgrade = "newPrefab/VipUpgradeTip",
    n_audioMgr = "prefab/n_audioMgr",
    PromptAlert2 = "prefab/PromptAlert2",
    singleWaiting = "prefab/waiting"
}

export enum E_audio{
        sfx_click="sound/click",
        sfx_close="sound/close",
        sfx_deal="sound/deal",
        sfx_myturn = "sound/myturn",
        sfx_flipBoard = "sound/sfx_flipBoard",
        sfx_timeout = "sound/timeout",
        bg_mainLoop = "sound/bg_mainLoop",
        sfx_startBetting = "sound/sfx_startBetting",
        sfx_stopBetting = "sound/sfx_stopBetting",
        bg_luckWheelLoop = "sound/bg_luckWheelLoop",
        sfx_luckWheelStart = "sound/sfx_luckWheelStart",
        sfx_luckWheelEnd = "sound/sfx_luckWheelEnd",
        bg_freeCashLoop = "sound/bg_freeCashLoop",
        sfx_chestOpen = "sound/sfx_chestOpen",
        sfx_wheelStart = "sound/sfx_wheelStart",
        sfx_gotCoin = "sound/sfx_gotCoin",
        sfx_coinHit = "sound/sfx_coinHit",
        sfx_gotBonus = "sound/sfx_gotBonus",
        sfx_gotMoreCoins = "sound/sfx_gotMoreCoins",
}

export enum E_httpUrl{
    invite_updateInfo = "invite/index",
    invite_widthdraw = "invite/widthdraw",
    invite_dayDetail = "invite/dayDetail",
    invite_userDetail = "invite/userDetail",
    invite_totalDetail = "invite/totalDetail",
    invite_receiveReward = "invite/receiveReward",
    shop_getStoreList = "pay/payProductList",
    shop_giftPackList = "giftPack/list",
    shop_pay = "pay/payOrder",
    record_scoreLog = "record/scoreLog ",
    get_SMS = "login/smscode",
    bind_info = "pay/payOutInfo",
    bind_phone = "user/bindphone",
    bind_card="pay/payOutBindCard",
    withDraw = "pay/payOutOrder",
    withDraw_detail = "pay/payOutOrderList",
    unBind_card = "pay/payOutUnbindCard",
    bonusToCash = "user/collectBonus",
    game_list = "game/list",
    wheel_update = "activity/luckwheel/index",
    wheel_spin = "activity/luckwheel/spin",
    activeList = "activity/list",
    coupon_update = "activity/coupon/index",
    coupon_dailyCollect = "activity/coupon/collect",
    act24hourRecharge = "activity/24hourRecharge/index",
    sevenDays_update = "activity/signIn/index",
    sevenDays_receive = "activity/signIn/collect",
    login = "sfgertjkllyu6",
    getOTP = "login/smscode",
    freeCash_join = "activity/freeCash/join",
    freeCash_update ="activity/freeCash/index",
    freeCash_spinAmt="activity/freeCash/spinAmt",
    freeCash_spinWithdrawCard = "activity/freeCash/spinWithdrawCard",
    freeCash_withDraw = "activity/freeCash/withdraw",
    freeCash_history = "activity/freeCash/history",
    luckCode_collect = "activity/luckCode/collect",
}

export enum E_eventType{
    invite_updateInfo = "invite_updateInfo",
    invite_widthdraw = "invite_widthdraw",
    invite_dayDetail = "invite_dayDetail",
    invite_userDetail = "invite_userDetail",
    invite_totalDetail = "invite_totalDetail", 
    invite_checkDetail = "invite_checkDetail",
    invite_receiveReward = "invite_receiveReward",
    shop_updateStore = "shop_updateStore",
    shop_clickStore = "shop_clickStore",
    shop_updateGift = "shop_updateGift",
    shop_pay = "shop_pay",
    close_browser = "close_browser",
    dropdown_select = "dropdown_select",
    select_day = "select_day",
    bind_phone = "bind_phone",
    pay_payOutBindCard = "pay_payOutBindCard",
    unBind_card = "unBind_card",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    bonusToCash = "bonusToCash",
    wheelNumUpdate = "wheelUpdate",
    sevenDaysClean = "sevenDaysClean",
    bundleUpFinished = "bundleUpFinished",
    bundleUpProgression = "bundleUpProgression",
    bundleUpErr = "bundleUpErr",
    SINGLE_LEAVEROOMRET = "SINGLE_LEAVEROOMRET",
    SINGLE_FWSLOTPLYSPINRET = "SINGLE_FWSLOTPLYSPINRET",
    SINGLE_FWSLOTREFRESHDESKDATARET = "SINGLE_FWSLOTREFRESHDESKDATARET",
    SINGLE_FWSLOTREFRESHDESKDATA = "SINGLE_FWSLOTREFRESHDESKDATA",
    SINGLE_FWSLOTPLYSPIN = "SINGLE_FWSLOTPLYSPIN"
}

export enum E_localData{
    user = "user",
    singleSlot_betType = "singleSlot_betType",
    singleSlot_freeSpin = "singleSlot_freeSpin",
    singleSlot_initreelList = "singleSlot_initreelList",
    singleSlot_jackpot = "singleSlot_jackpot",
}

export enum E_bundleName{
    Resources = "resources",
    Pokers = "Pokers",
    Login = "Login",
    Hall = "Hall",
    TeenPatti = "teenpatti",
    TeenPattiWar = "TeenPattiWar",
    Tiger = "tiger",
    Wheeloffortune = "wheeloffortune",
    // viewPrefabs = "viewPrefabs",
    HeadICON = "HeadICON",
    AbccaratAB = "abccaratAB",
    Rummy = "rummy",
    Sicbo = "sicbo",
    Slots = "slots",
    JhandiMunda = "jhandiMunda",
    RedVsBlack = "RedVsBlack",
    CarRoulette = "CarRoulette",
    TeenPattiRemaster = "TeenPattiRemaster",
    Rocket = "Rocket",
    HorseRacing = "HorseRacing",
    Fruit777 = "Fruit777",
}

export enum E_comEvent{
    EDITING_DID_ENDED = "editing-did-ended",
}

export enum E_UserActionType{
    None = 0,
    Load = 1,               //加载
    Lobby = 2,              //大厅
    NewGuide = 3,           //第一次打开新手引导
    FinishGuide = 4,        //第一次完成新手引导
    EnterPractise = 5,      //第一次进入练习场
    EnterGold = 6,          //第一次进入金币场
    FinishGame = 7,         //完成游戏
    BrakeUp = 9,            //破产次数
    BrakeOpenPayWeb = 10,   //破产时打开支付页面
    BrakeOpenActivity = 11, //破产时打开活动页面
    OpenDraw = 12,          //打开兑换页面
    OpenVip = 13,           //打开vip页面
    OpenShare = 14,         //打开分享页面
    NetBrake = 15,          //网络断开次数
    ClickShare = 16,
}   

//注册toggleContainer快捷方法
cc.ToggleContainer.prototype.checkIndex = function(){
    let _num = null;
    (this as cc.ToggleContainer).toggleItems.forEach((_item,index)=>{
        if(_item.isChecked){
            _num = index
        }
    })
    return _num
}

cc.ToggleContainer.prototype.checkItem = function(){
    let checkItem:cc.Toggle = null;
    (this as cc.ToggleContainer).toggleItems.forEach(_item=>{
        if(_item.isChecked){
            checkItem = _item 
        }
    })
    return checkItem
}

//注册节点快捷方法
cc.Node.prototype.getCom = function (comType, url) {
    let _node = url ? cc.find(url, this) : this;
    if (!_node) {
        cc.warn(this.name + "找不到节点" + url??"")
        return null
    }
    let _com = _node.getComponent(comType)
    if (!_com) {
        cc.warn(_node.name + "不存在" + comType)
        return null
    }
    return _com
}

cc.Node.prototype.findNodeByName = function(name){
    let fun = (node)=>{
        if(!node || !(node instanceof cc.Node)) return null
        for(let _node of node.children){
            if(_node.name === name){
                return _node;
            }else{
                if(_node.children.length>0){
                    let _find = fun(_node)
                    if(_find) return _find
                }
            }
        }
    }
    return fun(this)
}

cc.Node.prototype.getNode = function(url:string){
    let _node = cc.find(url,this)
    if(!_node){
        cc.warn(this,"url上找不到节点",url);
        return null
    }
    return cc.find(url,this);
}

cc.Node.prototype.addClickEvt = function(fun:Function,target?:any){
    (this as cc.Node).off(cc.Node.EventType.TOUCH_END);
    (this as cc.Node).on(cc.Node.EventType.TOUCH_END,()=>{
        let btn = (this as cc.Node).getComponent(cc.Button) 
        this.scale = 1;
        if(btn && !btn.interactable)return
        if(target)fun.call(target);
        else fun();
    },target)
}

cc.Node.prototype.getPosByNode = function(node:cc.Node){
    let self = this as cc.Node;
    let worldPos = node.parent.convertToWorldSpaceAR(cc.v2(node.x,node.y));
    let parentPos = self.parent.convertToNodeSpaceAR(worldPos);
    return parentPos;
}


cc.Button.prototype.addClickEvt = function(fun:Function,target?:any){
    let self = this as cc.Button;
    self.node.off(cc.Node.EventType.TOUCH_END);
    self.node.on(cc.Node.EventType.TOUCH_END,()=>{
        self.node.scale = 1;
        if(!self.interactable) return;
        if(target)fun.call(target)
        else fun()
    },target);
}

cc.Component.prototype.getCom = function(comType,url){
    try{{
        let _node = url ? cc.find(url, this.node) : this.node;
        if (!_node) {
            cc.warn(this.name + "找不到节点" + url??"")
            return null
        }
        let _com = _node.getComponent(comType)
        if (!_com) {
            cc.warn(_node.name + "不存在" + comType.prototype.name)
            return null
        }
        return _com
    }}catch(err){
        logError(url+"getCom"+comType.prototype.name +",Err:",err)
    }
}

cc.EditBox.prototype.addEditEvt = function(fun:(edit:cc.EditBox)=>void,target?:any){
    let self = this as cc.EditBox;
    self.node.off(E_comEvent.EDITING_DID_ENDED);
    self.node.on(E_comEvent.EDITING_DID_ENDED,fun,target);
}

cc.Component.prototype.findNodeByName = function(name){
    let fun = (node:cc.Node)=>{
        for(let _node of node.children){
            if(_node.name === name){
                return _node;
            }else{
                if(_node.children.length>0){
                    let _find = fun(_node)
                    if(_find) return _find
                }
            }
        }
    }
    let _find = fun(this.node)
    if(_find) return _find
    else logError(`${name} can't find node by name in`,this.node)
}

cc.Animation.prototype.addFinishedCb = function(fun:Function,target?:any,delay:number = 0){
    let self = this as cc.Animation;
    // logDebug("====addFinishedCb=====",self.node);
    self.off(cc.Animation.EventType.FINISHED);
    self.once(cc.Animation.EventType.FINISHED,evt=>{
        if(delay){
            self.scheduleOnce(fun,delay)
        }else{
            fun()
        }
    },target)
}

declare global{
    function preLoadBundleScene(bundleName:string,sceneName?:string,isRemote?:boolean):Promise<void>
}

window["preLoadBundleScene"] = (bundleName:string,sceneName?:string)=>{
    return new Promise<void>((reslove,reject)=>{
        let find = gameListCfg.find(find=>{
            return find.bundleName == bundleName
        })
        let isRemote = find?.isRemote;
        logDebug("====isRemote======",isRemote);
        if(!cc.assetManager.bundles.get(bundleName))cc.waiting?.show(undefined,"Load Gaming...")
        let bundleUrl = ((cc.sys.isNative&&isRemote)?(jsb.fileUtils.getWritablePath()+"remote/"):'/') + bundleName
        Utils.loadLocalBundle(bundleUrl).then(bundle=>{
            if(!sceneName) sceneName = bundleName;
            bundle.preloadScene(sceneName,err=>{
                if(err) reject(err)
                reslove() 
            })
        }).catch(err=>{
            reject(err)
        })
    })
}