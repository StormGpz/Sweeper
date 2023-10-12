declare class BaseAlert extends cc.Component {
    _fadeSprite: cc.Node
    isPlayAni: boolean
    isMaskClose: boolean
    animType: number
    clickMaskHideEvents: Array<cc.Component.EventHandler>
    fadeOpacity: boolean
    isCanClickMaskHide: boolean
    show(p_animType?)
    playFadeAni: function ()
    hide()
}