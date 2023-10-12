// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.wsp = this;
        this.waitTime = 0;
        this.aliveTime = 0;
        this.isGoldUpdate = false;
        this.isKeepLog = false;
        cc.gg.evt.on(cc.GGEventType.MSG_TIPS, this.onShowTipsMsg, this);
        cc.gg.evt.on(cc.GGEventType.SWITCHSCENECOMPLETE,()=>this.isEnterGame = false,this);
        cc.ws.evt.on(proto.message.MainMsgID.MAINNET + "_" + proto.message.SubNetMsgID.KEEPALIVE, this.onKeepAliveRet, this);
        // cc.ws.evt.on(proto.message.MainMsgID.MAINLOBBY + "_" + proto.message.SubLobbyMsgID.NOTIFYSCORECHGRET, this.onScoreChange, this);
        // cc.ws.evt.on(proto.message.MainMsgID.MAINLOBBY + "_" + proto.message.SubLobbyMsgID.NOTIFYMAILINFORET, this.onMailNewRet, this);
        // cc.ws.evt.on(proto.message.MainMsgID.MAINLOBBY + "_" + proto.message.SubLobbyMsgID.NOTIFYSYSNOTICERET, this.onSysNoticeNewRet, this);
        // cc.ws.evt.on(proto.message.MainMsgID.MAINERROR + "_" + proto.message.SubErrorMsgID.COMMONERROR, this.onErrorRet, this);
        // cc.ws.evt.on(proto.message.MainMsgID.MAINROOM + "_" + proto.message.SubRoomMsgID.JOINROOMRET, this.onJoinRoomRet, this);
        // cc.ws.evt.on(proto.message.MainMsgID.MAINROOM + "_" + proto.message.SubRoomMsgID.LEAVEROOMRET, this.onLeaveRoomRet, this);
        // cc.ws.evt.on(proto.message.MainMsgID.MAINGAME + "_" + proto.message.SubLamiGame.JOINDESKINFORET, this.onJoinDeskInfoRet, this);
        // cc.ws.evt.on(proto.message.MainMsgID.MAINGAME + "_" + proto.message.SubLamiGame.GAMEWAITSTATRET, this.onGameWaitStatRet, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start() {

    },

    onDestroy() {
        cc.gg.backhideViews.length = 0;
        cc.gg.queueViews.length = 0;
        cc.gg.evt.off(cc.GGEventType.MSG_TIPS, this.onShowTipsMsg, this);
        cc.gg.evt.off(cc.GGEventType.SWITCHSCENECOMPLETE,()=>this.isEnterGame = false,this);
        // cc.ws.evt.off(proto.message.MainMsgID.MAINLOBBY + "_" + proto.message.SubLobbyMsgID.NOTIFYSCORECHGRET, this.onScoreChange, this);
        cc.ws.evt.off(proto.message.MainMsgID.MAINERROR + "_" + proto.message.SubErrorMsgID.COMMONERROR, this.onErrorRet, this);
        // cc.ws.evt.off(proto.message.MainMsgID.MAINROOM + "_" + proto.message.SubRoomMsgID.JOINROOMRET, this.onJoinRoomRet, this);
        // cc.ws.evt.off(proto.message.MainMsgID.MAINROOM + "_" + proto.message.SubRoomMsgID.LEAVEROOMRET, this.onLeaveRoomRet, this);
        // cc.ws.evt.off(proto.message.MainMsgID.MAINGAME + "_" + proto.message.SubLamiGame.JOINDESKINFORET, this.onJoinDeskInfoRet, this);
        // cc.ws.evt.off(proto.message.MainMsgID.MAINGAME + "_" + proto.message.SubLamiGame.GAMEWAITSTATRET, this.onGameWaitStatRet, this);
        cc.game.off(cc.game.EVENT_HIDE, this.onGameHide, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onGameHide(e) {
        cc.game.off(cc.game.EVENT_HIDE, this.onGameHide, this);
        cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
        this.hideTime = Date.now();
        logDebug(this.hideTime, "wsEvt:enter backgroud");
        if(cc.gg.audioMgr)cc.gg.audioMgr.pauseAll();
    },
    onGameShow(e) {

        cc.game.off(cc.game.EVENT_SHOW, this.onGameShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
        this.curTime = Date.now();
        logDebug(this.curTime, "wsEvt:enter foregroud");
        if (this.curTime - this.hideTime >= 60000) {
            gameRestart();
        } else {
            if(cc.gg.audioMgr) cc.gg.audioMgr.resumeAll();
        }
    },

    onKeyUp(e) {
        switch (e.keyCode) {
            case cc.macro.KEY.back:
                this.onKeyUpBack();
                break;
            case cc.macro.KEY.backslash:
                cc.gg.evt.emit(cc.GGEventType.KEYUP.BACK_SLASH);
                break;
            default:
                break;
        }
    },

    onKeyUpBack() {
        if (cc.gg.backhideViews.length > 0) {
            let view = cc.gg.backhideViews.pop();
            view.hide();
        } else {
            if (this.waitTime > 0) {
                this.gameQuit();
            } else {
                showTipsMsg(window["i18n"].t("Click the return key twice to exit"));
                this.waitTime = 1;
            }
        }
        cc.gg.evt.emit(cc.GGEventType.KEYUP.BACK);
    },

    gameQuit() {
        cc.game.end();
    },

    onErrorRet(bfm) {
        var msg = proto.message.OperateError.deserializeBinary(bfm.bytes);
        let errorId = msg.getEcode();
        logDebug('Ret:错误消息:', errorId);
        this.isEnterGame = false;
        cc.waiting?.hide()
        switch (errorId) {
            case proto.message.ErrorCode.LOGINACCOUNTINVALID:
                cc.promptAlert.show(window["i18n"].t("Account Freeze"), window["i18n"].t(errorId), ['ok'], (val) => {
                    if (val == '0') {
                        cc.game.end();
                    }
                }, false);
                break;
            case proto.message.ErrorCode.ROOMNOTEXIST:
                //1 大厅里面 recoverQueueRoomTable 会show
                //2 onJoinRoomRet里面会去hide
                //3 一旦出错就没有地方hide了所以这里hade一下
                // cc.waiting.hide();
            case 102:
                cc.shop && cc.shop.show();
                showTipsMsg(window["i18n"].t(errorId))
                break
            default:
                showTipsMsg(window["i18n"].t(errorId));
                break;
        }
    },

    /**
     * 通知金钱变化 Ret
     * @param {BufferMessage} bfm 
     */
    onScoreChange(bfm) {
        logDebug('Ret:通知金钱变化');
        this.isGoldUpdate = true;
        var msg = proto.message.MsgNotifyScoreChgRet.deserializeBinary(bfm.bytes);
        var changeType = msg.getStype();
        var score = msg.getScore();
        var bonus = msg.getBonusscore();
        if (changeType == 2 || changeType == 4 || changeType == 6 || changeType == 9 || changeType == 13||changeType == 15) {
            if ((score - cc.gg.user.Score) > 0 || (bonus - cc.gg.user.Bonus)>0) {
                cc.gg.evt.emit(cc.GGEventType.HALL.BUY_SHOP_COMPLETE, (score - cc.gg.user.Score),(bonus - cc.gg.user.Bonus));
                this.onBuyShopComplete((score - cc.gg.user.Score),(bonus - cc.gg.user.Bonus), msg.getViplevel(), msg.getBonusrate(), this.onVipUpgrade);
            }
        }else{
            this.onVipUpgrade(msg.getViplevel(), msg.getBonusrate());
        }

        if(changeType ==2) {
            var info = JSON.stringify({
                PlayerID: cc.gg.user.UserID,
                Score: score - cc.gg.user.Score
            });

            recordAllChannelEventOnce("onScoreChangeFirst", info);
            recordAllChannelEvent("onScoreChange", info);
        }

        setScore(score, msg.getBindscore(), msg.getExpscore(),undefined,msg.getBonusscore(),msg.getUsedbonus());
        logDebug('MsgNotifyScoreChgRet', score, cc.gg.user.Score, (score - cc.gg.user.Score), msg.toObject());
    },


    onVipUpgrade(vipLevel, bonusRate) {
        if(cc.gg.user.vipLevel != vipLevel) {
            cc.gg.user.vipLevel = vipLevel;
            cc.gg.user.bonusRate = bonusRate;
            cc.gg.evt.emit(cc.GGEventType.HALL.VIP_UPGRADE, vipLevel, bonusRate);
            cc.VipBenefits.hide();
            cc.VipUpgrade.show();
        }
    },


    onBuyShopComplete(cash,bonus,vipLevel, bonusRate, callback){
        let cashIconUrl = {
            10000:"uinew/uiAddCash/ico_cashIcon0",
            30000:"uinew/uiAddCash/ico_cashIcon1",
            50000:"uinew/uiAddCash/ico_cashIcon2",
            100000:"uinew/uiAddCash/ico_cashIcon3",
            300000:"uinew/uiAddCash/ico_cashIcon4",
            500000:"uinew/uiAddCash/ico_cashIcon5",
            1000000:"uinew/uiAddCash/ico_cashIcon6",
            2000000:"uinew/uiAddCash/ico_cashIcon7"
          }
          let url = cashIconUrl[cash] || null;
          if(cc.BuyShopComplete) {
            cc.BuyShopComplete.show(parseGold(cash),url,parseGold(bonus), vipLevel, bonusRate, callback);
          }

          cc.gg.user.ispremium = true;
    },

    /**
     * 通知新邮件 Ret
     * @param {BufferMessage} bfm 
     */
    onMailNewRet(bfm) {
        try {
            var ret = proto.message.MailStatusResp.deserializeBinary(bfm.bytes);
            logDebug('Ret:通知新邮件', JSON.stringify(ret.toObject()));
            cc.gg.isNewMail = ret.getStatus();
            if (cc.gg.isNewMail) {
                cc.gg.evt.emit(cc.GGEventType.Email.NEW_RET, ret);
            }
        } catch (error) {
            logDebug('Ret:通知新邮件', error);
        }

    },

    onSysNoticeNewRet(bfm) {
        try {
            var ret = proto.message.MsgNotifySysNoticeRet.deserializeBinary(bfm.bytes);
            var obj = ret.toObject();
            logDebug('Ret:SysNotice', JSON.stringify(obj));
            // cc.gg.isNewMail = ret.getStatus();
            // if (cc.gg.isNewMail) {

            let notice = {
                id: obj.id,
                showCount: obj.showcount,
                priority: obj.priority,
                content: obj.content,
            }
            logDebug('EvtEmit:SysNotice', JSON.stringify(obj));
            cc.gg.evt.emit(cc.GGEventType.SysNotice.NEW_RET, notice);
            // }
        } catch (error) {
            logDebug('Ret:SysNotice', error);
        }

    },

    recoverQueueRoomTable() {
        //重置的房间，调起第一个，后面的轮询调起
        if (cc.gg.waitEnterRooms.length == 0) {
            logDebug('wating room all enter！');
            cc.gg.isHideGame = false;
            return false;
        }
        let waitInfo = cc.gg.waitEnterRooms.pop();
        logDebug("recoverQueueRoomTable|Join", JSON.stringify(waitInfo));
        this.joinGameByRoomAndTable(waitInfo.room, waitInfo.tab, waitInfo.ins);
        return true;
    },

    joinGameTimeOut() {
        // cc.tcp.node.off(proto.proto_def.msg_id.MSG_ID_JOIN_GAME_RET, this.onJoinGameRet, this);
        showWaitMsg();
        //游戏维护中，请稍后再试
        showTipsMsg(window["i18n"].t('Game maintenance, please try again later'));
    },

    isEnterGame:false,
    joinGameByRoomId(roomId, tab = 0) {
        if (!cc.gg.checkLocation()) {
            return;
        }
        if(this.isEnterGame) return;
        if (tab != 0) {
            this.joinGameByRoomAndTable(roomId, tab);
            return;
        }
        //查询出当前空闲的房间，最多只有3个房间
        for (const key in cc.gg.roomTables) {
            if (cc.gg.roomTables[key] == 0) {
                tab = key;
                break;
            }
        }
        if (tab == 0) {
            //房间创建已到上限
            showTipsMsg(window["i18n"].t("The number of rooms created has reached the upper limit！"));
            return;
        }
        this.joinGameByRoomAndTable(roomId, tab);
    },

    joinGameByRoomAndTable(room, tab, ins = 0) {
        this.isEnterGame = true;
        this.scheduleOnce(()=>{
            this.isEnterGame = false;
            cc.waiting?.hide()
        },5)
        var msg = new proto.message.MsgJoinRoom();
        msg.setRoomid(room);
        msg.setUid(cc.gg.user.UserID);
        msg.setInsid(ins);
        // var uint8 = cc.jspb.utils.stringToByteArray(sceneId.toString());
        cc.ws.sendBuffer(proto.message.MainMsgID.MAINROOM, proto.message.SubRoomMsgID.JOINROOM, msg, tab);
    },
    /**
     * 退出游戏
     * @param roomID 游戏ID
     * @param roomIndex 游戏索引
     */
    quitGame(roomID, roomIndex) {
        cc.gg.roomTables[roomIndex] = 0;
        var msg = new proto.message.MsgLeaveRoom();
        msg.setRoomid(roomID);
        cc.ws.sendBuffer(proto.message.MainMsgID.MAINROOM, proto.message.SubRoomMsgID.LEAVEROOM, msg, roomIndex);
    },

    /**
    * 进入游戏
    * @param {msg_join_game_ret} data 
    */
    onKeepAliveRet(bfm) {
        if (this.isKeepLog) {
            logDebug(Date.now() + " [ws] get ret keep alive");
        }
        this.aliveTime = cc.gg.keepAlive + 2;
        this.scheduleOnce(cc.wsp.keepAlive, cc.gg.keepAlive);
    },
    /**
    * 进入游戏
    * @param {msg_join_game_ret} data 
    */
    onJoinRoomRet(bfm) {
        // showWaitMsg();
        this.unschedule(this.joinGameTimeOut);
        var msg = proto.message.MsgJoinRoomRet.deserializeBinary(bfm.bytes);
        var curScene = cc.director.getScene().name;
        logDebug("recv join room msg", msg.toObject(), bfm.table, curScene);
        if (msg.getEcode() == 0) {
            cc.gg.roomTables[bfm.table] = 1;
            this.joinRoomData = {
                roomID: msg.getRoomid(),
                waitTime: msg.getWaittime(),
                roomIndex: bfm.table,
                realGameID: msg.getRealgameid(),
            }

            cc.gg.realGameID = msg.getRealgameid();
            cc.waiting.show(undefined,"Enter Game...")
            cc.gg.evt.emit(cc.GGEventType.Game.JOIN_ROOM);
            if (this.joinRoomData.realGameID == proto.message.GameID.MYTEST) {
                switchScene("teenpatti");
            } else if (this.joinRoomData.realGameID == proto.message.GameID.DRAGONVSTIGER || this.joinRoomData.realGameID == 208) {
                preLoadBundleScene("tiger","tiger_scene").then(()=>{
                    switchScene("tiger_scene");
                });
            } else if (this.joinRoomData.realGameID == 202 || this.joinRoomData.realGameID == 205 || this.joinRoomData.realGameID == 218 || this.joinRoomData.realGameID == 219) {
                preLoadBundleScene("TeenPattiRemaster","TeenPattiRemaster").then(()=>{
                    // switchScene("teenpatti_scene");
                    switchScene("TeenPattiRemaster");
                });
            } else if (this.joinRoomData.realGameID == 203) {
                preLoadBundleScene("sicbo","sicbo_scene").then(()=>{
                    switchScene("sicbo_scene");
                })
            } else if(this.joinRoomData.realGameID == 210){
                preLoadBundleScene("TeenPattiWar","TeenPattiWar").then(()=>{
                    switchScene("TeenPattiWar")
                })
            } else if(this.joinRoomData.realGameID == 211){
                preLoadBundleScene("abccaratAB","BaccaratAB").then(()=>{
                    switchScene("BaccaratAB")
                })
            } else if(this.joinRoomData.realGameID == 212){
                preLoadBundleScene("wheeloffortune","wheeloffortune").then(()=>{
                    switchScene("wheeloffortune")
                })
            } else if(this.joinRoomData.realGameID == 213){
                preLoadBundleScene("Fruit777","Fruit777").then(()=>{
                    switchScene("Fruit777")
                })
            } else if(this.joinRoomData.realGameID == 214){
                preLoadBundleScene("jhandiMunda","jhandiMunda").then(()=>{
                    switchScene("jhandiMunda")
                })
            } else if(this.joinRoomData.realGameID == 215){
                preLoadBundleScene("RedVsBlack","RedVsBlack").then(()=>{
                    switchScene("RedVsBlack")
                })
            } else if(this.joinRoomData.realGameID == 216){
                preLoadBundleScene("CarRoulette","CarRoulette").then(()=>{
                    switchScene("CarRoulette")
                })
            } else if(this.joinRoomData.realGameID == 217){
                preLoadBundleScene("HorseRacing","HorseRacing").then(()=>{
                    switchScene("HorseRacing")
                })
            } else if(this.joinRoomData.realGameID == 218){

            } else if(this.joinRoomData.realGameID == 220){
                preLoadBundleScene("Rocket","Rocket").then(()=>{
                    switchScene("Rocket")
                })
            }
            else {
                preLoadBundleScene("rummy","game").then(()=>{
                    switchScene("game");
                })
            }
            if (cc.gg.waitEnterRooms.length > 0) {
                this.scheduleOnce(this.recoverQueueRoomTable.bind(this), 1);
            }
        } else if(msg.getEcode() == 102 && cc.gg.model == 1){
            this.isEnterGame = false;
            cc.waiting?.hide();
            if(cc.gg.spreadType == 1){
                switchScene("login")
            }else{
                switchScene("gpLogin")
            }
            showTipsMsg(window["i18n"].t(msg.getEcode()));
        } else if (msg.getEcode() == 401) {
            cc.gg.evt.emit(cc.GGEventType.Game.JOIN_ROOM_FAIL_NOT_PREMIUM);
            this.isEnterGame = false;
            cc.waiting?.hide()
        } else {
            showTipsMsg(window["i18n"].t(msg.getEcode()));
        }
    },

    /**
     * 离开游戏
     * @param bfm 
     */
    onLeaveRoomRet(bfm) {
        var msg = proto.message.MsgLeaveRoomRet.deserializeBinary(bfm.bytes);
        logDebug("离开桌子消息：", bfm);
        // switchScene("hall");
        var ecode = msg.getEcode();
        if (ecode == 0 || ecode == 114) {
            if (ecode == 114) {
                showTipsMsg(window["i18n"].t(ecode));
                cc.gg.roomTables[1] = 0;
                cc.gg.roomTables[2] = 0;
                cc.gg.roomTables[3] = 0;
                return;
            }
        }
        showTipsMsg(window["i18n"].t(ecode));
        cc.gg.roomTables[bfm.table] = 0;
    },

    /**
     * 桌子信息
     * @param {desk_infor_ret} data 
     */
    onJoinDeskInfoRet(bfm) {
        this.deskData = bfm;
        logDebug("收到桌子消息", bfm);
        cc.gg.evt.emit(cc.GGEventType.Game.DESK_INFO, bfm);
    },

    onGameWaitStatRet(bfm) {
        this.deskWaitData = bfm;
        logDebug("收到游戏开始准备消息", bfm);
        cc.gg.evt.emit(cc.GGEventType.Game.GAME_START_WAIT, bfm);
    },


    keepAlive(dt, isFirst = false) {
        if (!cc.ws.isConnect) return;
        // if(isFirst || this.aliveTime > 0){
        if (this.isKeepLog) {
            logDebug(Date.now() + " [ws] send keep alive");
        }
        this.aliveTime = cc.gg.keepAlive + 1;
        cc.ws.sendBuffer(proto.message.MainMsgID.MAINNET, proto.message.SubNetMsgID.KEEPALIVE);
        // } else {
        //     logDebug("[ws] keep alive time out!!");
        //     cc.ws.close();
        //     cc.promptAlert.show(window["i18n"].t("Network disconnection"),window["i18n"].t("Please confirm the network status and reconnect"),['Reconnect'],(val)=>{
        //         if(val == '1'){
        //             cc.login.connectGate();
        //         }
        //     },false);
        // }
    },


    update(dt) {//logDebug(dt,"-------------------------------------------------");
        if (this.waitTime > 0) {
            this.waitTime -= dt;
        }
        for (let i = 0; i < cc.gg.waitingTimes.length; i++) {
            if (cc.gg.waitingTimes[i] > 0) {
                cc.gg.waitingTimes[i] -= dt;
            }
        }
        if (cc.ws.isConnect && this.aliveTime > 0 && cc.gg.isSinglegame == false) {
            this.aliveTime -= dt;
            if (this.aliveTime <= 0) {
                logDebug(Date.now() + " [ws] keep alive time out!!");
                cc.ws.close();
                cc.promptAlert.show(window["i18n"].t("Network disconnection"), window["i18n"].t("Please confirm the network status and reconnect"), ['Reconnect'], (val) => {
                        cc.login.connectGate();
                },false,'',false);
            }
        }
    },

    onShowTipsMsg(value) {
        showTipsMsg(window["i18n"].t(value));
    }
});
