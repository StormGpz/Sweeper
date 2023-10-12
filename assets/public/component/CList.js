var CItem = require("CItem");
window.CList = cc.Class({
    extends: cc.Component,

    editor: {
        // executeInEditMode: true,
        menu: '自定义/CList'
    },

    properties: {
        itemRender: 'CItem',
        itemTemplate: { // item template to instantiate other items
            default: null,
            type: cc.Node
        },
        spawnCount: 0, // how many items we actually spawn
        spacing: 0, // space between each item
        bufferZone: 0, // when item is away from bufferZone, we relocate it

        _selectItem: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.scrollView = this.node.getComponent(cc.ScrollView);
        this.content = this.scrollView.content;
        // this.items = []; // array to store spawned items
        this.items = this.content.children
        this.initialize();
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
        this.node.on("removeItem", this.removeItem, this);
        this.node.on("touchItem", this.touchItem, this);
    },

    initialize: function () {
        this.resetContentHeight();
        this.spawnCount = this.datas?.length || this.spawnCount;
        this.content.removeAllChildren();
        // this.items = []
        for (let i = 0; i < this.spawnCount; ++i) { // spawn items, we only need to do this once
            let item = cc.instantiate(this.itemTemplate);
            this.content.addChild(item);
            item.setPosition(item.x, -item.height * (0.5 + i) - this.spacing * (i + 1));
            item.getComponent(this.itemRender).updateItem(i);
            // this.items.push(item);
        }
    },

    updateList: function () {
        let items = this.items;
        this.totalCount = this.datas.length;
        this.spawnCount = this.datas.length
        // this.resetContentHeight();
        this.initialize()
        for (let i = 0; i < items.length; ++i) {
            let item = items[i].getComponent(this.itemRender);
            var itemId = item.itemID;
            item.updateItem(itemId, this.datas[itemId]);
        }
    },

    getPositionInView: function (item) { // get item position in scrollview's node space
        let worldPos = item.parent?.convertToWorldSpaceAR(item.position);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    resetContentHeight: function () {
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
    },

    update: function (dt) {
        this.updateTimer += dt;
        // if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        this.updateTimer = 0;
        let items = this.items;
        let buffer = this.bufferZone;
        let isDown = this.scrollView.content.y < this.lastContentPosY; // scrolling direction
        let contentOffset = Math.abs(this.scrollView.content.y - this.lastContentPosY);
        if(contentOffset == 0)return;
        // cc.log("scrollOffset =",contentOffset);
        let bufferOffset = buffer > contentOffset ? 0 : contentOffset;
        let offset = (this.itemTemplate.height + this.spacing) * items.length;//+bufferOffset;
        // cc.log("bufferOffset =",bufferOffset);
        for (let i = 0; i < items.length; ++i) {
            let viewPos = this.getPositionInView(items[i]);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                // cc.log("isDown start item"+i+" =",items[i].y);
                if (viewPos.y < -buffer && items[i].y + offset < 0) {
                    
                    let offsetNum = bufferOffset == 0 ? 1:Math.floor(Math.abs(items[i].y)/offset);
                    items[i].y = items[i].y + (offset*offsetNum);
                    // cc.log("end item"+i+" =",items[i].y);
                    let item = items[i].getComponent(this.itemRender);
                    let itemId = item.itemID - (items.length*offsetNum); // update item id
                    item.updateItem(itemId, this.datas[itemId]);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                // cc.log("start item"+i+" =",items[i].y);
                if (viewPos.y > buffer && items[i].y - offset > -this.content.height) {
                    let offsetNum = bufferOffset == 0 ? 1:Math.floor(Math.abs(items[i].y+this.content.height)/offset);
                    items[i].y = items[i].y - (offset*offsetNum);
                    // cc.log("end item"+i+" =",items[i].y);
                    let item = items[i].getComponent(this.itemRender);
                    let itemId = item.itemID + (items.length*offsetNum);
                    item.updateItem(itemId, this.datas[itemId]);
                    // cc.log(itemId, viewPos, this.itemTemplate.height, offset);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.scrollView.content.y;
    },

    scrollEvent: function (sender, event) {
        switch (event) {
            case 0:
                this.lblScrollEvent.string = "Scroll to Top";
                break;
            case 1:
                this.lblScrollEvent.string = "Scroll to Bottom";
                break;
            case 2:
                this.lblScrollEvent.string = "Scroll to Left";
                break;
            case 3:
                this.lblScrollEvent.string = "Scroll to Right";
                break;
            case 4:
                this.lblScrollEvent.string = "Scrolling";
                break;
            case 5:
                this.lblScrollEvent.string = "Bounce Top";
                break;
            case 6:
                this.lblScrollEvent.string = "Bounce bottom";
                break;
            case 7:
                this.lblScrollEvent.string = "Bounce left";
                break;
            case 8:
                this.lblScrollEvent.string = "Bounce right";
                break;
            case 9:
                this.lblScrollEvent.string = "Auto scroll ended";
                break;
        }
    },

    addItem: function () {
        this.totalCount = this.totalCount + 1;
        this.resetContentHeight(); // get total content height
    },

    removeItem: function (e) {
        var item = e.target;
        if (!item) {
            cc.error("can't remove null item!");
            return;
        }

        var data = item.getComponent(this.itemRender).data;
        var index = this.datas.indexOf(data);
        if (index === -1) {
            cc.error("item not in the list!");
            return;
        }
        this.datas.splice(index, 1);
        // this.moveBottomItemToTop();
        this.updateList();
    },

    touchItem: function (e) {
        var item = e.target;
        this.selectToItem(item);
    },

    selectToIndex(index, isEvt = false) {
        if (this.items.length == 0) {
            return;
        }
        if (index >= this.items.length) {
            index = this.items.length - 1;
        }
        let item = this.items[index];
        if (isEvt) {
            var evt = new cc.Event.EventCustom("touchItem", true);
            item.dispatchEvent(evt);
        } else {
            this.selectToItem(item);
        }
    },

    selectToItem(item) {
        if (this._selectItem) {
            this._selectItem.getComponent(this.itemRender).setSelect(false);
        }
        this._selectItem = item;
        item.getComponent(this.itemRender).setSelect(true);
        return item;
    },

    getSelectItem() {
        return this._selectItem;
    },

    moveBottomItemToTop() {
        let offset = (this.itemTemplate.height + this.spacing) * this.items.length;
        let length = this.items.length;
        let item = this.getItemAtBottom();

        // whether need to move to top
        if (item.y + offset < 0) {
            item.y = item.y + offset;
            let itemComp = item.getComponent(this.itemRender);
            let itemId = itemComp.itemID - length;
            itemComp.updateItem(itemId, this.datas[itemId]);
        }
    },

    getItemAtBottom() {
        let item = this.items[0];
        for (let i = 1; i < this.items.length; ++i) {
            if (item.y > this.items[i].y) {
                item = this.items[i];
            }
        }
        return item;
    },

    scrollToFixedPosition: function () {
        this.scrollView.scrollToOffset(cc.v2(0, 500), 2);
    }
});