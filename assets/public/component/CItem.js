window.CItem = cc.Class({
    extends: cc.Component,

    editor: {
        // executeInEditMode: true,
        menu: '自定义/CItem'
    },

    properties: {
        itemID: 0,
        select: {
            get: function () {
                return this._select;
            },
            visible: false,
            type: cc.Boolean,
        },
    },

    onLoad: function () {
        this.node.on('touchend', this.onTouchEnd, this);
    },

    onTouchEnd(e) {
        logDebug("Item " + this.itemID + ' clicked');
        var evt = new cc.Event.EventCustom("touchItem", true);
        this.node.dispatchEvent(evt);
    },

    setSelect: function (value) {
        this._select = value;
        var select = this.node.getChildByName("select");
        var unselect = this.node.getChildByName("unselect");
        if (select) {
            select.active = value;
            unselect.active = !value;
        }
    },

    updateItem: function (itemID, data) {
        // cc.log("baseitem cc.log="+itemID);
        this.itemID = itemID;
        this.data = data;
        if (data) {
            this.node.active = true;
        } else {
            this.node.active = false;
        }
    },
});