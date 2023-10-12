const BufferMessage = require("./BufferMessage");
cc.ws = {
    sock: null,
    isRecreate: false,
    isConnect: false,
    evt: new cc.EventTarget(),
    on_open: function () {
        logInfo('websocket connect success!');
        this.isRecreate = false;
        this.evt.emit(cc.GGEventType.CONNECT_SUCC);
    },

    on_message: function (event) {
        let buffer = event.data;
        this.isConnect = true;
        // cc.log(buffer);
        let bfm = new BufferMessage();
        bfm.read(buffer);
        if (bfm.maincode == proto.message.MainMsgID.MAINNET && bfm.code == proto.message.SubNetMsgID.KEEPALIVE) {

        } else {
            logDebug(Date() + "[ws]msg_ret=", bfm.toString());
        }
        cc.ws.evt.emit(bfm.msgEvtType(), bfm);
    },

    on_close: function () {
        // this.close();
        logError(Date() + 'websocket close!');
        this.isConnect = false;
        this.evt.emit(cc.GGEventType.CONNECT_CLOSE);
    },

    on_error: function () {
        // this.close();
        logError(Date() + 'websocket error!');
        this.isConnect = false;
        this.evt.emit(cc.GGEventType.CONNECT_FAIL);
    },

    close: function (isAction = false) {
        if (isAction) {
            logError('user close websocket');
            cc.gg.isLogout = true;
        }
        this.isConnect = false;
        if (!cc.gg.isNetReconnect && this.sock) {
            logError('websocket close 0000000000000000000000000000000000000000000000000');
            this.sock.onopen = null;
            this.sock.onmessage = null;
            this.sock.onclose = null;
            this.sock.onerror = null;
            this.sock.close();
            this.sock = null;
        }
    },

    connect: function (url) {
        this.close();
        if (!this.sock || cc.sys.isObjectValid(this.sock)) {
            logInfo('this.sock is recreate 1111111', this.sock);
            if (CC_JSB && url.startsWith("wss:")) {
                if (!cc.login.wssCacert.nativeUrl) {
                    console.error('no wss cacert');
                }
                this.sock = new WebSocket(url, [], cc.login.wssCacert.nativeUrl);
            } else {
                this.sock = new WebSocket(url);
            }
            //this.sock = new WebSocket(url);
            this.sock.binaryType = "arraybuffer";
            this.sock.onopen = this.on_open.bind(this);
            this.sock.onmessage = this.on_message.bind(this);
            this.sock.onclose = this.on_close.bind(this);
            this.sock.onerror = this.on_error.bind(this);
        }

    },

    sendBuffer: function (maincode, code, msg, table = 0) {
        if (this.sock) {
            if (maincode == proto.message.MainMsgID.MAINNET && code == proto.message.SubNetMsgID.KEEPALIVE) {

            } else {
                logDebug(Date() + '[ws]msg_send:' + maincode + "_" + code + " tab=" + table, msg ? msg.toObject() : "");
            }
            let bytes = msg ? msg.serializeBinary() : null;
            let buffer = BufferMessage.writeBuffer(maincode, code, bytes, table);
            this.sock.send(buffer);
        } else {
            logError(Date() + '[ws]' + maincode + "_" + code + " tab=" + table, msg ? msg.toObject() : "", "this.sock is null");
        }
    }
}
