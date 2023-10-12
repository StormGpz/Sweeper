export default class AudioMgr extends cc.Component {
    bgmVolume: number
    sfxVolume: number
    bgmAudioID: number
    onHideHandler()
    onShowHandler()
    init: function ()
    getUrl: function (url)
    playBGM(url)
    stopBGM()
    /**
 * 设置音效开关，
 * @param value 
 */
    setSFXSwitch(value)
    playSFX(url:string)
    setSFXVolume: function (v)
    setBGMVolume: function (v, force)
    pauseAll: function ()
    resumeAll: function ()
}