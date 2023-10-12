declare class CList extends cc.Component {
    itemRender: string
    itemTemplate: cc.Node
    spawnCount: number
    spacing: number
    bufferZone: number
    initialize: function ()
    updateList: function ()
    getPositionInView: function (item)
    resetContentHeight: function ()
    scrollEvent: function (sender, event)
    addItem: function ()
    removeItem: function (e)
    touchItem: function (e)
    selectToIndex(index, isEvt = false)
    selectToItem(item)
    getSelectItem()
    moveBottomItemToTop()
    getItemAtBottom()
    scrollToFixedPosition: function ()
}