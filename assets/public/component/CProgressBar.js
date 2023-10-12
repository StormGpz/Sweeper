// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

window.CProgressBar =cc.Class({
    extends: cc.Component,
    editor: {
        // executeInEditMode: true,
        menu: '自定义/CProgressBar'
    },


    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        txt: cc.Label,
        _value: 0,
        width: 0,
        max: 0,
        value: {
            get() {
                return this._value;
            },
            set(v) {
                this._value = v;
                this.setValue();
            }
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() { },

    start() { },

    setValue() {
        let coe = this._value / this.max;
        this.node.width = this.width * Math.min(coe,1);
        if (this.txt) {
            this.txt.string = this._value + "/" + this.max;
        }
    }

    // update (dt) {},
});