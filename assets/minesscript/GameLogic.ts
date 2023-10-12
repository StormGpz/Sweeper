// GameLogic.ts

import GridItem from "./GridItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLogic extends cc.Component {
    @property(cc.Layout)
    gridLayout = null;

    @property(cc.Prefab)
    gridItemPrefab = null;

    // @property(cc.Label)
    // txt_tips = null; // 提示文本节点

    @property(cc.Button)
    btn_start = null; // 重新开始按钮节点

    @property(cc.Button)
    btn_next = null; // 下一关按钮节点

    @property(cc.Label)
    txt_diamond: cc.Label = null;

    @property(cc.Label)
    txt_bomb: cc.Label = null;

    @property(cc.Label)
    txt_target: cc.Label = null;

    @property(cc.Label)
    txt_level: cc.Label = null;

    @property(cc.Sprite)
    layer_tips: cc.Sprite = null;

    @property(cc.Sprite)
    win: cc.Sprite = null;

    @property(cc.Sprite)
    lose: cc.Sprite = null;
    

    private diamondsRevealed = 0;
    private bombsRevealed = 0;
    private isGameStarted = false;
    private isGameOver = false;
    private currentLevel = 1; // 当前关卡
    private diamondCount = 0;
    private diamondCountArr = 0;
    private bombCount = 0;
    private bombCountArr = 0;
    private score = 0; // 分数
    private passRequirement = 0; // 分数

    onLoad() {
        this.startNewGame();
        cc.systemEvent.on('GridItemClick', this.onGridItemClick, this);

        if (this.layer_tips) {
            this.layer_tips.node.active = false;
        }
        if (this.win) {
            this.win.node.active = false;
        }
        if (this.lose) {
            this.lose.node.active = false;
        }
        // 添加重新开始按钮的点击事件
        if (this.btn_start) {
            this.btn_start.node.on('click', this.restartGame, this);
            this.btn_start.node.active = false; // 初始时隐藏重新开始按钮
        }

        // 添加下一关按钮的点击事件
        if (this.btn_next) {
            this.btn_next.node.on('click', this.moveToNextLevel, this);
            this.btn_next.node.active = false; // 初始时隐藏下一关按钮
        }
    }

    onDestroy() {
        cc.systemEvent.off('GridItemClick', this.onGridItemClick, this);
    }

    startNewGame() {
        this.isGameStarted = true;
        this.isGameOver = false;
        this.diamondsRevealed = 0;
        this.bombsRevealed = 0;

        // 生成随机的炸弹数量和过关要求
        this.bombCount = Math.floor(Math.random() * 10) + 1; // 随机生成 1 到 10 的炸弹数量
        this.passRequirement = Math.floor(Math.random() * 9) + 1; // 随机生成 1 到 15 的过关要求
        this.diamondCount = 30 - this.bombCount; // 初始钻石数量为总格子数减去当前关卡数
        
        this.bombCountArr = this.bombCount;
        this.diamondCountArr = this.diamondCount;

        // 随机生成格子布局
        this.gridLayout.enabled = true;
        this.gridLayout.node.removeAllChildren();
        this.generateGrid();
        this.scheduleOnce(()=>{this.gridLayout.enabled = false;}, 0.1);

        // 更新 UI 文本
        this.updateUIText();
    }

    generateGrid() {
        const gridItems = [];

        // 创建一个表示格子的数组，包括钻石和炸弹
        const gridArray = [];
        for (let i = 0; i < 30; i++) {
            if (this.diamondCountArr > 0) {
                gridArray.push(true); // true 表示钻石
                this.diamondCountArr--;
            } else if (this.bombCountArr > 0) {
                gridArray.push(false); // false 表示炸弹
                this.bombCountArr--;
            }
        }

        // 随机打乱格子数组的顺序
        for (let i = gridArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
        }

        // 根据打乱后的数组生成格子
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 6; col++) {
                const isDiamond = gridArray[row * 6 + col];
                const gridItem = cc.instantiate(this.gridItemPrefab);
                const gridItemComponent = gridItem.getComponent('GridItem');
                gridItemComponent.init(isDiamond);
                this.gridLayout.node.addChild(gridItem);
                gridItems.push(gridItem);
            }
        }

        return gridItems;
    }

    onGridItemClick(gridItem, isDiamond) {
        if (isDiamond) {
            this.diamondsRevealed++;
        } else {
            this.bombsRevealed++;
            this.currentLevel = 1;
            this.onGameFailed(); // 游戏失败处理
        }

        if (this.bombsRevealed > 0) {
            this.onGameFailed();
        } else if (this.canProceedToNextLevel()) {
            this.showSuccessMessage(); // 显示成功提示
        }
        this.updateUIText();
    }

        // 更新 UI 文本
    updateUIText() {
        if (this.txt_diamond) {
            this.txt_diamond.string = this.diamondCount.toString();
        }

        if (this.txt_bomb) {
            this.txt_bomb.string = this.bombCount.toString();
        }

        if (this.txt_target) {
            this.txt_target.string = this.diamondsRevealed+"/"+this.passRequirement;
        }

        if (this.txt_level) {
            this.txt_level.string = this.currentLevel.toString();
        }
    }

    onGameFailed() {
        this.isGameOver = true;
        if (this.layer_tips) {
            this.layer_tips.node.active = true; 
        }
        if (this.lose) {
            this.lose.node.active = true; 
        }
        if (this.btn_start) {
            this.btn_start.node.active = true; // 显示重新开始按钮
        }

        // 禁用格子点击事件
        const gridItems = this.gridLayout.node.children;
        for (const gridItem of gridItems) {
            gridItem.getComponent(cc.Button).enabled = false;
        }
    }

    // 新增方法：显示成功提示
    showSuccessMessage() {
        if (this.layer_tips) {
            this.layer_tips.node.active = true; // 显示下一关按钮
        }
        if (this.win) {
            this.win.node.active = true; // 显示下一关按钮
        }
        // 更新下一关按钮的文本
        if (this.btn_next) {
            const nextLevel = this.currentLevel + 1;
            this.btn_next.node.active = true; // 显示下一关按钮
        }
        // 禁用格子的点击事件
        const gridItems = this.gridLayout.node.children;
        for (const gridItem of gridItems) {
            gridItem.getComponent(cc.Button).enabled = false;
        }
    }

    // 新增方法：点击下一关按钮
    moveToNextLevel() {
        this.currentLevel++; // 进入下一关
        this.startNewGame(); // 开始新的一关，保留之前得到的分数
        if (this.btn_next) {
            this.btn_next.node.active = false; // 隐藏下一关按钮
        }
        if (this.win) {
            this.win.node.active = false;
        }
        if (this.layer_tips) {
            this.layer_tips.node.active = false;
        }
    }

    // 检查是否可以进入下一关的逻辑
    canProceedToNextLevel() {
        // return this.isGameStarted && this.diamondsRevealed === (25 - this.currentLevel);
        return this.isGameStarted && this.diamondsRevealed >= this.passRequirement;
    }

    // 游戏失败检查方法
    isGameFailed() {
        return this.isGameOver;
    }

    restartGame() {
        console.log('重新开始游戏');
        this.startNewGame();
        if (this.btn_start) {
            this.btn_start.node.active = false; // 隐藏重新开始按钮
        }
        if (this.btn_next) {
            this.btn_next.node.active = false; // 隐藏下一关按钮
        }
        if (this.layer_tips) {
            this.layer_tips.node.active = false;
        }
        if (this.win) {
            this.win.node.active = false;
        }
        if (this.lose) {
            this.lose.node.active = false;
        }
    }
}
