declare class CItem extends cc.Component {
    itemID: number
    get select(): boolean
    onTouchEnd(e)
    setSelect: function (value)
    updateItem: function (itemID, data)
}