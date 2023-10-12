// GridItem.ts

const { ccclass, property } = cc._decorator;

@ccclass
export default class GridItem extends cc.Component {
    @property(cc.Node)
    diamondSprite: cc.Node = null;

    @property(cc.Node)
    bombSprite: cc.Node = null;

    private isRevealed: boolean = false;
    private isDiamond: boolean = false;

    init(isDiamond: boolean) {
        this.isDiamond = isDiamond;
        this.diamondSprite.active = false;
        this.bombSprite.active = false;
        this.isRevealed = false;
    }

    onLoad() {
        // 添加点击事件监听器
        const button = this.node.getComponent(cc.Button);
        if (button) {
            button.node.on('click', this.onGridItemClick, this);
        }
        
    }

    onGridItemClick() {
        // 处理格子被点击的逻辑
        if (!this.isRevealed && !cc.find("Canvas").getComponent('GameLogic').isGameFailed()) {
            this.showDiamondOrBomb(this.isDiamond);
            this.isRevealed = true;
        
            const spriteComponent = this.node.getComponent(cc.Sprite);
            spriteComponent.enabled = false;

            // 使用事件或回调通知 GameLogic 处理点击后的逻辑
            cc.systemEvent.emit('GridItemClick', this, this.isDiamond);
        }
    }

    showDiamondOrBomb(isDiamond: boolean) {
        // 根据是钻石还是炸弹，显示相应的外观
        this.diamondSprite.active = isDiamond;
        this.bombSprite.active = !isDiamond;
        // if(isDiamond)this.diamondSprite.getComponent(cc.Animation).play()
        // else this.bombSprite.getComponent(cc.Animation).play();
    }

}
