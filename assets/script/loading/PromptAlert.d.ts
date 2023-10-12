declare class PromptAlert extends cc.Component {
    bg: cc.Sprite
    title: CLabel
    content: CLabel
    noteLabel: CLabel
    btns: cc.Node[]
    btnContainer: cc.Node
    btnClose: cc.Node
    gameAtlas: cc.SpriteFramep[]
    hide()
    show(title, content, btnStrs = null, callBack = null, isViewCloseBtn = true, noteValue = "")
    btnClickHandler(event, value)
}