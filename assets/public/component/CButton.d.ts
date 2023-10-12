declare class CButton extends cc.Button {
    isDelayClick: boolean
    isTransition: boolean
    sendWeb: string
    isGray: boolean
    setIsGray(value = -1)
    redPointVisible(value)
    addClickEvt(fun: Function, target?: any): void
}